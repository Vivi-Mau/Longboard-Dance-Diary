# Longboard Dance Diary

A personal longboard skate trick progress tracker bilingual (EN/DE), no tracking, no database.

## Stack

- **[VitePress](https://vitepress.dev/)** — Vue-based static site generator
- **[Radix Vue](https://www.radix-vue.com/)** — accessible accordion, checkbox, and dropdown primitives
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first styling
- **[@iconify/vue](https://iconify.design/)** — icon library

## Getting started

```bash
pnpm install
pnpm start      # dev server → http://localhost:5173
pnpm build      # static build → .vitepress/dist
pnpm preview    # preview the build locally
```

## Adding a trick family

```markdown
---
id: my-family
name: My Family
---

## EN
One sentence describing the family.
## DE
Ein Satz zur Beschreibung der Familie.

===

---
id: freestyle-my-trick
name: My Trick
difficulty: medium
---

## EN
Description...

===

---
id: freestyle-my-trick-variant
name: My Trick Variant
difficulty: hard
---

## EN
Description...
```

## Categories

`dancing` · `freestyle` · `handtricks` · `linesCombos` 

## Privacy

Progress is stored in `localStorage` only — nothing leaves the browser.
