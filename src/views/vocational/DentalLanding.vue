<template>
  <VocationalLanding :program-data="programData" />
</template>

<script setup>
import VocationalLanding from '@/components/VocationalLanding.vue'
import vocationalPrograms from '@/data/vocational-programs.json'
// Icons are handled in the component template

// Map icon names to icon types
const programData = {
  ...vocationalPrograms.dental,
  keyBenefits: vocationalPrograms.dental.keyBenefits.map(benefit => ({
    ...benefit,
    iconType: benefit.icon === 'DocumentTextIcon' ? 'documentText' :
              benefit.icon === 'ClipboardDocumentListIcon' ? 'clipboardList' :
              benefit.icon === 'CameraIcon' ? 'camera' : 'default'
  }))
}
</script>