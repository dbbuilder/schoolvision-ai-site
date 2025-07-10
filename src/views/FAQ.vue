<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <Container>
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            Everything you need to know about SchoolVision.AI. Can't find what you're looking for? 
            <router-link to="/contact" class="underline hover:text-white">Contact our team</router-link>.
          </p>
          <div class="max-w-md mx-auto">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search FAQs..."
                class="w-full px-4 py-3 pl-12 text-gray-900 bg-white rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              >
              <svg class="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- FAQ Categories -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="activeCategory = category.id"
              :class="[
                'p-4 rounded-lg text-center transition-all',
                activeCategory === category.id 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:shadow-md'
              ]"
            >
              <div class="mb-2">
                <svg v-if="category.icon === 'general'" class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-else-if="category.icon === 'technical'" class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <svg v-else-if="category.icon === 'pricing'" class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-else-if="category.icon === 'security'" class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="font-semibold">{{ category.name }}</h3>
              <p class="text-sm mt-1" :class="activeCategory === category.id ? 'text-primary-100' : 'text-gray-500'">
                {{ category.count }} questions
              </p>
            </button>
          </div>
        </div>
      </Container>
    </section>

    <!-- FAQ Items -->
    <section class="py-16">
      <Container>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-4">
            <div
              v-for="faq in filteredFAQs"
              :key="faq.id"
              class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                @click="toggleFAQ(faq.id)"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 class="text-lg font-semibold text-gray-900 pr-4">
                  {{ faq.question }}
                </h3>
                <svg 
                  class="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200"
                  :class="{ 'rotate-180': openFAQs.includes(faq.id) }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Transition
                enter-active-class="transition-all duration-200 ease-out"
                enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-96 opacity-100"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="max-h-96 opacity-100"
                leave-to-class="max-h-0 opacity-0"
              >
                <div v-if="openFAQs.includes(faq.id)" class="px-6 pb-4">
                  <div class="prose prose-sm max-w-none text-gray-600" v-html="faq.answer"></div>
                  <div v-if="faq.relatedLinks" class="mt-4 pt-4 border-t border-gray-100">
                    <p class="text-sm font-medium text-gray-700 mb-2">Related Resources:</p>
                    <div class="flex flex-wrap gap-2">
                      <router-link
                        v-for="link in faq.relatedLinks"
                        :key="link.to"
                        :to="link.to"
                        class="text-sm text-primary-600 hover:text-primary-700"
                      >
                        {{ link.text }} →
                      </router-link>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>

          <!-- No Results -->
          <div v-if="filteredFAQs.length === 0" class="text-center py-12">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">No questions found</h3>
            <p class="mt-1 text-sm text-gray-500">Try searching for something else or select a different category</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Still Have Questions CTA -->
    <section class="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Still have questions?
          </h2>
          <p class="text-xl text-primary-100 mb-8">
            Our team is here to help. Get personalized answers from our education technology experts.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Support
              </Button>
            </router-link>
            <router-link to="/demo">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                Schedule a Demo
              </Button>
            </router-link>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Container, Button } from '../components/ui'

// State
const searchQuery = ref('')
const activeCategory = ref('general')
const openFAQs = ref([])

// Categories
const categories = [
  { id: 'general', name: 'General', icon: 'general', count: 8 },
  { id: 'technical', name: 'Technical', icon: 'technical', count: 7 },
  { id: 'pricing', name: 'Pricing', icon: 'pricing', count: 6 },
  { id: 'security', name: 'Security', icon: 'security', count: 5 }
]

