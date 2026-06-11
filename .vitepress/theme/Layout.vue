<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData, useRouter } from 'vitepress'
import { Icon } from '@iconify/vue'
import AppHeader from '../../components/AppHeader.vue'
import AppSidebar from '../../components/AppSidebar.vue'
import TrickList from '../../components/TrickList.vue'
import { trickCategories } from '@/data/tricks'
import type { Locale } from '@/data/tricks'

const { lang } = useData()
const router = useRouter()

const locale = computed<Locale>(() =>
  lang.value?.startsWith('de') ? 'de' : 'en',
)

const sidebarCollapsed = ref(true)
const activeCategory = ref(trickCategories[0].id)
const searchQuery = ref('')

const activeCategory$ = computed(
  () => trickCategories.find(c => c.id === activeCategory.value) ?? trickCategories[0],
)

function switchLanguage() {
  router.go(locale.value === 'de' ? '/' : '/de/')
}

function selectCategory(id: string) {
  activeCategory.value = id
}
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
    <AppHeader
      :locale="locale"
      @switch-language="switchLanguage"
    />

    <div class="flex flex-1 overflow-hidden">
      <AppSidebar
        :collapsed="sidebarCollapsed"
        :categories="trickCategories"
        :active-category="activeCategory"
        :locale="locale"
        @select="selectCategory"
        @toggle="sidebarCollapsed = !sidebarCollapsed"
      />

      <main class="flex-1 overflow-y-auto p-2 md:p-2">
        <!-- Search bar -->
        <div class="px-2 py-4">
          <div class="relative max-w-2xl mx-auto">
            <Icon icon="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            <input
                :value="searchQuery"
                type="search"
                :placeholder="locale === 'de' ? 'Tricks suchen…' : 'Search tricks…'"
                class="w-full bg-gray-900 border border-gray-700 rounded-xl pl-9 pr-4 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                @input="searchQuery = ($event.target as HTMLInputElement).value"
            />
          </div>
        </div>
        <TrickList
          :category="activeCategory$"
          :all-categories="trickCategories"
          :locale="locale"
          :search-query="searchQuery"
        />
      </main>
    </div>
  </div>
</template>
