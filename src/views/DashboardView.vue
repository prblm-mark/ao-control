<template>
    <main class="system-content">
        <h2 class="system-heading">Dashboard Elements</h2>
        <p>Here are some of the initial elements require for the Dashboard</p>

        <HeadingBreak :heading="'Statistic Cards'" />

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            <StatCard :status="'up'">
                <template #title> Users </template>
                <template #icon>
                    <IconClipboard />
                </template>
                <template #stat> 39.58% </template>
                <template #comparison> 34,102 vs 55,323 </template>
            </StatCard>

            <StatCard :status="'down'">
                <template #title> New Users </template>
                <template #icon>
                    <IconDocumentation />
                </template>
                <template #stat> 165 </template>
                <template #comparison> 2409 vs 3267 </template>
            </StatCard>

            <StatCard :status="'up'">
                <template #title> Sessions per User </template>
                <template #icon>
                    <IconFilter />
                </template>
                <template #stat> 0.73% </template>
                <template #comparison> 1.28 vs 1.27 </template>
            </StatCard>
        </div>

        <HeadingBreak :heading="'Date Selector'" />
        <div class="md:gap-6 mb-12">
            <DateSelector />
        </div>

        <HeadingBreak :heading="'Dashboard Table [Option 1]'" />
        <p>
            As the tables are being displayed in a limited space, due to this
            screen having a fixed menu, they are best view in full screen mode.
        </p>
        <DashboardTable
            :overviewData="dashboardMainData"
            :listingData="dashboardListingData"
        />
        <span class="hidden">
            <DashboardTableGrid />
        </span>
    </main>
</template>

<script>
import StatCard from '../components/dashboard/StatCard.vue'
import IconClipboard from '../components/icons/IconClipboard.vue'
import IconDocumentation from '../components/icons/IconDocumentation.vue'
import IconFilter from '../components/icons/IconFilter.vue'
import HeadingBreak from '../components/headings/HeadingBreak.vue'
import DateSelector from '../components/dashboard/DateSelector.vue'
import { defineComponent } from '@vue/runtime-core'
import DashboardTable from '../components/dashboard/DashboardTable.vue'
import DashboardTableGrid from '../components/dashboard/DashboardTableGrid.vue'
import dashboardMainData from '@/data/dashboardMainData.json'
import dashboardListingData from '@/data/dashboardListingData.json'
export default defineComponent({
    setup() {
        return {
            StatCard,
            IconClipboard,
            IconDocumentation,
            IconFilter,
            HeadingBreak,
            DateSelector,
            dashboardMainData,
            dashboardListingData,
        }
    },
    components: {
        StatCard,
        IconClipboard,
        IconDocumentation,
        IconFilter,
        HeadingBreak,
        DateSelector,
        DashboardTable,
        DashboardTableGrid,
    },
})
</script>

<style scoped></style>
