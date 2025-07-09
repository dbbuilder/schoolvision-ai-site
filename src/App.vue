<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <h1 class="logo">SchoolVision AI</h1>
        <nav class="nav">
          <a href="#features">Features</a>
          <a href="#markets">Markets</a>
          <a href="#about">About</a>
          <a href="#contact" class="cta-button">Request Demo</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container">
          <h2 class="hero-title">Intelligent Campus Management</h2>
          <p class="hero-subtitle">
            Transform your educational institution with AI-powered solutions. 
            20+ years of experience, now enhanced with cutting-edge artificial intelligence.
          </p>
          <div class="hero-cta">
            <button class="primary-button">Get Started</button>
            <button class="secondary-button">Watch Demo</button>
          </div>
        </div>
      </section>

      <section class="features" id="features">
        <div class="container">
          <h2>AI-Enhanced Solutions</h2>
          <div class="feature-grid">
            <div class="feature-card">
              <h3>Intelligent Point of Sale</h3>
              <p>Predictive inventory, fraud detection, and voice-activated ordering</p>
            </div>
            <div class="feature-card">
              <h3>Smart Attendance</h3>
              <p>Facial recognition, predictive analytics, and multi-modal tracking</p>
            </div>
            <div class="feature-card">
              <h3>AI-Powered Grading</h3>
              <p>Automated feedback, performance prediction, and plagiarism detection</p>
            </div>
            <div class="feature-card">
              <h3>Intelligent Reporting</h3>
              <p>Natural language queries, predictive dashboards, and automated insights</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 SchoolVision AI. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Basic reset and layout styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header styles */
.header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2563eb;
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.3s;
}

.nav a:hover {
  color: #2563eb;
}

.cta-button {
  background: #2563eb;
  color: white !important;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
}

.cta-button:hover {
  background: #1d4ed8;
}

/* Hero section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5rem 0;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-button,
.secondary-button {
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.primary-button {
  background: white;
  color: #4c1d95;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.secondary-button {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.secondary-button:hover {
  background: white;
  color: #4c1d95;
}

/* Features section */
.features {
  padding: 5rem 0;
  background: #f9fafb;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1f2937;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.feature-card h3 {
  color: #2563eb;
  margin-bottom: 0.75rem;
}

/* Footer */
.footer {
  background: #1f2937;
  color: white;
  text-align: center;
  padding: 2rem 0;
}

/* Responsive */
@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
  
  .primary-button,
  .secondary-button {
    width: 200px;
  }
}
</style>