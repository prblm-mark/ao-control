<template>
    <div class="cc__form-element">
        <label class="cc__form-label">{{ label }}</label>
        <select
            class="cc__form-field"
            :value="modelValue"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
        >
            <option
                v-for="option in options"
                :value="option"
                :key="option"
                :selected="option === modelValue"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'BaseSelect',
    props: {
        label: {
            type: String,
            default: '',
        },
        modelValue: {
            type: [String, Number],
            default: '',
        },
        options: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style scoped></style>
