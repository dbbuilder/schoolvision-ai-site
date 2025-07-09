# Autonomous Development Protocol for Enterprise Marketing Sites

## Primary Directive
Build and maintain a high-converting enterprise marketing website autonomously using modern web development best practices. Make decisions based on marketing effectiveness, user experience, and conversion optimization without requesting clarification unless encountering critical blockers.

## Marketing Site Development Protocol

### Phase 1: Strategic Analysis & Planning

#### Current State Assessment
- Review all existing documentation, brand guidelines, and content strategy
- Analyze competitor websites and industry best practices
- Identify target audiences and user personas from documentation
- Map customer journey and conversion funnels
- Cross-reference progress against TODO.md and project requirements

#### Content & SEO Strategy
- Audit existing content for SEO opportunities
- Identify high-value keywords for each market segment
- Plan content hierarchy for optimal user flow
- Design conversion paths for different user intents
- Create schema markup strategy for rich snippets

### Phase 2: Frontend Development Protocol

#### Step 1: Project Setup & Configuration
```bash
# Initialize Vue.js project with Vite
npm create vite@latest . -- --template vue
npm install

# Install essential dependencies
npm install -D tailwindcss postcss autoprefixer @tailwindcss/forms @tailwindcss/typography
npm install vue-router@4 @vueuse/core @headlessui/vue @heroicons/vue

# Configure Tailwind CSS
npx tailwindcss init -p

# Git commit
git add . && git commit -m "feat: initialize Vue.js marketing site with Tailwind CSS"
```

#### Step 2: Component Development Approach
- Build reusable, accessible components first
- Follow atomic design principles (atoms → molecules → organisms)
- Implement responsive-first design patterns
- Use semantic HTML for SEO benefits
- Add structured data to all components
- Include loading states and error handling

#### Step 3: Performance Optimization
- Implement lazy loading for images and components
- Use modern image formats (WebP, AVIF) with fallbacks
- Configure aggressive caching strategies
- Minimize JavaScript bundle sizes
- Implement Critical CSS
- Use CDN for static assets

### Phase 3: Content Management Protocol

#### Static Content Strategy
- Use markdown files for blog posts and documentation
- Implement a simple file-based CMS structure
- Create content templates for consistency
- Build automated sitemap generation
- Set up RSS feed for blog content

#### Dynamic Features
- Contact forms with client-side validation
- Newsletter signup with email service integration
- Interactive calculators and tools
- Live chat widget integration
- A/B testing framework setup

### Phase 4: Marketing Integration Protocol

#### Analytics Implementation
```javascript
// Google Analytics 4 setup
gtag('config', 'GA_MEASUREMENT_ID', {
  send_page_view: false,
  custom_map: {
    'dimension1': 'user_type',
    'dimension2': 'content_category'
  }
});

// Custom event tracking
gtag('event', 'generate_lead', {
  'event_category': 'engagement',
  'event_label': 'header_cta',
  'value': 'high_intent'
});
```

#### Lead Generation
- Implement progressive profiling
- Create smart CTAs based on user behavior
- Set up exit-intent popups
- Configure lead scoring parameters
- Integrate with CRM systems

### Phase 5: Testing & Optimization Protocol

#### Automated Testing
```javascript
// Example Vitest configuration for marketing site
export default {
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'test/']
    }
  }
}
```

#### Performance Monitoring
- Core Web Vitals optimization
- Regular Lighthouse audits
- Real user monitoring (RUM)
- Conversion rate tracking
- Heatmap analysis
- Form abandonment tracking

## Autonomous Decision Framework

### Make Decisions Based On:
1. **Conversion Impact**: Will this improve conversion rates?
2. **User Experience**: Does this make the site easier to use?
3. **SEO Value**: Will this improve search rankings?
4. **Performance**: Does this make the site faster?
5. **Brand Consistency**: Does this align with brand guidelines?

### Development Priorities:
1. **Mobile-First**: Every feature must work perfectly on mobile
2. **Speed**: Page load time under 2 seconds
3. **Accessibility**: WCAG 2.1 AA compliance minimum
4. **SEO**: Technical SEO best practices
5. **Conversion**: Clear CTAs and user paths

## Git Management for Marketing Sites

### Commit Strategy
```bash
# Feature branches for major sections
git checkout -b feature/homepage-hero
git checkout -b feature/market-landing-pages
git checkout -b feature/blog-system

# Semantic commits
git commit -m "feat(homepage): add animated hero section with A/B test variants"
git commit -m "perf(images): implement lazy loading and WebP format"
git commit -m "seo(blog): add schema markup for articles"
git commit -m "a11y(forms): improve keyboard navigation and screen reader support"
```

### Deployment Pipeline
```yaml
# Example GitHub Actions for marketing site
name: Deploy Marketing Site
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install and Build
        run: |
          npm ci
          npm run build
      - name: Run Tests
        run: npm test
      - name: Deploy to Production
        if: github.ref == 'refs/heads/main'
        run: npm run deploy
```

## Marketing-Specific Development Patterns

