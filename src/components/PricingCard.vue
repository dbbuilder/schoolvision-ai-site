<template>
  <Card
    :class="[
      'h-full transition-all duration-300',
      featured ? 'ring-2 ring-primary-500 shadow-xl scale-105' : 'hover:shadow-lg'
    ]"
  >
    <div class="p-6">
      <!-- Plan Name -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-gray-900">{{ plan.name }}</h3>
        <p class="mt-2 text-gray-600">{{ plan.description }}</p>
        <div v-if="featured" class="mt-2">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            Most Popular
          </span>
        </div>
      </div>

      <!-- Pricing -->
      <div class="mt-6 text-center">
        <div class="flex items-baseline justify-center">
          <span class="text-5xl font-extrabold text-gray-900">${{ plan.price }}</span>
          <span class="ml-1 text-xl text-gray-500">/month</span>
        </div>
        <p class="mt-1 text-sm text-gray-500">{{ plan.billing }}</p>
      </div>

      <!-- Features -->
      <ul class="mt-8 space-y-4">
        <li v-for="feature in plan.features" :key="feature" class="flex items-start">
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="ml-3 text-gray-700">{{ feature }}</span>
        </li>
      </ul>

      <!-- CTA Button -->
      <div class="mt-8">
        <Button
          :variant="featured ? 'primary' : 'outline'"
          size="lg"
          class="w-full"
          @click="$emit('select-plan', plan)"
        >
          {{ plan.cta || 'Get Started' }}
        </Button>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { Card, Button } from './ui'

defineProps({
  plan: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.name && value.price !== undefined && value.features && Array.isArray(value.features)
    }
  },
  featured: {
    type: Boolean,
    default: false
  }
})

defineEmits(['select-plan'])
</script>