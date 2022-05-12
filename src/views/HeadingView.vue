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
                    and used as the main heading.
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
            <div class="cc__card-heading">
                <div>
                    <h6 class="cc__h6">Heading 6</h6>
                    <h2 class="cc__h2">Heading 2</h2>
                </div>

                <PrimaryButton label="Save" />
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

        <div class="cc__card">
            <div class="cc__card-heading">
                <div>
                    <h2 class="cc__h3">Heading 3</h2>
                </div>
            </div>

            <div class="cc__card-content">
                <p>
                    A Heading 3 can also be used with the article card header,
                    if a lesser heirarcy is needed. However it must
                    <strong>NOT</strong> be used with a sub heading, or
                    additonal calls to action.
                </p>
            </div>
        </div>

        <div class="cc__card">
            <div class="cc__card-heading cc__card-no-border">
                <div>
                    <h2 class="cc__h3">Heading 3</h2>
                </div>
            </div>

            <div class="cc__card-content">
                <p>Heading 3 can be applied with, or without a border</p>
            </div>
        </div>
    </main>
</template>

<script setup>
import IconLight from '@/components/icons/IconLight.vue'
import PrimaryButton from '../components/buttons/PrimaryButton.vue'
</script>

<style scoped></style>
