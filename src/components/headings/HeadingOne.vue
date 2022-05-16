<template>
    <h1 class="cc__h1-freestanding"><slot>Heading 1</slot></h1>
</template>

<script setup></script>

<style scoped>
.cc__h1-freestanding {
    @apply text-ao-mid-blue-700 dark:text-slate-200 text-2xl md:text-3xl font-extrabold tracking-tight;
}
</style>
