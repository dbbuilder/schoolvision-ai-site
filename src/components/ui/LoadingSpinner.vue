<template>
  <div class="flex items-center justify-center" :class="containerClass">
    <div class="relative">
      <div
        class="animate-spin rounded-full border-t-2 border-b-2"
        :class="[sizeClasses, colorClasses]"
      ></div>
      <div
        v-if="showInner"
        class="absolute inset-0 animate-ping rounded-full opacity-75"
        :class="[sizeClasses, bgColorClasses]"
      ></div>
    </div>
    <span v-if="text" class="ml-3" :class="textColorClasses">{{ text }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  color: {
    type: String,
    default: 'primary'
  },
  text: String,
  fullScreen: Boolean,
  showInner: Boolean
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }
  return sizes[props.size]
})

const colorClasses = computed(() => {
  return `border-${props.color}-600`
})

const bgColorClasses = computed(() => {
  return `bg-${props.color}-600`
})

const textColorClasses = computed(() => {
  return `text-${props.color}-600`
})

const containerClass = computed(() => {
  if (props.fullScreen) {
    return 'fixed inset-0 bg-white bg-opacity-75 z-50'
  }
  return ''
})
</script>