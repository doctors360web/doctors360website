import { createClient } from '@supabase/supabase-js';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

function loadDotEnv() {
  try {
    const envPath = join(process.cwd(), '.env');
    if (!existsSync(envPath)) return {};
    const env = {};
    readFileSync(envPath, 'utf8').split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const idx = trimmed.indexOf('=');
      if (idx === -1) return;
      env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
    });
    return env;
  } catch {
    return {};
  }
}

const dotEnv = loadDotEnv();
const supabaseUrl = process.env.VITE_SUPABASE_URL || dotEnv.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || dotEnv.SUPABASE_SERVICE_ROLE_KEY
  || process.env.VITE_SUPABASE_ANON_KEY || dotEnv.VITE_SUPABASE_ANON_KEY || '';

const BASE_URL = 'https://www.doctors360.org';
const LASTMOD = '2026-07-29';

const staticPages = [
  { loc: '/',                changefreq: 'weekly',  priority: '1.0' },
  { loc: '/services',        changefreq: 'weekly',  priority: '0.9' },
  { loc: '/about',           changefreq: 'monthly', priority: '0.9' },
  { loc: '/programs',        changefreq: 'monthly', priority: '0.9' },
  { loc: '/news',            changefreq: 'weekly',  priority: '0.8' },
  { loc: '/gallery',         changefreq: 'monthly', priority: '0.6' },
  { loc: '/donate',          changefreq: 'monthly', priority: '0.8' },
];

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).setHeader('Content-Type', 'text/plain').send('Method Not Allowed');
  }

  if (!supabaseUrl || !supabaseKey) {
    return res.status(500).setHeader('Content-Type', 'text/plain').send('Missing Supabase configuration');
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const { data: articles, error } = await supabase
      .from('news_blogs')
      .select('slug, date, created_at')
      .eq('is_visible', true)
      .order('date', { ascending: false });

    if (error) throw error;

    const staticXml = staticPages.map((p) => `  <url>
    <loc>${BASE_URL}${p.loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n');

    const articleXml = (articles || []).map((a) => {
      const lastmod = (a.created_at || a.date || new Date().toISOString()).slice(0, 10);
      return `  <url>
    <loc>${BASE_URL}/news/${a.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    }).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${articleXml}
</urlset>`;

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    return res.status(200).send(xml);
  } catch (err) {
    console.error('Sitemap API error:', err);
    return res.status(500).setHeader('Content-Type', 'text/plain').send('Internal Server Error');
  }
}
