<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <Container>
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact SchoolVision.AI</h1>
          <p class="text-xl text-primary-100">
            Ready to transform your campus with AI? Our team is here to help you get started.
          </p>
        </div>
      </Container>
    </section>

    <!-- Contact Content -->
    <section class="py-16">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Information -->
          <div class="lg:col-span-1">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
            <p class="text-gray-600 mb-8">
              Whether you're looking to modernize your campus operations or have questions about our solutions, 
              we're here to help. Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div class="space-y-6">
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Sales Inquiries</h3>
                <p class="text-gray-600">
                  <a :href="`mailto:${contact.salesEmail}`" class="hover:text-primary-600">{{ contact.salesEmail }}</a>
                </p>
                <p class="text-gray-600">
                  <a :href="`tel:${contact.phone}`" class="hover:text-primary-600">{{ contact.phone }}</a>
                </p>
              </div>
              
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Support</h3>
                <p class="text-gray-600">
                  <a :href="`mailto:${contact.supportEmail}`" class="hover:text-primary-600">{{ contact.supportEmail }}</a>
                </p>
                <p class="text-gray-600">Available 24/7 for existing customers</p>
              </div>
              
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p class="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM MT</p>
                <p class="text-gray-600">Saturday - Sunday: Emergency support only</p>
              </div>
              
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Headquarters</h3>
                <p class="text-gray-600">
                  {{ companyInfo.company.name }}<br>
                  {{ headquarters.address }}<br>
                  {{ headquarters.city }}, {{ headquarters.state }} {{ headquarters.zipCode }}<br>
                  {{ headquarters.country }}
                </p>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-50 py-16">
      <Container>
        <Card class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Prefer a Live Demo?
          </h2>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            See SchoolVision.AI in action with a personalized demo tailored to your institution's needs.
          </p>
          <router-link to="/demo">
            <Button size="lg" variant="primary">
              Schedule a Demo
            </Button>
          </router-link>
        </Card>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { Container, Card, Button } from '../components/ui'
import ContactForm from '../components/ContactForm.vue'
import companyInfo from '../data/company-info.json'

// Extract company data
const contact = companyInfo.company.contact
const headquarters = companyInfo.company.headquarters
</script>