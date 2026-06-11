import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

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

  srcExclude: ['data/tricks/**'],

  appearance: 'dark',

  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
  ],

  themeConfig: {},

  vite: {
    resolve: {
      alias: { '@': fileURLToPath(new URL('..', import.meta.url)) },
    },
  },
})
