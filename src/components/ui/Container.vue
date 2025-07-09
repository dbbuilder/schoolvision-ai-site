<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['sm', 'default', 'lg', 'xl', 'full'].includes(value)
  },
  padding: {
    type: Boolean,
    default: true
  }
})

const containerClasses = computed(() => {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-7xl',
    lg: 'max-w-[90rem]',
    xl: 'max-w-[100rem]',
    full: 'max-w-full'
  }
  
  const baseClasses = ['mx-auto']
  
  if (props.padding) {
    baseClasses.push('px-4 sm:px-6 lg:px-8')
  }
  
  baseClasses.push(sizes[props.size])
  
  return baseClasses.join(' ')
})
</script>