# Placeholder Image Generator Guide

Until real images are available, you can generate placeholder images using these services:

## Quick Placeholder Services

### 1. Generic Placeholders
- **Placeholder.com**: `https://via.placeholder.com/WIDTHxHEIGHT/BGCOLOR/TEXTCOLOR?text=TEXT`
  - Example: `https://via.placeholder.com/1200x630/0066CC/FFFFFF?text=SchoolVision.AI`

### 2. Logo Placeholders
```html
<!-- Primary Logo -->
<svg width="200" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="40" fill="#0066CC" rx="4"/>
  <text x="100" y="25" text-anchor="middle" fill="white" font-family="Arial" font-weight="bold">SchoolVision.AI</text>
</svg>
```

### 3. Avatar/Headshot Placeholders
- **UI Avatars**: `https://ui-avatars.com/api/?name=John+Doe&size=200&background=0066CC&color=fff`
- **DiceBear**: `https://api.dicebear.com/7.x/avataaars/svg?seed=JohnDoe`

### 4. Screenshot Placeholders
- **Screely**: Upload a simple HTML mockup to create device frames
- **Carbon**: For code screenshots
- **PlaceIMG**: `https://placeimg.com/1200/800/tech` (for tech-related images)

## Temporary Solutions for Each Category

### Hero Images
```html
<!-- Dashboard Preview -->
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            width: 1200px; height: 800px; display: flex; align-items: center; 
            justify-content: center; color: white; font-size: 24px;">
  Dashboard Preview Coming Soon
</div>
```

### Feature Icons (SVG)
```html
<!-- Attendance Icon -->
<svg width="64" height="64" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" stroke="#0066CC" stroke-width="4"/>
  <path d="M32 20C27.58 20 24 23.58 24 28C24 32.42 27.58 36 32 36C36.42 36 40 32.42 40 28C40 23.58 36.42 20 32 20ZM32 40C25.33 40 12 43.34 12 50V52H52V50C52 43.34 38.67 40 32 40Z" fill="#0066CC"/>
</svg>
```

### Testimonial Avatars
Use initials with colored backgrounds:
```html
<div style="width: 60px; height: 60px; border-radius: 50%; 
            background: #0066CC; color: white; display: flex; 
            align-items: center; justify-content: center; 
            font-weight: bold; font-size: 20px;">
  JD
</div>
```

## Color Palette for Placeholders
- Primary Blue: #0066CC
- Secondary Purple: #764ba2
- Success Green: #10B981
- Gray: #6B7280
- Light Background: #F3F4F6

## Tools for Quick Mockups
1. **Figma**: Create simple mockups and export as images
2. **Canva**: Quick social media images and mockups
3. **PlotlyJS**: For creating chart/analytics placeholders
4. **Mermaid**: For workflow/diagram placeholders

## Implementation Priority
1. Create logo SVG files first
2. Generate meta images (OG/Twitter)
3. Create dashboard/interface mockups
4. Generate avatar placeholders
5. Create icon set

## Sample Implementation Code

```javascript
// Generate placeholder image URL
function getPlaceholder(width, height, text, bgColor = '0066CC', textColor = 'FFFFFF') {
  return `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(text)}`;
}

// Usage in Vue component
const images = {
  heroImage: getPlaceholder(1200, 600, 'Dashboard Preview'),
  teamPhoto: getPlaceholder(400, 400, 'Team Member'),
  screenshot: getPlaceholder(800, 500, 'Feature Screenshot')
};
```