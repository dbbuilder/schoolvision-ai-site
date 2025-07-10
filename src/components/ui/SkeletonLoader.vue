<template>
  <div :class="['skeleton', className]" :style="customStyle">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'title', 'paragraph', 'avatar', 'image', 'button', 'card'].includes(value)
  },
  width: {
    type: String,
    default: 'auto'
  },
  height: {
    type: String,
    default: 'auto'
  },
  className: {
    type: String,
    default: ''
  }
})

const customStyle = computed(() => {
  const baseStyles = {
    width: props.width,
    height: props.height
  }

  // Preset styles for common types
  const typeStyles = {
    text: { height: '1rem', borderRadius: '0.25rem' },
    title: { height: '2rem', borderRadius: '0.25rem' },
    paragraph: { height: '4rem', borderRadius: '0.25rem' },
    avatar: { width: '3rem', height: '3rem', borderRadius: '9999px' },
    image: { width: '100%', aspectRatio: '16/9', borderRadius: '0.5rem' },
    button: { width: '6rem', height: '2.5rem', borderRadius: '0.375rem' },
    card: { width: '100%', height: '10rem', borderRadius: '0.5rem' }
  }

  return {
    ...typeStyles[props.type] || {},
    ...baseStyles,
    ...(props.width !== 'auto' ? { width: props.width } : {}),
    ...(props.height !== 'auto' ? { height: props.height } : {})
  }
})
</script>