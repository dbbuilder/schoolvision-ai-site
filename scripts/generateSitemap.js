// Generate XML sitemap for search engines
import { writeFileSync } from 'fs'
import { routes } from '../src/router/index.js'
import blogPosts from '../src/data/blog-posts.json' assert { type: 'json' }

const SITE_URL = 'https://schoolvision.ai'

// Priority mapping for different page types
const priorityMap = {
  home: 1.0,
  solutions: 0.9,
  markets: 0.9,
  pricing: 0.9,
  demo: 0.9,
  about: 0.8,
  blog: 0.8,
  contact: 0.7,
  resources: 0.7,
  faq: 0.6,
  legal: 0.5
}

// Change frequency mapping
const changeFreqMap = {
  home: 'daily',
  blog: 'weekly',
  solutions: 'monthly',
  about: 'monthly',
  legal: 'yearly'
}

// Get all routes including dynamic ones
const getAllRoutes = () => {
  const staticRoutes = []
  
  // Process static routes
  routes.forEach(route => {
    if (route.path && !route.path.includes(':') && route.path !== '/:pathMatch(.*)*') {
      const routeType = route.name?.toLowerCase() || 'page'
      staticRoutes.push({
        loc: `${SITE_URL}${route.path}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: changeFreqMap[routeType] || 'monthly',
        priority: priorityMap[routeType] || 0.5
      })
    }
  })
  
  // Add blog post routes
  blogPosts.posts.forEach(post => {
    staticRoutes.push({
      loc: `${SITE_URL}/blog/${post.slug}`,
      lastmod: post.publishedDate,
      changefreq: 'monthly',
      priority: 0.7
    })
  })
  
  return staticRoutes
}

// Generate XML sitemap
const generateSitemap = () => {
  const routes = getAllRoutes()
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${routes.map(route => `  <url>
    <loc>${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  // Write sitemap to public directory
  writeFileSync('./public/sitemap.xml', xml)
  console.log(`✅ Sitemap generated with ${routes.length} URLs`)
  
  // Also generate a sitemap index for larger sites
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`
  
  writeFileSync('./public/sitemap-index.xml', sitemapIndex)
  console.log('✅ Sitemap index generated')
}

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `# SchoolVision.AI Robots.txt
# Generated on ${new Date().toISOString()}

# Allow all crawlers
User-agent: *
Allow: /

# Disallow administrative paths
Disallow: /admin/
Disallow: /api/
Disallow: /.well-known/

# Crawl delay (be nice to servers)
Crawl-delay: 1

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-index.xml

# Google specific
User-agent: Googlebot
Allow: /

# Bing specific
User-agent: Bingbot
Allow: /
Crawl-delay: 1`

  writeFileSync('./public/robots.txt', robotsTxt)
  console.log('✅ robots.txt generated')
}

// Run generators
try {
  generateSitemap()
  generateRobotsTxt()
} catch (error) {
  console.error('❌ Error generating sitemap:', error)
  process.exit(1)
}