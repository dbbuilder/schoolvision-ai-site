# SchoolVision.AI - Tailwind UI Component Showcase

## Homepage Components

### Hero Section with Video Background
```vue
<template>
  <div class="relative overflow-hidden">
    <!-- Video Background -->
    <video 
      autoplay 
      muted 
      loop 
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/campus-intelligence.mp4" type="video/mp4">
    </video>
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
    
    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-7">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Complete Campus
            <span class="bg-gradient-to-r from-sv-blue-400 to-sv-teal-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          <p class="mt-6 text-xl text-gray-300 leading-relaxed">
            Your SIS Captures Academic Data. We Complement It with 
            Operational Intelligence to Create a Complete Picture.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <button class="group relative px-8 py-4 bg-sv-blue-500 text-white rounded-lg 
                         overflow-hidden transition-all hover:bg-sv-blue-600">
              <span class="relative z-10">See Your Complete Campus</span>
              <div class="absolute inset-0 bg-gradient-to-r from-sv-purple-500 to-sv-blue-500 
                          translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <button class="px-8 py-4 border-2 border-white text-white rounded-lg 
                         hover:bg-white hover:text-gray-900 transition-all">
              Calculate Your ROI
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

### Animated Stats Section
```vue
<template>
  <div class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="stat in stats" 
          :key="stat.label"
          class="text-center transform hover:scale-105 transition-transform duration-300"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="stat.delay"
        >
          <div class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sv-blue-500 to-sv-teal-500 
                      bg-clip-text text-transparent">
            <CountUp :end="stat.value" :duration="2.5" />{{ stat.suffix }}
          </div>
          <div class="mt-2 text-gray-600">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { value: 500, suffix: '+', label: 'Campuses', delay: 0 },
  { value: 87, suffix: '%', label: 'Prediction Accuracy', delay: 200 },
  { value: 40, suffix: '%', label: 'Cost Reduction', delay: 400 },
  { value: 50, suffix: '+', label: 'SIS Integrations', delay: 600 }
]
</script>
```

### Bento Grid Feature Section
```vue
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
      <!-- Large Feature -->
      <div class="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl 
                  bg-gradient-to-br from-sv-blue-500 to-sv-purple-600 p-8">
        <div class="relative z-10 h-full flex flex-col justify-between text-white">
          <div>
            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <ChartBarIcon class="w-6 h-6" />
            </div>
            <h3 class="text-2xl font-bold mb-2">Predictive Analytics</h3>
            <p class="text-white/80">
              AI-powered insights help you make informed decisions about student success
            </p>
          </div>
          <a href="#" class="inline-flex items-center text-white hover:translate-x-2 transition-transform">
            Learn more <ArrowRightIcon class="w-4 h-4 ml-2" />
          </a>
        </div>
        <!-- Animated background -->
        <div class="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 
                    group-hover:opacity-0 transition-opacity duration-500"></div>
      </div>
      
      <!-- Medium Features -->
      <div class="col-span-1 row-span-1 rounded-2xl bg-white border border-gray-200 
                  hover:shadow-xl transition-shadow p-6">
        <div class="w-10 h-10 bg-sv-teal-100 rounded-lg flex items-center justify-center mb-3">
          <ClockIcon class="w-5 h-5 text-sv-teal-600" />
        </div>
        <h4 class="font-semibold mb-1">Clock Hour Tracking</h4>
        <p class="text-sm text-gray-600">Automated compliance for CTE programs</p>
      </div>
      
      <!-- Continue pattern for other grid items -->
    </div>
  </div>
