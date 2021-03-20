<template>
<<<<<<< HEAD
  <div class="text-gray-800 antialiased bg-gray-100 font-light relative">
    <Particles class="absolute z-0 min-h-screen w-screen" />
    <div class="absolute z-10 w-screen">
      <div class="flex flex-col min-h-screen container mx-auto px-4">
        <Header />
        <nuxt class="flex-1" />
        <Footer />
      </div>
=======
  <div class="text-gray-800 antialiased bg-gray-100 font-light relative flex justify-center w-screen min-h-screen">
    <Particles class="absolute z-0 h-full w-full" />
    <div class="absolute z-10 flex flex-col min-h-full container mx-auto px-4">
      <Header />
      <nuxt class="flex-1" />
      <Footer />
>>>>>>> develop
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
