<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3';
import DataTable from '@/components/DataTable.vue';
import { index as projects } from '@/routes/projects';

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
                href: projects(),
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

        <div
            class="relative min-h-[100vh] px-4 py-8 flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border"
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
