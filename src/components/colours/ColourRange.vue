<template>
    <div class="colour-range">
        <div class="colour-range-title">
            {{ colourRange.name }}
        </div>
        <div
            v-for="(reference, index) in colourRange.references"
            :key="reference"
        >
            <ColourSwatch :swatchReference="reference" :index="index" />
        </div>
    </div>
</template>

<script>
import ColourSwatch from './ColourSwatch.vue'
export default {
    components: { ColourSwatch },

    props: {
        colourRange: {
            type: Object,
            required: true,
        },
    },

    setup() {
        return {}
    },
}
</script>

<style scoped>
.colour-range {
    @apply grid grid-cols-3 xl:grid-cols-10 mb-8 xl:mb-0 gap-3 md:gap-4 items-end;
}
.colour-range-title {
    @apply col-span-full xl:col-span-1 xl:text-sm xl:mb-6 font-bold dark:text-slate-200;
}
</style>
