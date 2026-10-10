<script setup>
import { computed, ref } from 'vue'
import { Github, Linkedin, Mail, Send } from 'lucide-vue-next'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()

const form = ref({
  name: '',
  email: '',
  projectType: '',
  message: '',
})

const status = ref('idle') // idle | submitting | sent

const projectTypeValues = [
  'Custom web application',
  'Admin dashboard',
  'SaaS platform',
  'REST API',
  'Something else',
]
const projectTypes = computed(() => t('contact.projectTypes').map((label, index) => ({
  label,
  value: projectTypeValues[index],
})))

function handleSubmit() {
  // TODO: wire this up to a real endpoint, e.g. a Laravel API route:
  // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form.value) })
  status.value = 'submitting'
  window.setTimeout(() => {
    status.value = 'sent'
  }, 500)
}
</script>

<template>
  <section id="contact" class="section-shell section-pad border-t border-line-700/60">
    <div class="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div v-reveal>
        <h2 class="font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
          {{ t('contact.title') }}
        </h2>
        <p class="mt-5 max-w-sm text-[15.5px] leading-relaxed text-paper-300">
          {{ t('contact.description') }}
        </p>

        <div class="mt-9 flex flex-col gap-4">
          <a
            href="https://github.com/Musab-BenJadi" target="_blank"
            class="inline-flex items-center gap-3 text-sm text-paper-300 transition-colors hover:text-paper-100"
          >
            <Github :size="18" /> github.com/Musab-BenJadi
          </a>
          <a
            href="https://www.linkedin.com/in/musab-jadi/" target="_blank"
            class="inline-flex items-center gap-3 text-sm text-paper-300 transition-colors hover:text-paper-100"
          >
            <Linkedin :size="18" /> linkedin.com/in/musab-jadi/
          </a>
          <a
            href="mailto:info@jadi.com.ly"
            class="inline-flex items-center gap-3 text-sm text-paper-300 transition-colors hover:text-paper-100"
          >
            <Mail :size="18" /> info@jadi.com.ly
          </a>
        </div>
      </div>

      <div v-reveal class="rounded-2xl border border-line-600 bg-ink-900/40 p-7 sm:p-9">
        <form v-if="status !== 'sent'" class="grid gap-5 sm:grid-cols-2" @submit.prevent="handleSubmit">
          <div class="sm:col-span-1">
            <label for="name" class="mb-1.5 block text-sm text-paper-300">{{ t('contact.name') }}</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              name="name"
              required
              class="w-full rounded-lg border border-line-600 bg-ink-950/60 px-3.5 py-2.5 text-[15px] text-paper-100 placeholder:text-paper-400/60 focus:border-signal-400"
              :placeholder="t('contact.namePlaceholder')"
            />
          </div>

          <div class="sm:col-span-1">
            <label for="email" class="mb-1.5 block text-sm text-paper-300">{{ t('contact.email') }}</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              required
              class="w-full rounded-lg border border-line-600 bg-ink-950/60 px-3.5 py-2.5 text-[15px] text-paper-100 placeholder:text-paper-400/60 focus:border-signal-400"
              :placeholder="t('contact.emailPlaceholder')"
            />
          </div>

          <div class="sm:col-span-2">
            <label for="projectType" class="mb-1.5 block text-sm text-paper-300">{{ t('contact.projectType') }}</label>
            <select
              id="projectType"
              v-model="form.projectType"
              name="projectType"
              class="w-full rounded-lg border border-line-600 bg-ink-950/60 px-3.5 py-2.5 text-[15px] text-paper-100 focus:border-signal-400"
            >
              <option value="" disabled>{{ t('contact.selectType') }}</option>
              <option v-for="type in projectTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
            </select>
          </div>

          <div class="sm:col-span-2">
            <label for="message" class="mb-1.5 block text-sm text-paper-300">{{ t('contact.message') }}</label>
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              rows="4"
              required
              class="w-full rounded-lg border border-line-600 bg-ink-950/60 px-3.5 py-2.5 text-[15px] text-paper-100 placeholder:text-paper-400/60 focus:border-signal-400"
              :placeholder="t('contact.messagePlaceholder')"
            ></textarea>
          </div>

          <div class="sm:col-span-2">
            <button
              type="submit"
              :disabled="status === 'submitting'"
              class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-signal-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-300 disabled:opacity-60 sm:w-auto"
            >
              <Send :size="16" />
              {{ status === 'submitting' ? t('contact.sending') : t('contact.send') }}
            </button>
          </div>
        </form>

        <div v-else class="flex flex-col items-start gap-2 py-6">
          <p class="font-display text-lg font-semibold text-paper-100">{{ t('contact.sent') }}</p>
          <p class="text-sm text-paper-300">
            {{ t('contact.thanks') }} {{ t('contact.formNote') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
