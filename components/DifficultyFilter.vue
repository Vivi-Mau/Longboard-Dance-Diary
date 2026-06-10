<script setup lang="ts">
import type { Difficulty, Locale } from '../data/tricks'

type FilterValue = 'all' | Difficulty

defineProps<{
  modelValue: FilterValue
  locale: Locale
}>()

const emit = defineEmits<{
  'update:modelValue': [value: FilterValue]
}>()

const filters: { value: FilterValue; label: { en: string; de: string }; activeClass: string }[] = [
  {
    value: 'all',
    label: { en: 'All', de: 'Alle' },
    activeClass: 'bg-gray-600 text-white border-gray-500',
  },
  {
    value: 'easy',
    label: { en: 'Easy', de: 'Leicht' },
    activeClass: 'bg-green-500/20 text-green-400 border-green-500/50',
  },
  {
    value: 'medium',
    label: { en: 'Medium', de: 'Mittel' },
    activeClass: 'bg-amber-500/20 text-amber-400 border-amber-500/50',
  },
  {
    value: 'advanced',
    label: { en: 'Advanced', de: 'Fortgeschritten' },
    activeClass: 'bg-red-500/20 text-red-400 border-red-500/50',
  },
]
</script>

<template>
  <div class="flex gap-2 flex-wrap">
    <button
      v-for="f in filters"
      :key="f.value"
      class="px-3 py-1 rounded-full text-xs font-medium border transition-all"
      :class="modelValue === f.value
        ? f.activeClass
        : 'text-gray-500 border-gray-700 hover:text-gray-300 hover:border-gray-600'"
      @click="emit('update:modelValue', f.value)"
    >
      {{ f.label[locale] }}
    </button>
  </div>
</template>
