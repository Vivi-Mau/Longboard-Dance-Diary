<script setup lang="ts">
import {
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionRoot,
} from 'radix-vue'
import { computed } from 'vue'
import { CheckboxRoot, CheckboxIndicator } from 'radix-vue'
import { Icon } from '@iconify/vue'
import type { TrickFamily, Locale } from '@/data/tricks'
import TrickAccordionItem from './TrickAccordionItem.vue'
import { useTrickProgress } from '@/composables/useTrickProgress'

const props = defineProps<{
  family: TrickFamily
  locale: Locale
}>()

const { checkedTricks, toggleAll } = useTrickProgress()

const familyState = computed<boolean | 'indeterminate'>(() => {
  checkedTricks.value
  const ids = props.family.tricks.map(t => t.id)
  const done = ids.filter(id => checkedTricks.value.has(id)).length
  if (done === 0) return false
  if (done === ids.length) return true
  return 'indeterminate'
})
</script>

<template>
  <AccordionItem :value="family.id" class="border-b border-gray-800/80 last:border-0">
    <AccordionHeader class="flex items-stretch">
      <!-- Family checkbox -->
      <div class="flex items-center px-3" @click.stop>
        <CheckboxRoot
          :checked="familyState"
          class="w-5 h-5 rounded flex items-center justify-center border-2 transition-all cursor-pointer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          :class="familyState === true
            ? 'bg-orange-500 border-orange-500'
            : familyState === 'indeterminate'
              ? 'bg-orange-500/40 border-orange-500/60'
              : 'bg-transparent border-gray-600 hover:border-orange-400'"
          @update:checked="toggleAll(family.tricks.map(t => t.id))"
        >
          <CheckboxIndicator>
            <Icon
              :icon="familyState === 'indeterminate' ? 'lucide:minus' : 'lucide:check'"
              class="w-3 h-3 text-white"
            />
          </CheckboxIndicator>
        </CheckboxRoot>
      </div>

      <AccordionTrigger
        class="flex items-center flex-1 min-w-0 py-3 pr-3 text-left group focus:outline-none"
      >
        <span class="flex-1 text-sm font-semibold truncate transition-colors text-gray-100 group-hover:text-orange-300">
          {{ family.name }}
        </span>
        <span class="text-xs tabular-nums px-1.5 py-0.5 rounded-full bg-gray-800 text-gray-300 mr-2">{{ family.tricks.length }}</span>
        <Icon
          icon="lucide:chevron-down"
          class="w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
        />
      </AccordionTrigger>
    </AccordionHeader>

    <AccordionContent
      class="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
    >
      <div class="px-4 pb-3">
        <p class="text-sm text-gray-500 italic mb-3 leading-relaxed">
          {{ family.description[locale] }}
        </p>
        <div class="rounded-xl border border-gray-800/60 overflow-hidden">
          <AccordionRoot type="single" collapsible>
            <TrickAccordionItem
              v-for="trick in family.tricks"
              :key="trick.id"
              :trick="trick"
              :locale="locale"
            />
          </AccordionRoot>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</template>
