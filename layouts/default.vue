<template>
  <div class="flex flex-col min-h-screen container mx-auto px-4">
    <Header />
    <nuxt class="flex-1" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Footer,
    Header
  }
}
</script>
