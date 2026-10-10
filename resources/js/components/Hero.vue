<script setup>
import { ArrowRight, Circle } from 'lucide-vue-next'
import { useLocale } from '../composables/useLocale'

const { t, isArabic } = useLocale()

const stack = [
  { name: 'Laravel', ok: true },
  { name: 'Vue 3', ok: true },
  { name: 'Inertia.js', ok: true },
  { name: 'Tailwind CSS', ok: true },
  { name: 'MySQL', ok: true },
  { name: 'REST API', ok: true },
]
</script>

<template>
  <section id="home" class="section-shell relative pb-20 pt-36 sm:pb-28 sm:pt-44">
    <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      <div>
        <div
          class="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line-600 bg-ink-900/60 px-3.5 py-1.5"
          style="animation-delay: 0ms"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          <span class="font-mono text-[12.5px] text-paper-300">{{ t('hero.availability') }}</span>
        </div>

        <h1
          class="animate-fade-up mt-7 text-balance font-display lg:text-[2.6rem] font-extrabold lg:leading-[1.3]  tracking-tight text-paper-100 sm:text-6xl"
          style="animation-delay: 90ms"
        >
          {{ t('hero.headline') }}
        </h1>

        <p
          class="animate-fade-up mt-6 max-w-xl text-[17px] leading-relaxed text-paper-300"
          style="animation-delay: 170ms"
        >
          {{ t('hero.description') }}
        </p>

        <div
          class="animate-fade-up mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          style="animation-delay: 250ms"
        >
          <a
            href="#projects"
            class="group inline-flex items-center justify-center gap-2 rounded-lg bg-signal-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-signal-300"
          >
            {{ t('hero.viewProjects') }}
            <ArrowRight :size="16" :class="isArabic ? 'rotate-180' : ''" class="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-lg border border-line-500 px-5 py-3 text-sm font-semibold text-paper-100 transition-colors duration-200 hover:border-paper-300"
          >
            {{ t('hero.workTogether') }}
          </a>
        </div>

        <dl
          class="animate-fade-up mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line-700 pt-6"
          style="animation-delay: 320ms"
        >
          <div>
            <dt class="font-mono text-xs text-paper-400">{{ t('hero.backend') }}</dt>
            <dd class="mt-1 text-sm text-paper-200">Laravel · PHP</dd>
          </div>
          <div>
            <dt class="font-mono text-xs text-paper-400">{{ t('hero.frontend') }}</dt>
            <dd class="mt-1 text-sm text-paper-200">Vue 3 · Inertia</dd>
          </div>
          <div>
            <dt class="font-mono text-xs text-paper-400">{{ t('hero.focus') }}</dt>
            <dd class="mt-1 text-sm text-paper-200">{{ t('hero.fullStack') }}</dd>
          </div>
        </dl>
      </div>

      <div class="animate-fade-up" style="animation-delay: 280ms">
        <div class="relative mx-auto max-w-sm rounded-2xl border border-line-600 bg-ink-900/70 shadow-panel">
          <div class="flex items-center gap-1.5 border-b border-line-700 px-5 py-3.5">
            <Circle :size="9" class="fill-paper-400/40 text-paper-400/40" />
            <Circle :size="9" class="fill-paper-400/40 text-paper-400/40" />
            <Circle :size="9" class="fill-signal-400/70 text-signal-400/70" />
            <span class="ml-3 font-mono text-[11px] text-paper-400">stack.sh</span>
          </div>

          <div class="px-5 py-6 font-mono text-[13.5px] leading-relaxed">
            <p class="text-paper-300">
              <span class="text-signal-400">$</span> developer --stack
            </p>
            <ul class="mt-4 space-y-2.5">
              <li
                v-for="item in stack"
                :key="item.name"
                class="flex items-center justify-between text-paper-200"
              >
                <span>{{ item.name }}</span>
                <span class="text-emerald-400">✓</span>
              </li>
            </ul>
            <p class="mt-5 text-paper-300">
              <span class="text-signal-400">$</span>
              <span class="ml-1 inline-block h-[1em] w-[7px] translate-y-[2px] animate-blink bg-signal-400 align-middle"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
