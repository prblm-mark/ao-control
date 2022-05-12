<template>
    <BaseRadio
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :label="option.label"
        :name="name"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
    />
</template>

<script>
import BaseRadio from '@/components/forms/BaseRadio.vue'
export default {
    name: 'BaseRadioGroup',
    components: { BaseRadio },
    props: {
        options: {
            type: Array,
            required: true,
        },
        name: {
            type: Number,
            required: true,
        },
        modelValue: {
            type: [String, Number],
            required: true,
        },
    },
}
</script>

<style scoped></style>