// FAQ Data
const faqs = [
  // General Questions
  {
    id: 1,
    category: 'general',
    question: 'What is SchoolVision.AI and how does it work?',
    answer: `<p>SchoolVision.AI is a complete campus intelligence platform that unifies all your educational data into one powerful system. We integrate with your existing SIS, then add layers of operational intelligence including attendance tracking, cafeteria management, facilities scheduling, and safety monitoring.</p>
    <p>Our AI analyzes patterns across all these data sources to provide predictive insights, automate routine tasks, and help administrators make data-driven decisions that improve student outcomes.</p>`,
    relatedLinks: [
      { text: 'View Solutions', to: '/solutions' },
      { text: 'Request Demo', to: '/demo' }
    ]
  },
  {
    id: 2,
    category: 'general',
    question: 'Which types of educational institutions do you serve?',
    answer: `<p>SchoolVision.AI serves three main educational markets:</p>
    <ul>
      <li><strong>K-12 Schools:</strong> Public and private schools, charter schools, and school districts</li>
      <li><strong>Higher Education:</strong> Community colleges, universities, and technical colleges</li>
      <li><strong>Vocational Schools:</strong> Trade schools, career centers, and workforce development programs</li>
    </ul>
    <p>Our platform adapts to each institution's unique needs, from elementary schools tracking parent pickups to universities managing complex residence halls.</p>`,
    relatedLinks: [
      { text: 'K-12 Solutions', to: '/markets/k12' },
      { text: 'Higher Ed Solutions', to: '/markets/higher-ed' },
      { text: 'Vocational Solutions', to: '/markets/vocational' }
    ]
  },
  {
    id: 3,
    category: 'general',
    question: 'How long does implementation take?',
    answer: `<p>Most institutions are fully operational within 60-90 days. Our implementation process includes:</p>
    <ul>
      <li><strong>Week 1-2:</strong> Data migration and system setup</li>
      <li><strong>Week 3-4:</strong> Staff training and configuration</li>
      <li><strong>Week 5-8:</strong> Pilot testing with select departments</li>
      <li><strong>Week 9-12:</strong> Full rollout and optimization</li>
    </ul>
    <p>We provide dedicated support throughout the process to ensure a smooth transition.</p>`
  },
  {
    id: 4,
    category: 'general',
    question: 'Do you integrate with our existing Student Information System (SIS)?',
    answer: `<p>Yes! SchoolVision.AI integrates with all major SIS platforms including:</p>
    <ul>
      <li>PowerSchool</li>
      <li>Infinite Campus</li>
      <li>Skyward</li>
      <li>Blackbaud</li>
      <li>Canvas</li>
      <li>Banner</li>
      <li>Colleague</li>
      <li>Custom and proprietary systems</li>
    </ul>
    <p>Our philosophy is "Where your SIS ends, we begin." We complement your existing systems rather than replacing them.</p>`
  },
  {
    id: 5,
    category: 'general',
    question: 'What kind of support do you provide?',
    answer: `<p>SchoolVision.AI provides comprehensive support including:</p>
    <ul>
      <li><strong>24/7 Technical Support:</strong> Phone, email, and chat support for critical issues</li>
      <li><strong>Dedicated Success Manager:</strong> Your personal guide for optimization and best practices</li>
      <li><strong>Training Resources:</strong> Video tutorials, documentation, and live webinars</li>
      <li><strong>Community Forum:</strong> Connect with other schools using SchoolVision.AI</li>
    </ul>
    <p>We measure our success by your success - our team is always here to help.</p>`
  },
  {
    id: 6,
    category: 'general',
    question: 'Can we start with just one module and expand later?',
    answer: `<p>Absolutely! Many schools start with a single module like attendance tracking or cafeteria management, then expand as they see results. Our modular approach lets you:</p>
    <ul>
      <li>Start small and prove ROI</li>
      <li>Add modules at your own pace</li>
      <li>Pay only for what you use</li>
      <li>Scale up or down as needs change</li>
    </ul>
    <p>The platform is designed to grow with you.</p>`,
    relatedLinks: [
      { text: 'View Pricing', to: '/pricing' },
      { text: 'ROI Calculator', to: '/roi-calculator' }
    ]
  },
  {
    id: 7,
    category: 'general',
    question: 'What makes SchoolVision.AI different from other EdTech solutions?',
    answer: `<p>Three things set us apart:</p>
    <ol>
      <li><strong>Complete Campus Intelligence:</strong> We're the only platform that combines academic data with operational intelligence</li>
      <li><strong>20+ Years of Experience:</strong> Built by educators, for educators, with proven results at 500+ campuses</li>
      <li><strong>AI That Actually Works:</strong> Our AI provides actionable insights, not just dashboards</li>
    </ol>
    <p>We don't just give you data - we help you act on it.</p>`
  },
  {
    id: 8,
    category: 'general',
    question: 'Do you offer pilot programs?',
    answer: `<p>Yes! We offer 30-day pilot programs for qualified institutions. During the pilot you can:</p>
    <ul>
      <li>Test with real data and users</li>
      <li>Measure actual ROI</li>
      <li>Get full implementation support</li>
      <li>Access all features with no limitations</li>
    </ul>
    <p>Contact us to see if your institution qualifies for a pilot program.</p>`,
    relatedLinks: [
      { text: 'Request Pilot', to: '/contact' }
    ]
  },

  // Technical Questions
  {
    id: 9,
    category: 'technical',
    question: 'What are the technical requirements for SchoolVision.AI?',
    answer: `<p>SchoolVision.AI is a cloud-based platform with minimal technical requirements:</p>
    <ul>
      <li><strong>Internet Connection:</strong> Broadband internet (10+ Mbps recommended)</li>
      <li><strong>Web Browser:</strong> Chrome, Firefox, Safari, or Edge (latest versions)</li>
      <li><strong>Mobile Devices:</strong> iOS 12+ or Android 8+ for mobile apps</li>
      <li><strong>No Servers Required:</strong> Everything runs in the cloud</li>
    </ul>
    <p>For API integrations, we support REST APIs and can work with your IT team on custom connections.</p>`
  },
  {
    id: 10,
    category: 'technical',
    question: 'Is SchoolVision.AI accessible on mobile devices?',
    answer: `<p>Yes! SchoolVision.AI offers:</p>
    <ul>
      <li><strong>Responsive Web App:</strong> Works on any device with a web browser</li>
      <li><strong>Native iOS App:</strong> Available on the Apple App Store</li>
      <li><strong>Native Android App:</strong> Available on Google Play</li>
      <li><strong>Offline Mode:</strong> Critical features work without internet connection</li>
    </ul>
    <p>Teachers can take attendance, parents can check grades, and administrators can access reports from anywhere.</p>`
  },
  {
    id: 11,
    category: 'technical',
    question: 'How do you handle data migration from our existing systems?',
    answer: `<p>Our data migration process is comprehensive and secure:</p>
    <ol>
      <li><strong>Discovery:</strong> We map your existing data structure</li>
      <li><strong>Extraction:</strong> Secure export from your current systems</li>
      <li><strong>Transformation:</strong> Data cleaning and formatting</li>
      <li><strong>Validation:</strong> Thorough testing with your team</li>
      <li><strong>Migration:</strong> Phased import with rollback capability</li>
    </ol>
    <p>We handle the entire process and guarantee no data loss.</p>`
  },
  {
    id: 12,
    category: 'technical',
    question: 'Can we customize SchoolVision.AI for our specific needs?',
    answer: `<p>Yes! SchoolVision.AI is highly customizable:</p>
    <ul>
      <li><strong>Custom Fields:</strong> Add institution-specific data fields</li>
      <li><strong>Workflows:</strong> Design approval processes that match your policies</li>
      <li><strong>Reports:</strong> Create custom reports and dashboards</li>
      <li><strong>Integrations:</strong> Connect to your specialized systems</li>
      <li><strong>Branding:</strong> Add your logo and colors</li>
    </ul>
    <p>Our platform adapts to you, not the other way around.</p>`
  },
  {
    id: 13,
    category: 'technical',
    question: 'What about API access for custom integrations?',
    answer: `<p>SchoolVision.AI provides comprehensive API access:</p>
    <ul>
      <li><strong>RESTful APIs:</strong> Standard JSON-based APIs</li>
      <li><strong>Webhooks:</strong> Real-time event notifications</li>
      <li><strong>OAuth 2.0:</strong> Secure authentication</li>
      <li><strong>Rate Limiting:</strong> Fair usage policies</li>
      <li><strong>Documentation:</strong> Complete API reference with examples</li>
    </ul>
    <p>Build custom integrations, mobile apps, or connect to third-party services.</p>`
  },
  {
    id: 14,
    category: 'technical',
    question: 'How often do you release updates?',
    answer: `<p>We continuously improve SchoolVision.AI:</p>
    <ul>
      <li><strong>Weekly:</strong> Bug fixes and minor improvements</li>
      <li><strong>Monthly:</strong> New features and enhancements</li>
      <li><strong>Quarterly:</strong> Major platform updates</li>
      <li><strong>No Downtime:</strong> Updates happen seamlessly in the background</li>
    </ul>
    <p>You always have access to the latest features without any IT effort.</p>`
  },
  {
    id: 15,
    category: 'technical',
    question: 'Do you provide training for our IT staff?',
    answer: `<p>Yes! We offer comprehensive IT training:</p>
    <ul>
      <li><strong>Admin Certification:</strong> 8-hour online course</li>
      <li><strong>API Workshop:</strong> For developers building integrations</li>
      <li><strong>Security Training:</strong> Best practices for data protection</li>
      <li><strong>Ongoing Webinars:</strong> Stay updated on new features</li>
    </ul>
    <p>Your IT team will be fully equipped to manage and extend the platform.</p>`
  },

  // Pricing Questions
  {
    id: 16,
    category: 'pricing',
    question: 'How is SchoolVision.AI priced?',
    answer: `<p>Our pricing is simple and transparent:</p>
    <ul>
      <li><strong>Per-Student Pricing:</strong> Pay only for active students</li>
      <li><strong>All-Inclusive:</strong> No hidden fees or add-on costs</li>
      <li><strong>Volume Discounts:</strong> Better rates for larger institutions</li>
      <li><strong>Annual Contracts:</strong> Predictable budgeting</li>
    </ul>
    <p>Most schools save 30-50% compared to maintaining multiple separate systems.</p>`,
    relatedLinks: [
      { text: 'View Pricing', to: '/pricing' },
      { text: 'Calculate ROI', to: '/roi-calculator' }
    ]
  },
  {
    id: 17,
    category: 'pricing',
    question: 'Are there any setup or implementation fees?',
    answer: `<p>Setup fees depend on your institution size and complexity:</p>
    <ul>
      <li><strong>Standard Implementation:</strong> Included for most schools</li>
      <li><strong>Complex Migrations:</strong> Custom quote based on data volume</li>
      <li><strong>Training:</strong> Basic training included, advanced workshops available</li>
      <li><strong>No Surprises:</strong> All costs disclosed upfront</li>
    </ul>
    <p>We'll provide a complete cost breakdown before you commit.</p>`
  },
  {
    id: 18,
    category: 'pricing',
    question: 'Do you offer discounts for multi-year contracts?',
    answer: `<p>Yes! We reward long-term partnerships:</p>
    <ul>
      <li><strong>2-Year Contract:</strong> 10% discount</li>
      <li><strong>3-Year Contract:</strong> 15% discount</li>
      <li><strong>5-Year Contract:</strong> 20% discount</li>
      <li><strong>Price Lock:</strong> No increases during contract term</li>
    </ul>
    <p>Many institutions use the savings to add additional modules.</p>`
  },
  {
    id: 19,
    category: 'pricing',
    question: 'What happens if our enrollment changes?',
    answer: `<p>Our pricing flexes with your enrollment:</p>
    <ul>
      <li><strong>Monthly Reconciliation:</strong> Pay for actual active students</li>
      <li><strong>No Penalties:</strong> Enrollment decreases don't trigger fees</li>
      <li><strong>Growth Friendly:</strong> Volume discounts apply automatically</li>
      <li><strong>Seasonal Adjustment:</strong> Summer terms calculated separately</li>
    </ul>
    <p>You'll never pay for students who aren't there.</p>`
  },
  {
    id: 20,
    category: 'pricing',
    question: 'Can we get a custom quote for our institution?',
    answer: `<p>Absolutely! We provide custom quotes that include:</p>
    <ul>
      <li>Detailed pricing breakdown</li>
      <li>ROI analysis for your institution</li>
      <li>Implementation timeline</li>
      <li>Reference contacts from similar schools</li>
    </ul>
    <p>Contact our sales team for a personalized quote within 24 hours.</p>`,
    relatedLinks: [
      { text: 'Request Quote', to: '/contact' }
    ]
  },
  {
    id: 21,
    category: 'pricing',
    question: 'Do you offer special pricing for small schools or districts?',
    answer: `<p>Yes! We believe every school deserves great technology:</p>
    <ul>
      <li><strong>Small School Program:</strong> Special rates for under 500 students</li>
      <li><strong>Rural District Discount:</strong> 20% off for qualifying districts</li>
      <li><strong>Consortium Pricing:</strong> Group together for better rates</li>
      <li><strong>Grant Assistance:</strong> We'll help you apply for EdTech grants</li>
    </ul>
    <p>Contact us to discuss options for your budget.</p>`
  },

  // Security Questions
  {
    id: 22,
    category: 'security',
    question: 'How do you ensure student data privacy and FERPA compliance?',
    answer: `<p>Student privacy is our top priority:</p>
    <ul>
      <li><strong>FERPA Certified:</strong> Full compliance with federal regulations</li>
      <li><strong>COPPA Compliant:</strong> Safe for K-12 students under 13</li>
      <li><strong>Data Encryption:</strong> 256-bit encryption at rest and in transit</li>
      <li><strong>Access Controls:</strong> Role-based permissions</li>
      <li><strong>Audit Logs:</strong> Complete tracking of data access</li>
      <li><strong>No Data Selling:</strong> Your data is never sold or shared</li>
    </ul>
    <p>We undergo annual third-party security audits to verify compliance.</p>`,
    relatedLinks: [
      { text: 'Privacy Policy', to: '/privacy' },
      { text: 'FERPA Guide', to: '/library' }
    ]
  },
  {
    id: 23,
    category: 'security',
    question: 'Where is our data stored and who has access?',
    answer: `<p>Your data is protected by enterprise-grade security:</p>
    <ul>
      <li><strong>AWS Cloud:</strong> Stored in SOC 2 certified data centers</li>
      <li><strong>Geographic Control:</strong> Choose US, EU, or regional storage</li>
      <li><strong>Access Limits:</strong> Only authorized personnel with background checks</li>
      <li><strong>Your Data:</strong> You own it and can export it anytime</li>
    </ul>
    <p>We maintain complete transparency about data handling practices.</p>`
  },
  {
    id: 24,
    category: 'security',
    question: 'What happens to our data if we cancel?',
    answer: `<p>You remain in control of your data:</p>
    <ul>
      <li><strong>Data Export:</strong> Full export in standard formats (CSV, JSON)</li>
      <li><strong>60-Day Grace Period:</strong> Access to download after cancellation</li>
      <li><strong>Secure Deletion:</strong> Complete removal after grace period</li>
      <li><strong>Certification:</strong> Written confirmation of data deletion</li>
    </ul>
    <p>We make it easy to leave (though we hope you won't!).</p>`
  },
  {
    id: 25,
    category: 'security',
    question: 'How do you handle security incidents?',
    answer: `<p>We have comprehensive incident response procedures:</p>
    <ul>
      <li><strong>24/7 Monitoring:</strong> Automated threat detection</li>
      <li><strong>Rapid Response:</strong> Security team on-call always</li>
      <li><strong>Notification:</strong> Alert affected institutions within 24 hours</li>
      <li><strong>Transparency:</strong> Full disclosure of any incidents</li>
      <li><strong>Insurance:</strong> $50M cyber liability coverage</li>
    </ul>
    <p>We've maintained a perfect security record for 20+ years.</p>`
  },
  {
    id: 26,
    category: 'security',
    question: 'Do you support Single Sign-On (SSO)?',
    answer: `<p>Yes! We support all major SSO providers:</p>
    <ul>
      <li><strong>Google Workspace:</strong> For schools using Google</li>
      <li><strong>Microsoft Azure AD:</strong> For Office 365 schools</li>
      <li><strong>Clever:</strong> Popular K-12 SSO</li>
      <li><strong>ClassLink:</strong> Another K-12 favorite</li>
      <li><strong>SAML 2.0:</strong> For custom SSO solutions</li>
    </ul>
    <p>Users get secure access with one login they already know.</p>`
  }
]

// Computed
const filteredFAQs = computed(() => {
  let filtered = faqs

  // Filter by category
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(faq => faq.category === activeCategory.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(faq => 
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    )
  }

  return filtered
})

// Methods
const toggleFAQ = (id) => {
  const index = openFAQs.value.indexOf(id)
  if (index > -1) {
    openFAQs.value.splice(index, 1)
  } else {
    openFAQs.value.push(id)
  }
}
</script>

<style scoped>
.prose ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}

.prose ol {
  list-style-type: decimal;
  margin-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose p {
  margin-bottom: 1rem;
}

.prose p:last-child {
  margin-bottom: 0;
}
</style>