<script setup>
defineProps({
    marginTop: {
        type: Boolean,
        required: false,
    },
})
</script>

<template>
    <div class="cc__heading-line" :class="{ 'margin-top': marginTop }">
        <h3 class="cc__h3"><slot /></h3>
    </div>
</template>
<style scoped>
.cc__heading-line {
    @apply relative w-full mb-4;
}
.cc__heading-line .cc__h3 {
    @apply inline bg-ao-mid-blue-200 dark:bg-slate-900  pr-3 md:pr-4;
}
.cc__heading-line:after {
    @apply h-[1px] absolute top-1/2 right-0 w-full bg-ao-mid-blue-300 dark:bg-slate-700 content-[''] -z-10;
}
.cc__heading-line.margin-top {
    @apply mt-10;
}
</style>
