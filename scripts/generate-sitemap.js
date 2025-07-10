const { writeFileSync } = require('fs')
const { resolve } = require('path')

// Define all routes with their priority and change frequency
const routes = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/solutions', priority: 0.9, changefreq: 'weekly' },
  { path: '/pricing', priority: 0.9, changefreq: 'weekly' },
  { path: '/demo', priority: 0.9, changefreq: 'weekly' },
  { path: '/roi-calculator', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/library', priority: 0.7, changefreq: 'weekly' },
  
  // Market pages
  { path: '/markets/k12', priority: 0.8, changefreq: 'weekly' },
  { path: '/markets/higher-ed', priority: 0.8, changefreq: 'weekly' },
  { path: '/markets/vocational', priority: 0.8, changefreq: 'weekly' },
  
  // Why SchoolVision pages
  { path: '/why-schoolvision/k12', priority: 0.7, changefreq: 'monthly' },
  { path: '/why-schoolvision/higher-ed', priority: 0.7, changefreq: 'monthly' },
  { path: '/why-schoolvision/vocational', priority: 0.7, changefreq: 'monthly' },
  
  // Legal pages
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/terms', priority: 0.5, changefreq: 'yearly' },
]

const baseUrl = 'https://www.schoolvision.ai'

// Generate sitemap XML
const generateSitemap = () => {
  const lastmod = new Date().toISOString().split('T')[0]
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  // Write to public directory
  const outputPath = resolve(process.cwd(), 'public', 'sitemap.xml')
  writeFileSync(outputPath, xml, 'utf-8')
  console.log(`✅ Sitemap generated successfully at ${outputPath}`)
  console.log(`📝 Total URLs: ${routes.length}`)
}

// Run the generator
generateSitemap()