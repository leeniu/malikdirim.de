<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  i18n: {
    messages: {
      de: {
        avatarAlt: 'Avatar von Malik Dirim',
        changeLanguage: 'Sprache ändern zu'
      },
      en: {
        avatarAlt: 'Avatar of Malik Dirim',
        changeLanguage: 'Change language ändern'
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
          <nuxt-link :to="switchLocalePath(locale.code)" :title="`${$t('changeLanguage')} ${locale.name}`">
            <span class="sr-only">{{ locale.name }}</span>
            <country-flag :country="locale.flag" class="h-3 transition transform hover:opacity-75 duration-200" />
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
