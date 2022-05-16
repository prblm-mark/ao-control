<script setup>
import ColourRange from '@/components/colours/ColourRange.vue'
import colourPalettePrimary from '@/data/colourPalettePrimary.json'
import colourPaletteSecondary from '@/data/colourPaletteSecondary.json'
import SystemHeading from '@/components/system/SystemHeading.vue'
import SystemDescription from '@/components/system/SystemDescription.vue'
import CardElement from '@/components/cards/CardElement.vue'
</script>

<template>
    <main class="system-content">
        <SystemHeading>Primary Colour Palette</SystemHeading>
        <SystemDescription>
            The full colour palette for the new control center theme. Toggle
            theme to see dark mode palette
        </SystemDescription>

        <CardElement no-header>
            <template #content>
                <ColourRange
                    v-for="(colourRange, index) in colourPalettePrimary"
                    :colourRange="colourRange"
                    :key="index"
                />
            </template>
        </CardElement>

        <SystemHeading>Secondary Colour Palette</SystemHeading>
        <SystemDescription>
            The secondary colour palette should only be used when additional
            colours are required. For example, use within charts and complex
            data
        </SystemDescription>
        <CardElement no-header>
            <template #content>
                <ColourRange
                    v-for="(colourRange, index) in colourPaletteSecondary"
                    :colourRange="colourRange"
                    :key="index"
                />
            </template>
        </CardElement>
    </main>
</template>
