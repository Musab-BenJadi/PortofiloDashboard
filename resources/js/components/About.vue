<script setup>
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
const focusAreas = computed(() => t('about.focusAreas'))
const stats = computed(() => t('about.stats'))
</script>

<template>
  <section id="about" class="section-shell section-pad border-t border-line-700/60">
    <div v-reveal class="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        <h2 class="font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
          {{ t('about.title') }}
        </h2>
        <p class="mt-5 max-w-md text-[15.5px] leading-relaxed text-paper-300">
          {{ t('about.description') }}
        </p>

        <dl class="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
          <div v-for="stat in stats" :key="stat.label">
            <dt class="font-display text-xl font-bold text-signal-400">{{ stat.value }}</dt>
            <dd class="mt-1 font-mono text-xs text-paper-400">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>

      <div class="rounded-2xl border border-line-600 bg-ink-900/50 p-8 sm:p-10">
        <p class="text-sm text-paper-400">{{ t('about.focusHeading') }}</p>
        <ul class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <li
            v-for="area in focusAreas"
            :key="area"
            class="flex items-start gap-2.5 text-[14.5px] text-paper-200"
          >
            <Check :size="16" class="mt-0.5 shrink-0 text-signal-400" />
            {{ area }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
