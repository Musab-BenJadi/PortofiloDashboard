<script setup>
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
const focusAreas = computed(() => t('about.focusAreas'))
const stats = computed(() => t('about.stats'))
</script>

<template>
<<<<<<< HEAD
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
=======
  <section id="about" class="section-shell section-pad border-t border-white/10">
    <div v-reveal class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      <div class="space-y-6">
        <p class="kicker">{{ t('about.focusHeading') }}</p>
        <h2 class="font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
          {{ t('about.title') }}
        </h2>
        <p class="max-w-lg text-[15.5px] leading-relaxed text-slate-300">
          {{ t('about.description') }}
        </p>

        <dl class="grid grid-cols-2 gap-4 pt-3">
          <div v-for="stat in stats" :key="stat.label" class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <dt class="font-display text-2xl font-bold text-amber-300">{{ stat.value }}</dt>
            <dd class="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{{ stat.label }}</dd>
>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
          </div>
        </dl>
      </div>

<<<<<<< HEAD
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
=======
      <div class="soft-card p-7 sm:p-8">
        <div class="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
          <p class="text-sm text-slate-300">{{ t('about.focusHeading') }}</p>
          <span class="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-200">Ready</span>
        </div>

        <ul class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <li v-for="area in focusAreas" :key="area" class="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-[14.5px] text-slate-200">
            <Check :size="16" class="mt-0.5 shrink-0 text-amber-300" />
            <span>{{ area }}</span>
>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
