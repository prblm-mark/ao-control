<script setup>
defineProps({
    bottomBorder: {
        type: Boolean,
        required: false,
        default: false,
    },
})
</script>

<template>
    <p class="system-description" :class="{ 'system-border': bottomBorder }">
        <slot>Default Text</slot>
    </p>
</template>

<style>
.system-description {
    @apply text-ao-mid-blue-600 dark:text-slate-400 border-dotted border-ao-mid-blue-400 dark:border-slate-500 text-sm md:text-base mt-2 mb-6;
}
.system-border {
    @apply border-b pb-4;
}
.system-description a {
    @apply font-bold underline decoration-2 underline-offset-4 text-ao-mid-blue-700 dark:text-slate-200 transition-all;
}
.system-description a:hover {
    @apply text-ao-teal dark:text-ao-light-blue;
}
</style>
