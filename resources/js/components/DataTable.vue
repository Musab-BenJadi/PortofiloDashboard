<script setup lang="ts">
import type { ColumnDef, RowSelectionState } from '@tanstack/vue-table'
import { ArrowUpDown, ChevronDown, MoreHorizontal, Eye, Pencil, Trash2, Star, Check, ClockFading } from '@lucide/vue'
import {
  columnFilteringFeature,
  columnVisibilityFeature,
  createExpandedRowModel,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFn_includesString,
  FlexRender,
  rowExpandingFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
  useTable,
} from '@tanstack/vue-table'
import { createReusableTemplate } from '@vueuse/core'
import { ref, computed, h } from 'vue'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export interface TableColumn {
    header: string;
    accessorKey: string;
}



const props = defineProps<{
    data: Record<string, any>[];
    columns: TableColumn[];
    actions?: {
        view?: (row: Record<string, any>) => void
        edit?: (row: Record<string, any>) => void
        delete?: (row: Record<string, any>) => void
    }
}>();

const data = computed(() => props.data);

// New in v9: declare the features this table uses — anything you don't
// register is tree-shaken out of the bundle.
const features = tableFeatures({
  columnFilteringFeature,
  columnVisibilityFeature,
  rowExpandingFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  expandedRowModel: createExpandedRowModel(),
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),
  filterFns: { includesString: filterFn_includesString },
  sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
}) as any

const columns = ref(
    props.columns.map((column) => ({
        accessorKey: column.accessorKey,
        header: column.header,
        cell: ({ getValue }: { getValue: () => unknown }) => {
            const value = getValue();

            if (typeof value === 'boolean' && column.accessorKey === 'is_featured') {
                  return h(Star, {
                      size: 24,
                      class: value
                          ? 'text-yellow-400'
                          : 'text-gray-500',
                  });
            }

            if (typeof value === 'boolean' && column.accessorKey === 'is_published') {
                  return value ? h(Check, {
                      size: 24,
                      class:'text-green-400'
                  }) : h(ClockFading, {
                      size: 24,
                      class:'text-gray-400 animate-pulse',
                  });
            }

            if (value === null || value === undefined || value === '') {
                return '-';
            }

            if (typeof value === 'object') {
                return JSON.stringify(value);
            }

            return String(value);
        },
    }))
  );

  if (props.actions) {
    columns.value.push({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }: any) =>
            h('div', { class: 'flex gap-2' }, [
                props.actions?.view &&
                    h(Eye, {
                        class: 'h-4 w-4 cursor-pointer text-blue-500',
                        onClick: () => props.actions?.view?.(row.original),
                    }),
                props.actions?.edit &&
                    h(Pencil, {
                        class: 'h-4 w-4 cursor-pointer text-amber-500',
                        onClick: () => props.actions?.edit?.(row.original),
                    }),
                props.actions?.delete &&
                    h(Trash2, {
                        class: 'h-4 w-4 cursor-pointer text-red-500',
                        onClick: () => props.actions?.delete?.(row.original),
                    }),
            ]),
    } as any)
}

// Keep row selection outside the table so the rest of the app can read or update it.
const rowSelection = ref<RowSelectionState>({})

const table = useTable({
    features,
    data: computed(() => props.data),
    columns: columns as any,
    state: {
        get rowSelection() {
            return rowSelection.value;
        },
    },
    onRowSelectionChange: (updater: RowSelectionState | ((current: RowSelectionState) => RowSelectionState)) => {
        rowSelection.value =
            typeof updater === 'function'
                ? updater(rowSelection.value)
                : updater;
    },
} as any)

function copy(id: string) {
  navigator.clipboard.writeText(id)
}

function canHideColumn(column: { getCanHide: () => boolean }) {
  return column.getCanHide()
}

function toggleColumnVisibility(
  column: { getIsVisible: () => boolean; toggleVisibility: (visible: boolean) => void },
  value: unknown,
) {
  column.toggleVisibility(Boolean(value))
}
</script>

<template>
  <div class="w-full">
    <div class="flex items-center py-4">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline" class="ml-auto">
            Columns <ChevronDown class="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuCheckboxItem
            v-for="column in table.getAllColumns().filter(canHideColumn)"
            :key="column.id"
            class="capitalize"
            :model-value="column.getIsVisible()"
            @update:model-value="(value) => toggleColumnVisibility(column, value)"
          >
            {{ column.id }}
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div class="rounded-md border an">
      <Table>
        <TableHeader>
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead v-for="header in headerGroup.headers" :key="header.id">
              <FlexRender v-if="!header.isPlaceholder" :header="header" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <template v-for="row in table.getRowModel().rows" :key="row.id">
              <TableRow :data-state="row.getIsSelected() && 'selected'">
                <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                  <FlexRender :cell="cell" />
                </TableCell>
              </TableRow>
              <TableRow v-if="row.getIsExpanded()">
                <TableCell :colspan="row.getAllCells().length">
                  {{ JSON.stringify(row.original) }}
                </TableCell>
              </TableRow>
            </template>
          </template>

          <TableRow v-else>
            <TableCell
              :colspan="columns.length"
              class="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <div class="flex items-center justify-end space-x-2 py-4">
      <div class="flex-1 text-sm text-muted-foreground">
        {{ table.getFilteredSelectedRowModel().rows.length }} of
        {{ table.getFilteredRowModel().rows.length }} row(s) selected.
      </div>
      <div class="space-x-2">
        <Button
          variant="outline"
          size="sm"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          Next
        </Button>
      </div>
    </div>
  </div>
</template>
