<template>
    <Line
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
        ref="line"
    />
</template>

<script>
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from 'chart.js'
import { useModeStore } from '@/store/ModeStore'
import { mapState } from 'pinia'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
)
export default {
    name: 'LineChart',
    components: { Line },
    props: {
        chartId: {
            type: String,
            default: 'line-chart',
        },
        datasetIdKey: {
            type: String,
            default: 'label',
        },
        width: {
            type: Number,
            default: 100,
        },
        height: {
            type: Number,
            default: 250,
        },
        cssClasses: {
            default: 'w-full',
            type: String,
        },
        styles: {
            type: Object,
            default: () => {},
        },
        plugins: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            chartData: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                ],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: 'rgba(0,175,190,.2)',
                        data: [50, 39, 10, 40, 70, 44],
                        tension: 0.3,
                        borderColor: '#00AFBE',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 2,
                        pointHoverBackgroundColor: '#00AFBE',
                        fill: true,
                        pointRadius: 3,
                    },
                    {
                        label: 'Data Two',
                        data: [30, 29, 28, 60, 19, 60],
                        tension: 0.3,
                        backgroundColor: 'rgba(0,157,146,.2)',
                        borderColor: '#009D92',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 2,
                        pointHoverBackgroundColor: '#009D92',
                        fill: true,
                        pointRadius: 3,
                    },
                ],
            },
        }
    },
    computed: {
        chartOptions() {
            return {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 13,
                                family: "'Inter', sans-serif",
                                weight: 700,
                            },
                            color: this.colors.legend,
                        },
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                            color: this.colors.border,
                        },
                        ticks: {
                            color: this.colors.text,
                            font: {
                                size: 12,
                                family: "'Inter', sans-serif",
                                weight: 600,
                            },
                        },
                    },
                    y: {
                        grid: {
                            color: this.colors.border,
                        },
                        ticks: {
                            color: this.colors.text,
                            font: {
                                size: 11,
                                family: "'Inter', sans-serif",
                                weight: 700,
                            },
                        },
                    },
                },
            }
        },
        colors() {
            if (this.darkMode === true) {
                return { border: '#334155', text: '#94A3B8', legend: '#CBD5E1' }
            } else {
                return { border: '#E7EDF0', text: '#7192A4', legend: '#0F3B53' }
            }
        },

        ...mapState(useModeStore, ['darkMode']),
    },
}
</script>

<style scoped></style>
