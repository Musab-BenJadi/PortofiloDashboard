<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import PlaceholderPattern from '@/components/PlaceholderPattern.vue';
import DataTable from '@/components/DataTable.vue';
import { contactUs } from '@/routes';
import { ref, defineProps } from 'vue';

const props = defineProps({
    Entirform: {
        type: Object,
        required: true,
    },
});

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Contact Us',
                href: contactUs(),
            },
        ],
    },
});
</script>

<template>
    <Head title="Contact Us" />
    <div
        class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"
    >
        <div
            class="relative min-h-[100vh] px-4 py-8 flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border"
        >
            <!-- <PlaceholderPattern /> -->
            <data-table
                :columns="[
                    { header: 'Name', accessorKey: 'name' },
                    { header: 'Email', accessorKey: 'email' },
                    { header: 'Subject', accessorKey: 'subject' },
                    { header: 'Project Type', accessorKey: 'project_type' },
                    { header: 'Message', accessorKey: 'message' },
                ]"
                :data="Entirform"  />
        </div>
    </div>
</template>
