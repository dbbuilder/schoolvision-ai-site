# SchoolVision.AI - CTA Strategy & Implementation

## Primary CTA Goals
Every page and interaction should drive toward one of these primary conversion points:
1. **Schedule a Demo** (Primary)
2. **Email Contact** (Secondary)
3. **Phone Call** (Immediate needs)

## Universal CTA Implementation

### Sticky Header CTA
```vue
<template>
  <header class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo and Nav -->
        <div class="flex items-center space-x-8">
          <!-- ... navigation ... -->
        </div>
        
        <!-- Always Visible CTAs -->
        <div class="flex items-center space-x-4">
          <a href="tel:801-659-7778" 
             class="hidden sm:flex items-center text-gray-700 hover:text-sv-blue-600">
            <PhoneIcon class="w-4 h-4 mr-1" />
            <span class="font-medium">801-659-7778</span>
          </a>
          <button @click="openDemoModal" 
                  class="px-4 py-2 bg-sv-blue-600 text-white rounded-lg 
                         hover:bg-sv-blue-700 transition-colors font-medium">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
```

### Floating Action Button (Mobile)
```vue
<template>
  <div class="fixed bottom-6 right-6 z-50 sm:hidden">
    <div class="flex flex-col space-y-3">
      <!-- Phone Button -->
      <a href="tel:801-659-7778" 
         class="w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center 
                justify-center hover:shadow-xl transform hover:scale-110 transition-all">
        <PhoneIcon class="w-6 h-6 text-white" />
      </a>
      
      <!-- Demo Button -->
      <button @click="openDemoModal"
              class="w-14 h-14 bg-sv-blue-600 rounded-full shadow-lg flex items-center 
                     justify-center hover:shadow-xl transform hover:scale-110 transition-all">
        <CalendarIcon class="w-6 h-6 text-white" />
      </button>
    </div>
  </div>
</template>
```

### Exit Intent Modal
```vue
<template>
  <transition name="modal">
    <div v-if="showExitIntent" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen p-4">
        <div class="fixed inset-0 bg-black/50" @click="closeModal"></div>
        
        <div class="relative bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Wait! See How We Can Help
          </h3>
          <p class="text-gray-600 mb-6">
            Get a personalized demo showing how Complete Campus Intelligence 
            can transform your institution.
          </p>
          
          <div class="space-y-4">
            <button @click="scheduleDemoNow" 
                    class="w-full py-3 bg-sv-blue-600 text-white rounded-lg 
                           hover:bg-sv-blue-700 transition-colors font-medium">
              Schedule Your Demo Now
            </button>
            
            <div class="flex items-center justify-center text-gray-500">
              <span>or</span>
            </div>
            
            <a href="tel:801-659-7778" 
               class="w-full py-3 border-2 border-sv-blue-600 text-sv-blue-600 
                      rounded-lg hover:bg-sv-blue-50 transition-colors font-medium 
                      flex items-center justify-center">
              <PhoneIcon class="w-5 h-5 mr-2" />
              Call Now: 801-659-7778
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
```

### Inline Content CTAs
```vue
<template>
  <!-- After every major section -->
  <div class="bg-gradient-to-r from-sv-blue-50 to-sv-teal-50 rounded-2xl p-8 my-12">
    <div class="text-center">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">
        Ready to See This in Action?
      </h3>
      <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
        See how {{ currentFeature }} works with your existing SIS to create 
        Complete Campus Intelligence.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button @click="openDemoModal" 
                class="px-6 py-3 bg-sv-blue-600 text-white rounded-lg 
                       hover:bg-sv-blue-700 transition-colors font-medium">
          Schedule Personalized Demo
        </button>
        <a href="mailto:info@schoolvision.ai" 
           class="px-6 py-3 border-2 border-sv-blue-600 text-sv-blue-600 
                  rounded-lg hover:bg-sv-blue-50 transition-colors font-medium">
          Email Our Team
        </a>
      </div>
    </div>
  </div>
</template>
```

### Smart Chat Widget
```vue
<template>
  <div class="fixed bottom-6 right-6 z-40">
    <!-- Chat bubble -->
    <transition name="scale">
      <div v-if="!chatOpen" 
           @click="openChat"
           class="bg-sv-blue-600 rounded-full p-4 shadow-lg cursor-pointer 
                  hover:shadow-xl transform hover:scale-110 transition-all">
        <ChatIcon class="w-6 h-6 text-white" />
        <span class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
      </div>
    </transition>
    
    <!-- Chat window -->
    <transition name="slide-up">
      <div v-if="chatOpen" 
           class="bg-white rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col">
        <!-- Chat header -->
        <div class="bg-sv-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
          <h4 class="font-semibold">How Can We Help?</h4>
          <button @click="chatOpen = false" class="text-white/80 hover:text-white">
            <XIcon class="w-5 h-5" />
          </button>
        </div>
        
        <!-- Quick actions -->
        <div class="p-4 border-b">
          <p class="text-sm text-gray-600 mb-3">Choose an option or type below:</p>
          <div class="space-y-2">
            <button @click="scheduleDemoFromChat" 
                    class="w-full text-left px-4 py-2 bg-sv-blue-50 text-sv-blue-700 
                           rounded-lg hover:bg-sv-blue-100 transition-colors text-sm">
              📅 Schedule a Demo
            </button>
            <a href="tel:801-659-7778" 
               class="block w-full text-left px-4 py-2 bg-green-50 text-green-700 
                      rounded-lg hover:bg-green-100 transition-colors text-sm">
              📞 Call: 801-659-7778
            </a>
            <button @click="startEmailConversation" 
                    class="w-full text-left px-4 py-2 bg-gray-50 text-gray-700 
                           rounded-lg hover:bg-gray-100 transition-colors text-sm">
              ✉️ Email Our Team
            </button>
          </div>
        </div>
        
        <!-- Chat messages area -->
        <div class="flex-1 overflow-y-auto p-4">
          <!-- Chat messages -->
        </div>
      </div>
    </transition>
  </div>
</template>
```

