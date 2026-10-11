<script setup>
import { computed } from 'vue';
import { processSteps } from '@/components/data/process';
import { useLocale } from '@/composables/useLocale';
import {
    Waypoints,
    ClipboardList,
    Code2,
    ShieldCheck,
    Rocket,
} from 'lucide-vue-next';

const { t } = useLocale();
const steps = computed(() =>
    processSteps.map((step, index) => ({
        ...step,
        ...t(`process.steps.${index}`),
    })),
);

const iconComponents = {
    Waypoints,
    ClipboardList,
    Code2,
    ShieldCheck,
    Rocket,
};
</script>

<template>
    <section
        id="process"
        class="section-shell section-pad border-line-700/60 border-t"
    >
        <div
            class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] lg:items-center xl:gap-20"
        >
            <div>
                <div v-reveal class="max-w-xl">
                    <p class="kicker">{{ t('process.kicker') }}</p>
                    <h2
                        class="font-display text-paper-100 mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        {{ t('process.title') }}
                    </h2>
                </div>
                <ol class="relative mt-14 max-w-2xl">
                    <li
                        v-for="(step, index) in steps"
                        :key="step.index"
                        v-reveal
                        :style="{ transitionDelay: `${index * 60}ms` }"
                        class="glass-panel relative my-2 flex gap-6 rounded-xl px-4 py-8"
                    >
                        <div class="flex flex-col items-center">
                            <span
                                class="border-signal-500/40 bg-ink-900 text-signal-400 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-mono text-sm"
                            >
                                {{ step.index }}
                            </span>
                            <span
                                v-if="index !== steps.length - 1"
                                class="bg-line-600 mt-2 w-px flex-1"
                                aria-hidden="true"
                            ></span>
                        </div>

                        <div class="pt-1.5">
                            <div class="flex items-center">
                                <component
                                    :is="iconComponents[step.icon]"
                                    :size="22"
                                    :stroke-width="1.7"
                                    class="text-signal-400 mr-2"
                                    aria-hidden="true"
                                />
                                <h3
                                    class="font-display text-paper-100 text-lg font-semibold"
                                >
                                    {{ step.title }}
                                </h3>
                            </div>
                            <p
                                class="text-paper-300 mt-1.5 max-w-md text-[15px] leading-relaxed"
                            >
                                {{ step.description }}
                            </p>
                        </div>
                    </li>
                </ol>
            </div>

            <div
                v-reveal
                class="mx-auto w-full max-w-md lg:max-w-none"
                aria-hidden="true"
            >
                <svg
                    viewBox="0 0 400 520"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-signal-400 w-full overflow-visible"
                >
                    <defs>
                        <linearGradient
                            id="process-flow"
                            x1="108"
                            y1="40"
                            x2="292"
                            y2="480"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="currentColor" stop-opacity=".2" />
                            <stop
                                offset=".5"
                                stop-color="currentColor"
                                stop-opacity=".9"
                            />
                            <stop
                                offset="1"
                                stop-color="currentColor"
                                stop-opacity=".25"
                            />
                        </linearGradient>
                        <radialGradient id="process-glow">
                            <stop stop-color="currentColor" stop-opacity=".2" />
                            <stop
                                offset="1"
                                stop-color="currentColor"
                                stop-opacity="0"
                            />
                        </radialGradient>
                    </defs>

                    <g class="text-signal-400">
                        <circle
                            cx="200"
                            cy="260"
                            r="190"
                            fill="url(#process-glow)"
                        />
                        <path
                            d="M108 64C108 112 292 120 292 164C292 212 108 212 108 260C108 308 292 308 292 356C292 400 108 410 108 456"
                            stroke="url(#process-flow)"
                            stroke-width="2"
                            stroke-dasharray="5 8"
                        />
                        <path
                            d="m101 448 7 10 7-10"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>

                    <g class="text-paper-100">
                        <g transform="translate(108 64)">
                            <circle
                                r="35"
                                fill="currentColor"
                                fill-opacity=".04"
                                stroke="currentColor"
                                stroke-opacity=".18"
                            />
                            <circle
                                r="25"
                                fill="none"
                                stroke="#38bdf8"
                                stroke-opacity=".65"
                            />
                            <text
                                y="5"
                                text-anchor="middle"
                                fill="#7dd3fc"
                                font-family="monospace"
                                font-size="12"
                                letter-spacing="1"
                            >
                                01
                            </text>
                            <path
                                d="M36 0h35"
                                stroke="currentColor"
                                stroke-opacity=".2"
                                stroke-dasharray="3 5"
                            />
                            <circle
                                cx="75"
                                r="3"
                                fill="#38bdf8"
                                fill-opacity=".8"
                            />
                        </g>
                        <g transform="translate(292 164)">
                            <circle
                                r="35"
                                fill="currentColor"
                                fill-opacity=".04"
                                stroke="currentColor"
                                stroke-opacity=".18"
                            />
                            <circle
                                r="25"
                                fill="none"
                                stroke="#38bdf8"
                                stroke-opacity=".65"
                            />
                            <text
                                y="5"
                                text-anchor="middle"
                                fill="#7dd3fc"
                                font-family="monospace"
                                font-size="12"
                                letter-spacing="1"
                            >
                                02
                            </text>
                            <path
                                d="M-36 0h-35"
                                stroke="currentColor"
                                stroke-opacity=".2"
                                stroke-dasharray="3 5"
                            />
                            <circle
                                cx="-75"
                                r="3"
                                fill="#38bdf8"
                                fill-opacity=".8"
                            />
                        </g>
                        <g transform="translate(108 260)">
                            <circle
                                r="35"
                                fill="currentColor"
                                fill-opacity=".04"
                                stroke="currentColor"
                                stroke-opacity=".18"
                            />
                            <circle
                                r="25"
                                fill="none"
                                stroke="#38bdf8"
                                stroke-opacity=".65"
                            />
                            <text
                                y="5"
                                text-anchor="middle"
                                fill="#7dd3fc"
                                font-family="monospace"
                                font-size="12"
                                letter-spacing="1"
                            >
                                03
                            </text>
                            <path
                                d="M36 0h35"
                                stroke="currentColor"
                                stroke-opacity=".2"
                                stroke-dasharray="3 5"
                            />
                            <circle
                                cx="75"
                                r="3"
                                fill="#38bdf8"
                                fill-opacity=".8"
                            />
                        </g>
                        <g transform="translate(292 356)">
                            <circle
                                r="35"
                                fill="currentColor"
                                fill-opacity=".04"
                                stroke="currentColor"
                                stroke-opacity=".18"
                            />
                            <circle
                                r="25"
                                fill="none"
                                stroke="#38bdf8"
                                stroke-opacity=".65"
                            />
                            <text
                                y="5"
                                text-anchor="middle"
                                fill="#7dd3fc"
                                font-family="monospace"
                                font-size="12"
                                letter-spacing="1"
                            >
                                04
                            </text>
                            <path
                                d="M-36 0h-35"
                                stroke="currentColor"
                                stroke-opacity=".2"
                                stroke-dasharray="3 5"
                            />
                            <circle
                                cx="-75"
                                r="3"
                                fill="#38bdf8"
                                fill-opacity=".8"
                            />
                        </g>
                        <g transform="translate(108 456)">
                            <circle
                                r="35"
                                fill="currentColor"
                                fill-opacity=".04"
                                stroke="currentColor"
                                stroke-opacity=".18"
                            />
                            <circle
                                r="25"
                                fill="none"
                                stroke="#38bdf8"
                                stroke-opacity=".65"
                            />
                            <text
                                y="5"
                                text-anchor="middle"
                                fill="#7dd3fc"
                                font-family="monospace"
                                font-size="12"
                                letter-spacing="1"
                            >
                                05
                            </text>
                            <path
                                d="M36 0h35"
                                stroke="currentColor"
                                stroke-opacity=".2"
                                stroke-dasharray="3 5"
                            />
                            <circle
                                cx="75"
                                r="3"
                                fill="#38bdf8"
                                fill-opacity=".8"
                            />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </section>
</template>
