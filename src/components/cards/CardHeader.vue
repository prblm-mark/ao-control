<script setup>
defineProps({
    noBorder: {
        type: Boolean,
        required: false,
        default: false,
    },
    noHeader: {
        type: Boolean,
        required: false,
    },
})
</script>

<template>
    <div
        v-if="!noHeader"
        class="cc__card-heading"
        :class="{ 'cc__card-no-border': noBorder }"
    >
        <div>
            <h6 class="cc__h6"><slot name="subheading"></slot></h6>
            <h2 class="cc__h2"><slot name="heading"></slot></h2>
            <h3 class="cc__h3"><slot name="secondaryheading"></slot></h3>
        </div>
        <div class="cc__card-heading-aside">
            <slot name="aside"></slot>
        </div>
    </div>
</template>
