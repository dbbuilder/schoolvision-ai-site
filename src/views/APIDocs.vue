<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
      <Container>
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            API Documentation
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            Build powerful integrations with the SchoolVision.AI platform using our comprehensive REST API.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/contact">
              <Button size="lg" variant="secondary">
                Get API Access
              </Button>
            </router-link>
            <a href="https://api.schoolvision.ai/docs" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                View API Reference
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>

    <!-- Quick Start -->
    <section class="py-16">
      <Container>
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Quick Start Guide</h2>
          
          <Card class="p-6 mb-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">1. Authentication</h3>
            <p class="text-gray-600 mb-4">
              All API requests require authentication using an API key. Include your API key in the request headers:
            </p>
            <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre><code>GET /api/v1/students
Host: api.schoolvision.ai
Authorization: Bearer YOUR_API_KEY</code></pre>
            </div>
          </Card>

          <Card class="p-6 mb-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">2. Base URL</h3>
            <p class="text-gray-600 mb-4">
              All API endpoints are relative to the base URL:
            </p>
            <div class="bg-gray-900 text-gray-100 p-4 rounded-lg">
              <code>https://api.schoolvision.ai/v1</code>
            </div>
          </Card>

          <Card class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">3. Response Format</h3>
            <p class="text-gray-600 mb-4">
              All responses are returned in JSON format with consistent structure:
            </p>
            <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre><code>{
  "success": true,
  "data": {
    // Response data here
  },
  "meta": {
    "timestamp": "2025-01-10T12:00:00Z",
    "version": "1.0"
  }
}</code></pre>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- API Endpoints -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Core API Endpoints</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Students API -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Students API</h3>
              <p class="text-gray-600 mb-4">
                Manage student records, enrollment, and academic data.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><code class="bg-gray-100 px-2 py-1 rounded">GET /students</code></li>
                <li><code class="bg-gray-100 px-2 py-1 rounded">POST /students</code></li>
                <li><code class="bg-gray-100 px-2 py-1 rounded">PUT /students/{id}</code></li>
              </ul>
            </Card>

            <!-- Attendance API -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Attendance API</h3>
              <p class="text-gray-600 mb-4">
                Track and manage student attendance in real-time.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><code class="bg-gray-100 px-2 py-1 rounded">GET /attendance</code></li>
                <li><code class="bg-gray-100 px-2 py-1 rounded">POST /attendance/checkin</code></li>
                <li><code class="bg-gray-100 px-2 py-1 rounded">GET /attendance/reports</code></li>
              </ul>
            </Card>

            <!-- Grades API -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Grades API</h3>
              <p class="text-gray-600 mb-4">
                Submit and retrieve grades with AI-powered insights.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><code class="bg-gray-100 px-2 py-1 rounded">GET /grades</code></li>
                <li><code class="bg-gray-100 px-2 py-1 rounded">POST /grades/batch</code></li>
                <li><code class="bg-gray-100 px-2 py-1 rounded">GET /grades/analytics</code></li>
              </ul>
            </Card>

            <!-- Analytics API -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Analytics API</h3>
              <p class="text-gray-600 mb-4">
                Access predictive analytics and insights.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><code class="bg-gray-100 px-2 py-1 rounded">GET /analytics/dashboard</code></li>
                <li><code class="bg-gray-100 px-2 py-1 rounded">GET /analytics/predictions</code></li>
                <li><code class="bg-gray-100 px-2 py-1 rounded">POST /analytics/query</code></li>
              </ul>
            </Card>

            <!-- Cafeteria API -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Cafeteria API</h3>
              <p class="text-gray-600 mb-4">
                Manage meal plans, transactions, and nutrition data.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><code class="bg-gray-100 px-2 py-1 rounded">GET /cafeteria/menus</code></li>
                <li><code class="bg-gray-100 px-2 py-1 rounded">POST /cafeteria/transactions</code></li>
                <li><code class="bg-gray-100 px-2 py-1 rounded">GET /cafeteria/balances</code></li>
              </ul>
            </Card>

            <!-- Webhooks API -->
            <Card class="p-6">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Webhooks API</h3>
              <p class="text-gray-600 mb-4">
                Receive real-time notifications for system events.
              </p>
              <ul class="text-sm text-gray-600 space-y-2">
                <li><code class="bg-gray-100 px-2 py-1 rounded">POST /webhooks</code></li>
                <li><code class="bg-gray-100 px-2 py-1 rounded">GET /webhooks</code></li>
                <li><code class="bg-gray-100 px-2 py-1 rounded">DELETE /webhooks/{id}</code></li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>

    <!-- Code Examples -->
    <section class="py-16">
      <Container>
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Code Examples</h2>
          
          <div class="space-y-8">
            <!-- Python Example -->
            <Card class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Python Example</h3>
              <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre><code>import requests

API_KEY = "your_api_key_here"
BASE_URL = "https://api.schoolvision.ai/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Get all students
response = requests.get(f"{BASE_URL}/students", headers=headers)
students = response.json()

print(f"Total students: {len(students['data'])}")</code></pre>
              </div>
            </Card>

            <!-- JavaScript Example -->
            <Card class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">JavaScript Example</h3>
              <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre><code>const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://api.schoolvision.ai/v1';

// Get attendance data
fetch(`${BASE_URL}/attendance`, {
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log('Attendance data:', data);
})
.catch(error => console.error('Error:', error));</code></pre>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>

    <!-- SDKs -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Official SDKs</h2>
          <p class="text-xl text-gray-600 mb-8">
            Accelerate your integration with our official SDKs
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card class="p-6">
              <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Python SDK</h3>
              <p class="text-gray-600 mb-4">Official Python library for SchoolVision.AI API</p>
              <code class="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">pip install schoolvision</code>
            </Card>

            <Card class="p-6">
              <div class="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Node.js SDK</h3>
              <p class="text-gray-600 mb-4">Official Node.js library for SchoolVision.AI API</p>
              <code class="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">npm install @schoolvision/sdk</code>
            </Card>

            <Card class="p-6">
              <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">.NET SDK</h3>
              <p class="text-gray-600 mb-4">Official .NET library for SchoolVision.AI API</p>
              <code class="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">dotnet add package SchoolVision</code>
            </Card>
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build?
          </h2>
          <p class="text-xl text-primary-100 mb-8">
            Get your API key and start integrating with SchoolVision.AI today
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contact">
              <Button size="lg" variant="secondary">
                Request API Access
              </Button>
            </router-link>
            <a href="https://github.com/schoolvision-ai" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                View on GitHub
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container, Card, Button } from '../components/ui'
</script>