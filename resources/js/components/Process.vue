<script setup>
import { computed } from 'vue'
import { processSteps } from '@/components/data/process'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
const steps = computed(() => processSteps.map((step, index) => ({
  ...step,
  ...t(`process.steps.${index}`),
})))
</script>

<template>
  <section id="process" class="section-shell section-pad border-t border-line-700/60">
    <div v-reveal class="max-w-xl">
      <p class="kicker">{{ t('process.kicker') }}</p>
      <h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
        {{ t('process.title') }}
      </h2>
    </div>

    <ol class="relative mt-14 max-w-2xl">
      <li
        v-for="(step, index) in steps"
        :key="step.index"
        v-reveal
        :style="{ transitionDelay: `${index * 60}ms` }"
        class="relative flex gap-6 pb-12 last:pb-0"
      >
        <div class="flex flex-col items-center">
          <span
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-signal-500/40 bg-ink-900 font-mono text-sm text-signal-400"
          >
            {{ step.index }}
          </span>
          <span
            v-if="index !== steps.length - 1"
            class="mt-2 w-px flex-1 bg-line-600"
            aria-hidden="true"
          ></span>
        </div>

        <div class="pt-1.5">
          <h3 class="font-display text-lg font-semibold text-paper-100">{{ step.title }}</h3>
          <p class="mt-1.5 max-w-md text-[15px] leading-relaxed text-paper-300">
            {{ step.description }}
          </p>
        </div>
      </li>
    </ol>
  </section>
</template>
