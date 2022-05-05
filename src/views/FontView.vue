<script setup>
import fontTypes from '@/data/fontTypes.json'
import fontTypesItalic from '@/data/fontTypesItalic.json'
import FontType from '../components/fonts/FontType.vue'
</script>

<template>
    <main class="system-content">
        <h2 class="system-heading">Font Family</h2>
        <p>
            For the control center typeface we are using
            <a href="https://rsms.me/inter/" target="_blank">Inter</a>, a
            variable font, with a free license. It is part of the Google fonts
            range, but also downloadable direct from the author.
        </p>
        <div class="system-panel">
            <div
                v-for="(fontType, index) in fontTypes"
                :key="index"
                class="font-type"
            >
                <FontType :fontType="fontType" />
            </div>
        </div>

        <h2 class="system-heading">Italic</h2>
        <p>
            Inter is also available in Italic form, in all weights, and also
            possible to use with the forthcoming 'oblique' + 'degree' option
            too, so it is future proofed.
        </p>
        <div class="system-panel">
            <div
                v-for="(fontType, index) in fontTypesItalic"
                :key="index"
                class="font-type"
            >
                <FontType :fontType="fontType" />
            </div>
        </div>
    </main>
</template>

<style scoped>
.font-type {
    @apply border-b border-ao-mid-blue-200 dark:border-slate-900 py-4 md:py-6;
}
.font-type:first-of-type {
    @apply pt-0;
}
.font-type:last-of-type {
    @apply border-0;
}
</style>
