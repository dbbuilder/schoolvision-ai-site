# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SchoolVision AI Marketing Site - A Vue.js 3 marketing website for an intelligent campus management platform targeting K-12, Higher Ed, and Vocational education markets.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
npm run deploy
```

## Architecture Overview

### Technology Stack
- **Frontend**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **Deployment**: Vercel (auto-deploys from main branch)
- **Repository**: https://github.com/dbbuilder/schoolvision-ai-site
- **Live Site**: https://schoolvisionaisite-izhxozoww-teds-projects-d50f6fce.vercel.app

### Project Structure
```
src/
├── App.vue          # Main application component
├── main.js          # Application entry point
├── components/      # Reusable Vue components (to be created)
├── views/           # Page components (to be created)
├── composables/     # Vue composables for shared logic
├── assets/          # Static assets
└── styles/          # Global styles (to be created)

public/              # Static files served directly
dist/                # Production build output (gitignored)
```

### Key Development Patterns

#### Vue 3 Composition API Pattern
```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

// Props definition
const props = defineProps({
  title: String,
  variant: {
    type: String,
    default: 'primary'
  }
})

// Reactive state
const isLoading = ref(false)

// Computed properties
const buttonClass = computed(() => `btn-${props.variant}`)

// Lifecycle hooks
onMounted(() => {
  // Track component view for analytics
})

// Methods
const handleClick = () => {
  // Track conversion event
  gtag('event', 'cta_click', {
    component: 'hero',
    variant: props.variant
  })
}
</script>
```

### Vercel Deployment Configuration

The site automatically deploys from the main branch with these settings:
- **Framework Preset**: Vue.js
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x

### Development Workflow

1. **Local Development**
   ```bash
   npm run dev  # Start Vite dev server with hot reload
   ```

2. **Testing Changes**
   - Test responsive design at mobile (375px), tablet (768px), and desktop (1024px+)
   - Verify all CTAs and forms work correctly
   - Check console for any errors
   - Test page load performance

3. **Deployment**
   ```bash
   git add .
   git commit -m "feat: descriptive commit message"
   git push origin main  # Auto-deploys to Vercel
   ```

## Current Project Status

- Basic Vue.js app initialized with Vite
- Homepage with hero section and features grid
- Deployed to Vercel with continuous deployment
- No routing, state management, or testing configured yet
- Following TODO.md for development priorities

## Common Development Tasks

### Adding a New Page/View
1. Create component in `src/views/[PageName].vue`
2. Install Vue Router if not already: `npm install vue-router@4`
3. Configure router in `src/router/index.js`
4. Update navigation in App.vue
5. Test responsiveness and deploy

### Installing Tailwind CSS (Planned)
```bash
# Install Tailwind and dependencies
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Update tailwind.config.js content paths
content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']

# Add Tailwind directives to src/style.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Setting Up Testing
```bash
# Install Vitest for Vue testing
npm install -D vitest @vue/test-utils happy-dom

# Add test script to package.json
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui"
}
```

### Component Development Best Practices

1. **File Naming**: Use PascalCase for component files (e.g., `HeroSection.vue`)
2. **Props Validation**: Always define prop types and defaults
3. **Composition API**: Use `<script setup>` for cleaner code
4. **Scoped Styles**: Use `<style scoped>` to prevent style leaks
5. **Accessibility**: Include proper ARIA labels and semantic HTML

### SEO Optimization

1. **Meta Tags**: Update in `index.html` for static pages
2. **Vue Meta**: Install `@unhead/vue` for dynamic meta tags
3. **Structured Data**: Add JSON-LD scripts for rich snippets
4. **Image Optimization**: Use WebP format with fallbacks
5. **Performance**: Keep Lighthouse scores above 90

### Analytics Integration

When implementing analytics:
```javascript
// In main.js or a plugin
import { createGtag } from 'vue-gtag'

app.use(createGtag({
  config: { id: 'GA_MEASUREMENT_ID' }
}))

// Track events in components
import { useGtag } from 'vue-gtag'

const { event } = useGtag()
event('click', {
  event_category: 'cta',
  event_label: 'hero_button'
})
```

## Git Workflow

### Commit Conventions
```bash
# Use semantic commit messages
git commit -m "feat: add hero section with CTA"
git commit -m "fix: mobile navigation menu"
git commit -m "perf: optimize image loading"
git commit -m "docs: update setup instructions"

# Feature branches (optional for small changes)
git checkout -b feature/pricing-page
git checkout -b fix/contact-form-validation
```

### Deployment Process
1. Push to main branch triggers automatic Vercel deployment
2. Preview deployments created for pull requests
3. Check Vercel dashboard for deployment status
4. Production URL updates within 1-2 minutes

## Vue.js Component Patterns

### Marketing Landing Page Component
```vue
<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>{{ headline }}</h1>
      <p>{{ subheadline }}</p>
      <button @click="handleCTA" class="cta-button">
        {{ ctaText }}
      </button>
    </section>
    
    <!-- Features Grid -->
    <section class="features">
      <div v-for="feature in features" :key="feature.id" class="feature-card">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  headline: String,
  subheadline: String,
  ctaText: String,
  features: Array
})

const handleCTA = () => {
  // Track event when analytics is set up
  console.log('CTA clicked')
  // Navigate to demo request form
}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 1rem;
}

.cta-button {
  background: #007bff;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1.1rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
</style>
```

## Performance Guidelines

### Vite Optimization
- Vite handles code splitting automatically
- Use dynamic imports for large components: `const HeavyComponent = () => import('./HeavyComponent.vue')`
- Images in `public/` are served as-is
- Import images in components for optimization: `import logo from './assets/logo.png'`

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 300ms
- Cumulative Layout Shift: < 0.1

## Troubleshooting

### Common Issues

1. **Port 5173 already in use**
   ```bash
   npm run dev -- --port 3000
   ```

2. **Build errors**
   - Check for TypeScript errors even without TS setup
   - Ensure all imports have proper file extensions
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

3. **Vercel deployment fails**
   - Check build logs in Vercel dashboard
   - Ensure all environment variables are set
   - Verify output directory is `dist`

## Future Enhancements (per TODO.md)

### Week 1-2: Foundation
- Tailwind CSS setup
- Vue Router implementation
- Basic component library
- ESLint/Prettier configuration

### Week 3-4: Core Pages
- Homepage optimization
- Market-specific landing pages
- Pricing page with calculator
- Contact and demo request forms

### Week 5-6: Content & Tools
- Blog system (consider Nuxt Content)
- ROI calculator tool
- Case studies section
- Resource center

### Week 7-8: Optimization
- Performance optimization
- SEO implementation
- Analytics integration
- A/B testing setup

## Important Notes

- This is a marketing site - prioritize conversions and user experience
- Keep the codebase simple and maintainable
- Test all changes on mobile devices
- Follow Vue.js 3 best practices and Composition API patterns
- Leverage Vite's fast HMR for rapid development
- Monitor Vercel Analytics for performance insights