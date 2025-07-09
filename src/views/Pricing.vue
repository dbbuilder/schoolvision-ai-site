<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p class="text-xl text-gray-600">
            Choose the plan that fits your institution's needs. All plans include core features with no hidden fees.
          </p>
        </div>
      </Container>
    </section>

    <!-- Pricing Cards -->
    <section class="py-16">
      <Container>
        <!-- Plan Toggle -->
        <div class="flex justify-center mb-12">
          <div class="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              @click="billingPeriod = 'monthly'"
              :class="[
                'px-6 py-2 rounded-md text-sm font-medium transition-all duration-200',
                billingPeriod === 'monthly' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              ]"
            >
              Monthly
            </button>
            <button
              @click="billingPeriod = 'annual'"
              :class="[
                'px-6 py-2 rounded-md text-sm font-medium transition-all duration-200',
                billingPeriod === 'annual' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              ]"
            >
              Annual
              <span class="ml-1 text-green-600 text-xs">Save 20%</span>
            </button>
          </div>
        </div>

        <!-- Pricing Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <PricingCard
            v-for="(plan, index) in pricingPlans"
            :key="plan.name"
            :plan="getPlanWithPricing(plan)"
            :featured="index === 1"
            @select-plan="handleSelectPlan"
          />
        </div>

        <!-- Enterprise CTA -->
        <div class="mt-16 text-center">
          <Card class="max-w-3xl mx-auto">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Need a Custom Solution?</h3>
              <p class="text-gray-600 mb-6">
                For large districts or institutions with special requirements, we offer custom enterprise plans.
              </p>
              <router-link to="/contact">
                <Button variant="primary" size="lg">
                  Contact Sales
                </Button>
              </router-link>
            </div>
          </Card>
        </div>
        
        <!-- ROI Calculator CTA -->
        <div class="mt-8 text-center">
          <p class="text-gray-600 mb-4">Want to see your potential savings?</p>
          <router-link to="/roi-calculator">
            <Button variant="outline" size="md">
              Try Our ROI Calculator
            </Button>
          </router-link>
        </div>
      </Container>
    </section>

    <!-- Features Comparison -->
    <section class="py-16 bg-gray-50">
      <Container>
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          Compare Plans
        </h2>
        
        <div class="overflow-x-auto">
          <table class="w-full max-w-4xl mx-auto">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-4 px-6 text-gray-700 font-medium">Features</th>
                <th class="text-center py-4 px-6 text-gray-700 font-medium">Starter</th>
                <th class="text-center py-4 px-6 text-gray-700 font-medium">Professional</th>
                <th class="text-center py-4 px-6 text-gray-700 font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="feature in featureComparison" :key="feature.name" class="border-b border-gray-100">
                <td class="py-4 px-6 text-gray-700">{{ feature.name }}</td>
                <td class="text-center py-4 px-6">
                  <CheckIcon v-if="feature.starter" />
                  <span v-else class="text-gray-400">-</span>
                </td>
                <td class="text-center py-4 px-6">
                  <CheckIcon v-if="feature.professional" />
                  <span v-else class="text-gray-400">-</span>
                </td>
                <td class="text-center py-4 px-6">
                  <CheckIcon v-if="feature.enterprise" />
                  <span v-else class="text-gray-400">-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>

    <!-- FAQ Section -->
    <section class="py-16">
      <Container>
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div class="space-y-6">
            <div v-for="faq in faqs" :key="faq.question">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ faq.question }}</h3>
              <p class="text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary-700 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p class="text-xl mb-8 text-primary-100">
            Join hundreds of schools already using SchoolVision.AI
          </p>
          <router-link to="/demo">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
          </router-link>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Container, Card, Button } from '../components/ui'
import PricingCard from '../components/PricingCard.vue'

const router = useRouter()
const billingPeriod = ref('monthly')

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small schools getting started with AI',
    monthlyPrice: 299,
    annualPrice: 239,
    billing: 'per school per month',
    cta: 'Start Free Trial',
    features: [
      'Up to 500 students',
      'Smart Attendance',
      'Basic Reporting',
      'Email Support',
      'Mobile App Access',
      '99.9% Uptime SLA'
    ]
  },
  {
    name: 'Professional',
    description: 'Complete solution for growing institutions',
    monthlyPrice: 599,
    annualPrice: 479,
    billing: 'per school per month',
    cta: 'Start Free Trial',
    features: [
      'Up to 2,000 students',
      'All Starter features',
      'AI-Powered Grading',
      'Intelligent POS',
      'Advanced Analytics',
      'Priority Support',
      'API Access',
      'Custom Integrations'
    ]
  },
  {
    name: 'Enterprise',
    description: 'Tailored solutions for large districts',
    monthlyPrice: null,
    annualPrice: null,
    billing: 'Custom pricing',
    cta: 'Contact Sales',
    features: [
      'Unlimited students',
      'All Professional features',
      'Predictive Analytics',
      'Custom AI Models',
      'Dedicated Success Manager',
      'On-premise deployment option',
      'Advanced Security Features',
      'Custom Training'
    ]
  }
]

const featureComparison = [
  { name: 'Smart Attendance & Safety', starter: true, professional: true, enterprise: true },
  { name: 'Basic Reporting', starter: true, professional: true, enterprise: true },
  { name: 'Mobile App Access', starter: true, professional: true, enterprise: true },
  { name: 'AI-Powered Grading', starter: false, professional: true, enterprise: true },
  { name: 'Intelligent POS', starter: false, professional: true, enterprise: true },
  { name: 'Predictive Analytics', starter: false, professional: false, enterprise: true },
  { name: 'Custom AI Models', starter: false, professional: false, enterprise: true },
  { name: 'API Access', starter: false, professional: true, enterprise: true },
  { name: 'Dedicated Success Manager', starter: false, professional: false, enterprise: true },
]

const faqs = [
  {
    question: 'Can I change plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees. We provide free onboarding and training for all plans to ensure a smooth implementation.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, ACH transfers, and purchase orders for annual plans. Enterprise customers can also pay by invoice.'
  },
  {
    question: 'Do you offer discounts for multiple schools?',
    answer: 'Yes! We offer volume discounts for districts with multiple schools. Contact our sales team for custom pricing.'
  },
  {
    question: 'What kind of support is included?',
    answer: 'All plans include email support. Professional plans get priority support with faster response times, and Enterprise plans include a dedicated success manager.'
  }
]

const getPlanWithPricing = (plan) => {
  const isAnnual = billingPeriod.value === 'annual'
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
  return {
    ...plan,
    price: price || 'Custom'
  }
}

const handleSelectPlan = (plan) => {
  if (plan.name === 'Enterprise') {
    router.push('/contact')
  } else {
    router.push('/demo')
  }
}

// Check icon component
const CheckIcon = {
  template: `
    <svg class="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>
  `
}
</script>