<template>
  <Card>
    <template #header>
      <h2 class="text-2xl font-bold text-gray-900">Request Your Personalized Demo</h2>
      <p class="mt-1 text-gray-600">See how SchoolVision.AI can transform your campus</p>
    </template>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Personal Information -->
      <div>
        <h3 class="text-lg font-medium text-gray-900 mb-4">Your Information</h3>
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
          
          <Input
            id="email"
            v-model="form.email"
            type="email"
            label="Work Email"
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
            required
            :error="errors.phone"
            @blur="validateField('phone')"
          />
        </div>
      </div>
      
      <!-- Organization Information -->
      <div>
        <h3 class="text-lg font-medium text-gray-900 mb-4">Organization Details</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Input
            id="organization"
            v-model="form.organization"
            label="School/Organization Name"
            placeholder="Springfield High School"
            required
            :error="errors.organization"
            @blur="validateField('organization')"
          />
          
          <Select
            id="organizationType"
            v-model="form.organizationType"
            label="Organization Type"
            placeholder="Select type"
            :options="orgTypeOptions"
            required
            :error="errors.organizationType"
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
            id="studentCount"
            v-model="form.studentCount"
            label="Number of Students"
            placeholder="Select range"
            :options="studentCountOptions"
            required
            :error="errors.studentCount"
          />
        </div>
      </div>
      
      <!-- Demo Preferences -->
      <div>
        <h3 class="text-lg font-medium text-gray-900 mb-4">Demo Preferences</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Which solutions are you interested in? <span class="text-red-500">*</span>
            </label>
            <div class="space-y-2">
              <label v-for="solution in solutionOptions" :key="solution.value" class="flex items-center">
                <input
                  type="checkbox"
                  :value="solution.value"
                  v-model="form.interestedSolutions"
                  class="h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                />
                <span class="ml-2 text-gray-700">{{ solution.label }}</span>
              </label>
            </div>
            <p v-if="errors.interestedSolutions" class="mt-1 text-sm text-red-600">
              {{ errors.interestedSolutions }}
            </p>
          </div>
          
          <Select
            id="timeline"
            v-model="form.timeline"
            label="Implementation Timeline"
            placeholder="Select timeline"
            :options="timelineOptions"
            required
            :error="errors.timeline"
          />
          
          <Select
            id="preferredTime"
            v-model="form.preferredTime"
            label="Preferred Demo Time"
            placeholder="Select time preference"
            :options="timeOptions"
            hint="We'll work with your schedule"
          />
        </div>
      </div>
      
      <!-- Additional Information -->
      <Textarea
        id="additionalInfo"
        v-model="form.additionalInfo"
        label="Additional Information"
        placeholder="Tell us about your current challenges or specific features you'd like to see..."
        :rows="4"
        hint="Optional - Help us customize your demo"
      />
      
      <!-- Submit -->
      <div class="border-t pt-6">
        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            By submitting, you agree to our 
            <router-link to="/privacy" class="text-primary-600 hover:text-primary-700">Privacy Policy</router-link>
          </p>
          <Button
            type="submit"
            :disabled="isSubmitting || !isFormValid"
            variant="primary"
            size="lg"
          >
            {{ isSubmitting ? 'Submitting...' : 'Request Demo' }}
          </Button>
        </div>
        
        <p v-if="submitError" class="mt-4 text-sm text-red-600">
          {{ submitError }}
          <br>
          <a :href="fallbackMailto" class="underline hover:text-red-700 mt-2 inline-block">
            Click here to send via email instead
          </a>
        </p>
        <div v-else-if="submitSuccess" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
          <p class="text-sm text-green-800">
            <strong>Success!</strong> {{ submitSuccess }}
          </p>
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
  organizationType: '',
  role: '',
  studentCount: '',
  interestedSolutions: [],
  timeline: '',
  preferredTime: '',
  additionalInfo: ''
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  organization: '',
  organizationType: '',
  role: '',
  studentCount: '',
  interestedSolutions: '',
  timeline: ''
})

const isSubmitting = ref(false)
const submitError = ref('')
const submitSuccess = ref('')

const fallbackMailto = computed(() => {
  const formData = {
    type: 'Demo Request',
    name: `${form.firstName} ${form.lastName}`,
    email: form.email,
    phone: form.phone,
    company: form.organization,
    message: `Organization Type: ${form.organizationType}
Role: ${form.role}
Student Count: ${form.studentCount}
Interested Solutions: ${form.interestedSolutions.join(', ')}
Timeline: ${form.timeline}
Preferred Time: ${form.preferredTime || 'Not specified'}

${form.additionalInfo || 'No additional information provided'}`
  }
  return getMailtoLink(formData)
})

