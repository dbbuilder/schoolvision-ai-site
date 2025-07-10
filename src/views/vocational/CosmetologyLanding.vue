<template>
  <VocationalLanding :program-data="programData" />
</template>

<script setup>
import VocationalLanding from '@/components/VocationalLanding.vue'
import vocationalPrograms from '@/data/vocational-programs.json'
// Icons are handled in the component template

// Map icon names to icon types
const programData = {
  ...vocationalPrograms.cosmetology,
  keyBenefits: vocationalPrograms.cosmetology.keyBenefits.map(benefit => ({
    ...benefit,
    iconType: benefit.icon === 'UserGroupIcon' ? 'users' :
              benefit.icon === 'DocumentCheckIcon' ? 'document' :
              benefit.icon === 'CubeIcon' ? 'cube' : 'default'
  }))
}
</script>