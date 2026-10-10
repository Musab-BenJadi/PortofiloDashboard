<script setup>
import { computed } from 'vue'
import { ExternalLink, FolderGit2 } from '@lucide/vue'
import { projects } from '@/components/data/projects'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
const translatedProjects = computed(() => projects.map((project, index) => ({
  ...project,
  ...t(`projects.items.${index}`),
})))
const featured = computed(() => translatedProjects.value.find((project) => project.featured))
const rest = computed(() => translatedProjects.value.filter((project) => !project.featured))
</script>

<template>
  <section id="projects" class="section-shell section-pad border-t border-line-700/60">
    <div v-reveal class="max-w-xl">
      <p class="kicker">{{ t('projects.kicker') }}</p>
      <h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
        {{ t('projects.title') }}
      </h2>
    </div>

    <!-- Featured project -->
    <article
      v-if="featured"
      v-reveal
      class="mt-12 overflow-hidden rounded-2xl border border-line-600 bg-ink-900/50"
    >
      <div class="grid lg:grid-cols-2">
        <div class="flex flex-col justify-center p-8 sm:p-10">
          <span class="font-mono text-xs text-signal-400">{{ t('projects.featured') }}</span>
          <h3 class="mt-2 font-display text-2xl font-bold text-paper-100">{{ featured.name }}</h3>
          <p class="mt-3 text-[15px] leading-relaxed text-paper-300">{{ featured.description }}</p>

          <ul class="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <li
              v-for="feature in featured.features"
              :key="feature"
              class="text-sm text-paper-300 before:mr-2 before:text-signal-400 before:content-['—']"
            >
              {{ feature }}
            </li>
          </ul>

          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="tech in featured.stack"
              :key="tech"
              class="rounded-md border border-line-600 bg-ink-800/70 px-2.5 py-1 font-mono text-[11.5px] text-paper-300"
            >
              {{ tech }}
            </span>
          </div>

          <div class="mt-7 flex flex-wrap gap-3">
            <a
              :href="featured.github"
              class="inline-flex items-center gap-2 rounded-lg border border-line-500 px-4 py-2.5 text-sm font-medium text-paper-100 transition-colors hover:border-paper-300"
            >
              <Github :size="16" /> {{ t('projects.viewCode') }}
            </a>
            <a
              v-if="featured.demo"
              :href="featured.demo"
              class="inline-flex items-center gap-2 rounded-lg bg-signal-400 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-300"
            >
              <ExternalLink :size="16" /> {{ t('projects.liveDemo') }}
            </a>
          </div>
        </div>
      </div>
    </article>

    <!-- Smaller project cards -->
    <div class="mt-6 grid gap-6 sm:grid-cols-2">
      <article
        v-for="project in rest"
        :key="project.name"
        v-reveal
        class="flex flex-col overflow-hidden rounded-2xl border border-line-600 bg-ink-900/40 transition-colors duration-300 hover:border-line-500"
      >

        <div class="flex flex-1 flex-col p-7">
          <h3 class="font-display text-lg font-semibold text-paper-100">{{ project.name }}</h3>
          <p class="mt-2.5 text-sm leading-relaxed text-paper-300">{{ project.description }}</p>

          <ul class="mt-4 space-y-1.5">
            <li
              v-for="feature in project.features.slice(0, 4)"
              :key="feature"
              class="text-[13.5px] text-paper-400 before:mr-2 before:text-signal-400 before:content-['—']"
            >
              {{ feature }}
            </li>
          </ul>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="rounded-md border border-line-600 bg-ink-800/70 px-2.5 py-1 font-mono text-[11px] text-paper-300"
            >
              {{ tech }}
            </span>
          </div>

          <div class="mt-6 flex flex-wrap gap-3 pt-1">
            <a
              :href="project.github"
              class="inline-flex items-center gap-2 rounded-lg border border-line-500 px-3.5 py-2 text-[13.5px] font-medium text-paper-100 transition-colors hover:border-paper-300"
            >
              <Github :size="15" /> {{ t('projects.viewCode') }}
            </a>
            <a
              v-if="project.demo"
              :href="project.demo"
              class="inline-flex items-center gap-2 rounded-lg bg-signal-400 px-3.5 py-2 text-[13.5px] font-semibold text-ink-950 transition-colors hover:bg-signal-300"
            >
              <ExternalLink :size="15" /> {{ t('projects.liveDemo') }}
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
