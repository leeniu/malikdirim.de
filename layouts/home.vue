<template>
  <div class="text-gray-800 antialiased bg-gray-100 font-light relative flex justify-center w-full h-screen">
    <Particles class="absolute z-0 h-full w-full" />
    <div class="absolute z-10 flex flex-col h-full container mx-auto px-4">
      <Header />
      <nuxt class="flex-1" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Particles from '@/components/Particles'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Footer,
    Header,
    Particles
  }
}
</script>
