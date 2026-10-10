<script setup>
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'
import { buildTypes } from '@/components/data/whatIBuild'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
const translatedBuildTypes = computed(() => buildTypes.map((type, index) => ({
  ...type,
  name: t(`build.types.${index}`),
})))
</script>

<template>
  <section class="section-shell section-pad border-t border-line-700/60">
    <div v-reveal class="max-w-xl">
      <p class="kicker">{{ t('build.kicker') }}</p>
      <h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
        {{ t('build.title') }}
      </h2>
    </div>

    <div v-reveal class="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-600 bg-line-700 sm:grid-cols-3">
      <div
        v-for="type in translatedBuildTypes"
        :key="type.name"
        tabindex="0"
        class="group flex flex-col items-start gap-4 bg-ink-900/60 p-6 transition-colors duration-200 hover:bg-ink-800/80 focus-visible:bg-ink-800/80 sm:p-7"
      >
        <component
          :is="icons[type.icon]"
          :size="22"
          :stroke-width="1.5"
          class="text-paper-400 transition-colors duration-200 group-hover:text-signal-400 group-focus-visible:text-signal-400"
        />
        <span class="text-[14.5px] font-medium leading-snug text-paper-200">{{ type.name }}</span>
      </div>
    </div>
  </section>
</template>
