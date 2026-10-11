<script setup>
import * as icons from 'lucide-vue-next'
import { services } from '@/components/data/services'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
<<<<<<< HEAD
  <section id="services" class="section-shell section-pad border-t border-line-700/60">
    <div v-reveal class="max-w-xl">
=======
  <section id="services" class="section-shell section-pad border-t border-white/10">
    <div v-reveal class="max-w-2xl">
>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
      <p class="kicker">{{ t('services.kicker') }}</p>
      <h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
        {{ t('services.title') }}
      </h2>
    </div>

<<<<<<< HEAD
    <div v-reveal class="mt-12 divide-y divide-line-700 border-y border-line-700">
      <div
        v-for="(service, index) in services"
        :key="service.title"
        class="grid gap-4 py-8 sm:grid-cols-[minmax(0,320px)_1fr] sm:items-start sm:gap-10"
      >
        <div class="flex items-center gap-3.5">
          <component :is="icons[service.icon]" :size="20" :stroke-width="1.75" class="text-signal-400" />
          <h3 class="font-display text-lg font-semibold text-paper-100">{{ t(`services.items.${index}.title`) }}</h3>
        </div>
        <p class="max-w-xl text-[15px] leading-relaxed text-paper-300">{{ t(`services.items.${index}.description`) }}</p>
      </div>
=======
    <div v-reveal class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="(service, index) in services"
        :key="service.title"
        class="soft-card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30"
      >
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-300">
          <component :is="icons[service.icon]" :size="22" :stroke-width="1.75" />
        </div>

        <h3 class="mt-5 font-display text-xl font-semibold text-paper-100">{{ t(`services.items.${index}.title`) }}</h3>
        <p class="mt-3 text-[15px] leading-relaxed text-slate-300">{{ t(`services.items.${index}.description`) }}</p>

        <div class="mt-6 flex items-center gap-2 text-sm font-medium text-amber-200">
          <span>Explore service</span>
          <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      </article>
>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
    </div>
  </section>
</template>