### Page-Specific CTAs

#### Homepage
- Hero: "See Your Complete Campus" → Demo
- After stats: "Calculate Your ROI" → Interactive calculator → Demo
- After features: "Explore Solutions" → Solutions page → Demo
- Footer: "Start Your Free Pilot" → Demo

#### Solution Pages
- Hero: "See [Solution] in Action" → Demo
- After benefits: "Calculate [Solution] ROI" → Calculator → Demo
- After features: "Compare Plans" → Pricing → Contact
- Footer: "Get Started with [Solution]" → Demo

#### Industry Pages
- Hero: "See How We Help [Industry]" → Demo
- After case study: "Get Similar Results" → Contact
- After features: "Talk to [Industry] Specialist" → Phone
- Footer: "Join 500+ [Industry] Institutions" → Demo

## Demo Scheduling Integration

### Calendly Embed
```vue
<template>
  <div class="fixed inset-0 z-50 overflow-y-auto" v-if="showDemoModal">
    <div class="flex items-center justify-center min-h-screen p-4">
      <div class="fixed inset-0 bg-black/50" @click="closeDemoModal"></div>
      
      <div class="relative bg-white rounded-2xl max-w-4xl w-full p-8 shadow-2xl">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          Schedule Your Personalized Demo
        </h3>
        
        <!-- Calendly inline widget -->
        <div class="calendly-inline-widget" 
             data-url="https://calendly.com/schoolvision-demo/30min?hide_event_type_details=1"
             style="min-width:320px;height:630px;">
        </div>
        
        <!-- Alternative contact options -->
        <div class="mt-6 pt-6 border-t border-gray-200 text-center">
          <p class="text-gray-600 mb-2">Prefer to speak with someone now?</p>
          <a href="tel:801-659-7778" class="text-sv-blue-600 font-semibold hover:underline">
            Call 801-659-7778
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  // Load Calendly widget script
  const script = document.createElement('script')
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  document.body.appendChild(script)
})
</script>
```

## Conversion Tracking

### Analytics Events
```javascript
// Track all CTA interactions
const trackCTA = (action, location, method) => {
  // Google Analytics 4
  gtag('event', 'generate_lead', {
    'event_category': 'engagement',
    'event_label': location,
    'value': action,
    'method': method
  })
  
  // Internal tracking
  api.post('/api/analytics/cta', {
    action,
    location,
    method,
    timestamp: new Date(),
    page: window.location.pathname
  })
}
```

## A/B Testing CTAs

### Variations to Test
1. **Button Text**
   - "Schedule Demo" vs "See It In Action" vs "Get Started"
   - "Call Now" vs "Speak to Expert" vs "Get Immediate Help"

2. **Button Colors**
   - Blue primary vs Green primary vs Gradient

3. **Placement**
   - Sticky header vs Floating button vs Both
   - Exit intent timing (30s vs 60s vs scroll-based)

4. **Urgency**
   - "Limited Time: Free Pilot" vs "Join 500+ Campuses" vs "See ROI in 30 Days"

## Mobile-Specific CTAs

### Thumb-Friendly Placement
- Bottom sheet CTAs for easy reach
- Minimum 48px touch targets
- Swipe-up gestures for contact options
- One-tap phone dialing

### Progressive Disclosure
```vue
<template>
  <div class="fixed bottom-0 inset-x-0 bg-white rounded-t-2xl shadow-2xl 
              transform transition-transform duration-300"
       :class="expanded ? 'translate-y-0' : 'translate-y-[calc(100%-60px)]'">
    
    <!-- Always visible handle -->
    <div @click="expanded = !expanded" 
         class="p-4 cursor-pointer">
      <div class="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-2"></div>
      <p class="text-center font-semibold text-gray-900">
        Get Complete Campus Intelligence
      </p>
    </div>
    
    <!-- Expanded options -->
    <div v-if="expanded" class="p-4 space-y-3">
      <button class="w-full py-3 bg-sv-blue-600 text-white rounded-lg font-medium">
        Schedule Demo
      </button>
      <a href="tel:801-659-7778" 
         class="w-full py-3 bg-green-500 text-white rounded-lg font-medium 
                flex items-center justify-center">
        <PhoneIcon class="w-5 h-5 mr-2" />
        Call Now
      </a>
      <button class="w-full py-3 border-2 border-gray-300 text-gray-700 
                     rounded-lg font-medium">
        Email Us
      </button>
    </div>
  </div>
</template>
```

This CTA strategy ensures that demo scheduling, email contact, and phone calls are always easily accessible from any page or device, maximizing conversion opportunities.