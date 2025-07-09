<template>
  <div>
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="relative">
      <textarea
        :id="id"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :rows="rows"
        :class="textareaClasses"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('blur', $event)"
      />
    </div>
    <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
    <p v-else-if="hint" class="mt-1 text-sm text-gray-500">{{ hint }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: String,
  placeholder: String,
  modelValue: String,
  required: Boolean,
  disabled: Boolean,
  error: String,
  hint: String,
  rows: {
    type: Number,
    default: 4
  }
})

const textareaClasses = computed(() => {
  const base = 'block w-full rounded-md shadow-sm sm:text-sm transition-colors duration-200'
  const normal = 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
  const errorStyle = 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
  const disabled = 'bg-gray-50 text-gray-500 cursor-not-allowed'
  
  return [
    base,
    props.error ? errorStyle : normal,
    props.disabled ? disabled : ''
  ].join(' ')
})

defineEmits(['update:modelValue', 'blur'])
</script>