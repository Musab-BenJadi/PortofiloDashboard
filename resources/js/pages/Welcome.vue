<script setup>
import { useLocale } from '../composables/useLocale'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import TechStack from '@/components/TechStack.vue'
import Services from '@/components/Services.vue'
import Projects from '@/components/Projects.vue'
import Process from '@/components/Process.vue'
import WhatIBuild from '@/components/WhatIBuild.vue'
import Contact from '@/components/Contact.vue'
import SiteFooter from '@/components/Footer.vue'

const { locale, isArabic, t } = useLocale()
</script>

<template>
  <div class="min-h-screen bg-ink-950 text-paper-100 transition-colors duration-300" :lang="locale" :dir="isArabic ? 'rtl' : 'ltr'">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-signal-400 focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ink-950"
    >
      {{ t('app.skip') }}
    </a>

    <Navbar />

    <main id="main-content">
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Projects />
      <Process />
      <WhatIBuild />
      <Contact />
    </main>

    <SiteFooter />
  </div>
</template>
