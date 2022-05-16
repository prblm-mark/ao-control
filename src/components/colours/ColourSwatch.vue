<script setup>
import { computed } from 'vue'

const props = defineProps({
    swatchReference: {
        type: String,
        required: true,
        default: '',
    },
    index: {
        type: Number,
        required: true,
        default: 0,
    },
})

const swatchColour = computed(() => {
    return `background-color: ${props.swatchReference}`
})

const swatchNumber = computed(() => {
    if (props.index < 6) return `${props.index + 1}00`
    if (props.index > 6) return `${props.index}00`
    return 'Main'
})
</script>

<template>
    <div>
        <div :style="swatchColour" class="swatch-colour"></div>
        <p class="swatch-reference">
            <span>{{ swatchNumber }}</span>
            {{ swatchReference }}
        </p>
    </div>
</template>

<style scoped>
.swatch-colour {
    @apply grid items-center justify-center h-14 rounded-md mb-2 text-xs font-bold text-white tracking-wider border border-white border-opacity-10;
}
.swatch-reference {
    @apply text-ao-mid-blue-500 dark:text-slate-400 text-xs tracking-wider xl:mb-6 font-semibold;
}
.swatch-reference span {
    @apply font-bold text-ao-mid-blue-700 dark:text-slate-300 block;
}
</style>
