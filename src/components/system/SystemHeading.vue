<template>
    <h2 class="system-heading"><slot>Default Heading</slot></h2>
</template>

<script setup></script>

<style scoped>
.system-heading {
    @apply text-ao-mid-blue-700 dark:text-slate-200 leading-tight tracking-tight font-extrabold text-2xl mb-1.5;
}
.system-heading:not(:first-of-type) {
    @apply border-t border-ao-mid-blue-300 dark:border-slate-800 pt-8;
}
</style>
