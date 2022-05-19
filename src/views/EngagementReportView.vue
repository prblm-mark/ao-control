<script setup>
import HeadingOne from '@/components/headings/HeadingOne.vue'
import CardElement from '@/components/cards/CardElement.vue'
import ReportHeading from '@/components/report/ReportHeading.vue'
import HeadingBreak from '../components/headings/HeadingBreak.vue'
import ReportStats from '../components/report/ReportStats.vue'
import reportMemberStats from '@/data/reportMemberStats.json'
import reportViewsStats from '@/data/reportViewsStats.json'
import IconAnnotation from '@/components/icons/IconAnnotation.vue'
import SecondaryButton from '@/components/buttons/SecondaryButton.vue'
import InterestsStats from '../components/report/InterestsStats.vue'
import ReportTable from '../components/report/ReportTable.vue'
import reportTopUsers from '@/data/reportTopUsers.json'
</script>

<template>
    <main class="system-content">
        <HeadingOne>
            Engagement Report
            <template #pill> Last 12 Months </template>
        </HeadingOne>

        <CardElement no-header>
            <template #content>
                <ReportHeading>
                    Octo Tech
                    <template #intro>
                        This is the header text set on CRM Profile
                    </template>
                    <template #logo>
                        <img src="@/assets/report-logo.png" />
                    </template>
                </ReportHeading>
            </template>
        </CardElement>

        <HeadingBreak>Members</HeadingBreak>
        <ReportStats :stats="reportMemberStats" />

        <HeadingBreak margin-top>Top 10 Users</HeadingBreak>
        <CardElement no-header margin-sm>
            <ReportTable :table-data="reportTopUsers" />
        </CardElement>
        <SecondaryButton>
            Comment
            <template #icon> <IconAnnotation /> </template>
        </SecondaryButton>

        <HeadingBreak margin-top>Display Views</HeadingBreak>
        <ReportStats :stats="reportViewsStats" />
        <CardElement no-header margin-sm>
            <template #content> Chart goes here </template>
        </CardElement>
        <SecondaryButton>
            Comment
            <template #icon> <IconAnnotation /> </template>
        </SecondaryButton>

        <HeadingBreak margin-top>Top 10 Interests</HeadingBreak>
        <InterestsStats />
    </main>
</template>

<style scoped></style>
