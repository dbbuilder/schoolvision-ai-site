<template>
  <VocationalLanding :program-data="programData" />
</template>

<script setup>
import VocationalLanding from '@/components/VocationalLanding.vue'
import vocationalPrograms from '@/data/vocational-programs.json'
// Icons are handled in the component template

// Map icon names to icon types
const programData = {
  ...vocationalPrograms.nursing,
  keyBenefits: vocationalPrograms.nursing.keyBenefits.map(benefit => ({
    ...benefit,
    iconType: benefit.icon === 'BuildingOfficeIcon' ? 'building' :
              benefit.icon === 'BeakerIcon' ? 'beaker' :
              benefit.icon === 'ChartBarIcon' ? 'chart' : 'default'
  }))
}
</script>