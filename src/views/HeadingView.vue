<script setup>
import IconLight from '@/components/icons/IconLight.vue'
import PrimaryButton from '../components/buttons/PrimaryButton.vue'
import CardElement from '../components/cards/CardElement.vue'
import IconClipboard from '../components/icons/IconClipboard.vue'
import HeadingBreak from '../components/headings/HeadingBreak.vue'
import HeadingOne from '../components/headings/HeadingOne.vue'
import SystemDescription from '@/components/system/SystemDescription.vue'
</script>

<template>
    <main class="system-content">
        <HeadingOne />
        <SystemDescription>
            Until the new control center interface is built, we will be using a
            freestanding h1
        </SystemDescription>

        <div class="w-full p-5 bg-white dark:bg-slate-800">
            <h1 class="cc__h1">Heading 1</h1>
        </div>
        <SystemDescription>
            The heading will become part of the interface, and thus become
            smaller on final build.
        </SystemDescription>

        <CardElement>
            <template #heading> Heading 2 </template>
            <template #content>
                The heading 2 should only feature within the content card, and
                used as the main heading.
            </template>
        </CardElement>

        <CardElement>
            <template #heading> Heading 2 </template>
            <template #subheading> Heading 6 </template>
            <template #content>
                The heading 2 can also be accompanied by a Heading 6 subtitle
            </template>
        </CardElement>

        <CardElement>
            <template #heading> Heading 2 </template>
            <template #subheading> Heading 6 </template>
            <template #aside> <IconLight /></template>
            <template #content>
                The heading 2 can also be accompanied by a Heading 6 subtitle,
                and additional icons, cta's or inputs aligned to the right.
            </template>
        </CardElement>

        <CardElement>
            <template #heading> Heading 2 </template>
            <template #subheading> Heading 6</template>
            <template #aside>
                <PrimaryButton>
                    <template #icon> <IconClipboard /> </template>
                    Copy
                </PrimaryButton>
            </template>
            <template #content>
                The heading 2 can also be accompanied by a Heading 6 subtitle,
                and additional icons, cta's or inputs aligned to the right.
            </template>
        </CardElement>

        <CardElement no-border>
            <template #heading> Heading 2 </template>
            <template #subheading> Heading 6</template>
            <template #content>
                Adding a border to the heading is optional, although for
                consistency it is preferred.
            </template>
        </CardElement>

        <HeadingBreak>Heading 3 </HeadingBreak>
        <SystemDescription>
            Heading 3 can be used to break up the content cards if addtional
            headings to that in the card is required.
        </SystemDescription>

        <CardElement>
            <template #secondaryheading> Heading 3 </template>
            <template #content>
                A Heading 3 can also be used with the article card header, if a
                lesser heirarcy is needed. However it must
                <strong>NOT</strong> be used with a sub heading, or additonal
                calls to action.
            </template>
        </CardElement>

        <CardElement no-border>
            <template #secondaryheading> Heading 3 </template>
            <template #content>
                Heading 3 can be applied with, or without a border
            </template>
        </CardElement>
    </main>
</template>
