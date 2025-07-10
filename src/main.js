import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initAnalytics, trackPageView, resetPageTracking, trackScrollDepth, trackTimeOnPage } from './utils/analytics'

// Initialize Google Analytics
initAnalytics()

// Set up scroll tracking
let scrollTimer = null
window.addEventListener('scroll', () => {
  if (scrollTimer) clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => {
    trackScrollDepth()
  }, 500)
}, { passive: true })

// Track time on page before unload
window.addEventListener('beforeunload', () => {
  trackTimeOnPage()
})

const app = createApp(App)

// Track page views on route change
router.afterEach((to) => {
  trackPageView(to.path, to.meta.title || document.title)
  resetPageTracking()
})

app.use(router)
app.mount('#app')