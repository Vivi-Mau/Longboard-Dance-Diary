<script setup lang="ts">
import { computed } from 'vue'
import {
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  CheckboxRoot,
  CheckboxIndicator,
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import type { Trick, Locale } from '@/data/tricks'
import { useTrickProgress } from '@/composables/useTrickProgress'

const props = defineProps<{
  trick: Trick
  locale: Locale
}>()

const { isChecked, toggle } = useTrickProgress()

const checked = computed(() => isChecked(props.trick.id))

const difficultyMap = {
  easy: {
    label: { en: 'Easy', de: 'Leicht' },
    classes: 'bg-green-500/15 text-green-400 border-green-500/30',
  },
  medium: {
    label: { en: 'Medium', de: 'Mittel' },
    classes: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  },
  advanced: {
    label: { en: 'Advanced', de: 'Fortgeschritten' },
    classes: 'bg-red-500/15 text-red-400 border-red-500/30',
  },
}

const diff = computed(() => difficultyMap[props.trick.difficulty])
</script>

<template>
  <AccordionItem :value="trick.id" class="border-b border-gray-800/80 last:border-0">
    <AccordionHeader class="flex items-stretch">
      <!-- Checkbox — click.stop prevents accordion from toggling -->
      <div class="flex items-center px-3" @click.stop>
        <CheckboxRoot
          :checked="checked"
          class="w-5 h-5 rounded flex items-center justify-center border-2 transition-all cursor-pointer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          :class="checked
            ? 'bg-orange-500 border-orange-500'
            : 'bg-transparent border-gray-600 hover:border-orange-400'"
          @update:checked="toggle(trick.id)"
        >
          <CheckboxIndicator>
            <Icon icon="lucide:check" class="w-3 h-3 text-white" />
          </CheckboxIndicator>
        </CheckboxRoot>
      </div>

      <!-- Trigger (name + badge + chevron) -->
      <AccordionTrigger
        class="flex items-center flex-1 min-w-0 py-3 pr-3 text-left group focus:outline-none"
      >
        <span
          class="flex-1 text-sm font-medium truncate transition-colors"
          :class="checked ? 'text-gray-600' : 'text-gray-100 group-hover:text-orange-300'"
        >
          {{ trick.name }}
        </span>
        <span
          class="ml-2 px-2 py-0.5 rounded-full text-xs font-medium border shrink-0"
          :class="diff.classes"
        >
          {{ diff.label[locale] }}
        </span>
        <Icon
          icon="lucide:chevron-down"
          class="w-4 h-4 ml-2 text-gray-500 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
        />
      </AccordionTrigger>
    </AccordionHeader>

    <AccordionContent
      class="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
    >
      <div class="pb-4 pl-11 pr-3 flex gap-4">
        <div class="flex-1 min-w-0">
          <p class="text-sm text-gray-400 mb-3 leading-relaxed">
            {{ trick.description[locale] }}
          </p>

          <ol class="space-y-2">
            <li
              v-for="(step, i) in trick.steps[locale]"
              :key="i"
              class="flex gap-2.5 text-sm"
            >
              <span class="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center shrink-0 mt-0.5 font-semibold tabular-nums">
                {{ i + 1 }}
              </span>
              <span class="text-gray-300 leading-relaxed">{{ step }}</span>
            </li>
          </ol>
        </div>

        <div v-if="trick.image" class="shrink-0 w-24">
          <img :src="trick.image" :alt="trick.name" class="w-full h-auto" />
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</template>
