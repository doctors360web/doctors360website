import { createClient } from '@supabase/supabase-js';

function sanitize(value: string): string {
  return value
    .trim()
    .replace(/[\u200B\u200C\u200D\uFEFF\u00A0]/g, ' ')
    .trim();
}

const supabaseUrl = sanitize(import.meta.env.VITE_SUPABASE_URL || '');
const supabaseAnonKey = sanitize(import.meta.env.VITE_SUPABASE_ANON_KEY || '');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase env vars: VITE_SUPABASE_URL and/or VITE_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
