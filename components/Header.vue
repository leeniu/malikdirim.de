<template>
  <header class="py-4">
    <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
      <div class="block pr-4">
        <nuxt-link to="/" class="flex flex-row items-center">
          <Avatar class="inline-block mx-auto h-8 w-auto rounded-full text-white shadow-solid mr-3" />
          <Name class="font-extralight text-xl" />
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
import Avatar from '@/components/Avatar'
import Name from '@/components/Name'

export default {
  components: {
    Name,
    Avatar
  }
}
</script>
