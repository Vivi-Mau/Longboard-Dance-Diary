/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './.vitepress/**/*.{vue,ts,js}',
    './components/**/*.vue',
    './composables/**/*.ts',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          from: { height: '0px', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to: { height: '0px', opacity: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 220ms ease-out',
        slideUp: 'slideUp 180ms ease-in',
      },
    },
  },
  plugins: [],
}
