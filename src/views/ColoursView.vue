<template>
    <main>
        <h2 class="system-heading">Primary Colour Palette</h2>
        <p>
            The full colour palette for the new control center theme. Toggle
            theme to see dark mode palette
        </p>
        <div class="system-panel">
            <div
                v-for="colourRange in colourPalettePrimary"
                :key="colourRange.name"
            >
                <ColourRange :colourRange="colourRange" />
            </div>
        </div>

        <h2 class="system-heading">Secondary Colour Palette</h2>
        <p>
            The secoondary colour palette should only be used when addiotnal
            colours are required. For example, use within charts and complex
            data
        </p>
        <div class="system-panel">
            <div
                v-for="colourRange in colourPaletteSecondary"
                :key="colourRange.name"
            >
                <ColourRange :colourRange="colourRange" />
            </div>
        </div>
    </main>
</template>

<script>
import ColourRange from '@/components/colours/ColourRange.vue'
import colourPalettePrimary from '@/data/colourPalettePrimary.json'
import colourPaletteSecondary from '@/data/colourPaletteSecondary.json'

export default {
    components: { ColourRange },
    setup() {
        return { colourPalettePrimary, colourPaletteSecondary }
    },
}
</script>

<style scoped>
main {
    @apply md:ml-72;
}
main h2 {
    @apply text-ao-mid-blue-700 dark:text-slate-200 leading-tight font-bold text-2xl mt-6 mb-1 md:mt-0;
}
main h2:not(:first-of-type) {
    @apply border-t border-ao-mid-blue-300 dark:border-slate-800 pt-8;
}
main p {
    @apply text-ao-mid-blue-600 dark:text-slate-400 mb-5;
}
.system-panel {
    @apply bg-white dark:bg-slate-800 shadow-md rounded-lg mb-12 p-4 sm:p-6 lg:p-8;
}
</style>
