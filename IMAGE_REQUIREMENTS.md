# SchoolVision AI - Image Requirements

## Overview
This document outlines all image placeholders currently in use and specifications for production images.

## Current Placeholder Images to Replace

### Hero/Banner Images

1. **K-12 Classroom** (`WhySV-K12.vue`)
   - Current: `https://images.unsplash.com/photo-1580582932707-520aed937b7b`
   - Needed: Modern K-12 classroom with technology integration
   - Specs: 600x400px minimum, showing diverse students using tablets/computers
   - Alt text: "K-12 students using SchoolVision AI technology in classroom"

2. **University Campus** (`WhySV-HigherEd.vue`)
   - Current: `https://images.unsplash.com/photo-1541339907198-e08756dedf3f`
   - Needed: University campus aerial or quad view
   - Specs: 600x400px minimum, modern campus architecture
   - Alt text: "Modern university campus using SchoolVision AI"

3. **Vocational Training** (`WhySV-Vocational.vue`)
   - Current: `https://images.unsplash.com/photo-1581092160607-ee22621dd758`
   - Needed: Students in vocational/trade training environment
   - Specs: 600x400px minimum, hands-on learning scenario
   - Alt text: "Vocational students in training with SchoolVision AI tracking"

### Library Article Images (9 articles)

1. **Campus Intelligence Dashboard**
   - Needed: Screenshot of unified dashboard showing SIS + operational data
   - Specs: 800x400px, clean UI mockup
   - Features to show: Student profile with grades, attendance, cafeteria, library usage

2. **Early Warning System Interface**
   - Needed: Analytics dashboard showing at-risk student indicators
   - Specs: 800x400px, data visualization
   - Features: Risk scores, intervention recommendations, trend graphs

3. **Cafeteria Analytics**
   - Needed: POS system with waste tracking dashboard
   - Specs: 800x400px, split view of POS and analytics
   - Features: Daily waste metrics, predictive ordering interface

4. **Clock Hour Tracking System**
   - Needed: CTE compliance dashboard
   - Specs: 800x400px, professional interface
   - Features: Hour tracking, 90/10 compliance meter, multi-campus view

5. **CDL In-Truck System**
   - Needed: Tablet showing QR code attendance in truck cab
   - Specs: 800x400px, realistic truck interior
   - Features: GPS tracking, hour logging, route display

6. **Dental Grading Interface**
   - Needed: Tablet showing tooth chart with grading overlay
   - Specs: 800x400px, clinical setting
   - Features: Per-tooth assessment grid, competency tracking

7. **Unified Dashboard**
   - Needed: Executive dashboard with natural language query
   - Specs: 800x400px, modern office setting
   - Features: Multi-source data visualization, AI insights panel

8. **Parent Portal Mobile**
   - Needed: Smartphone showing parent app
   - Specs: 800x400px, parent using app
   - Features: Multi-child view, notifications, attendance alerts

9. **Financial Aid Integration**
   - Needed: Student portal showing integrated payments
   - Specs: 800x400px, clean payment interface
   - Features: Bookstore, meal plan, tuition in one view

### Component/Feature Images

1. **Facial Recognition Attendance**
   - Needed: Student using facial recognition kiosk
   - Specs: Square format, 400x400px
   - Privacy-conscious representation (silhouette or side angle)

2. **Mobile App Screenshots**
   - Needed: 3-4 app screens
   - Specs: Phone mockups, 375x812px each
   - Screens: Dashboard, attendance, grades, notifications

3. **Integration Diagram**
   - Needed: Technical architecture diagram
   - Specs: Vector format preferred, min 1200x800px
   - Shows: SIS integration, data flow, AI processing

### Testimonial Avatars

1. **Dr. Jennifer Martinez** - Superintendent
2. **Dr. Michael Thompson** - VP of Student Success
3. **Linda Chen** - CFO
4. **Dr. Patricia Williams** - Program Director
5. **Robert Martinez** - Business Manager
6. **James Wilson** - Director of Transportation

All need professional headshots or avatars, 200x200px circular crop

### Logo and Brand Assets

1. **SchoolVision AI Logo**
   - Needed: Primary logo with AI element
   - Formats: SVG, PNG (transparent)
   - Variations: Full color, white, monochrome

2. **Product Icons**
   - Attendance, POS, Grading, Analytics, etc.
   - Specs: 64x64px, consistent style
   - Format: SVG preferred

### Case Study Images

1. **Westside K-12 District**
   - Campus exterior or students
   - Stats overlay capability

2. **State University**
   - Campus landmark or dining hall
   - Modern facility preferred

3. **Allied Career Centers**
   - Multi-campus montage
   - CTE focus visible

4. **Metro Unified School District**
   - Cafeteria or food service
   - Waste reduction theme

## Image Style Guidelines

### General Requirements
- Modern, professional, diverse representation
- Technology-forward but not intimidating
- Real environments over stock photos when possible
- Consistent color grading matching brand colors
- High resolution for retina displays

### Privacy Considerations
- No identifiable student faces without consent
- Use angles, silhouettes, or distance shots
- Focus on technology and environments
- Blur backgrounds when necessary

### Brand Colors for Overlays
- Primary: #2563eb (blue-600)
- Secondary: #7c3aed (purple-600)
- Success: #16a34a (green-600)
- Warning: #ea580c (orange-600)

## Production Priority

### High Priority (Week 1)
1. Hero images for Why SV pages
2. Dashboard/interface mockups
3. Logo and brand assets

### Medium Priority (Week 2)
1. Library article images
2. Mobile app screenshots
3. Integration diagram

### Low Priority (Week 3)
1. Testimonial avatars
2. Case study images
3. Additional feature illustrations

## Technical Specifications

### File Formats
- Photos: JPEG at 85% quality
- Graphics/Icons: SVG when possible, PNG fallback
- Screenshots: PNG for clarity

### Optimization
- Use WebP with JPEG fallback
- Implement lazy loading
- Provide 2x versions for retina
- Max file size: 200KB for heroes, 100KB for articles

### Naming Convention
```
[section]-[description]-[size].[ext]
Examples:
- hero-k12-classroom-600x400.jpg
- icon-attendance-64x64.svg
- dashboard-unified-view-800x400.png
```

## Alt Text Templates

### Hero Images
"[Market segment] students/professionals using SchoolVision AI [specific feature]"

### Dashboard Screenshots
"SchoolVision AI [feature name] dashboard showing [key metrics/functions]"

### People Images
"[Role] at [institution type] using SchoolVision AI"

## Image Sources

### Recommended Stock Photo Sites
1. Unsplash Education Collection
2. Pexels School Category
3. Shutterstock Education
4. Getty Images Academic

### Custom Photography
- Local school partnerships
- Client site visits
- Professional education photographer

### UI/Dashboard Creation
- Figma or Sketch mockups
- Based on actual product screenshots
- Consistent with brand guidelines

## Delivery Format

All images should be delivered in organized folders:
```
images/
├── hero/
├── library/
├── dashboards/
├── testimonials/
├── icons/
└── case-studies/
```

Include a manifest.json with image metadata and alt text.