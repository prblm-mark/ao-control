<script setup>
import { computed } from '@vue/runtime-core'
import ColourSwatch from './ColourSwatch.vue'
import { useModeStore } from '@/store/ModeStore'

const props = defineProps({
    colourRange: {
        type: Object,
        required: true,
    },
})

const ModeStore = useModeStore()

const hideRange = computed(() => {
    if (!ModeStore.darkMode && props.colourRange.darkTheme === true)
        return `display: none;`
    if (ModeStore.darkMode && props.colourRange.darkTheme === false)
        return `display: none;`
})
</script>
<template>
    <div class="colour-range" :style="hideRange">
        <div class="colour-range-title">
            {{ colourRange.name }}
        </div>

        <ColourSwatch
            v-for="(reference, index) in colourRange.references"
            :key="reference"
            :swatchReference="reference"
            :index="index"
        />
    </div>
</template>

<style scoped>
.colour-range {
    @apply grid grid-cols-3 xl:grid-cols-10 mb-8 xl:mb-0 gap-3 md:gap-4 items-end;
}
.colour-range-title {
    @apply col-span-full xl:col-span-1 xl:text-sm xl:mb-6 font-bold dark:text-slate-200;
}
</style>
