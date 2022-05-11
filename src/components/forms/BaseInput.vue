<template>
    <div class="cc__form-element">
        <label v-if="label" class="cc__form-label">{{ label }}</label>
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
    @apply p-2.5 w-full bg-white dark:bg-slate-900 text-ao-dark-blue-500 dark:text-slate-300 font-medium rounded text-sm border border-ao-mid-blue-300 
    dark:border-slate-700 shadow-sm hover:shadow hover:border-ao-mid-blue-400 dark:hover:border-slate-600 focus:outline-none focus:border-transparent 
    focus:ring-2 dark:focus:ring-1 focus:ring-ao-mid-blue-500 dark:focus:ring-ao-light-blue placeholder:text-ao-dark-blue-400 
    dark:placeholder:text-slate-500 placeholder:font-normal autofill:!text-ao-dark-blue-500 autofill:!bg-white dark:autofill:!bg-slate-800 dark:autofill:!text-slate-300
    disabled:bg-ao-mid-blue-100 disabled:hover:border-ao-mid-blue-300 dark:disabled:bg-slate-800 dark:disabled:hover:border-slate-700 disabled:hover:shadow-none disabled:shadow-none appearance-none transition-shadow;
}
/* Error style for Input/Text */
.cc__form-error {
    @apply w-full mt-1 text-red-500 text-xs font-medium tracking-wide;
}
.cc__form-field-error {
    @apply focus:ring-red-500 dark:focus:ring-red-500 focus:ring-1 !border-red-500  bg-red-50 placeholder:text-red-500;
}

/* Select element needs slighly adjusted padding */
select.cc__form-field {
    @apply pl-2.5;
}

/* Hide arrows to increment number on Firefox */
.cc__form-field[type='number'] {
    -moz-appearance: textfield;
}

/* Hide calendar icon on Chrome/Date Input */
.cc__form-field[type='date']::-webkit-calendar-picker-indicator {
    background: none;
}

/* Add date icon to date input */
.cc__form-field[type='date'] {
    @apply bg-icon-date dark:bg-icon-date-dark bg-no-repeat bg-right-center;
}

/* Hack to remove autofill color on Browser default */
.cc__form-field:-webkit-autofill,
.cc__form-field:-webkit-autofill:hover,
.cc__form-field:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-text-fill-color: #667f89;
    @apply border-ao-mid-blue-300;
}
.cc__form-field:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset, 0 0 0 2px #7192a4;
    @apply border-white;
}
.dark .cc__form-field:-webkit-autofill,
.dark .cc__form-field:-webkit-autofill:hover {
    -webkit-box-shadow: 0 0 0px 1000px #0f172a inset;
    @apply border-slate-700;
}
.dark .cc__form-field:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #0f172a inset, 0 0 0 2px #00afbe;
    @apply border-slate-900;
}
</style>
