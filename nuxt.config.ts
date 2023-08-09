export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    // Internationalization
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxthq/studio',
  ],

  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default,
    strategy: 'prefix',
    locales: [
      {code: 'en', name: 'English'},
      {code: 'cs', name: 'Česky'}
    ],  // used in URL path prefix
    defaultLocale: 'en',    // default locale of your project for Nuxt pages and routings
  }
})
