<template>
  <div class="flex flex-col justify-center items-center">
    <SVG404 class="mb-12 w-auto h-64" />
    <div class="title text-center text-xl mb-4">
      Die gesuchte Seite konnte leider nicht gefunden werden.
    </div>
    <p>
      <nuxt-link to="/">
        Zurück zur Startseite
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
