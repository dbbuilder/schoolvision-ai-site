<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <Container>
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            FERPA Compliance
          </h1>
          <p class="text-xl text-primary-100">
            SchoolVision.AI maintains the highest standards of student data privacy and security 
            in full compliance with the Family Educational Rights and Privacy Act (FERPA).
          </p>
        </div>
      </Container>
    </section>

    <!-- Key Points Section -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
            Our FERPA Compliance Commitment
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card class="text-center p-8">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">100% FERPA Compliant</h3>
              <p class="text-gray-600">
                Certified compliance with all FERPA regulations for educational records protection
              </p>
            </Card>

            <Card class="text-center p-8">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Data Encryption</h3>
              <p class="text-gray-600">
                256-bit encryption for all student data at rest and in transit
              </p>
            </Card>

            <Card class="text-center p-8">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Annual Audits</h3>
              <p class="text-gray-600">
                Third-party security audits and continuous compliance monitoring
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>

    <!-- Detailed Content -->
    <section class="py-16">
      <Container>
        <div class="max-w-4xl mx-auto prose prose-lg">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Understanding FERPA</h2>
          <p class="text-gray-700 mb-6">
            The Family Educational Rights and Privacy Act (FERPA) is a federal law that protects the 
            privacy of student education records. The law applies to all schools that receive funds 
            under an applicable program of the U.S. Department of Education.
          </p>
          <p class="text-gray-700 mb-8">
            FERPA gives parents certain rights with respect to their children's education records. 
            These rights transfer to the student when he or she reaches the age of 18 or attends 
            a school beyond the high school level.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 mt-12">How SchoolVision.AI Ensures FERPA Compliance</h2>
          
          <h3 class="text-xl font-semibold text-gray-900 mb-4 mt-8">1. Data Access Controls</h3>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Role-based access control (RBAC) ensures users only see permitted data</li>
            <li>Granular permissions for teachers, administrators, parents, and students</li>
            <li>Automatic access rights based on enrollment and employment status</li>
            <li>Detailed audit logs of all data access and modifications</li>
            <li>Multi-factor authentication options for enhanced security</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-4 mt-8">2. Parent and Eligible Student Rights</h3>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Parents can view their child's records through secure parent portal</li>
            <li>Built-in request system for record corrections</li>
            <li>Consent management for data sharing</li>
            <li>Automatic rights transfer when students turn 18</li>
            <li>Clear data retention and deletion policies</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-4 mt-8">3. Directory Information Management</h3>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Configurable directory information settings per institution</li>
            <li>Parent opt-out capabilities for directory information</li>
            <li>Separate handling of directory vs. educational records</li>
            <li>Automated compliance with institutional policies</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-900 mb-4 mt-8">4. Third-Party Data Sharing</h3>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>No sharing of educational records without written consent</li>
            <li>Exception handling for legitimate educational interests</li>
            <li>Secure data transfer protocols for authorized sharing</li>
            <li>Complete audit trail of all data exports</li>
            <li>Automated redaction of non-shareable information</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 mt-12">Technical Safeguards</h2>
          
          <div class="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 class="font-semibold text-gray-900 mb-3">Encryption Standards</h4>
            <ul class="list-disc pl-6 space-y-2 text-gray-700">
              <li>AES 256-bit encryption for data at rest</li>
              <li>TLS 1.3 for data in transit</li>
              <li>Encrypted backups with secure key management</li>
              <li>End-to-end encryption for sensitive communications</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 class="font-semibold text-gray-900 mb-3">Infrastructure Security</h4>
            <ul class="list-disc pl-6 space-y-2 text-gray-700">
              <li>SOC 2 Type II certified data centers</li>
              <li>24/7 security monitoring and intrusion detection</li>
              <li>Regular penetration testing and vulnerability assessments</li>
              <li>Disaster recovery and business continuity planning</li>
              <li>Geographically distributed backups</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 mt-12">School Official Exception</h2>
          <p class="text-gray-700 mb-6">
            Under FERPA's "school official" exception, SchoolVision.AI acts as a school official with 
            a legitimate educational interest. This means:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>We are under the direct control of the institution regarding data use</li>
            <li>We use data only for authorized educational purposes</li>
            <li>We do not re-disclose information without permission</li>
            <li>We maintain the same standards as internal school officials</li>
            <li>We are subject to the same FERPA requirements as school employees</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 mt-12">Data Retention and Deletion</h2>
          <p class="text-gray-700 mb-6">
            SchoolVision.AI follows strict data retention policies aligned with FERPA requirements:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Data retained only as long as necessary for educational purposes</li>
            <li>Automatic purging based on institutional retention schedules</li>
            <li>Secure deletion using NIST-approved methods</li>
            <li>Right to request immediate deletion (subject to legal requirements)</li>
            <li>Certificate of deletion provided upon request</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 mt-12">Breach Notification</h2>
          <p class="text-gray-700 mb-6">
            In the unlikely event of a data breach, SchoolVision.AI commits to:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Notify affected institutions within 24 hours of discovery</li>
            <li>Provide detailed breach assessment and impact analysis</li>
            <li>Assist with required notifications to parents and students</li>
            <li>Implement immediate remediation measures</li>
            <li>Provide credit monitoring services if appropriate</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 mt-12">Training and Awareness</h2>
          <p class="text-gray-700 mb-6">
            All SchoolVision.AI employees undergo:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Annual FERPA compliance training</li>
            <li>Background checks and confidentiality agreements</li>
            <li>Regular security awareness training</li>
            <li>Incident response drills</li>
            <li>Privacy by design methodology training</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 mt-12">Compliance Documentation</h2>
          <p class="text-gray-700 mb-6">
            SchoolVision.AI provides comprehensive compliance documentation:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>FERPA compliance attestation letters</li>
            <li>Security audit reports (upon request)</li>
            <li>Data processing agreements</li>
            <li>Privacy impact assessments</li>
            <li>Incident response procedures</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 mt-12">Contact Our Privacy Team</h2>
          <p class="text-gray-700 mb-6">
            For questions about FERPA compliance or to request documentation:
          </p>
          <div class="bg-primary-50 p-6 rounded-lg">
            <p class="text-gray-700 mb-2">
              <strong>Email:</strong> <a href="mailto:privacy@schoolvision.ai" class="text-primary-600 hover:text-primary-700">privacy@schoolvision.ai</a>
            </p>
            <p class="text-gray-700 mb-2">
              <strong>Phone:</strong> <a href="tel:801-659-7778" class="text-primary-600 hover:text-primary-700">801-659-7778</a> (ask for Privacy Team)
            </p>
            <p class="text-gray-700">
              <strong>Mail:</strong> SchoolVision.AI Privacy Officer<br>
              123 Education Way<br>
              Salt Lake City, UT 84101
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Resources Section -->
    <section class="py-16 bg-gray-50">
      <Container>
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
            FERPA Resources
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">FERPA Compliance Guide</h3>
              <p class="text-gray-600 mb-4">
                Download our comprehensive guide to FERPA compliance in educational technology.
              </p>
              <Button variant="outline" size="sm">
                Download PDF
              </Button>
            </Card>

            <Card class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Privacy Best Practices</h3>
              <p class="text-gray-600 mb-4">
                Learn how to maximize student privacy while leveraging technology benefits.
              </p>
              <Button variant="outline" size="sm">
                View Guide
              </Button>
            </Card>

            <Card class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Implementation Checklist</h3>
              <p class="text-gray-600 mb-4">
                Ensure your SchoolVision.AI implementation meets all FERPA requirements.
              </p>
              <Button variant="outline" size="sm">
                Get Checklist
              </Button>
            </Card>

            <Card class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Compliance Webinar</h3>
              <p class="text-gray-600 mb-4">
                Watch our recorded webinar on maintaining FERPA compliance with AI tools.
              </p>
              <Button variant="outline" size="sm">
                Watch Now
              </Button>
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
            Privacy-First Educational Technology
          </h2>
          <p class="text-xl text-primary-100 mb-8">
            See how SchoolVision.AI helps your institution leverage AI while maintaining 
            the highest standards of student data privacy.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/demo">
              <Button size="lg" variant="secondary">
                Schedule Privacy Demo
              </Button>
            </router-link>
            <a href="mailto:privacy@schoolvision.ai">
              <Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-primary-700">
                Contact Privacy Team
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

<style scoped>
.prose ul {
  list-style-type: disc;
}

.prose a {
  color: #2563eb;
  text-decoration: underline;
}

.prose a:hover {
  color: #1d4ed8;
}
</style>