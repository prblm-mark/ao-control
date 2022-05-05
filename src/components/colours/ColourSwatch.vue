<template>
    <div :style="swatchColour" class="swatch-colour"></div>
    <p class="swatch-reference">
        <span>{{ swatchNumber }}</span>
        {{ swatchReference }}
    </p>
</template>

<script>
import { computed } from 'vue'
export default {
    props: {
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
    },
    setup(props) {
        const swatchColour = computed(() => {
            return `background-color: ${props.swatchReference}`
        })

        const swatchNumber = computed(() => {
            if (props.index < 6) return `${props.index + 1}00`
            if (props.index > 6) return `${props.index}00`
            return 'Main'
        })

        return { swatchColour, swatchNumber }
    },
}
</script>

<style scoped>
.swatch-colour {
    @apply grid items-center justify-center h-14 rounded-md mb-2 text-xs font-bold text-white tracking-wider;
}
.swatch-reference {
    @apply text-ao-mid-blue-500 dark:text-slate-400 text-xs tracking-wider xl:mb-6 font-semibold;
}
.swatch-reference span {
    @apply font-bold text-ao-mid-blue-700 dark:text-slate-300 block;
}
</style>
