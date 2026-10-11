<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
<<<<<<< HEAD
import { Github, Linkedin, Menu, X } from 'lucide-vue-next'
=======
import { Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-vue-next'
>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
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
<<<<<<< HEAD

function onScroll() {
  scrolled.value = window.scrollY > 24
=======
const isDarkMode = ref(true)

function onScroll() {
  scrolled.value = window.scrollY > 20
>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
}

function closeMenu() {
  menuOpen.value = false
}

<<<<<<< HEAD
=======
function scrollToSection(event, targetId) {
  if (!targetId || !targetId.startsWith('#')) {
    return
  }

  event.preventDefault()

  const element = document.querySelector(targetId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  closeMenu()
}

function applyTheme(nextMode) {
  const root = document.documentElement
  const isLight = nextMode === 'light'

  root.classList.toggle('light-mode', isLight)
  root.classList.toggle('dark', !isLight)
  isDarkMode.value = !isLight
  localStorage.setItem('theme-mode', isLight ? 'light' : 'dark')
}

function toggleTheme() {
  applyTheme(isDarkMode.value ? 'light' : 'dark')
}

>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
function toggleLocale() {
  setLocale(locale.value === 'en' ? 'ar' : 'en')
}

onMounted(() => {
<<<<<<< HEAD
=======
  const savedTheme = localStorage.getItem('theme-mode')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const nextMode = savedTheme || (prefersDark ? 'dark' : 'light')

  applyTheme(nextMode)
>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
<<<<<<< HEAD
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
=======
  <header class="fixed inset-x-0 top-0 z-50 transition-all duration-300" :class="scrolled ? 'py-3' : 'py-5'">
    <div class="section-shell">
      <div
        class="flex items-center justify-between rounded-full border transition-all duration-300"
        :class="
          scrolled
            ? 'border-white/10 bg-slate-950/80 px-4 py-2.5 shadow-[0_18px_50px_rgba(15,23,42,0.5)] backdrop-blur-xl'
            : 'border-white/5 bg-slate-950/25 px-5 py-3 backdrop-blur-sm'
        "
      >
        <a href="#home" class="flex items-center gap-2.5 py-1 font-display text-[15px]  font-bold tracking-tight text-paper-100" @click="scrollToSection($event, '#home')">
          <span class="flex h-8 w-8 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 text-sm text-amber-300">&lt;/&gt;</span>
          <span>Musab Jadi</span>
        </a>

        <nav class="hidden items-center justify-center lg:flex" :aria-label="t('nav.primary')">
            <button
                v-for="link in links"
                :key="link.href"
                type="button"
                class="cursor-pointer rounded-md hover:border-b hover:border-amber-200/60 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-paper-200 transition-colors hover:bg-amber-400/20 hover:text-amber-200">
                <a
                    :href="link.href"
                    class="text-sm text-gray-400 transition-colors"
                    @click="scrollToSection($event, link.href)"
                    >
                    {{ t(`nav.${link.key}`) }}
                </a>
            </button>
        </nav>

        <div class="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            class="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper-200 transition-colors hover:border-amber-300/60 hover:text-amber-200"
            :aria-label="t('nav.switchLanguage')"
            @click="toggleLocale"
          >
            {{ t('nav.switchLanguage') }}
          </button>
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-paper-300 transition-colors hover:border-amber-300/60 hover:text-paper-100"
            :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
          >
            <Sun v-if="isDarkMode" :size="18" />
            <Moon v-else :size="18" />
          </button>
          <a href="https://github.com/Musab-BenJadi" target="_blank" :aria-label="t('nav.github')" class="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-paper-300 transition-colors hover:border-amber-300/60 hover:text-paper-100">
            <Github :size="18" :stroke-width="1.75" />
          </a>
          <a href="https://www.linkedin.com/in/musab-jadi/" target="_blank" :aria-label="t('nav.linkedin')" class="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-paper-300 transition-colors hover:border-amber-300/60 hover:text-paper-100">
            <Linkedin :size="18" :stroke-width="1.75" />
          </a>
          <a href="#contact" class="rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition-transform hover:-translate-y-0.5" @click="scrollToSection($event, '#contact')">
            {{ t('nav.contactMe') }}
          </a>
        </div>

        <button type="button" class="p-2 text-paper-100 lg:hidden" :aria-expanded="menuOpen" aria-controls="mobile-menu" :aria-label="menuOpen ? t('nav.closeMenu') : t('nav.openMenu')" @click="menuOpen = !menuOpen">
          <Menu v-if="!menuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>
    </div>

    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
      <nav v-if="menuOpen" id="mobile-menu" :aria-label="t('nav.mobile')" class="section-shell mt-3 lg:hidden">
        <div class="flex flex-col gap-1 rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-[0_30px_80px_rgba(2,6,23,0.65)] backdrop-blur-xl">
>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
<<<<<<< HEAD
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
=======
            class="rounded-2xl px-3 py-2.5 text-[15px] text-paper-200 transition-colors hover:bg-white/5 hover:text-paper-100"
            @click="scrollToSection($event, link.href)"
          >
            {{ t(`nav.${link.key}`) }}
          </a>
          <div class="mt-2 flex flex-wrap items-center gap-3 border-t border-white/10 px-3 pt-3">
            <button type="button" class="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper-200" :aria-label="t('nav.switchLanguage')" @click="toggleLocale">
              {{ t('nav.switchLanguage') }}
            </button>
            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-paper-300"
              :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
              @click="toggleTheme"
            >
              <Sun v-if="isDarkMode" :size="18" />
              <Moon v-else :size="18" />
            </button>
            <a href="https://github.com/Musab-BenJadi" target="_blank" class="text-paper-300 hover:text-paper-100" :aria-label="t('nav.github')">
              <Github :size="19" />
            </a>
            <a href="https://www.linkedin.com/in/musab-jadi/" target="_blank" class="text-paper-300 hover:text-paper-100" :aria-label="t('nav.linkedin')">
              <Linkedin :size="19" />
            </a>
            <a href="#contact" class="ml-auto rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-4 py-2 text-sm font-semibold text-slate-950" @click="scrollToSection($event, '#contact')">
>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
              {{ t('nav.contactMe') }}
            </a>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>
