<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Github, Linkedin, Menu, X } from 'lucide-vue-next'
import { useLocale } from '../composables/useLocale'

const { locale, setLocale, t } = useLocale()
const links = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'services', href: '#services' },
  { key: 'contact', href: '#contact' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function closeMenu() {
  menuOpen.value = false
}

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'ar' : 'en')
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'py-2' : 'py-4'"
  >
    <div
      class="section-shell flex items-center justify-between rounded-2xl border transition-all duration-300"
      :class="
        scrolled
          ? 'border-line-600 bg-ink-950/85 shadow-panel backdrop-blur-md'
          : 'border-transparent bg-transparent'
      "
    >
      <a
        href="#home"
        class="flex items-center gap-2 py-3 font-display text-[15px] font-bold tracking-tight text-paper-100"
      >
        <span class="text-signal-400">&lt;</span>
        Musab Jadi
        <span class="text-signal-400">/&gt;</span>
      </a>

      <nav class="hidden items-center gap-8 lg:flex" :aria-label="t('nav.primary')">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-paper-300 transition-colors hover:text-paper-100"
        >
          {{ t(`nav.${link.key}`) }}
        </a>
      </nav>

      <div class="hidden items-center gap-4 lg:flex">
        <button
          type="button"
          class="rounded-md border border-line-600 px-3 py-2 font-mono text-xs text-paper-200 transition-colors hover:border-signal-400 hover:text-signal-300"
          :aria-label="t('nav.switchLanguage')"
          @click="toggleLocale"
        >
          {{ t('nav.switchLanguage') }}
        </button>
        <a
          href="https://github.com/Musab-BenJadi" target="_blank"
          :aria-label="t('nav.github')"
          class="text-paper-300 transition-colors hover:text-paper-100"
        >
          <Github :size="19" :stroke-width="1.75" />
        </a>
        <a
          href="https://www.linkedin.com/in/musab-jadi/" target="_blank"
          :aria-label="t('nav.linkedin')"
          class="text-paper-300 transition-colors hover:text-paper-100"
        >
          <Linkedin :size="19" :stroke-width="1.75" />
        </a>
        <a
          href="#contact"
          class="rounded-lg border border-signal-500/40 bg-signal-400/10 px-4 py-2 text-sm font-medium text-signal-300 transition-colors hover:bg-signal-400/20"
        >
          {{ t('nav.contactMe') }}
        </a>
      </div>

      <button
        type="button"
        class="p-2 text-paper-100 lg:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
        @click="menuOpen = !menuOpen"
      >
        <Menu v-if="!menuOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="menuOpen"
        id="mobile-menu"
        :aria-label="t('nav.mobile')"
        class="section-shell mt-2 lg:hidden"
      >
        <div class="flex flex-col gap-1 rounded-2xl border border-line-600 bg-ink-900/95 p-4 shadow-panel backdrop-blur-md">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="rounded-lg px-3 py-2.5 text-[15px] text-paper-200 transition-colors hover:bg-ink-800 hover:text-paper-100"
            @click="closeMenu"
          >
            {{ t(`nav.${link.key}`) }}
          </a>
          <div class="mt-2 flex flex-wrap items-center gap-4 border-t border-line-700 px-3 pt-3">
            <button
              type="button"
              class="rounded-md border border-line-600 px-3 py-2 font-mono text-xs text-paper-200 transition-colors hover:border-signal-400 hover:text-signal-300"
              :aria-label="t('nav.switchLanguage')"
              @click="toggleLocale"
            >
              {{ t('nav.switchLanguage') }}
            </button>
            <a href="#" class="text-paper-300 hover:text-paper-100" :aria-label="t('nav.github')">
              <Github :size="19" />
            </a>
            <a href="#" class="text-paper-300 hover:text-paper-100" :aria-label="t('nav.linkedin')">
              <Linkedin :size="19" />
            </a>
            <a
              href="#contact"
              class="ml-auto rounded-lg bg-signal-400 px-4 py-2 text-sm font-semibold text-ink-950"
              @click="closeMenu"
            >
              {{ t('nav.contactMe') }}
            </a>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>
