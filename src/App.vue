<template>
  <component :is="layout + '-layout'" v-if="layout"/>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'

export default {
  setup() {
    const route = useRoute()
    return {
      layout: computed(()=> route.meta.layout)
    }
  },
  components: {
    AuthLayout,
    MainLayout,
  }
}
</script>
