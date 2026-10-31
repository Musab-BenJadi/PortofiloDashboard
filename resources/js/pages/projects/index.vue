<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import DataTable from '@/components/DataTable.vue';
import { index, create } from '@/routes/projects';
import Button from '@/components/ui/button/Button.vue';
import { PlusSquare } from 'lucide-vue-next';

interface ProjectsEntire {
    id: number;
    title: Record<string, string>;
    subtitle: Record<string, string> | null;
    status: string;
    is_featured: boolean;
    is_published: boolean;
}

const props = defineProps<{ Projects: ProjectsEntire[] }>();

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Projects',
                href: index(),
            },
        ],
    },
});

const actions = {
    view: (project: Record<string, any>) => {
        router.visit(`/projects/${project.id}`);
    },

    edit: (project: Record<string, any>) => {
        router.visit(`/projects/${project.id}/edit`);
    },

    delete: (project: Record<string, any>) => {
        if (confirm(`Are you sure you want to delete project #${project.id}?`)) {
            router.delete(`/projects/${project.id}`);
        }
    },
};
</script>

<template>
    <Head title="Projects" />
    <div
        class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"
    >
    <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h1 class="text-2xl font-semibold tracking-tight">
                    Project Table
                </h1>
                <p class="mt-1 text-sm text-muted-foreground">
                    projects short information.
                </p>
            </div>

            <div class="flex gap-2">
                <Button as-child class="cursor-pointer">
                    <Link :href="create().url">
                        <PlusSquare class="mr-2 h-4 w-4" />
                        New Project
                    </Link>
                </Button>
            </div>
        </div>
        <div
            class="relative min-h-screen px-4 py-8 flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border"
        >
            <!-- <PlaceholderPattern /> -->
            <data-table
                :columns="[
                    { header: 'Id', accessorKey: 'id' },
                    { header: 'Title', accessorKey: 'title.en' },
                    { header: 'Subtitle', accessorKey: 'subtitle.en' },
                    { header: 'Status', accessorKey: 'status' },
                    { header: 'Is Featured', accessorKey: 'is_featured' },
                    { header: 'Is Published', accessorKey: 'is_published' },
                ]"
                :data="Projects"  
                :actions="actions"/>
        </div>
    </div>
</template>