### Landing Page Template
```vue
<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero" :class="{ 'variant-b': isVariantB }">
      <h1 v-text="heroHeadline" />
      <p v-text="heroSubtext" />
      <CTAButton @click="trackConversion('hero_cta')" />
    </section>
    
    <!-- Social Proof -->
    <section class="social-proof">
      <CustomerLogos />
      <Testimonials :items="testimonials" />
      <TrustBadges />
    </section>
    
    <!-- Feature Grid -->
    <section class="features">
      <FeatureCard v-for="feature in features" :key="feature.id" v-bind="feature" />
    </section>
    
    <!-- Conversion Section -->
    <section class="conversion">
      <DemoRequestForm @submit="handleDemoRequest" />
      <ValueProps :metrics="roiMetrics" />
    </section>
  </div>
</template>

<script setup>
import { useABTest } from '@/composables/abtest'
import { useAnalytics } from '@/composables/analytics'

const { isVariantB } = useABTest('hero-messaging')
const { trackConversion } = useAnalytics()
</script>
```

### SEO Component Pattern
```vue
<template>
  <article itemscope itemtype="https://schema.org/Article">
    <h1 itemprop="headline">{{ title }}</h1>
    <div itemprop="author" itemscope itemtype="https://schema.org/Person">
      <span itemprop="name">{{ author }}</span>
    </div>
    <time :datetime="publishDate" itemprop="datePublished">
      {{ formatDate(publishDate) }}
    </time>
    <div itemprop="articleBody" v-html="content" />
  </article>
</template>
```

## Quality Assurance Checklist

### Before Each Commit:
- [ ] Responsive design tested on mobile, tablet, desktop
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Accessibility audit passed
- [ ] Performance budget maintained
- [ ] SEO checklist completed
- [ ] Analytics tracking verified
- [ ] Forms tested with various inputs
- [ ] Error states handled gracefully

### Marketing Metrics to Track:
- Page load time
- Bounce rate
- Time on page
- Conversion rate
- Form completion rate
- Click-through rate on CTAs
- Search engine rankings
- Core Web Vitals scores

## Content Update Protocol

### Blog Post Workflow:
1. Create new markdown file in `/content/blog/`
2. Add frontmatter with SEO metadata
3. Write content with proper heading hierarchy
4. Add internal links to related content
5. Optimize images and add alt text
6. Preview and test all links
7. Commit with descriptive message
8. Update sitemap and RSS feed

### Landing Page Updates:
1. Create feature branch for changes
2. Update components with new content
3. Test all interactive elements
4. Verify analytics tracking
5. Run A/B test if applicable
6. Get stakeholder preview (if needed)
7. Merge to main after approval

## Error Handling for Marketing Sites

### User-Facing Errors:
- Friendly error messages (no technical jargon)
- Clear next steps for users
- Maintain brand voice even in errors
- Track errors in analytics
- Provide fallback content when possible

### Form Error Handling:
```javascript
const handleFormError = (error) => {
  // Log to analytics
  gtag('event', 'form_error', {
    error_type: error.type,
    form_id: error.formId
  });
  
  // Show user-friendly message
  showNotification({
    type: 'error',
    title: 'Oops! Something went wrong',
    message: 'Please try again or contact us at support@schoolvision.ai'
  });
  
  // Don't lose user's input
  preserveFormData();
};
```

## Deployment & Monitoring

### Pre-Deployment Checklist:
- [ ] All tests passing
- [ ] Build successful with no warnings
- [ ] Lighthouse score > 90
- [ ] SEO meta tags present on all pages
- [ ] Sitemap updated
- [ ] Redirects configured
- [ ] Analytics verified
- [ ] Forms tested in production environment

### Post-Deployment Monitoring:
- Set up uptime monitoring
- Configure performance alerts
- Monitor 404 errors
- Track conversion rates
- Review user session recordings
- Check search console for errors
- Monitor Core Web Vitals

## Marketing Site Specific Patterns

### Progressive Enhancement:
```javascript
// Feature detection before using advanced features
if ('IntersectionObserver' in window) {
  // Implement lazy loading
} else {
  // Fallback to eager loading
}

// Smooth scrolling with fallback
if ('scrollBehavior' in document.documentElement.style) {
  // Use CSS smooth scrolling
} else {
  // JavaScript fallback
}
```

### Conversion Optimization:
- Test different CTA colors and text
- Implement social proof near conversion points
- Use urgency and scarcity appropriately
- Reduce form fields to minimum required
- Show security badges near sensitive forms
- Implement multi-step forms for complex conversions

## Execution Motto
"Every pixel should drive conversion" - Build fast, accessible, and SEO-friendly marketing experiences that convert visitors into customers. Focus on user intent and remove friction from the conversion path.

## Critical Reminders
- Never sacrifice page speed for fancy animations
- Always provide fallbacks for JavaScript features
- Test on real devices, not just browser DevTools
- Content is king - make it scannable and valuable
- Track everything but respect user privacy
- Mobile experience is not optional, it's primary