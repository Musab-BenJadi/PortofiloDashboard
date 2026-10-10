<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <footer class="border-t border-line-700/60">
    <div class="section-shell flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="font-display text-base font-bold text-paper-100">Musab Jadi</p>
        <p class="mt-1 font-mono text-[12.5px] text-paper-400">
          {{ t('footer.tagline') }}
        </p>
      </div>
    </div>

    <div class="section-shell border-t border-line-700/60 py-6 flex flex-col items-center">
      <p class="text-center font-mono text-[12px] text-paper-400/70 sm:text-left">
        {{ t('footer.rights') }}
      </p>
    </div>
  </footer>
</template>
