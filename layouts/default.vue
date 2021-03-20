<template>
  <div class="text-gray-800 antialiased bg-gray-100 font-light">
    <div class="flex flex-col min-h-screen container mx-auto px-4">
      <Header />
      <nuxt class="flex-1" />
      <Footer />
    </div>
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
