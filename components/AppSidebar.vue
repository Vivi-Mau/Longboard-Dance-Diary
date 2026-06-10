<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { TrickCategory, Locale } from '../data/tricks'
import { useTrickProgress } from '../composables/useTrickProgress'

const props = defineProps<{
  collapsed: boolean
  categories: TrickCategory[]
  activeCategory: string
  locale: Locale
  searchQuery: string
}>()

const emit = defineEmits<{
  select: [id: string]
  toggle: []
  'update:searchQuery': [value: string]
}>()

const { checkedTricks } = useTrickProgress()

function progressFor(cat: TrickCategory) {
  const done = cat.tricks.filter(t => checkedTricks.value.has(t.id)).length
  return { done, total: cat.tricks.length }
}
</script>

<template>
  <aside
    class="shrink-0 bg-gray-900 border-r border-gray-800 flex flex-col transition-all duration-300 overflow-hidden"
    :class="collapsed ? 'w-14' : 'w-60'"
  >
    <!-- Search (expanded only) -->
    <div class="p-3 pb-2" :class="collapsed ? 'hidden' : ''">
      <div class="relative">
        <Icon icon="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        <input
          :value="searchQuery"
          type="search"
          :placeholder="locale === 'de' ? 'Tricks suchen…' : 'Search tricks…'"
          class="w-full bg-gray-950 border border-gray-700 rounded-xl pl-9 pr-4 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
          @input="emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
        />
      </div>
    </div>

    <!-- Category nav -->
    <nav class="flex-1 p-2 space-y-1 overflow-y-auto">
      <button
        v-for="cat in categories"
        :key="cat.id"
        class="w-full flex items-center rounded-xl text-sm font-medium transition-all"
        :class="[
          collapsed ? 'justify-center py-3 px-0' : 'gap-3 px-3 py-3 text-left',
          activeCategory === cat.id
            ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/10 text-orange-300 border border-orange-500/30'
            : 'text-gray-400 hover:text-gray-100 hover:bg-gray-800 border border-transparent',
        ]"
        :title="collapsed ? cat.name[locale] : undefined"
        @click="emit('select', cat.id)"
      >
        <Icon :icon="cat.icon" class="text-xl shrink-0" />
        <template v-if="!collapsed">
          <span class="flex-1 truncate">{{ cat.name[locale] }}</span>
          <span class="text-xs tabular-nums" :class="activeCategory === cat.id ? 'text-orange-400/70' : 'text-gray-600'">
            {{ progressFor(cat).done }}/{{ progressFor(cat).total }}
          </span>
        </template>
      </button>
    </nav>

    <!-- Collapse toggle -->
    <div class="p-2 border-t border-gray-800">
      <button
        class="w-full flex items-center justify-center gap-2 py-2 px-2 rounded-xl text-gray-500 hover:text-gray-300 hover:bg-gray-800 transition-colors text-xs"
        @click="emit('toggle')"
      >
        <Icon :icon="collapsed ? 'lucide:panel-left-open' : 'lucide:panel-left-close'" class="w-4 h-4 shrink-0" />
        <span v-if="!collapsed">{{ locale === 'de' ? 'Einklappen' : 'Collapse' }}</span>
      </button>
    </div>
  </aside>
</template>
