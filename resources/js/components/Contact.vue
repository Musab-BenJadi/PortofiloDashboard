<script setup>
import { computed, reactive, ref } from 'vue';
import { router } from '@inertiajs/vue3';
import { Github, Linkedin, Mail, Send } from 'lucide-vue-next';
import { useLocale } from '../composables/useLocale';

const { t } = useLocale()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  project_type: '',
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
  status.value = 'submitting'

  router.post("/contact", form, 
  {
    preserveState: true,
    onSuccess:() => {
      status.value = 'sent'
    },
    onError: () => {
      status.value = 'error'
    }
  });

  window.setTimeout(() => {
    status.value = 'sent'
  }, 500)
}
</script>

<template>
  <section id="contact" class="section-shell section-pad border-t border-white/10">
    <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
      <div v-reveal class="space-y-6">
        <p class="kicker">{{ t('contact.title') }}</p>
        <h2 class="font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
          {{ t('contact.title') }}
        </h2>
        <p class="max-w-sm text-[15.5px] leading-relaxed text-slate-300">
          {{ t('contact.description') }}
        </p>

        <div class="space-y-3 pt-2">
          <a href="https://github.com/Musab-BenJadi" target="_blank" class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper-300 transition-colors hover:border-amber-300/30 hover:text-paper-100">
            <Github :size="18" class="text-amber-300" /> github.com/Musab-BenJadi
          </a>
          <a href="https://www.linkedin.com/in/musab-jadi/" target="_blank" class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper-300 transition-colors hover:border-amber-300/30 hover:text-paper-100">
            <Linkedin :size="18" class="text-amber-300" /> linkedin.com/in/musab-jadi/
          </a>
          <a href="mailto:info@jadi.com.ly" class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper-300 transition-colors hover:border-amber-300/30 hover:text-paper-100">
            <Mail :size="18" class="text-amber-300" /> info@jadi.com.ly
          </a>
        </div>
      </div>

      <div v-reveal class="soft-card p-6 sm:p-8">
        <form v-if="status !== 'sent'" class="grid gap-5 sm:grid-cols-2" @submit.prevent="handleSubmit">
          <div class="sm:col-span-1">
            <label for="name" class="mb-1.5 block text-sm text-slate-300">{{ t('contact.name') }}</label>
            <input id="name" v-model="form.name" type="text" name="name" required class="w-full rounded-xl border border-white/10 bg-slate-950 px-3.5 py-2.5 text-[15px] text-paper-100 placeholder:text-slate-500 focus:border-amber-300/60" :placeholder="t('contact.namePlaceholder')" />
          </div>
          

          <div class="sm:col-span-1">
            <label for="email" class="mb-1.5 block text-sm text-slate-300">{{ t('contact.email') }}</label>
            <input id="email" v-model="form.email" type="email" name="email" required class="w-full rounded-xl border border-white/10 bg-slate-950 px-3.5 py-2.5 text-[15px] text-paper-100 placeholder:text-slate-500 focus:border-amber-300/60" :placeholder="t('contact.emailPlaceholder')" />
          </div>

          <div class="sm:col-span-1">
            <label for="subject" class="mb-1.5 block text-sm text-slate-300">{{ t('contact.subject') }}</label>
            <input id="subject" v-model="form.subject" type="text" name="name" required class="w-full rounded-xl border border-white/10 bg-slate-950 px-3.5 py-2.5 text-[15px] text-paper-100 placeholder:text-slate-500 focus:border-amber-300/60" :placeholder="t('contact.subjectPlaceholder')" />
          </div>
          <div class="sm:col-span-2">
            <label for="projectType" class="mb-1.5 block text-sm text-slate-300">{{ t('contact.projectType') }}</label>
            <select id="projectType" v-model="form.project_type" name="project_type" class="w-full rounded-xl border border-white/10 bg-slate-950 px-3.5 py-2.5 text-[15px] text-paper-100 focus:border-amber-300/60">
              <option value="" disabled>{{ t('contact.selectType') }}</option>
              <option v-for="type in projectTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
            </select>
          </div>

          <div class="sm:col-span-2">
            <label for="message" class="mb-1.5 block text-sm text-slate-300">{{ t('contact.message') }}</label>
            <textarea id="message" v-model="form.message" name="message" rows="4" required class="w-full rounded-xl border border-white/10 bg-slate-950 px-3.5 py-2.5 text-[15px] text-paper-100 placeholder:text-slate-500 focus:border-amber-300/60" :placeholder="t('contact.messagePlaceholder')"></textarea>
          </div>

          <div class="sm:col-span-2">
            <button type="submit" :disabled="status === 'submitting'" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto">
              <Send :size="16" />
              {{ status === 'submitting' ? t('contact.sending') : t('contact.send') }}
            </button>
          </div>
        </form>

        <div v-else class="flex flex-col items-start gap-2 py-6">
          <p class="font-display text-lg font-semibold text-paper-100">{{ t('contact.sent') }}</p>
          <p class="text-sm text-slate-300">{{ t('contact.thanks') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
