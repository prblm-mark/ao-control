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
    </main>
</template>

<script>
import PrimaryButton from '../components/buttons/PrimaryButton.vue'
import IconClipboard from '../components/icons/IconClipboard.vue'
import IconProcessing from '../components/icons/IconProcessing.vue'

export default {
    components: { PrimaryButton, IconClipboard, IconProcessing },
    setup() {
        return {}
    },
}
</script>

<style></style>
