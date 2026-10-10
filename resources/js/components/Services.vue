<script setup>
import * as icons from 'lucide-vue-next'
import { services } from '@/components/data/services'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <section id="services" class="section-shell section-pad border-t border-line-700/60">
    <div v-reveal class="max-w-xl">
      <p class="kicker">{{ t('services.kicker') }}</p>
      <h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
        {{ t('services.title') }}
      </h2>
    </div>

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
    </div>
  </section>
</template>
