<template>
  <header class="py-4">
    <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
      <div class="block pr-4">
        <nuxt-link to="/" class="flex flex-row items-center">
          <picture>
            <source :srcSet="require('~/assets/img/avatar.jpg?format=avif&resize&size=32')" type="image/avif" />
            <source :srcSet="require('~/assets/img/avatar.jpg?format=webp&resize&size=32')" type="image/webp" />
            <img
              :src="require('~/assets/img/avatar.jpg?resize&size=32')"
              alt="Avatar von Malik Dirim"
              class="inline-block mx-auto h-8 w-auto rounded-full text-white shadow-solid mr-3"
            />
          </picture>
          <Name class="font-light text-xl" />
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>
