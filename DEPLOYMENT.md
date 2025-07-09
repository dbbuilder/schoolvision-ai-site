# SchoolVision AI Site - Deployment Guide

## Current Deployment Setup

### Production Environment
- **URL**: https://schoolvisionaisite.vercel.app
- **Platform**: Vercel
- **Auto-Deploy**: Enabled from `main` branch
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework Preset**: Vue.js

## Deployment Methods

### 1. Automatic Deployment (Recommended)
Every push to the `main` branch triggers an automatic deployment:

```bash
git add .
git commit -m "feat: your changes"
git push origin main
```

Vercel will automatically:
1. Detect the push
2. Run `npm install`
3. Run `npm run build`
4. Deploy the `dist` folder
5. Update the production URL

### 2. Manual Deployment via CLI
If you need to force a deployment:

```bash
# Install Vercel CLI globally (if not installed)
npm i -g vercel

# Deploy to production
npm run deploy
# or
vercel --prod
```

### 3. Preview Deployments
Every pull request automatically gets a preview URL:

```bash
git checkout -b feature/your-feature
# make changes
git push origin feature/your-feature
# create PR on GitHub
```

## Environment Variables
Currently, no environment variables are required. When needed, add them in:
1. Vercel Dashboard > Project Settings > Environment Variables
2. Local development: Create `.env` file (gitignored)

## Build Process

### Local Build
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Build Output
The build creates:
- `dist/` - Production-ready files
- `dist/index.html` - Entry point
- `dist/assets/` - JS, CSS, and other assets

## Monitoring Deployment

### Vercel Dashboard
1. Visit https://vercel.com/dashboard
2. Select the `schoolvisionaisite` project
3. View deployment history, logs, and analytics

### CLI Status Check
```bash
vercel ls
vercel inspect [deployment-url]
```

## Rollback Procedure
If a deployment has issues:

### Via Vercel Dashboard
1. Go to project deployments
2. Find the last working deployment
3. Click "..." menu > "Promote to Production"

### Via CLI
```bash
vercel rollback [deployment-url]
```

## Performance Optimization

### Current Build Stats
- Total JS: ~125KB (gzipped: ~47KB)
- CSS: ~36KB (gzipped: ~6.5KB)
- Average build time: 5-10 seconds

### Optimization Tips
1. **Images**: Use WebP format with fallbacks
2. **Lazy Loading**: Already implemented for routes
3. **Caching**: Vercel automatically handles caching headers
4. **CDN**: Vercel Edge Network provides global CDN

## Troubleshooting

### Build Failures
1. Check Vercel deployment logs
2. Common issues:
   - Missing dependencies: Run `npm install`
   - TypeScript errors: Check for type issues
   - Import errors: Verify file paths

### 404 Errors on Routes
The `vercel.json` file handles SPA routing:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Slow Performance
1. Check build output size
2. Analyze with: `npm run build -- --report`
3. Use Chrome DevTools Lighthouse

## Custom Domain Setup
To add a custom domain:

1. In Vercel Dashboard > Domains
2. Add your domain (e.g., `www.schoolvision.ai`)
3. Update DNS records as instructed
4. SSL certificates are automatic

## CI/CD Integration

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Backup and Recovery

### Code Backup
- Primary: GitHub repository
- Local: Regular git pulls

### Deployment Backup
- Vercel keeps deployment history
- Can rollback to any previous deployment

## Security Considerations

1. **No sensitive data in code**: Use environment variables
2. **API Keys**: Store in Vercel environment variables
3. **CORS**: Configure in API, not frontend
4. **CSP Headers**: Can be added via `vercel.json`

## Maintenance

### Regular Tasks
1. Monitor build sizes
2. Update dependencies monthly
3. Check Vercel analytics
4. Review error logs

### Dependency Updates
```bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Test after updates
npm run dev
npm run build
```

## Support

### Vercel Support
- Documentation: https://vercel.com/docs
- Status: https://www.vercel-status.com/

### Project Issues
- GitHub Issues: https://github.com/dbbuilder/schoolvision-ai-site/issues
- Internal: support@schoolvision.ai