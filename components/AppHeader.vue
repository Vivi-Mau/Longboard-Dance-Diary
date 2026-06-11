<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from 'radix-vue'
import type { Locale } from '@/data/tricks'

const props = defineProps<{
  locale: Locale
}>()

const emit = defineEmits<{
  'switch-language': []
}>()

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: 'circle-flags:gb' },
  { code: 'de', label: 'Deutsch', flag: 'circle-flags:de' },
]

const current = () => languages.find(l => l.code === props.locale)!
</script>

<template>
  <header class="sticky top-0 z-50 bg-gray-950/95 backdrop-blur border-b border-gray-800 px-4 py-3">
    <div class="flex items-center">
      <div class="flex-1" />

      <div class="flex items-center gap-2 shrink-0">
        <Icon icon="mdi:skateboard" class="w-12 h-8 text-orange-400" />
        <span class="font-bold text-orange-400 tracking-tight">Longboard Dance Diary</span>
      </div>

      <div class="flex-1 flex justify-end">
        <DropdownMenuRoot>
          <DropdownMenuTrigger
            class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors text-gray-300 hover:text-orange-400"
          >
            <Icon :icon="current().flag" class="w-5 h-5 rounded-full" />
            <span class="hidden sm:inline text-sm font-semibold uppercase">{{ current().code }}</span>
            <Icon icon="lucide:chevron-down" class="hidden sm:inline w-3 h-3 opacity-60" />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            :side-offset="6"
            class="z-50 min-w-[140px] rounded-xl border border-gray-700 bg-gray-900 p-1 shadow-xl"
          >
            <DropdownMenuItem
              v-for="lang in languages"
              :key="lang.code"
              class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm cursor-pointer outline-none transition-colors"
              :class="lang.code === locale
                ? 'text-orange-400 bg-orange-500/10'
                : 'text-gray-300 hover:bg-gray-800 hover:text-gray-100'"
              @click="lang.code !== locale && emit('switch-language')"
            >
              <Icon :icon="lang.flag" class="w-5 h-5 rounded-full shrink-0" />
              <span>{{ lang.label }}</span>
              <Icon v-if="lang.code === locale" icon="lucide:check" class="w-3.5 h-3.5 ml-auto" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuRoot>
      </div>
    </div>
  </header>
</template>
