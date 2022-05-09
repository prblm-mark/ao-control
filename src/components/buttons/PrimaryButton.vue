<template>
    <button class="cc__btn-primary" :class="{ 'w-full': full }">
        <span v-if="icon" class="mr-2 -ml-0.5"><slot name="icon"></slot></span>
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        icon: {
            type: Boolean,
            required: false,
            default: false,
        },
        full: {
            required: false,
            default: false,
        },
    },

    setup() {
        return {}
    },
}
</script>

<style scoped>
.cc__btn-primary {
    @apply bg-ao-green text-white text-sm font-bold inline-flex justify-center 
    items-center py-3 px-4 rounded shadow-sm hover:shadow hover:bg-ao-green-600 whitespace-nowrap 
    dark:bg-ao-light-blue dark:hover:bg-ao-light-blue-700 dark:text-slate-100 transition-colors;
}
</style>
