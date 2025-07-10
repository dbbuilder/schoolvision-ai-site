<template>
  <form @submit.prevent="handleSubmit" :class="formClass">
    <!-- Honeypot field (hidden from users) -->
    <div v-show="false" aria-hidden="true">
      <label :for="honeypotId">
        Please leave this field empty
        <input
          :id="honeypotId"
          v-model="honeypotValue"
          :name="honeypotName"
          type="text"
          tabindex="-1"
          autocomplete="off"
        />
      </label>
    </div>

    <!-- Form content slot -->
    <slot :loading="loading" :error="error" />

    <!-- reCAPTCHA badge notice -->
    <div v-if="showRecaptchaBadge" class="text-xs text-gray-500 mt-4">
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy" class="underline" target="_blank">Privacy Policy</a> and
      <a href="https://policies.google.com/terms" class="underline" target="_blank">Terms of Service</a> apply.
    </div>

    <!-- Error display -->
    <div v-if="error" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
      <p class="text-sm text-red-800">{{ error }}</p>
    </div>

    <!-- Success display -->
    <div v-if="success" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
      <p class="text-sm text-green-800">{{ successMessage }}</p>
    </div>
  </form>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { generateHoneypot, loadRecaptcha } from '../utils/recaptcha'
import { submitForm } from '../utils/formSubmission'

const props = defineProps({
  formType: {
    type: String,
    required: true
  },
  formClass: {
    type: String,
    default: ''
  },
  onSuccess: {
    type: Function,
    default: null
  },
  successMessage: {
    type: String,
    default: 'Thank you! Your form has been submitted successfully.'
  },
  showRecaptchaBadge: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['submit', 'success', 'error'])

// Form state
const loading = ref(false)
const error = ref('')
const success = ref(false)

// Honeypot setup
const honeypot = generateHoneypot()
const honeypotId = ref(honeypot.fieldId)
const honeypotName = ref(honeypot.fieldName)
const honeypotValue = ref('')

// Load reCAPTCHA on mount
onMounted(() => {
  loadRecaptcha().catch(err => {
    console.warn('reCAPTCHA load warning:', err)
  })
})

// Handle form submission
const handleSubmit = async (formData) => {
  // Reset states
  error.value = ''
  success.value = false
  loading.value = true

  try {
    // Add honeypot value to check
    const dataWithSecurity = {
      ...formData,
      type: props.formType,
      honeypot: honeypotValue.value
    }

    // Emit submit event
    emit('submit', dataWithSecurity)

    // Submit form with security
    const result = await submitForm(dataWithSecurity)

    if (result.success) {
      success.value = true
      emit('success', result)
      
      // Call custom success handler if provided
      if (props.onSuccess) {
        props.onSuccess(result)
      }

      // Reset form after success (optional)
      honeypotValue.value = ''
    } else {
      error.value = result.message || 'An error occurred. Please try again.'
      emit('error', result)
    }
  } catch (err) {
    console.error('Form submission error:', err)
    error.value = 'An unexpected error occurred. Please try again later.'
    emit('error', { error: err })
  } finally {
    loading.value = false
  }
}

// Expose handleSubmit for parent components
defineExpose({
  handleSubmit,
  loading,
  error,
  success
})
</script>