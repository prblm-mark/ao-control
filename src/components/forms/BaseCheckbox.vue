<template>
    <div class="cc__form-element cc__form-element-checkbox">
        <input
            type="checkbox"
            :checked="modelValue"
            @change="$emit('update:modelValue', $event.target.checked)"
            class="cc__form-checkbox cc__form-field"
        />
        <label v-if="label" class="cc__form-label">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'BaseCheckbox',
    props: {
        label: {
            type: String,
            default: '',
        },
        modelValue: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style>
.cc__form-element-checkbox {
    @apply inline-flex items-center;
}
.cc__form-checkbox {
    @apply w-5 h-5 p-2 mr-2 focus:ring-transparent focus:ring-0 focus:outline-none focus:ring-offset-0 focus:border-ao-mid-blue-300 appearance-none 
    checked:!border-ao-mid-blue-500 dark:checked:bg-ao-light-blue dark:checked:!border-transparent dark:focus:border-slate-700 transition-colors;
}
.cc__form-checkbox + label {
    @apply mb-0;
}
</style>
