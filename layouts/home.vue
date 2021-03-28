<template>
  <div class="relative flex justify-center w-full h-screen">
    <Particles class="absolute z-0 h-full w-full" />
    <div class="absolute z-10 flex flex-col h-full container mx-auto px-4">
      <Header />
      <nuxt class="flex-1" />
      <Footer />
    </div>
  </div>
</template>
