<template>
    <div class="cc__form-element">
        <label class="cc__form-label">{{ label }}</label>
        <input
            class="cc__form-field"
            v-bind="$attrs"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />

        <!-- <div v-if="error" class="cc__form-error">
            {{ error }}
        </div> -->
    </div>
</template>

<script>
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
            default: '',
        },
        modelValue: {
            type: [String, Number, File],
            default: '',
        },
    },

    // Updates model value
    emits: ['update:modelValue'],
}
</script>

<style scoped>
.cc__form-label {
    @apply w-full block text-sm text-ao-mid-blue-700 dark:text-slate-400 font-semibold mb-1;
}
.cc__form-field {
    @apply w-full bg-white dark:bg-slate-800 text-ao-dark-blue-500 dark:text-slate-300 font-medium rounded text-sm border-ao-mid-blue-300 
    dark:border-slate-700 shadow-sm hover:shadow hover:border-ao-mid-blue-400 dark:hover:border-slate-600 focus:outline-none focus:border-transparent 
    focus:ring-2 dark:focus:ring-1 focus:ring-ao-mid-blue-500 dark:focus:ring-ao-light-blue placeholder:text-ao-dark-blue-400 
    dark:placeholder:text-slate-500 placeholder:font-normal transition-shadow;
}
.cc__form-field[type='number'] {
    -moz-appearance: textfield;
}
.cc__form-field[type='date']::-webkit-calendar-picker-indicator {
    background: none;
}
</style>
