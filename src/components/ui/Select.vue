<template>
  <div>
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <select
      :id="id"
      :value="modelValue"
      :required="required"
      :disabled="disabled"
      :class="selectClasses"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
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
  modelValue: [String, Number],
  options: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(option => 
        typeof option === 'object' && 
        'value' in option && 
        'label' in option
      )
    }
  },
  required: Boolean,
  disabled: Boolean,
  error: String,
  hint: String
})

const selectClasses = computed(() => {
  const base = 'block w-full rounded-md shadow-sm sm:text-sm transition-colors duration-200'
  const normal = 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
  const errorStyle = 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500'
  const disabled = 'bg-gray-50 text-gray-500 cursor-not-allowed'
  
  return [
    base,
    props.error ? errorStyle : normal,
    props.disabled ? disabled : ''
  ].join(' ')
})

defineEmits(['update:modelValue'])
</script>