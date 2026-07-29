# Plan: Consolidate 3 Sitemaps into 1

## Goal
Replace the current setup (sitemap index + static pages XML + dynamic articles API) with a single `/sitemap.xml` that serves all URLs.

## Current Setup
| File | Serves At | Content |
|---|---|---|
| `public/sitemap.xml` | `/sitemap.xml` | Sitemap index → references 2 sub-sitemaps |
| `public/sitemap-pages.xml` | `/sitemap-pages.xml` | Static pages (6 URLs) |
| `api/sitemap-articles.js` | `/api/sitemap-articles` (Vercel), rewrites to `/sitemap-articles.xml` | Dynamic article URLs from Supabase |

## Changes

### 1. Modify `api/sitemap-articles.js`
Rename to `api/sitemap.js` and add static page URLs before the dynamic article URLs so the output is a single `<urlset>` containing everything.

**Static pages to add:**
```
https://www.doctors360.org/           weekly   1.0
https://www.doctors360.org/services   weekly   0.9
https://www.doctors360.org/about      monthly  0.9
https://www.doctors360.org/programs   monthly  0.9
https://www.doctors360.org/news       weekly   0.8
https://www.doctors360.org/gallery    monthly  0.6
https://www.doctors360.org/donate     monthly  0.8
```

The `lastmod` for all static pages will be `2026-07-29`.

These can be a static array at the top of the file, mapped to XML just like the articles.

### 2. Update `vercel.json`
Change:
```
{ "source": "/sitemap-articles.xml", "destination": "/api/sitemap-articles" },
```
to:
```
{ "source": "/sitemap.xml", "destination": "/api/sitemap" },
```

### 3. Delete `public/sitemap-pages.xml`
No longer needed — its URLs are now in the API output.

### 4. Delete `public/sitemap.xml`
No longer needed — the API now serves directly at `/sitemap.xml`.

### 5. `public/robots.txt` — No change needed
Already references `https://www.doctors360.org/sitemap.xml` which will now serve the consolidated output.

### 6. `vite.config.ts` — No change needed
The sitemap API isn't registered in the dev server (only in production via Vercel). This is fine since sitemaps only matter in production.

## Result
- Single file: `api/sitemap.js` generates all URLs
- Single URL: `https://www.doctors360.org/sitemap.xml`
- Total removal of 2 stale files
- robots.txt stays the same