</template>
```

### Interactive Dashboard Preview
```vue
<template>
  <div class="relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">
          One Dashboard. Complete Intelligence.
        </h2>
        <p class="mt-4 text-xl text-gray-600">
          See how all your campus data comes together
        </p>
      </div>
      
      <!-- Dashboard Preview with Tabs -->
      <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <!-- Tab Navigation -->
        <div class="border-b border-gray-200 bg-gray-50">
          <nav class="flex space-x-8 px-6" aria-label="Tabs">
            <button
              v-for="tab in tabs"
              :key="tab.name"
              @click="activeTab = tab.id"
              :class="[
                activeTab === tab.id
                  ? 'border-sv-blue-500 text-sv-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all'
              ]"
            >
              {{ tab.name }}
            </button>
          </nav>
        </div>
        
        <!-- Tab Content with Transitions -->
        <div class="p-6">
          <transition
            enter-active-class="transform transition ease-out duration-300"
            enter-from-class="translate-x-full opacity-0"
            enter-to-class="translate-x-0 opacity-100"
            leave-active-class="transform transition ease-in duration-200"
            leave-from-class="translate-x-0 opacity-100"
            leave-to-class="-translate-x-full opacity-0"
          >
            <div v-if="activeTab === 'student'" key="student">
              <!-- Student dashboard preview -->
              <img src="/images/dashboard-student.png" alt="Student Intelligence View" 
                   class="rounded-lg shadow-lg" />
            </div>
            <div v-else-if="activeTab === 'department'" key="department">
              <!-- Department dashboard preview -->
              <img src="/images/dashboard-department.png" alt="Department Intelligence View" 
                   class="rounded-lg shadow-lg" />
            </div>
            <!-- More tab contents -->
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
```

### Floating CTA Section
```vue
<template>
  <div class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-40">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg bg-sv-blue-600 shadow-lg sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-sv-blue-800">
              <SpeakerphoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="md:hidden">Limited time: 90-day free pilot!</span>
              <span class="hidden md:inline">
                Limited time offer: Get a 90-day free pilot program for your institution!
              </span>
            </p>
          </div>
          <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <button class="flex items-center justify-center px-4 py-2 border border-transparent 
                         rounded-md shadow-sm text-sm font-medium text-sv-blue-600 bg-white 
                         hover:bg-sv-blue-50 transition-colors">
              Start Free Pilot
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

### Solutions Comparison Table
```vue
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="px-6 py-8 bg-gradient-to-r from-sv-blue-500 to-sv-teal-500">
        <h3 class="text-2xl font-bold text-white">Compare Our Solutions</h3>
        <p class="mt-2 text-blue-100">Find the perfect fit for your institution</p>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Features
              </th>
              <th v-for="plan in plans" :key="plan.name" 
                  class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                {{ plan.name }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(feature, index) in features" :key="feature.name"
                :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{ feature.name }}
              </td>
              <td v-for="plan in plans" :key="plan.name" 
                  class="px-6 py-4 whitespace-nowrap text-center">
                <CheckIcon v-if="feature[plan.id]" 
                          class="h-5 w-5 text-green-500 mx-auto" />
                <XIcon v-else 
                       class="h-5 w-5 text-gray-300 mx-auto" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
```

### Mobile-First Navigation
```vue
<template>
  <header class="relative bg-white shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-gray-200 lg:border-none">
        <div class="flex items-center">
          <a href="/">
            <span class="sr-only">SchoolVision.AI</span>
            <img class="h-10 w-auto" src="/logo.svg" alt="SchoolVision.AI">
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <a v-for="link in navigation" :key="link.name" 
               :href="link.href" 
               class="text-base font-medium text-gray-700 hover:text-sv-blue-600 
                      transition-colors relative group">
              {{ link.name }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-sv-blue-600 
                           group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
        <div class="ml-10 space-x-4 flex items-center">
          <a href="/login" 
             class="inline-block bg-white py-2 px-4 border border-gray-300 rounded-md 
                    text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Sign in
          </a>
          <a href="/demo" 
             class="inline-block bg-sv-blue-600 py-2 px-4 border border-transparent 
                    rounded-md text-base font-medium text-white hover:bg-sv-blue-700 
                    transition-colors">
            Request Demo
          </a>
          <!-- Mobile menu button -->
          <button type="button" 
                  class="lg:hidden inline-flex items-center justify-center p-2 rounded-md 
                         text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  @click="mobileMenuOpen = !mobileMenuOpen">
            <span class="sr-only">Open main menu</span>
            <MenuIcon class="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="mobileMenuOpen" class="absolute top-0 inset-x-0 p-2 transition transform 
                                          origin-top-right lg:hidden z-50">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 
                      divide-gray-50">
            <!-- Mobile menu content -->
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>
```

### Dark Mode Toggle
```vue
<template>
  <button
    @click="toggleDark()"
    class="relative inline-flex h-6 w-11 items-center rounded-full 
           bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none 
           focus:ring-2 focus:ring-sv-blue-500 focus:ring-offset-2"
  >
    <span class="sr-only">Toggle dark mode</span>
    <span
      :class="isDark ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
    >
      <SunIcon v-if="!isDark" class="h-3 w-3 text-yellow-500" />
      <MoonIcon v-else class="h-3 w-3 text-gray-700" />
    </span>
  </button>
</template>
```

This component showcase provides modern, responsive, and enticing UI elements using Tailwind CSS and Tailwind UI patterns specifically designed for SchoolVision.AI.