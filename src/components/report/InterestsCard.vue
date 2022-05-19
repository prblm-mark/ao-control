<script setup>
defineProps({
    interest: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
})
</script>

<template>
    <div class="cc__interest-card">
        <div class="cc__interest-card-index">
            {{ index + 1 }}
        </div>
        <h6 class="cc__h6">{{ interest }}</h6>
    </div>
</template>

<style scoped>
.cc__interest-card {
    @apply grid grid-cols-[34px_1fr] gap-2 items-center bg-white dark:bg-slate-800 shadow rounded-md p-2 pr-2.5 hover:shadow-md cursor-pointer transition-shadow;
}
.cc__interest-card-index {
    @apply inline-flex items-center justify-center rounded-sm bg-ao-teal text-white dark:bg-ao-light-blue font-extrabold min-h-[34px] px-2;
}
</style>
