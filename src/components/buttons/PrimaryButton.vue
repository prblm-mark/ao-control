<script setup>
defineProps({
    icon: {
        type: Boolean,
        required: false,
        default: false,
    },
    full: {
        type: Boolean,
        required: false,
        default: false,
    },
})
</script>

<template>
    <button class="cc__btn-primary" :class="{ 'w-full': full }">
        <span v-if="icon" class="cc__btn-icon"><slot name="icon" /></span>
        <slot />
    </button>
</template>

<style scoped>
.cc__btn-primary {
    @apply bg-ao-green text-white text-sm font-bold inline-flex justify-center 
    items-center py-3 px-4 rounded shadow-sm hover:shadow hover:bg-ao-green-700 whitespace-nowrap 
    dark:bg-ao-light-blue dark:hover:bg-ao-light-blue-700 dark:text-slate-100 transition-colors;
}
.cc__btn-icon {
    @apply mr-2 -ml-0.5;
}
</style>
