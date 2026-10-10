<script setup>
import * as icons from 'lucide-vue-next'
import { skillGroups } from '@/components/data/skills'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section id="skills" class="section-shell section-pad border-t border-line-700/60">
    <div v-reveal class="max-w-xl">
      <p class="kicker">{{ t('skills.kicker') }}</p>
      <h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
        {{ t('skills.title') }}
      </h2>
    </div>

    <div v-reveal class="mt-12 grid gap-6 lg:grid-cols-3">
      <div
        v-for="(group, groupIndex) in skillGroups"
        :key="group.label"
        class="rounded-2xl border border-line-600 bg-ink-900/40 p-7"
      >
        <h3 class="font-display text-lg font-semibold text-paper-100">{{ t(`skills.groups.${groupIndex}.label`) }}</h3>
        <p class="mt-1.5 text-sm text-paper-400">{{ t(`skills.groups.${groupIndex}.description`) }}</p>

        <ul class="mt-6 space-y-1.5">
          <li
            v-for="item in group.items"
            :key="item.name"
            class="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 transition-colors duration-200 hover:border-line-600 hover:bg-ink-800/70"
          >
            <component
              :is="icons[item.icon]"
              :size="17"
              :stroke-width="1.75"
              class="shrink-0 text-paper-400 transition-colors duration-200 group-hover:text-signal-400"
            />
            <span class="text-sm text-paper-200">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
