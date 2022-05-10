<template>
    <div class="cc__form-element cc__form-element-radio">
        <input
            type="radio"
            :checked="modelValue === value"
            :value="value"
            v-bind="$attrs"
            class="cc__form-radio cc__form-field"
            @change="$emit('update:modelValue', value)"
        />
        <label v-if="label" class="cc__form-label">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'BaseRadio',
    props: {
        label: {
            type: String,
            default: '',
        },
        modelValue: {
            type: [String, Number],
            default: '',
        },
        value: {
            type: [String, Number],
            required: true,
        },
    },
}
</script>

<style scoped>
.cc__form-element-radio {
    @apply inline-flex items-center;
}
.cc__form-radio {
    @apply w-5 h-5 p-2 !rounded-full mr-2 focus:ring-transparent focus:ring-0 focus:outline-none focus:ring-offset-0 focus:hover:border-transparent dark:checked:bg-ao-light-blue dark:focus:ring-0 appearance-none transition-colors;
}
.cc__form-radio + label {
    @apply mb-0;
}
</style>
