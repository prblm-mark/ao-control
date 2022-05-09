<template>
    <main class="system-content">
        <h2 class="system-heading">Buttons</h2>
        <p>
            Here are the inital button variations for the new control center.
            More to follow...
        </p>
        <div class="cc__card">
            <div class="cc__card-heading">
                <div>
                    <h2 class="cc__h2">Primary</h2>
                </div>
            </div>

            <div class="cc__card-content">
                <div
                    class="grid sm:grid-cols-3 gap-4 md:gap-6 justify-items-start"
                >
                    <PrimaryButton label="Auto Width" />

                    <PrimaryButton label="With Icon" :icon="true">
                        <template #icon>
                            <IconClipboard />
                        </template>
                    </PrimaryButton>

                    <PrimaryButton label="With Spinner" :icon="true">
                        <template #icon>
                            <IconProcessing />
                        </template>
                    </PrimaryButton>

                    <PrimaryButton label="Full Width" :full="true" />
                </div>
            </div>
        </div>

        <div class="cc__card">
            <div class="cc__card-heading">
                <div>
                    <h2 class="cc__h2">Secondary</h2>
                </div>
            </div>

            <div class="cc__card-content">
                <div
                    class="grid sm:grid-cols-3 gap-4 md:gap-6 justify-items-start"
                >
                    <SecondaryButton label="Auto Width" />

                    <SecondaryButton label="With Icon" :icon="true">
                        <template #icon>
                            <IconClipboard />
                        </template>
                    </SecondaryButton>

                    <SecondaryButton label="Full Width" :full="true" />
                </div>
            </div>
        </div>

        <h2 class="system-heading">Combining Buttons</h2>
        <p>
            When buttons are combined the primary button should be far right. We
            should also use grid as the parents display prop, so that all items
            are stretched to match in height, and so we can explicity position
            elements if necessary. For example at different screen sizes.
        </p>

        <div class="cc__card">
            <div class="cc__card-heading">
                <div>
                    <h2 class="cc__h2">Section Heading</h2>
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <SecondaryButton label="Cancel" />

                    <PrimaryButton label="Filter" :icon="true">
                        <template #icon>
                            <IconFilter />
                        </template>
                    </PrimaryButton>
                </div>
            </div>

            <div class="cc__card-content">
                <p class="">Some content here</p>
            </div>
        </div>

        <h2 class="system-heading">Application on Backgrounds</h2>
        <p>
            The Primary & Secondary buttons are designed to not only work on the
            article card, but also directly on the background, or any other
            background colourif required.
        </p>
        <div class="grid grid-cols-2 gap-2 mb-20">
            <SecondaryButton label="Cancel" />

            <PrimaryButton label="Filter" :icon="true">
                <template #icon>
                    <IconFilter />
                </template>
            </PrimaryButton>
        </div>
    </main>
</template>

<script>
import PrimaryButton from '../components/buttons/PrimaryButton.vue'
import IconClipboard from '../components/icons/IconClipboard.vue'
import IconProcessing from '../components/icons/IconProcessing.vue'
import SecondaryButton from '../components/buttons/SecondaryButton.vue'
import IconFilter from '../components/icons/IconFilter.vue'

export default {
    components: {
        PrimaryButton,
        IconClipboard,
        IconProcessing,
        SecondaryButton,
        IconFilter,
    },
    setup() {
        return {}
    },
}
</script>

<style></style>
