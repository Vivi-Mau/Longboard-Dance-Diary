<script setup lang="ts">
import { ref, computed } from 'vue'
import { AccordionRoot } from 'radix-vue'
import { Icon } from '@iconify/vue'
import DifficultyFilter from './DifficultyFilter.vue'
import TrickAccordionItem from './TrickAccordionItem.vue'
import TrickFamilyAccordionItem from './TrickFamilyAccordionItem.vue'
import type { TrickCategory, TrickCategory as TC, Difficulty, Locale } from '@/data/tricks'
import { useTrickProgress } from '@/composables/useTrickProgress'

type FilterValue = 'all' | Difficulty

const props = defineProps<{
  category: TrickCategory
  allCategories: TC[]
  locale: Locale
  searchQuery: string
}>()

const { checkedTricks } = useTrickProgress()
const activeFilter = ref<FilterValue>('all')

const isSearchMode = computed(() => props.searchQuery.trim().length > 0)

const displayedFamilies = computed(() => {
  if (isSearchMode.value) return []
  return props.category.families
    .map(f => ({
      ...f,
      tricks: activeFilter.value === 'all'
        ? f.tricks
        : f.tricks.filter(t => t.difficulty === activeFilter.value),
    }))
    .filter(f => f.tricks.length > 0)
})

const displayedTricks = computed(() => {
  if (isSearchMode.value) {
    const q = props.searchQuery.toLowerCase().replace(/-/g, ' ')
    const normalize = (s: string) => s.toLowerCase().replace(/-/g, ' ')
    return props.allCategories.flatMap(cat => [
      ...cat.tricks,
      ...cat.families.flatMap(f => f.tricks),
    ]).filter(t =>
      normalize(t.name).includes(q) ||
      normalize(t.description[props.locale]).includes(q) ||
      t.steps[props.locale].some(s => normalize(s).includes(q)),
    )
  }
  let tricks = props.category.tricks
  if (activeFilter.value !== 'all') {
    tricks = tricks.filter(t => t.difficulty === activeFilter.value)
  }
  return tricks
})

const progress = computed(() => {
  const allTricks = [
    ...props.category.tricks,
    ...props.category.families.flatMap(f => f.tricks),
  ]
  const done = allTricks.filter(t => checkedTricks.value.has(t.id)).length
  return { done, total: allTricks.length, pct: allTricks.length > 0 ? Math.round((done / allTricks.length) * 100) : 0 }
})

const title = computed(() =>
  isSearchMode.value
    ? (props.locale === 'de' ? `Ergebnisse für „${props.searchQuery}"` : `Results for "${props.searchQuery}"`)
    : props.category.name[props.locale],
)

const isEmpty = computed(() =>
  displayedFamilies.value.length === 0 && displayedTricks.value.length === 0,
)
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <!-- Category header -->
    <div class="mb-5">
      <div class="flex items-center justify-between gap-3 mb-1">
        <h1 class="text-xl font-bold text-gray-100 flex items-center gap-2">
          <Icon v-if="!isSearchMode" :icon="category.icon" class="text-2xl shrink-0" />
          {{ title }}
        </h1>
        <span v-if="!isSearchMode" class="text-sm text-gray-500 tabular-nums shrink-0">
          {{ progress.done }}/{{ progress.total }}
        </span>
      </div>

      <!-- Progress bar -->
      <div v-if="!isSearchMode" class="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-500"
          :class="progress.pct === 100 ? 'bg-pink-500' : 'bg-gradient-to-r from-orange-500 to-pink-500'"
          :style="{ width: progress.pct + '%' }"
        />
      </div>
    </div>

    <!-- Difficulty filter (hidden in search mode) -->
    <div v-if="!isSearchMode" class="mb-4">
      <DifficultyFilter v-model="activeFilter" :locale="locale" />
    </div>

    <!-- Trick list -->
    <div class="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
      <template v-if="!isEmpty">
        <AccordionRoot type="single" collapsible>
          <TrickFamilyAccordionItem
            v-for="family in displayedFamilies"
            :key="family.id"
            :family="family"
            :locale="locale"
          />
          <TrickAccordionItem
            v-for="trick in displayedTricks"
            :key="trick.id"
            :trick="trick"
            :locale="locale"
          />
        </AccordionRoot>
      </template>
      <div v-else class="py-12 text-center text-gray-600 text-sm">
        {{ locale === 'de' ? 'Keine Tricks gefunden.' : 'No tricks found.' }}
      </div>
    </div>
  </div>
</template>
