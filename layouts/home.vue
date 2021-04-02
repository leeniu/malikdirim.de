<template>
  <div class="relative flex justify-center w-full h-screen">
    <md-particles class="absolute z-0 h-full w-full" />
    <div class="absolute z-10 flex flex-col h-full container mx-auto px-4">
      <md-header />
      <nuxt class="flex-1" />
      <md-footer />
    </div>
  </div>
</template>
