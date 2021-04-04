<script>
export default {
  /* eslint-disable vue/no-v-html */
}
</script>

<template>
  <div
    class="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 relative overflow-hidden rounded-full bg-gradient-to-b from-black to-indigo-900 flex justify-center items-center space"
  >
    <span v-for="(star, index) in 75" :key="index" class="bg-yellow-50 rounded-full absolute top-0 left-0 star"></span>
    <span
      class="block h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 animate-fly-around mx-auto"
      v-html="require(`~/assets/img/space-kitty.svg?include`)"
    ></span>
  </div>
</template>

<style lang="scss" scoped>
.space {
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}

@keyframes blinking-star {
  50% {
    transform: scale(0.5);
  }
}

@for $i from 1 through 75 {
  .star:nth-child(#{$i}) {
    $size: random(6) * 0.5px;
    width: $size;
    height: $size;
    margin-top: random(400) * 1px;
    margin-left: random(400) * 1px;
    animation-name: blinking-star;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-delay: #{(random(5) / 2) + 1}s;
    animation-duration: #{(random(5) / 2) + 1}s;
  }
}
</style>
