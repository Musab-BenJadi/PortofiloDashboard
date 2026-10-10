<script setup>
import { ArrowRight, ArrowUpRight, Check, Code2, MonitorSmartphone, Sparkles } from 'lucide-vue-next'
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

const metrics = [
  { label: 'Projects shipped', value: '18+' },
  { label: 'Avg. delivery', value: '2-4 w' },
  { label: 'Client focus', value: '100%' },
]
</script>

<template>
  <section id="home" class="section-shell relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pt-44">
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_26%),radial-gradient(circle_at_80%_10%,_rgba(96,165,250,0.18),_transparent_24%),radial-gradient(circle_at_50%_40%,_rgba(168,85,247,0.12),_transparent_35%)]"></div>

    <div class="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
      <div>
        <div class="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 shadow-[0_0_30px_rgba(251,191,36,0.08)]">
          <span class="relative flex h-2.5 w-2.5">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70"></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          </span>
          <span class="font-mono text-[12px] uppercase tracking-[0.18em] text-amber-100/80">{{ t('hero.availability') }}</span>
        </div>

        <h1 class="mt-7 max-w-xl font-display text-5xl font-black leading-[0.96] tracking-[-0.05em] text-paper-100 sm:text-6xl lg:text-[5rem]">
          {{ t('hero.headline').split(' ').slice(0, 2).join(' ') }}
          <span class="text-gradient">{{ t('hero.headline').split(' ').slice(2).join(' ') }}</span>
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
          {{ t('hero.description') }}
        </p>

        <div class="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <a href="#projects" class="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_rgba(251,191,36,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_25px_45px_rgba(251,191,36,0.45)]">
            {{ t('hero.viewProjects') }}
            <ArrowRight :size="16" :class="isArabic ? 'rotate-180' : ''" class="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-paper-100 transition-all duration-200 hover:border-white/20 hover:bg-white/10">
            {{ t('hero.workTogether') }}
            <ArrowUpRight :size="16" />
          </a>
        </div>

        <div class="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <span class="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-emerald-200">
            <Check :size="14" class="text-emerald-300" />
            Business-ready products
          </span>
          <span class="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-sky-200">
            <Sparkles :size="14" class="text-sky-300" />
            High-converting UI
          </span>
        </div>

        <dl class="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
          <div v-for="item in metrics" :key="item.label" class="rounded-2xl border border-white/5 bg-white/3 p-3">
            <dt class="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{{ item.label }}</dt>
            <dd class="mt-2 font-display text-2xl font-bold text-paper-100">{{ item.value }}</dd>
          </div>
        </dl>
      </div>

      <div class="relative">
        <div class="absolute -left-6 top-10 h-36 w-36 rounded-full bg-amber-400/20 blur-3xl"></div>
        <div class="absolute -right-2 bottom-6 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl"></div>

        <div class="glass-panel relative mx-auto max-w-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/75 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.75)]">
          <div class="rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-4">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
              <div class="flex items-center gap-2">
                <span class="h-3 w-3 rounded-full bg-rose-400"></span>
                <span class="h-3 w-3 rounded-full bg-amber-400"></span>
                <span class="h-3 w-3 rounded-full bg-emerald-400"></span>
              </div>
              <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">product-shell</span>
            </div>

            <div class="mt-5 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div class="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-300/10 via-slate-900 to-slate-900 p-4">
                <p class="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-200">Current sprint</p>
                <h3 class="mt-3 font-display text-2xl font-bold text-white">Growth dashboard</h3>
                <div class="mt-6 space-y-4">
                  <div>
                    <div class="mb-1.5 flex items-center justify-between text-[11px] text-slate-300">
                      <span>Conversion</span>
                      <span>82%</span>
                    </div>
                    <div class="h-2.5 overflow-hidden rounded-full bg-slate-800">
                      <div class="h-full w-[82%] rounded-full bg-gradient-to-r from-amber-300 to-orange-400"></div>
                    </div>
                  </div>
                  <div>
                    <div class="mb-1.5 flex items-center justify-between text-[11px] text-slate-300">
                      <span>Engagement</span>
                      <span>74%</span>
                    </div>
                    <div class="h-2.5 overflow-hidden rounded-full bg-slate-800">
                      <div class="h-full w-[74%] rounded-full bg-gradient-to-r from-sky-400 to-indigo-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <div class="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                  <div class="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    <span>Stack</span>
                    <span>Live</span>
                  </div>
                  <div class="mt-4 space-y-2.5">
                    <div v-for="item in stack" :key="item.name" class="flex items-center justify-between text-sm text-slate-200">
                      <span>{{ item.name }}</span>
                      <span class="text-emerald-400">✓</span>
                    </div>
                  </div>
                </div>

                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div class="flex items-center gap-2 text-slate-200">
                    <Code2 :size="16" class="text-amber-300" />
                    <span class="font-medium">Build system</span>
                  </div>
                  <div class="mt-4 flex items-center gap-3">
                    <MonitorSmartphone :size="24" class="text-sky-300" />
                    <div class="flex-1">
                      <div class="h-2.5 overflow-hidden rounded-full bg-slate-800">
                        <div class="h-full w-[68%] rounded-full bg-gradient-to-r from-sky-400 to-indigo-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
