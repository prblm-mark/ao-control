<script setup>
import { computed } from '@vue/reactivity'
const props = defineProps({
    fontType: Object,
})

const fontStyles = computed(() => {
    return `font-weight: ${props.fontType.weight}; font-style: ${props.fontType.style}; `
})
</script>

<template>
    <div class="font-type">
        <span class="font-description"
            >{{ props.fontType.name }} • {{ props.fontType.weight }}</span
        >
        <p class="font-sample" :style="fontStyles">
            The quick brown fox jumps over the lazy dog.
        </p>
    </div>
</template>

<style scoped>
.font-description {
    @apply text-ao-mid-blue-500 dark:text-slate-400 text-sm xl:mb-6 font-semibold;
}
.font-sample {
    @apply text-xl md:text-2xl leading-tight text-ao-mid-blue-700 dark:text-slate-300;
}
</style>
