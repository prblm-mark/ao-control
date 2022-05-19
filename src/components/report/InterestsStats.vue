<script setup>
import InterestsCard from '@/components/report/InterestsCard.vue'

// defineProps({
//     interests: {
//         type: Object,
//         required: true,
//     },
// })

const interests = [
    'Agile Approach',
    'BDD',
    'Continuous Integration',
    'Lean',
    'Content Management',
    'Story Testing',
    'Web Design',
    'UX',
    'Interface Design',
    'Social Management',
]
</script>
<template>
    <div class="cc__report-interests">
        <InterestsCard
            v-for="(interest, index) in interests"
            :key="index"
            :interest="interest"
            :index="index"
        />
    </div>
</template>

<style scoped>
.cc__report-interests {
    @apply flex flex-wrap gap-2 mb-4;
}
</style>
