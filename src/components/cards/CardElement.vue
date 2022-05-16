<script setup>
import CardHeader from '@/components/cards/CardHeader.vue'
import CardContent from './CardContent.vue'
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
    <div class="cc__card">
        <CardHeader :no-header="noHeader" :no-border="noBorder">
            <template #heading> <slot name="heading"></slot> </template>
            <template #secondaryheading>
                <slot name="secondaryheading"></slot>
            </template>
            <template #subheading> <slot name="subheading"></slot> </template>
            <template #aside> <slot name="aside"></slot> </template>
        </CardHeader>
        <CardContent><slot name="content"></slot></CardContent>
    </div>
</template>
