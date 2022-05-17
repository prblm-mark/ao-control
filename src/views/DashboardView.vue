<script setup>
import StatCard from '../components/dashboard/StatCard.vue'
import IconClipboard from '../components/icons/IconClipboard.vue'
import IconDocumentation from '../components/icons/IconDocumentation.vue'
import IconFilter from '../components/icons/IconFilter.vue'
import HeadingBreak from '../components/headings/HeadingBreak.vue'
import DateSelector from '../components/dashboard/DateSelector.vue'
import DashboardTable from '../components/dashboard/DashboardTable.vue'
import dashboardMainData from '@/data/dashboardMainData.json'
import dashboardListingData from '@/data/dashboardListingData.json'
import DashboardTableGrid from '../components/dashboard/DashboardTableGrid.vue'
import SecondaryButton from '../components/buttons/SecondaryButton.vue'
import IconClose from '../components/icons/IconClose.vue'
import SystemHeading from '@/components/system/SystemHeading.vue'
import SystemDescription from '@/components/system/SystemDescription.vue'

const toggleVisibility = () => {
    document.documentElement.classList.toggle('visible')
}
</script>

<template>
    <main class="system-content">
        <SystemHeading>Dashboard Elements</SystemHeading>
        <SystemDescription>
            Here are some of the initial elements require for the Dashboard
        </SystemDescription>

        <HeadingBreak>Statistic Cards</HeadingBreak>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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

        <HeadingBreak>Date Selector</HeadingBreak>
        <div class="md:gap-6 mb-12">
            <DateSelector />
        </div>

        <SystemHeading>Dashboard Table Options</SystemHeading>
        <SystemDescription>
            These tables have been designed to be full width, as they will
            feature within the Dashboard screen. As the tables below are being
            displayed in a limited space due to this reference screen having a
            fixed left column menu on desktop, they are best viewed in full
            screen mode at this viewport.
            <br />
            <b class="text-sm pt-2 block">
                Tip: Toggle the theme color before viewing
            </b>
        </SystemDescription>
        <span class="mb-12 block" @click="toggleVisibility">
            <SecondaryButton>Full Screen View</SecondaryButton>
        </span>

        <HeadingBreak>Table [Option 1]</HeadingBreak>
        <DashboardTableGrid
            :overviewData="dashboardMainData"
            :listingData="dashboardListingData"
        />

        <HeadingBreak>Table [Option 2]</HeadingBreak>
        <DashboardTable
            :overviewData="dashboardMainData"
            :listingData="dashboardListingData"
        />

        <div class="modal">
            <span @click="toggleVisibility" class="close">
                <IconClose />
            </span>

            <div class="max-w-[1280px]">
                <HeadingBreak>Table [Option 1]</HeadingBreak>
                <DashboardTableGrid
                    :overviewData="dashboardMainData"
                    :listingData="dashboardListingData"
                />

                <HeadingBreak>Table [Option 2]</HeadingBreak>
                <DashboardTable
                    :overviewData="dashboardMainData"
                    :listingData="dashboardListingData"
                />
            </div>
        </div>
    </main>
</template>

<style scoped>
/* Just temp styles for reference screens */
.modal {
    @apply w-full min-h-screen fixed inset-0 bg-ao-mid-blue-200 dark:bg-slate-900 z-20 justify-center  p-6 pt-12 lg:p-10 lg:pt-16 overflow-y-auto hidden;
}
.visible .modal {
    @apply flex;
}
.close {
    @apply absolute top-4 right-4 lg:top-5 lg:right-5 cursor-pointer opacity-75 hover:opacity-100;
}
</style>
