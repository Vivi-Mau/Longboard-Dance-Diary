# Longboard Dance Diary

A personal, simple longboard trick progress tracker — bilingual (EN/DE), no tracking, no database.

## Stack

- **[VitePress](https://vitepress.dev/)** — Vue-based static site generator
- **[Radix Vue](https://www.radix-vue.com/)** — accessible accordion, checkbox, and dropdown primitives
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first styling
- **[@iconify/vue](https://iconify.design/)** — icon library (Phosphor, Lucide, MDI, circle-flags)

## Getting started

```bash
pnpm install
pnpm start      # dev server → http://localhost:5173
pnpm build      # static build → .vitepress/dist
pnpm preview    # preview the build locally
```

## Project structure

```
.vitepress/
  config.ts           # VitePress config (locales, head meta)
  theme/
    Layout.vue         # Root layout — sidebar + header + main
    style.css          # Global styles
components/
  AppHeader.vue        # Top bar (title, language dropdown)
  AppSidebar.vue       # Collapsible left nav with search
  TrickList.vue        # Category view with progress bar + filters
  TrickAccordionItem.vue # Single trick row (checkbox, steps, badge)
  DifficultyFilter.vue # Easy / Medium / Advanced pill filters
composables/
  useTrickProgress.ts  # localStorage-backed checked trick state
data/
  tricks.ts            # All trick data + TypeScript types
```

## Adding tricks

Open `data/tricks.ts` and add an entry to the relevant category array:

```ts
{
  id: 'dancing-my-new-trick',     
  name: 'My New Trick',
  difficulty: 'easy',           
  description: {
    en: 'Short English description.',
    de: 'Kurze deutsche Beschreibung.',
  },
  steps: {
    en: ['Step 1', 'Step 2'],
    de: ['Schritt 1', 'Schritt 2'],
  },
}
```

Categories: `dancing` · `freestyle` · `lines-combos` · `handtricks`

## Privacy

- Progress is stored in `localStorage` only — nothing leaves the browser