const roleOptions = [
  { value: 'superintendent', label: 'Superintendent' },
  { value: 'principal', label: 'Principal' },
  { value: 'assistant-principal', label: 'Assistant Principal' },
  { value: 'it-director', label: 'IT Director' },
  { value: 'cto', label: 'CTO/Technology Director' },
  { value: 'business-manager', label: 'Business Manager' },
  { value: 'dean', label: 'Dean' },
  { value: 'other-admin', label: 'Other Administrator' }
]

const orgTypeOptions = [
  { value: 'k12-public', label: 'K-12 Public School' },
  { value: 'k12-private', label: 'K-12 Private School' },
  { value: 'k12-charter', label: 'K-12 Charter School' },
  { value: 'district', label: 'School District' },
  { value: 'higher-ed-public', label: 'Public University/College' },
  { value: 'higher-ed-private', label: 'Private University/College' },
  { value: 'community-college', label: 'Community College' },
  { value: 'vocational', label: 'Vocational/Technical School' }
]

const studentCountOptions = [
  { value: '0-500', label: 'Under 500 students' },
  { value: '500-1000', label: '500 - 1,000 students' },
  { value: '1000-2500', label: '1,000 - 2,500 students' },
  { value: '2500-5000', label: '2,500 - 5,000 students' },
  { value: '5000-10000', label: '5,000 - 10,000 students' },
  { value: '10000+', label: 'Over 10,000 students' }
]

const solutionOptions = [
  { value: 'attendance', label: 'Smart Attendance & Safety' },
  { value: 'pos', label: 'Intelligent Point of Sale' },
  { value: 'grading', label: 'AI-Powered Grading & Assessment' },
  { value: 'reporting', label: 'Predictive Analytics & Reporting' },
  { value: 'communication', label: 'Parent & Student Communication' },
  { value: 'scheduling', label: 'Smart Scheduling' },
  { value: 'full-suite', label: 'Full SchoolVision.AI Suite' }
]

const timelineOptions = [
  { value: 'immediate', label: 'Immediate (Within 30 days)' },
  { value: '1-3months', label: '1-3 months' },
  { value: '3-6months', label: '3-6 months' },
  { value: '6-12months', label: '6-12 months' },
  { value: 'budgeting', label: 'Budgeting/Planning phase' }
]

const timeOptions = [
  { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
  { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
  { value: 'flexible', label: 'Flexible' }
]

const isFormValid = computed(() => {
  return Object.entries(errors).every(([key, error]) => !error) &&
    form.firstName &&
    form.lastName &&
    form.email &&
    form.phone &&
    form.organization &&
    form.organizationType &&
    form.role &&
    form.studentCount &&
    form.interestedSolutions.length > 0 &&
    form.timeline
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
      if (!form.phone) {
        errors.phone = 'Phone number is required'
      } else if (!/^[\d\s\-\(\)\+]+$/.test(form.phone)) {
        errors.phone = 'Please enter a valid phone number'
      }
      break
      
    case 'organization':
      if (!form.organization) {
        errors.organization = 'Organization is required'
      }
      break
  }
}

const handleSubmit = async () => {
  // Validate all fields
  ['firstName', 'lastName', 'email', 'phone', 'organization'].forEach(field => {
    validateField(field)
  })
  
  // Validate checkboxes
  if (form.interestedSolutions.length === 0) {
    errors.interestedSolutions = 'Please select at least one solution'
  } else {
    errors.interestedSolutions = ''
  }
  
  if (!isFormValid.value) {
    return
  }
  
  isSubmitting.value = true
  submitError.value = ''
  submitSuccess.value = ''
  
  try {
    const formData = {
      type: 'demo',
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      company: form.organization,
      organizationType: form.organizationType,
      role: form.role,
      studentCount: form.studentCount,
      interestedSolutions: form.interestedSolutions,
      timeline: form.timeline,
      preferredTime: form.preferredTime,
      message: form.additionalInfo || 'No additional information provided'
    }
    
    const result = await submitForm(formData)
    
    if (result.success) {
      submitSuccess.value = 'Thank you! We\'ve received your demo request. Our team will contact you within 24 hours to schedule your personalized demo.'
      
      // Reset form
      Object.keys(form).forEach(key => {
        if (key === 'interestedSolutions') {
          form[key] = []
        } else {
          form[key] = ''
        }
      })
    } else {
      submitError.value = result.message || 'Sorry, there was an error submitting your request. Please try again or call us at 801-659-7778.'
    }
  } catch (error) {
    submitError.value = 'Sorry, there was an error submitting your request. Please try again or call us at 801-659-7778.'
  } finally {
    isSubmitting.value = false
  }
}
</script>