<script>
/* eslint-disable vue/no-v-html */
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  i18n: {
    messages: {
      de: {
        avatarAlt: 'Avatar von Malik Dirim'
      },
      en: {
        avatarAlt: 'Avatar of Malik Dirim'
      }
    }
  }
}
</script>

<template>
  <header class="py-4">
    <nav class="relative flex items-center justify-between sm:h-10">
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
          <h1 class="font-light text-xl">Malik Dirim</h1>
        </nuxt-link>
      </div>
      <ul class="flex space-x-4">
        <li v-for="locale in availableLocales" :key="locale.code">
          <nuxt-link :to="switchLocalePath(locale.code)">
            <span class="sr-only">{{ locale.name }}</span>
            <span
              class="inline-block h-6 w-6 transform transition hover:scale-110 duration-150"
              v-html="require(`~/assets/img/flags/${locale.flag}.svg?include`)"
            ></span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
