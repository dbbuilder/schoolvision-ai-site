<template>
  <Card class="h-full">
    <div class="flex flex-col h-full">
      <!-- Quote -->
      <div class="flex-grow">
        <svg class="w-8 h-8 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p class="text-gray-700 italic text-lg leading-relaxed">
          {{ testimonial.quote }}
        </p>
      </div>
      
      <!-- Author -->
      <div class="mt-6 pt-6 border-t border-gray-100">
        <div class="flex items-center">
          <div v-if="testimonial.avatar" class="flex-shrink-0 mr-4">
            <img 
              :src="testimonial.avatar" 
              :alt="testimonial.author"
              class="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div v-else class="flex-shrink-0 mr-4">
            <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
              <span class="text-primary-600 font-semibold text-lg">
                {{ getInitials(testimonial.author) }}
              </span>
            </div>
          </div>
          <div>
            <div class="font-semibold text-gray-900">{{ testimonial.author }}</div>
            <div class="text-sm text-gray-600">{{ testimonial.role }}</div>
            <div class="text-sm text-gray-500">{{ testimonial.organization }}</div>
          </div>
        </div>
      </div>
      
      <!-- Rating -->
      <div v-if="testimonial.rating" class="mt-4 flex">
        <svg
          v-for="i in 5"
          :key="i"
          :class="[
            'w-5 h-5',
            i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
          ]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { Card } from './ui'

const props = defineProps({
  testimonial: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.quote && value.author && value.role && value.organization
    }
  }
})

const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}
</script>