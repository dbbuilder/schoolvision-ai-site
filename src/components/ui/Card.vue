<template>
  <div
    :class="[
      'bg-white rounded-lg border border-gray-100 transition-all duration-300',
      shadowClass,
      hoverClass,
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
  hoverable: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})

const shadowClass = computed(() => {
  const shadows = {
    none: '',
    sm: 'shadow-[0_1px_3px_0_rgb(0_0_0_/_0.1),_0_1px_2px_-1px_rgb(0_0_0_/_0.1)]',
    md: 'shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1),_0_2px_4px_-2px_rgb(0_0_0_/_0.1)]',
    lg: 'shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)]',
    xl: 'shadow-[0_20px_25px_-5px_rgb(0_0_0_/_0.1),_0_8px_10px_-6px_rgb(0_0_0_/_0.1)]'
  }
  return shadows[props.shadow]
})

const hoverClass = computed(() => {
  if (!props.hoverable) return ''
  const hoverShadows = {
    none: 'hover:shadow-sm',
    sm: 'hover:shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1),_0_2px_4px_-2px_rgb(0_0_0_/_0.1)]',
    md: 'hover:shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)]',
    lg: 'hover:shadow-[0_20px_25px_-5px_rgb(0_0_0_/_0.1),_0_8px_10px_-6px_rgb(0_0_0_/_0.1)]',
    xl: 'hover:shadow-[0_25px_30px_-5px_rgb(0_0_0_/_0.1),_0_10px_12px_-6px_rgb(0_0_0_/_0.1)]'
  }
  return hoverShadows[props.shadow] + ' hover:-translate-y-0.5'
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