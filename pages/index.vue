<script>
export default {
  name: 'Index',
  layout: 'Home',
  data() {
    return {
      links: [
        {
          title: 'GitLab',
          fa: ['fab', 'gitlab'],
          hover: 'hover:text-gitlab',
          href: 'https://gitlab.com/m.dirim'
        },
        {
          title: 'Github',
          fa: ['fab', 'github'],
          hover: 'hover:text-github',
          href: 'https://github.com/leeniu'
        },
        {
          title: 'Docker',
          fa: ['fab', 'docker'],
          hover: 'hover:text-docker',
          href: 'https://hub.docker.com/u/malikdirim'
        },
        {
          title: 'CodePen',
          fa: ['fab', 'codepen'],
          hover: 'hover:text-codepen',
          href: 'https://codepen.io/leeniu'
        },
        {
          title: 'Twitter',
          fa: ['fab', 'twitter'],
          hover: 'hover:text-twitter',
          href: 'https://twitter.com/malikdirim'
        },
        {
          title: 'XING',
          fa: ['fab', 'xing'],
          hover: 'hover:text-xing',
          href: 'https://www.xing.com/profile/Malik_Dirim/'
        }
      ]
    }
  },
  i18n: {
    messages: {
      de: {
        heading: 'Full-Stack-Entwickler',
        salutation: {
          text: '{greeting}, mein Name ist {name}.',
          greeting: 'Hallo'
        },
        introduction: {
          text: 'Ich arbeite dieser Tage für {company} als {job}.',
          job: 'Web-Entwickler'
        },
        addition: {
          text:
            'Mein {ego} {cappic} unternimmt derweil sein Möglichstes, seinen Beitrag in der {openSourceCommunity} zu leisten.',
          ego: 'Alter Ego',
          openSourceCommunity: 'Open-Source-Gemeinschaft'
        },
        catAltText: 'Bild einer schlafenden Katze in der Nacht, vollständig in CSS gemalt.'
      },
      en: {
        heading: 'Full-Stack Developer',
        salutation: {
          text: '{greeting}, my name is {name}.',
          greeting: 'Hey'
        },
        introduction: {
          text: 'I currently work at {company} as a {job}.',
          job: 'Web Developer'
        },
        addition: {
          text: 'Meanwhile, my {ego} {cappic} is doing his utmost to contribute to the {openSourceCommunity}.',
          ego: 'alter ego',
          openSourceCommunity: 'open source community'
        },
        catAltText: 'Image of a sleeping cat at night, painted entirely in CSS.'
      }
    }
  }
}
</script>

<template>
  <main class="flex flex-1 flex-col md:flex-row md:justify-center md:items-center pt-10 md:pt-0">
    <section class="w-full md:w-5/8 mb-8 md:mb-0">
      <h2
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 sm:tracking-wider text-gradient-primary animate-gradient-x"
      >
        {{ $t('heading') }}
      </h2>

      <ul class="flex space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12 mb-8 sm:mb-10 md:mb-12">
        <li v-for="link in links" :key="link.alt">
          <a :href="link.href" :title="link.title" target="_blank" rel="noopener noreferrer">
            <fa
              :icon="link.fa"
              :class="[link.hover]"
              class="h-6 w-auto sm:h-8 md:h-10 lg:h-12 transform hover:scale-105 transition duration-100"
            />
          </a>
        </li>
      </ul>

      <p class="leading-relaxed md:leading-loose tracking-wide md:text-lg text-gray-600">
        <i18n path="salutation.text">
          <template #greeting>
            {{ $t('salutation.greeting') }} <fa class="inline h-4 text-gray-800" :icon="['fas', 'hand-spock']" />
          </template>
          <template #name><span class="font-bold text-gray-800">Malik Dirim</span></template>
        </i18n>
        <br />
        <i18n path="introduction.text">
          <template #company>
            <a
              target="_blank"
              title="Flybytes"
              class="italic underline"
              rel="noopener noreferrer"
              href="https://www.flybytes.de/team/malik-dirim"
            >
              Flybytes
              <svg
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current inline h-4 text-gray-800"
              >
                <polygon
                  points="121.52 285.55 399.96 11.77 332.49 11.6 88.63 251.37 72.2 234.3 298.5 11.77 230.86 11.77 5.5 233.38 196.92 432.29 230.74 399.04 121.52 285.55"
                />
                <path
                  d="M393.83,234.89v-2.74c51.14-18.6,85-54.8,85.11-110.09.1-44.59-19.58-77.06-55.42-100.21L389.39,55.42C416.15,72.7,431.3,92.55,431.3,122c0,41.82-34.43,87-124.18,110.06v2.75C396.87,255.6,452.4,297.6,447.71,359.55c-4.54,60-65.52,82.14-105.15,82.14l-2.52,0c-26.17,0-64.64-6.92-92.84-25.57L213.38,449.4c32.76,25.79,76.33,40,126.66,40l3.18,0c74.56-1,152.38-46.22,152.38-133.39C495.6,289.15,454.13,252,393.83,234.89Z"
                />
              </svg>
            </a>
          </template>
          <template #job>
            <span class="font-bold text-gray-800">{{ $t('introduction.job') }}</span>
          </template>
        </i18n>
        <br />
        <i18n path="addition.text">
          <template #ego>
            <span class="font-bold text-gray-800">{{ $t('addition.ego') }}</span>
          </template>
          <template #cappic>
            <span class="italic">
              <a
                target="_blank"
                class="italic underline"
                title="Cappic90 GitHub"
                rel="noopener noreferrer"
                href="https://github.com/cappic90"
              >
                Cappic90
                <fa class="inline h-4 text-gray-800" :icon="['fab', 'github']" />
              </a>
            </span>
          </template>
          <template #openSourceCommunity>
            <span class="font-bold text-gray-800">{{ $t('addition.openSourceCommunity') }}</span>
          </template>
        </i18n>
      </p>
    </section>

    <section class="w-full md:w-3/8 mb-8 md:mb-0 px-8 sm:px-12 md:px-16 lg:px-0 md:-mt-12">
      <div class="flex justify-center">
        <md-space-cat />
      </div>
    </section>
  </main>
</template>
