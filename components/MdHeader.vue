<script>
export default {
  i18n: {
    messages: {
      de: {
        avatarAlt: 'Avatar von Malik Dirim'
      }
    }
  }
}
</script>

<template>
  <header class="py-4">
    <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
      <div class="block pr-4">
        <nuxt-link :to="localePath({ name: 'index' })" class="flex flex-row items-center">
          <picture>
            <source :srcSet="require('~/assets/img/avatar.jpg?format=avif&resize&size=64')" type="image/avif" />
            <source :srcSet="require('~/assets/img/avatar.jpg?format=webp&resize&size=64')" type="image/webp" />
            <img
              width="32"
              height="32"
              :alt="$t('avatarAlt')"
              :src="require('~/assets/img/avatar.jpg?resize&size=64')"
              class="inline-block mx-auto h-8 w-auto rounded-full text-white shadow-solid mr-3"
            />
          </picture>
          <h1 class="font-light text-xl">{{ $config.appName }}</h1>
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>
