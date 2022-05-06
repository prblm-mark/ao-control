<template>
    <main class="system-content">
        <h1 class="cc__h1-freestanding">Heading 1</h1>
        <p class="system-description">
            Until the new control center interface is built, we will be using a
            freestanding h1
        </p>
        <div class="w-full p-5 bg-white dark:bg-slate-800">
            <h1 class="cc__h1">Heading 1</h1>
        </div>
        <p class="system-description">
            The heading will become part of the interface, and thus become
            smaller on final build.
        </p>

        <div class="cc__card">
            <div class="cc__card-heading">
                <div>
                    <h2 class="cc__h2">Heading 2</h2>
                </div>
            </div>

            <div class="cc__card-content">
                <p>
                    The heading 2 should only feature within the content card,
                    and used as the main title.
                </p>
            </div>
        </div>

        <div class="cc__card">
            <div class="cc__card-heading">
                <div>
                    <h6 class="cc__h6">Heading 6</h6>
                    <h2 class="cc__h2">Heading 2</h2>
                </div>
            </div>

            <div class="cc__card-content">
                <p>
                    The heading 2 can also be accompanied by a Heading 6
                    subtitle
                </p>
            </div>
        </div>

        <div class="cc__card">
            <div class="cc__card-heading">
                <div>
                    <h6 class="cc__h6">Heading 6</h6>
                    <h2 class="cc__h2">Heading 2</h2>
                </div>

                <IconLight />
            </div>

            <div class="cc__card-content">
                <p>
                    The heading 2 can also be accompanied by a Heading 6
                    subtitle, and additional icons, cta's or inputs aligned to
                    the right.
                </p>
            </div>
        </div>

        <div class="cc__card">
            <div class="cc__card-heading cc__card-no-border">
                <div>
                    <h6 class="cc__h6">Heading 6</h6>
                    <h2 class="cc__h2">Heading 2</h2>
                </div>
            </div>

            <div class="cc__card-content">
                <p>
                    Adding a border to the heading is optional, although for
                    consistency it is preferred.
                </p>
            </div>
        </div>

        <div class="cc__heading-line">
            <h3 class="cc__h3">Heading 3</h3>
        </div>
        <p class="system-description">
            Heading 3 can be used to break up the content cards if addtional
            headings to that in the card is required.
        </p>
    </main>
</template>

<script setup>
import IconLight from '@/components/icons/IconLight.vue'
</script>

<style scoped>
.cc__h1-freestanding {
    @apply text-ao-mid-blue-700 dark:text-slate-200 text-2xl md:text-3xl font-extrabold tracking-tight;
}
.cc__h1 {
    @apply text-ao-mid-blue-700 dark:text-slate-200 text-xl md:text-2xl font-extrabold tracking-tight;
}
.cc__h2 {
    @apply text-ao-mid-blue-700 dark:text-slate-200 text-lg md:text-xl font-bold tracking-tight;
}
.cc__h3 {
    @apply text-ao-mid-blue-700 dark:text-slate-200 md:text-lg font-bold tracking-tight;
}
.cc__h6 {
    @apply text-ao-mid-blue-500 dark:text-slate-400 text-xs md:text-sm font-medium;
}
.cc__card {
    @apply bg-white dark:bg-slate-800 shadow-md rounded-lg mb-6 md:mb-10;
}
.cc__card-heading {
    @apply flex items-center justify-between p-3 md:px-5 md:py-4 border-b border-ao-mid-blue-200 dark:border-slate-900;
}
.cc__card-no-border {
    @apply border-0 pb-0;
}
.cc__card-heading h2,
.cc__card-heading h6 {
    @apply leading-tight;
}
.cc__card-content {
    @apply text-xs md:text-sm text-ao-mid-blue-600 dark:text-slate-400 p-3 md:p-5;
}
.cc__heading-line {
    @apply relative w-full;
}
.cc__heading-line .cc__h3 {
    @apply inline bg-ao-mid-blue-200 dark:bg-slate-900 pr-4;
}
.cc__heading-line:after {
    @apply h-[1px] absolute top-1/2 right-0 w-full bg-ao-mid-blue-300 dark:bg-slate-700 content-[''] -z-10;
}
</style>
