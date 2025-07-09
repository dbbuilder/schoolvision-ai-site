<template>
  <div
    :class="[
      'bg-white rounded-lg border border-gray-200',
      shadowClass,
      paddingClass,
      className
    ]"
  >
    <div v-if="$slots.header" class="border-b border-gray-200 px-6 py-4">
      <slot name="header" />
    </div>
    
    <div :class="contentPaddingClass">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="border-t border-gray-200 px-6 py-4">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  shadow: {
    type: String,
    default: 'sm',
    validator: (value) => ['none', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['none', 'sm', 'md', 'lg'].includes(value)
  },
  className: {
    type: String,
    default: ''
  }
})

const shadowClass = computed(() => {
  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }
  return shadows[props.shadow]
})

const paddingClass = computed(() => {
  return props.padding === 'none' ? '' : ''
})

const contentPaddingClass = computed(() => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  return paddings[props.padding]
})
</script>