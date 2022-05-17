<template>
    <div class="cc__h1-freestanding">
        <h1><slot>Heading 1</slot></h1>
        <span v-if="$slots.pill" class="cc__pill">
            <slot name="pill"></slot>
        </span>
    </div>
</template>

<script setup></script>

<style scoped>
.cc__h1-freestanding {
    @apply inline-flex flex-wrap items-center mb-4 md:mb-5;
}
.cc__h1-freestanding h1 {
    @apply text-ao-mid-blue-700 dark:text-slate-200 text-2xl md:text-3xl font-extrabold tracking-tight mr-4;
}
.cc__pill {
    @apply bg-ao-teal dark:bg-ao-light-blue text-white font-semibold tracking-wide text-xs px-3 py-2 my-1 rounded;
}
</style>
