<template>
    <main>
        <h2>Full Color Palette</h2>
        <p>
            The full colour palette for the new control center theme. Toggle
            theme to see dark mode palette
        </p>
        <div class="system-panel">
            <div v-for="colourRange in colourPalette" :key="colourRange.name">
                <ColourRange :colourRange="colourRange" />
            </div>
        </div>
    </main>
    <TheWelcome />
</template>

<script>
import TheWelcome from '@/components/TheWelcome.vue'
import ColourRange from '@/components/colours/ColourRange.vue'
import { colourPalette } from '@/assets/colours/colourPalette'

export default {
    components: { TheWelcome, ColourRange },
    setup() {
        return { colourPalette }
    },
}
</script>

<style scoped>
main h2 {
    @apply text-ao-mid-blue-700 dark:text-slate-200 font-bold text-2xl mt-6 mb-1 md:mt-0;
}
main p {
    @apply text-ao-mid-blue-600 dark:text-slate-400 mb-5;
}
.system-panel {
    @apply bg-white dark:bg-slate-800 shadow-md rounded-lg p-4 sm:p-6 lg:p-8;
}
</style>
