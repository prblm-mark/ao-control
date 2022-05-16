<script setup>
import fontTypes from '@/data/fontTypes.json'
import fontTypesItalic from '@/data/fontTypesItalic.json'
import FontType from '../components/fonts/FontType.vue'
import SystemHeading from '@/components/system/SystemHeading.vue'
import SystemDescription from '@/components/system/SystemDescription.vue'
import CardElement from '@/components/cards/CardElement.vue'
</script>

<template>
    <main class="system-content">
        <SystemHeading>Font Family</SystemHeading>
        <SystemDescription>
            For the control center typeface we are using
            <a href="https://rsms.me/inter/" target="_blank">Inter</a>, a
            variable font, with a free license. It is part of the Google fonts
            range, but also downloadable direct from the author.
        </SystemDescription>
        <CardElement no-header>
            <template #content>
                <FontType
                    v-for="(fontType, index) in fontTypes"
                    :key="index"
                    :fontType="fontType"
                />
            </template>
        </CardElement>

        <SystemHeading>Italic</SystemHeading>
        <SystemDescription>
            Inter is also available in Italic form, in all weights, and also
            possible to use with the forthcoming 'oblique' + 'degree' option
            too, so it is future proofed.
        </SystemDescription>
        <CardElement no-header>
            <template #content>
                <FontType
                    v-for="(fontType, index) in fontTypesItalic"
                    :key="index"
                    :fontType="fontType"
                />
            </template>
        </CardElement>
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
