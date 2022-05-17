<script setup>
import PrimaryButton from '../components/buttons/PrimaryButton.vue'
import IconClipboard from '../components/icons/IconClipboard.vue'
import IconProcessing from '../components/icons/IconProcessing.vue'
import SecondaryButton from '../components/buttons/SecondaryButton.vue'
import IconFilter from '../components/icons/IconFilter.vue'
import SystemHeading from '@/components/system/SystemHeading.vue'
import SystemDescription from '@/components/system/SystemDescription.vue'
import CardElement from '../components/cards/CardElement.vue'
</script>

<template>
    <main class="system-content">
        <SystemHeading>Buttons</SystemHeading>
        <SystemDescription>
            Here are the inital button variations for the new control center.
            More to follow...
        </SystemDescription>

        <CardElement>
            <template #heading> Primary </template>
            <template #content>
                <div
                    class="grid sm:grid-cols-3 gap-4 md:gap-6 justify-items-start"
                >
                    <PrimaryButton>Auto Width </PrimaryButton>

                    <PrimaryButton>
                        <template #icon>
                            <IconClipboard />
                        </template>
                        With Icon
                    </PrimaryButton>

                    <PrimaryButton>
                        <template #icon>
                            <IconProcessing />
                        </template>
                        With Spinner
                    </PrimaryButton>

                    <PrimaryButton full>Full Width</PrimaryButton>
                </div>
            </template>
        </CardElement>

        <CardElement>
            <template #heading> Secondary </template>
            <template #content>
                <div
                    class="grid sm:grid-cols-3 gap-4 md:gap-6 justify-items-start"
                >
                    <SecondaryButton>Auto Width</SecondaryButton>

                    <SecondaryButton>
                        <template #icon>
                            <IconClipboard />
                        </template>
                        With Icon
                    </SecondaryButton>

                    <SecondaryButton full>Full Width</SecondaryButton>
                </div>
            </template>
        </CardElement>

        <SystemHeading>Combining Buttons</SystemHeading>
        <SystemDescription>
            When buttons are combined the primary button should be far right. We
            should also use grid as the parents display prop, so that all items
            are stretched to match in height, and so we can explicity position
            elements if necessary. For example at different screen sizes.
        </SystemDescription>

        <CardElement>
            <template #heading> Section Heading </template>
            <template #aside>
                <SecondaryButton>Cancel</SecondaryButton>

                <PrimaryButton>
                    <template #icon>
                        <IconFilter />
                    </template>
                    Filter
                </PrimaryButton>
            </template>
        </CardElement>

        <SystemHeading>Application on Backgrounds</SystemHeading>
        <SystemDescription>
            The Primary & Secondary buttons are designed to not only work on the
            article card, but also directly on the background, or any other
            background colourif required.
        </SystemDescription>
        <div class="grid grid-cols-2 gap-2 mb-20">
            <SecondaryButton>Cancel</SecondaryButton>

            <PrimaryButton>
                <template #icon>
                    <IconFilter />
                </template>
                Filter
            </PrimaryButton>
        </div>
    </main>
</template>
