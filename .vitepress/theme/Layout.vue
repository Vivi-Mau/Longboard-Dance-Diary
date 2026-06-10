<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useData, useRouter } from 'vitepress'
import AppHeader from '../../components/AppHeader.vue'
import AppSidebar from '../../components/AppSidebar.vue'
import TrickList from '../../components/TrickList.vue'
import { trickCategories } from '../../data/tricks'
import type { Locale } from '../../data/tricks'

const { lang } = useData()
const router = useRouter()

const locale = computed<Locale>(() =>
  lang.value?.startsWith('de') ? 'de' : 'en',
)

const sidebarCollapsed = ref(false)
const activeCategory = ref(trickCategories[0].id)
const searchQuery = ref('')

onMounted(() => {
  sidebarCollapsed.value = window.innerWidth < 1024
})

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
        :search-query="searchQuery"
        @select="selectCategory"
        @toggle="sidebarCollapsed = !sidebarCollapsed"
        @update:search-query="searchQuery = $event"
      />

      <main class="flex-1 overflow-y-auto p-4 md:p-8">
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
