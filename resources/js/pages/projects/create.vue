
<script setup lang="ts">
import { ref, computed } from 'vue';
import { Head, useForm, Link } from '@inertiajs/vue3'
import { ArrowLeft, Save, ImagePlus } from '@lucide/vue'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const props = defineProps<{
    skills: {
        id: number
        name: Record<string, string>
    }[]
}>()

const form = useForm({
    title: { en: '', ar: '' },
    subtitle: { en: '', ar: '' },
    description: { en: '', ar: '' },
    content: { en: '', ar: '' },

    thumbnail: null as File | null,
    gallery: [] as File[],

    live_url: '',
    github_url: '',
    project_type: '',
    status: 'completed',

    is_featured: false,
    is_published: false,

    sort_order: 0,
    completed_at: '',

    skills: [] as number[],
})

function submit() {
    form.post('/projects', {
        forceFormData: true,
    })
}

function toggleSkill(id: number, checked: boolean) {
    if (checked) {
        if (!form.skills.includes(id)) form.skills.push(id)
    } else {
        form.skills = form.skills.filter(skill => skill !== id)
    }
}

const skillSearch = ref('');

const filteredSkills = computed(() =>
    props.skills.filter(skill =>
        skill.name.en
            .toLowerCase()
            .includes(skillSearch.value.toLowerCase())
    )
);

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Projects', href: '/projects' },
            { title: 'New Project', href: '#' },
        ],
    },
})
</script>

<template>
    <Head title="Create Project" />

    <form @submit.prevent="submit" class="flex flex-col gap-6 p-4 md:p-8">

        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h1 class="text-2xl font-semibold">Create Project</h1>
                <p class="text-sm text-muted-foreground">
                    Add a new project to your portfolio.
                </p>
            </div>

            <div class="flex gap-2">
                <Button variant="outline" as-child>
                    <Link href="/projects">
                        <ArrowLeft class="mr-2 h-4 w-4" />
                        Back
                    </Link>
                </Button>

                <Button type="submit" :disabled="form.processing">
                    <Save class="mr-2 h-4 w-4" />
                    {{ form.processing ? 'Saving...' : 'Save Project' }}
                </Button>
            </div>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">

            <!-- Main information -->
            <div class="space-y-6 lg:col-span-2">

                <!-- English -->
                <section class="space-y-4 rounded-xl border bg-card p-6">
                    <h2 class="text-lg font-semibold">English Information</h2>

                    <div class="space-y-2">
                        <Label>Title</Label>
                        <Input v-model="form.title.en" placeholder="Project title" />
                        <p v-if="form.errors['title.en']" class="text-sm text-red-500">
                            {{ form.errors['title.en'] }}
                        </p>
                    </div>

                    <div class="space-y-2">
                        <Label>Subtitle</Label>
                        <Input v-model="form.subtitle.en" placeholder="Short subtitle" />
                    </div>

                    <div class="space-y-2">
                        <Label>Description</Label>
                        <Textarea v-model="form.description.en" rows="4" />
                    </div>

                    <div class="space-y-2">
                        <Label>Detailed Content</Label>
                        <Textarea v-model="form.content.en" rows="6" />
                    </div>
                </section>

                <!-- Arabic -->
                <section class="space-y-4 rounded-xl border bg-card p-6" dir="rtl">
                    <h2 class="text-lg font-semibold text-left">Arabic Information</h2>

                    <div class="space-y-2">
                        <Label>العنوان</Label>
                        <Input v-model="form.title.ar" dir="rtl" />
                    </div>

                    <div class="space-y-2">
                        <Label>العنوان الفرعي</Label>
                        <Input v-model="form.subtitle.ar" dir="rtl" />
                    </div>

                    <div class="space-y-2">
                        <Label>الوصف</Label>
                        <Textarea v-model="form.description.ar" rows="4" dir="rtl" />
                    </div>

                    <div class="space-y-2">
                        <Label>المحتوى التفصيلي</Label>
                        <Textarea v-model="form.content.ar" rows="6" dir="rtl" />
                    </div>
                </section>

                <!-- Project links -->
                <section class="space-y-4 rounded-xl border bg-card p-6">
                    <h2 class="text-lg font-semibold">Project Links</h2>

                    <div class="space-y-2">
                        <Label>Live URL</Label>
                        <Input v-model="form.live_url" placeholder="https://example.com" />
                    </div>

                    <div class="space-y-2">
                        <Label>GitHub URL</Label>
                        <Input v-model="form.github_url" placeholder="https://github.com/..." />
                    </div>
                </section>

                <!-- Media -->
                <section class="space-y-4 rounded-xl border bg-card p-6">
                    <h2 class="text-lg font-semibold">Project Media</h2>

                    <div class="space-y-2">
                        <Label>Thumbnail</Label>
                        <Input
                            type="file"
                            accept="image/*"
                            @change="form.thumbnail = ($event.target as HTMLInputElement).files?.[0] ?? null"
                        />
                    </div>

                    <div class="space-y-2">
                        <Label>Gallery Images</Label>
                        <Input
                            type="file"
                            accept="image/*"
                            multiple
                            @change="form.gallery = Array.from(($event.target as HTMLInputElement).files ?? [])"
                        />
                    </div>
                </section>
            </div>

            <!-- Sidebar -->
            <div class="space-y-6">

                <!-- Settings -->
                <section class="space-y-4 rounded-xl border bg-card p-6">
                    <h2 class="font-semibold">Project Settings</h2>

                    <div class="space-y-2">
                        <Label>Project Type</Label>
                        <Input v-model="form.project_type" placeholder="Web Application" />
                    </div>

                    <div class="space-y-2">
                        <Label>Status</Label>
                        <select
                            v-model="form.status"
                            class="h-10 w-full rounded-md border bg-background px-3 text-sm"
                        >
                            <option value="completed">Completed</option>
                            <option value="in_progress">In Progress</option>
                            <option value="planned">Planned</option>
                        </select>
                    </div>

                    <div class="space-y-2">
                        <Label>Completed At</Label>
                        <Input v-model="form.completed_at" type="date" />
                    </div>

                    <div class="space-y-2">
                        <Label>Sort Order</Label>
                        <Input v-model.number="form.sort_order" type="number" min="0" />
                    </div>

                    <div class="flex items-center justify-between">
                        <Label>Featured Project</Label>
                        <Switch
                            :model-value="form.is_featured"
                            @update:model-value="form.is_featured = $event"
                        />
                    </div>

                    <div class="flex items-center justify-between">
                        <Label>Published</Label>
                        <Switch
                            :model-value="form.is_published"
                            @update:model-value="form.is_published = $event"
                        />
                    </div>
                </section>

                <!-- Skills -->
                <!-- Skills -->
