<template>
    <div class="cc__form-element">
        <label class="cc__form-label">{{ label }}</label>
        <input
            class="cc__form-field"
            :class="errorClass"
            v-bind="$attrs"
            :placeholder="placeholder"
            :value="modelValue"
            :error="error"
            @input="$emit('update:modelValue', $event.target.value)"
        />

        <div v-if="error" class="cc__form-error">
            {{ error }}
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    name: 'BaseInput',
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            required: false,
            default: '',
        },
        modelValue: {
            type: [String, Number, File],
            default: '',
        },
        error: {
            type: String,
            default: '',
        },
    },

    setup(props) {
        const errorClass = computed(() => {
            return {
                'cc__form-field-error': props.error.length > 1,
            }
        })
        return { errorClass }
    },

    // Updates model value
    emits: ['update:modelValue'],
}
</script>

<style>
.cc__form-label {
    @apply inline-block text-sm text-ao-mid-blue-700 dark:text-slate-400 font-semibold mb-1;
}
.cc__form-field {
    @apply w-full bg-white dark:bg-slate-900 text-ao-dark-blue-500 dark:text-slate-300 font-medium rounded text-sm border-ao-mid-blue-300 
    dark:border-slate-700 shadow-sm hover:shadow hover:border-ao-mid-blue-400 dark:hover:border-slate-600 focus:outline-none focus:border-transparent 
    focus:ring-2 dark:focus:ring-1 focus:ring-ao-mid-blue-500 dark:focus:ring-ao-light-blue placeholder:text-ao-dark-blue-400 
    dark:placeholder:text-slate-500 placeholder:font-normal autofill:!text-ao-dark-blue-500 autofill:!bg-white dark:autofill:!bg-slate-800 dark:autofill:!text-slate-300
    disabled:bg-ao-mid-blue-100 disabled:hover:border-ao-mid-blue-300 dark:disabled:bg-slate-800 dark:disabled:hover:border-slate-700 disabled:hover:shadow-sm transition-shadow;
}
select.cc__form-field {
    @apply pl-2;
}
.cc__form-field-error {
    @apply focus:ring-red-500 dark:focus:ring-red-500 focus:ring-1 !border-red-500  bg-red-50 placeholder:text-red-500;
}
.cc__form-field[type='number'] {
    -moz-appearance: textfield;
}
.cc__form-field[type='date']::-webkit-calendar-picker-indicator {
    background: none;
}
.cc__form-error {
    @apply w-full mt-1 text-red-500 text-xs font-medium tracking-wide;
}
</style>
