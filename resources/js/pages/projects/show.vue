
<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { ArrowLeft, ExternalLink, Pencil, Check, X, BookCheck } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-vue-next';
// import { index as projects } from '@/routes/projects';

interface Project {
    id: number
    title: Record<string, string>
    slug: string
    subtitle: Record<string, string> | null
    description: Record<string, string>
    content: Record<string, string> | null
    skills?: Array<{
        id: number
        name: Record<string, string>
    }>
    thumbnail: string | null
    live_url: string | null
    github_url: string | null
    project_type: string
    status: string
    is_featured: boolean
    is_published: boolean
    sort_order: number
    completed_at: string | null
    created_at: string
}

defineProps<{
    project: Project
}>()

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Projects', href: '/projects' },
            { title: 'Project Details', href: '#' },
        ],
    },
})
</script>

<template>
    <Head :title="project.title?.en ?? 'Project Details'" />

    <div class="flex flex-1 flex-col gap-6 p-4 md:p-8">
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h1 class="text-2xl font-semibold tracking-tight">
                    Project Details
                </h1>
                <p class="mt-1 text-sm text-muted-foreground">
                    View project information and publication settings.
                </p>
            </div>

            <div class="flex gap-2">
                <Button variant="outline" as-child>
                    <Link href="/projects">
                        <ArrowLeft class="mr-2 h-4 w-4" />
                        Back
                    </Link>
                </Button>

                <Button as-child>
                    <Link :href="`/projects/${project.id}/edit`">
                        <Pencil class="mr-2 h-4 w-4" />
                        Edit Project
                    </Link>
                </Button>
            </div>
        </div>

        <!-- Thumbnail -->
        <div class="overflow-hidden rounded-xl border bg-card">
            <div
                v-if="project.thumbnail"
                class="aspect-video max-h-[420px] bg-muted"
            >
                <img
                    :src="project.thumbnail"
                    :alt="project.title?.en ?? 'Project thumbnail'"
                    class="h-full w-full object-cover"
                />
            </div>

            <div v-else class="flex h-48 items-center justify-center bg-muted">
                <span class="text-sm text-muted-foreground">
                    No project thumbnail
                </span>
            </div>

            <div class="flex flex-wrap items-start justify-between gap-4 p-6">
                <div>
                    <h2 class="text-2xl font-bold">
                        {{ project.title?.en ?? project.slug }}
                    </h2>

                    <p
                        v-if="project.subtitle?.en"
                        class="mt-2 text-muted-foreground"
                    >
                        {{ project.subtitle.en }}
                    </p>

                    <p class="mt-2 text-sm text-muted-foreground">
                        Slug: {{ project.slug }}
                    </p>
                </div>

                <div class="flex flex-wrap gap-2">
                    <span class="rounded-full bg-muted px-3 py-1 text-sm">
                        {{ project.status }}
                    </span>

                    <span
                        v-if="project.is_featured"
                        class="flex gap-1 justify-between items-center rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-600"
                    >
                        <Star :size="16" />
                        Featured
                    </span>

                    <span
                        class="flex gap-1 justify-between items-center rounded-full px-3 py-1 text-sm"
                        :class="project.is_published
                            ? 'bg-green-500/10 text-green-600'
                            : 'bg-muted text-muted-foreground'"
                    >
                        <BookCheck :size="16" />
                        {{ project.is_published ? 'Published' : 'Draft' }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Details -->
        <div class="grid gap-6 lg:grid-cols-3">
            <div class="space-y-6 lg:col-span-2">
                <section class="rounded-xl border bg-card p-6">
                    <h3 class="mb-4 text-lg font-semibold">Description</h3>

                    <p class="whitespace-pre-wrap leading-7 text-muted-foreground">
                        {{ project.description?.en || 'No description provided.' }}
                    </p>
                </section>

                <section
                    v-if="project.content?.en"
                    class="rounded-xl border bg-card p-6"
                >
                    <h3 class="mb-4 text-lg font-semibold">Project Content</h3>

                    <div class="whitespace-pre-wrap leading-7 text-muted-foreground">
                        {{ project.content.en }}
                    </div>
                </section>

                <!-- Techincal Skills -->
                <section
                    v-if="project.skills?.length"
                    class="rounded-xl border bg-card p-6"
                >
                    <h3 class="mb-4 text-lg font-semibold">Project Skills</h3>

                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="skill in project.skills"
                            :key="skill.id"
                            class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                        >
                            {{ skill.name.en }}
                        </span>
                    </div>
                </section>
            </div>

            <!-- Metadata -->
            <aside class="h-fit rounded-xl border bg-card p-6">
                <h3 class="mb-5 text-lg font-semibold">Project Information</h3>

                <dl class="space-y-5">
                    <div>
                        <dt class="text-sm text-muted-foreground">Project Type</dt>
                        <dd class="mt-1 font-medium">
                            {{ project.project_type || '-' }}
                        </dd>
                    </div>

                    <div>
                        <dt class="text-sm text-muted-foreground">Status</dt>
                        <dd class="mt-1 font-medium">{{ project.status }}</dd>
                    </div>

                    <div>
                        <dt class="text-sm text-muted-foreground">Sort Order</dt>
                        <dd class="mt-1 font-medium">{{ project.sort_order }}</dd>
                    </div>

                    <div>
                        <dt class="text-sm text-muted-foreground">Completed At</dt>
                        <dd class="mt-1 font-medium">
                            {{ project.completed_at || 'Not specified' }}
                        </dd>
                    </div>

                    <div>
                        <dt class="text-sm text-muted-foreground">Created At</dt>
                        <dd class="mt-1 font-medium">{{ project.created_at }}</dd>
                    </div>

                    <div>
                        <dt class="text-sm text-muted-foreground">Featured</dt>
                        <dd class="mt-1 flex items-center gap-2">
                            <Check
                                v-if="project.is_featured"
                                class="h-4 w-4 text-green-600"
                            />
                            <X v-else class="h-4 w-4 text-muted-foreground" />
                            {{ project.is_featured ? 'Yes' : 'No' }}
                        </dd>
                    </div>

                    <div>
                        <dt class="text-sm text-muted-foreground">Published</dt>
                        <dd class="mt-1 flex items-center gap-2">
                            <Check
                                v-if="project.is_published"
                                class="h-4 w-4 text-green-600"
                            />
                            <X v-else class="h-4 w-4 text-muted-foreground" />
                            {{ project.is_published ? 'Yes' : 'No' }}
                        </dd>
                    </div>
                </dl>

                <div class="mt-6 flex flex-col gap-3 border-t pt-5">
                    <Button
                        v-if="project.live_url"
                        variant="outline"
                        as-child
                    >
                        <a :href="project.live_url" target="_blank" rel="noopener noreferrer">
                            <ExternalLink class="mr-2 h-4 w-4" />
                            View Live Project
                        </a>
                    </Button>

                    <Button
                        v-if="project.github_url"
                        variant="outline"
                        as-child
                    >
                        <a :href="project.github_url" target="_blank" rel="noopener noreferrer">
                            <Github class="mr-2 h-4 w-4" />
                            View Source Code
                        </a>
                    </Button>
                </div>
            </aside>
        </div>
    </div>
</template>