<section class="space-y-4 rounded-xl border bg-card p-6">
    <h2 class="font-semibold">Technologies & Skills</h2>

    <!-- Search -->
    <input
        v-model="skillSearch"
        type="text"
        placeholder="Search skills..."
        class="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
    />

    <!-- Selected Skills -->
    <div v-if="form.skills.length" class="flex flex-wrap gap-2">
        <span
            v-for="skillId in form.skills"
            :key="skillId"
            class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
        >
            {{ skills.find(skill => skill.id === skillId)?.name.en }}

            <button
                type="button"
                @click="toggleSkill(skillId, false)"
                class="hover:text-destructive"
            >
                &times;
            </button>
        </span>
    </div>

    <!-- Search Results -->
    <div class="max-h-48 space-y-2 overflow-y-auto rounded-md border p-3">
        <label
            v-for="skill in filteredSkills"
            :key="skill.id"
            class="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-muted"
        >
            <input
                type="checkbox"
                :checked="form.skills.includes(skill.id)"
                @change="toggleSkill(
                    skill.id,
                    ($event.target as HTMLInputElement).checked
                )"
            />

            <span class="text-sm">{{ skill.name.en }}</span>
        </label>

        <p
            v-if="filteredSkills.length === 0"
            class="py-2 text-center text-sm text-muted-foreground"
        >
            No skills found.
        </p>
    </div>
</section>

                <p v-if="form.hasErrors" class="text-sm text-red-500">
                    Please check the form for validation errors.
                </p>
            </div>
        </div>
    </form>
</template>
