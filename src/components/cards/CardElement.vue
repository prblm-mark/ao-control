<script setup>
import CardHeader from '@/components/cards/CardHeader.vue'
import CardContent from '@/components/cards/CardContent.vue'
import { computed } from '@vue/runtime-core'

const props = defineProps({
    noBorder: {
        type: Boolean,
        required: false,
        default: false,
    },
    noHeader: {
        type: Boolean,
        required: false,
    },
    margin0: {
        type: Boolean,
        required: false,
    },
    marginSm: {
        type: Boolean,
        required: false,
    },
})
const margin = computed(() => {
    if (props.marginSm) {
        return 'margin-sm'
    } else if (props.margin0) {
        return 'margin-0'
    }
    return
})
</script>

<template>
    <div class="cc__card" :class="margin">
        <slot />
        <CardHeader :no-header="noHeader" :no-border="noBorder">
            <template #heading> <slot name="heading"></slot> </template>
            <template #secondaryheading>
                <slot name="secondaryheading"></slot>
            </template>
            <template #subheading> <slot name="subheading"></slot> </template>
            <template #aside> <slot name="aside"></slot> </template>
        </CardHeader>
        <CardContent>
            <template v-if="$slots.content" #content>
                <slot name="content"></slot>
            </template>
        </CardContent>
    </div>
</template>
