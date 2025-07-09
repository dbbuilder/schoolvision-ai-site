<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="modelValue" class="fixed inset-0 z-50 overflow-y-auto">
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 bg-black bg-opacity-50"
          @click="$emit('update:modelValue', false)"
        ></div>
        
        <!-- Modal -->
        <div class="flex min-h-screen items-center justify-center p-4">
          <Transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div 
              v-if="modelValue"
              class="relative w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <!-- Header -->
              <div class="bg-primary-600 text-white px-6 py-4 flex items-center justify-between">
                <h2 class="text-xl font-bold">{{ title || 'Quick ROI Calculator' }}</h2>
                <button
                  @click="$emit('update:modelValue', false)"
                  class="text-white hover:text-primary-200"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <!-- Content -->
              <div class="p-6">
                <div v-if="simplified" class="space-y-4">
                  <!-- Simplified Calculator -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Number of Students
                    </label>
                    <input
                      v-model.number="simpleData.studentCount"
                      type="number"
                      min="50"
                      max="50000"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      @input="calculateSimpleROI"
                    >
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Number of Staff
                    </label>
                    <input
                      v-model.number="simpleData.staffCount"
                      type="number"
                      min="5"
                      max="5000"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      @input="calculateSimpleROI"
                    >
                  </div>
                  
                  <!-- Quick Results -->
                  <div v-if="simpleResults" class="mt-6 p-4 bg-green-50 rounded-lg">
                    <h3 class="font-semibold text-gray-900 mb-2">Estimated Annual Savings</h3>
                    <div class="text-3xl font-bold text-green-600 mb-2">
                      ${{ simpleResults.totalSavings.toLocaleString() }}
                    </div>
                    <div class="text-sm text-gray-600">
                      ROI in approximately {{ simpleResults.roiMonths }} months
                    </div>
                  </div>
                  
                  <!-- CTA Buttons -->
                  <div class="flex gap-4 mt-6">
                    <router-link to="/roi-calculator" class="flex-1">
                      <Button 
                        variant="outline" 
                        class="w-full"
                        @click="$emit('update:modelValue', false)"
                      >
                        Full Calculator
                      </Button>
                    </router-link>
                    <router-link to="/demo" class="flex-1">
                      <Button 
                        variant="primary" 
                        class="w-full"
                        @click="$emit('update:modelValue', false)"
                      >
                        Get Demo
                      </Button>
                    </router-link>
                  </div>
                </div>
                
                <div v-else>
                  <!-- Full ROI Calculator Component -->
                  <ROICalculator embedded />
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { Button } from './ui'
import ROICalculator from './ROICalculator.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Quick ROI Calculator'
  },
  simplified: {
    type: Boolean,
    default: true
  },
  initialStudentCount: {
    type: Number,
    default: 1000
  },
  initialStaffCount: {
    type: Number,
    default: 50
  }
})

const emit = defineEmits(['update:modelValue'])

// Simplified calculator data
const simpleData = reactive({
  studentCount: props.initialStudentCount,
  staffCount: props.initialStaffCount
})

const simpleResults = ref(null)

// Calculate simple ROI
const calculateSimpleROI = () => {
  const avgHourlyRate = 35
  const yearlyStaffCost = simpleData.staffCount * avgHourlyRate * 40 * 52
  
  // Basic calculations
  const attendanceSavings = yearlyStaffCost * 0.1
  const gradingSavings = simpleData.staffCount * 0.3 * avgHourlyRate * 5 * 40
  const cafeteriaSavings = simpleData.studentCount * 25
  const analyticsSavings = simpleData.studentCount * 15
  
  const totalSavings = Math.round(
    attendanceSavings + gradingSavings + cafeteriaSavings + analyticsSavings
  )
  
  const annualCost = 599 * 12
  const roiMonths = Math.ceil(annualCost / totalSavings * 12)
  
  simpleResults.value = {
    totalSavings,
    roiMonths: roiMonths > 0 ? roiMonths : 1
  }
}

// Calculate on mount
calculateSimpleROI()

// Handle escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && props.modelValue) {
    emit('update:modelValue', false)
  }
}

// Add/remove event listener
watch(() => props.modelValue, (newVal) => {
  if (newVal) {
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  }
})
</script>