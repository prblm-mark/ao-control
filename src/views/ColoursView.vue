<script setup>
import ColourRange from '@/components/colours/ColourRange.vue'
import colourPalettePrimary from '@/data/colourPalettePrimary.json'
import colourPaletteSecondary from '@/data/colourPaletteSecondary.json'
</script>

<template>
    <main class="system-content">
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
            The secondary colour palette should only be used when addiotnal
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

<style scoped></style>
