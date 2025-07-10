<template>
  <VocationalLanding :program-data="programData" />
</template>

<script setup>
import VocationalLanding from '@/components/VocationalLanding.vue'
import vocationalPrograms from '@/data/vocational-programs.json'
// Icons are handled in the component template

// Map icon names to icon types
const programData = {
  ...vocationalPrograms.cdl,
  keyBenefits: vocationalPrograms.cdl.keyBenefits.map(benefit => ({
    ...benefit,
    iconType: benefit.icon === 'ClipboardDocumentCheckIcon' ? 'clipboard' :
              benefit.icon === 'TruckIcon' ? 'truck' :
              benefit.icon === 'AcademicCapIcon' ? 'academic' : 'default'
  }))
}
</script>