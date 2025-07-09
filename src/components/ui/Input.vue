<template>
  <div>
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="relative">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :class="inputClasses"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('blur', $event)"
      />
      <div v-if="error" class="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
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
  type: {
    type: String,
    default: 'text'
  },
  label: String,
  placeholder: String,
  modelValue: [String, Number],
  required: Boolean,
  disabled: Boolean,
  error: String,
  hint: String
})

const inputClasses = computed(() => {
  const base = 'block w-full rounded-md shadow-sm sm:text-sm transition-colors duration-200'
  const normal = 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
  const errorStyle = 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
  const disabled = 'bg-gray-50 text-gray-500 cursor-not-allowed'
  
  return [
    base,
    props.error ? errorStyle : normal,
    props.disabled ? disabled : '',
    props.error ? 'pr-10' : ''
  ].join(' ')
})

defineEmits(['update:modelValue', 'blur'])
</script>