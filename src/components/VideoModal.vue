<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          @click="close"
        ></div>

        <!-- Modal -->
        <div class="flex min-h-full items-center justify-center p-4">
          <Transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition-all duration-300"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div 
              v-if="isOpen"
              class="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <!-- Close button -->
              <button
                @click="close"
                class="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full p-2 bg-white shadow-lg"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <!-- Video Container -->
              <div class="relative pb-[56.25%] bg-gray-900">
                <iframe
                  v-if="videoId"
                  :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`"
                  class="absolute inset-0 w-full h-full"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div v-else class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-white">
                    <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p class="text-xl">Demo video coming soon!</p>
                    <p class="text-gray-400 mt-2">Check back later for our product demonstration</p>
                  </div>
                </div>
              </div>

              <!-- Video Info -->
              <div class="p-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">
                  {{ title || 'SchoolVision.AI Platform Overview' }}
                </h3>
                <p class="text-gray-600">
                  {{ description || 'See how SchoolVision.AI transforms campus management with AI-powered insights and seamless integrations.' }}
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue'
import { trackVideoPlay } from '../utils/analytics'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  videoId: {
    type: String,
    default: '' // Empty for now, can be updated with actual YouTube video ID
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

// Handle escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && props.isOpen) {
    close()
  }
}

// Lock body scroll when modal is open and track video plays
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
    // Track video play when modal opens
    if (props.title) {
      trackVideoPlay(props.title)
    }
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>