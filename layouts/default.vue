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
import { Header, Footer } from '@/components'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="scss">
h1 {
  @apply text-3xl py-3 font-semibold;
}

h2 {
  @apply text-2xl py-2 font-normal;
}

h3 {
  @apply text-xl py-1 font-normal;
}

p {
  @apply mb-4;
}

a {
  @apply transform transition duration-300 ease-in-out;

  &:hover {
    @apply text-primary;
  }
}
</style>
