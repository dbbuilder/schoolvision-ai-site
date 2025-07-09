<template>
  <Card>
    <template #header>
      <h2 class="text-2xl font-bold text-gray-900">ROI Calculator</h2>
      <p class="mt-1 text-gray-600">See how much you could save with SchoolVision.AI</p>
    </template>
    
    <div class="space-y-6">
      <!-- Input Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Number of Students
          </label>
          <input
            v-model.number="inputs.studentCount"
            type="number"
            min="50"
            max="50000"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            @input="calculateROI"
          />
          <p class="mt-1 text-xs text-gray-500">Total enrolled students</p>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Number of Staff
          </label>
          <input
            v-model.number="inputs.staffCount"
            type="number"
            min="5"
            max="5000"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            @input="calculateROI"
          />
          <p class="mt-1 text-xs text-gray-500">Teachers and administrative staff</p>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Average Staff Hourly Rate
          </label>
          <div class="relative">
            <span class="absolute left-3 top-2 text-gray-500">$</span>
            <input
              v-model.number="inputs.avgHourlyRate"
              type="number"
              min="15"
              max="100"
              step="5"
              class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              @input="calculateROI"
            />
          </div>
          <p class="mt-1 text-xs text-gray-500">Average hourly compensation</p>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Current Attendance Method
          </label>
          <select
            v-model="inputs.attendanceMethod"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            @change="calculateROI"
          >
            <option value="paper">Paper-based</option>
            <option value="basic">Basic Digital</option>
            <option value="partial">Partial Automation</option>
          </select>
          <p class="mt-1 text-xs text-gray-500">Your current system</p>
        </div>
      </div>
      
      <!-- Features Selection -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-3">
          Which features are you interested in?
        </label>
        <div class="space-y-2">
          <label v-for="feature in features" :key="feature.id" class="flex items-center">
            <input
              type="checkbox"
              v-model="inputs.selectedFeatures"
              :value="feature.id"
              class="h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              @change="calculateROI"
            />
            <span class="ml-2 text-gray-700">{{ feature.name }}</span>
          </label>
        </div>
      </div>
      
      <!-- Results Section -->
      <div v-if="results" class="border-t pt-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Your Estimated Annual Savings</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-green-50 rounded-lg p-4 text-center">
            <div class="text-3xl font-bold text-green-600">
              ${{ results.totalSavings.toLocaleString() }}
            </div>
            <div class="text-sm text-gray-600 mt-1">Total Annual Savings</div>
          </div>
          
          <div class="bg-blue-50 rounded-lg p-4 text-center">
            <div class="text-3xl font-bold text-blue-600">
              {{ results.hoursPerWeek }}
            </div>
            <div class="text-sm text-gray-600 mt-1">Hours Saved Per Week</div>
          </div>
          
          <div class="bg-purple-50 rounded-lg p-4 text-center">
            <div class="text-3xl font-bold text-purple-600">
              {{ results.roiMonths }}
            </div>
            <div class="text-sm text-gray-600 mt-1">Months to ROI</div>
          </div>
        </div>
        
        <!-- Breakdown -->
        <div class="space-y-3">
          <h4 class="font-medium text-gray-900">Savings Breakdown:</h4>
          <div v-for="item in results.breakdown" :key="item.category" class="flex justify-between text-sm">
            <span class="text-gray-600">{{ item.category }}</span>
            <span class="font-medium text-gray-900">${{ item.amount.toLocaleString() }}/year</span>
          </div>
        </div>
        
        <!-- CTA -->
        <div class="mt-8 text-center">
          <p class="text-gray-600 mb-4">
            Based on your inputs, SchoolVision.AI could save your institution 
            <strong class="text-green-600">${{ results.totalSavings.toLocaleString() }}</strong> annually.
          </p>
          <router-link to="/demo">
            <Button variant="primary" size="lg">
              Get Your Personalized Demo
            </Button>
          </router-link>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Card, Button } from './ui'

const inputs = reactive({
  studentCount: 1000,
  staffCount: 50,
  avgHourlyRate: 35,
  attendanceMethod: 'paper',
  selectedFeatures: ['attendance', 'grading']
})

const results = ref(null)

const features = [
  { id: 'attendance', name: 'Smart Attendance & Safety', savingsMultiplier: 0.15 },
  { id: 'pos', name: 'Intelligent Point of Sale', savingsMultiplier: 0.10 },
  { id: 'grading', name: 'AI-Powered Grading', savingsMultiplier: 0.20 },
  { id: 'analytics', name: 'Predictive Analytics', savingsMultiplier: 0.12 }
]

const calculateROI = () => {
  // Base calculations
  const annualStaffCost = inputs.staffCount * inputs.avgHourlyRate * 40 * 52 // 40 hours/week, 52 weeks
  
  // Time savings based on attendance method
  const attendanceTimeSavings = {
    paper: 0.10, // 10% time savings
    basic: 0.07,  // 7% time savings
    partial: 0.04 // 4% time savings
  }
  
  // Calculate savings by category
  const breakdown = []
  let totalSavings = 0
  
  // Attendance savings
  if (inputs.selectedFeatures.includes('attendance')) {
    const attendanceSavings = annualStaffCost * attendanceTimeSavings[inputs.attendanceMethod]
    breakdown.push({
      category: 'Attendance Management',
      amount: Math.round(attendanceSavings)
    })
    totalSavings += attendanceSavings
  }
  
  // POS savings (reduced waste, fraud prevention)
  if (inputs.selectedFeatures.includes('pos')) {
    const posSavings = inputs.studentCount * 25 // $25 per student per year in reduced waste/fraud
    breakdown.push({
      category: 'Cafeteria Operations',
      amount: Math.round(posSavings)
    })
    totalSavings += posSavings
  }
  
  // Grading savings
  if (inputs.selectedFeatures.includes('grading')) {
    const gradingSavings = inputs.staffCount * 0.3 * inputs.avgHourlyRate * 5 * 40 // 30% of staff, 5 hours/week saved
    breakdown.push({
      category: 'Grading & Assessment',
      amount: Math.round(gradingSavings)
    })
    totalSavings += gradingSavings
  }
  
  // Analytics savings (better resource allocation)
  if (inputs.selectedFeatures.includes('analytics')) {
    const analyticsSavings = inputs.studentCount * 15 // $15 per student in better resource allocation
    breakdown.push({
      category: 'Resource Optimization',
      amount: Math.round(analyticsSavings)
    })
    totalSavings += analyticsSavings
  }
  
  // Calculate time saved
  const hoursPerWeek = Math.round((totalSavings / annualStaffCost) * inputs.staffCount * 40)
  
  // Calculate ROI period (assuming Professional plan)
  const annualCost = 599 * 12 // Monthly cost * 12
  const roiMonths = Math.ceil((annualCost / totalSavings) * 12)
  
  results.value = {
    totalSavings: Math.round(totalSavings),
    hoursPerWeek,
    roiMonths: roiMonths > 0 ? roiMonths : 1,
    breakdown
  }
}

onMounted(() => {
  calculateROI()
})
</script>