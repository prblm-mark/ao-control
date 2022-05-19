<script setup>
import StatCard from '@/components/dashboard/StatCard.vue'
import IconLogin from '@/components/icons/IconLogin.vue'
import IconPercentActive from '@/components/icons/IconPercentActive.vue'
import IconTotalActive from '@/components/icons/IconTotalActive.vue'
import IconTotalMembers from '@/components/icons/IconTotalMembers.vue'
import IconTotalPoints from '@/components/icons/IconTotalPoints.vue'
import IconBookmarked from '@/components/icons/IconBookmarked.vue'
import IconClick from '@/components/icons/IconClick.vue'
import IconBook from '@/components/icons/IconBook.vue'

defineProps({
    stats: {
        type: Object,
        required: true,
    },
})

const icons = {
    IconLogin,
    IconPercentActive,
    IconTotalActive,
    IconTotalMembers,
    IconTotalPoints,
    IconBookmarked,
    IconClick,
    IconBook,
}
</script>
<template>
    <div class="cc__report-stats">
        <StatCard v-for="(stat, index) in stats" :key="index">
            <template #title> {{ stat.title }} </template>
            <template #icon>
                <component :is="icons[stat.icon]"></component>
            </template>
            <template #stat> {{ stat.stat }} </template>
        </StatCard>
    </div>
</template>

<style scoped>
.cc__report-stats {
    @apply grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4;
}
</style>
