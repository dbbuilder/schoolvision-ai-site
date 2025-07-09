<template>
  <Card>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          id="firstName"
          v-model="form.firstName"
          label="First Name"
          placeholder="John"
          required
          :error="errors.firstName"
          @blur="validateField('firstName')"
        />
        
        <Input
          id="lastName"
          v-model="form.lastName"
          label="Last Name"
          placeholder="Doe"
          required
          :error="errors.lastName"
          @blur="validateField('lastName')"
        />
      </div>
      
      <Input
        id="email"
        v-model="form.email"
        type="email"
        label="Email"
        placeholder="john.doe@school.edu"
        required
        :error="errors.email"
        @blur="validateField('email')"
      />
      
      <Input
        id="phone"
        v-model="form.phone"
        type="tel"
        label="Phone Number"
        placeholder="(555) 123-4567"
        :error="errors.phone"
        @blur="validateField('phone')"
      />
      
      <Input
        id="organization"
        v-model="form.organization"
        label="School/Organization"
        placeholder="Springfield High School"
        required
        :error="errors.organization"
        @blur="validateField('organization')"
      />
      
      <Select
        id="role"
        v-model="form.role"
        label="Your Role"
        placeholder="Select your role"
        :options="roleOptions"
        required
        :error="errors.role"
      />
      
      <Select
        id="organizationType"
        v-model="form.organizationType"
        label="Organization Type"
        placeholder="Select organization type"
        :options="orgTypeOptions"
        required
        :error="errors.organizationType"
      />
      
      <Textarea
        id="message"
        v-model="form.message"
        label="Message"
        placeholder="Tell us about your needs..."
        :rows="4"
        required
        :error="errors.message"
        @blur="validateField('message')"
      />
      
      <div class="flex items-center justify-between">
        <div class="flex-1 mr-4">
          <p v-if="submitError" class="text-sm text-red-600">
            {{ submitError }}
            <br>
            <a :href="fallbackMailto" class="underline hover:text-red-700 mt-1 inline-block">
              Send via email instead
            </a>
          </p>
          <p v-else-if="submitSuccess" class="text-sm text-green-600">
            {{ submitSuccess }}
          </p>
        </div>
        <div>
          <Button
            type="submit"
            :disabled="isSubmitting || !isFormValid"
            variant="primary"
            size="lg"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </Button>
        </div>
      </div>
    </form>
  </Card>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { Card, Input, Textarea, Select, Button } from './ui'
import { submitForm, getMailtoLink } from '../utils/formSubmission'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  organization: '',
  role: '',
  organizationType: '',
  message: ''
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  organization: '',
  role: '',
  organizationType: '',
  message: ''
})

const isSubmitting = ref(false)
const submitError = ref('')
const submitSuccess = ref('')

const fallbackMailto = computed(() => {
  const formData = {
    type: 'Contact',
    name: `${form.firstName} ${form.lastName}`,
    email: form.email,
    phone: form.phone,
    company: form.organization,
    message: `Role: ${form.role}
Organization Type: ${form.organizationType}

${form.message}`
  }
  return getMailtoLink(formData)
})

const roleOptions = [
  { value: 'administrator', label: 'Administrator' },
  { value: 'principal', label: 'Principal' },
  { value: 'it-director', label: 'IT Director' },
  { value: 'teacher', label: 'Teacher' },
  { value: 'superintendent', label: 'Superintendent' },
  { value: 'other', label: 'Other' }
]

const orgTypeOptions = [
  { value: 'k12-public', label: 'K-12 Public School' },
  { value: 'k12-private', label: 'K-12 Private School' },
  { value: 'higher-ed', label: 'Higher Education' },
  { value: 'vocational', label: 'Vocational/Technical School' },
  { value: 'district', label: 'School District' },
  { value: 'other', label: 'Other' }
]

const isFormValid = computed(() => {
  return Object.values(errors).every(error => !error) &&
    form.firstName &&
    form.lastName &&
    form.email &&
    form.organization &&
    form.role &&
    form.organizationType &&
    form.message
})

const validateField = (field) => {
  errors[field] = ''
  
  switch (field) {
    case 'firstName':
    case 'lastName':
      if (!form[field]) {
        errors[field] = 'This field is required'
      } else if (form[field].length < 2) {
        errors[field] = 'Must be at least 2 characters'
      }
      break
      
    case 'email':
      if (!form.email) {
        errors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Please enter a valid email'
      }
      break
      
    case 'phone':
      if (form.phone && !/^[\d\s\-\(\)\+]+$/.test(form.phone)) {
        errors.phone = 'Please enter a valid phone number'
      }
      break
      
    case 'organization':
      if (!form.organization) {
        errors.organization = 'Organization is required'
      }
      break
      
    case 'message':
      if (!form.message) {
        errors.message = 'Message is required'
      } else if (form.message.length < 10) {
        errors.message = 'Message must be at least 10 characters'
      }
      break
  }
}

const handleSubmit = async () => {
  // Validate all fields
  Object.keys(form).forEach(field => {
    if (errors[field] !== undefined) {
      validateField(field)
    }
  })
  
  if (!isFormValid.value) {
    return
  }
  
  isSubmitting.value = true
  submitError.value = ''
  submitSuccess.value = ''
  
  try {
    const formData = {
      type: 'contact',
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      company: form.organization,
      role: form.role,
      organizationType: form.organizationType,
      message: form.message
    }
    
    const result = await submitForm(formData)
    
    if (result.success) {
      submitSuccess.value = 'Thank you for your message! We\'ll get back to you within 24 hours.'
      
      // Reset form
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
    } else {
      submitError.value = result.message
    }
  } catch (error) {
    submitError.value = 'Sorry, there was an error sending your message. Please try again or contact us at admin@schoolvision.ai'
  } finally {
    isSubmitting.value = false
  }
}
</script>