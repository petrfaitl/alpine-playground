// eslint-disable-next-line no-undef
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
  },
    messages: {
      en: {
        'about': 'About',
        'Content not available.': 'Content not available.'
      },
      cs: {
        'about': 'O nas',
        'Content not available.': 'Obsah není k dispozici.'
      }
    }

  })
)
