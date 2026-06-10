import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Longboard Dance Diary',
  description: 'Personal longboard trick progress tracker — private, no tracking',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Longboard Dance Diary',
      description: 'Personal longboard trick progress tracker',
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      title: 'Longboard Dance Diary',
      description: 'Persönliches Longboard-Trick-Fortschrittstagebuch',
    },
  },

  appearance: 'dark',

  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
  ],

  themeConfig: {},
})
