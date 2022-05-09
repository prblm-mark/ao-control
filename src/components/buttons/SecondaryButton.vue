<template>
    <button class="cc__btn-secondary" :class="{ 'w-full': full }">
        <span v-if="icon" class="mr-2 -ml-0.5"><slot name="icon" /></span>
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
.cc__btn-secondary {
    @apply bg-transparent text-ao-mid-blue-600 ring-1 ring-inset ring-ao-mid-blue-500  hover:text-ao-mid-blue-700 hover:ring-ao-mid-blue-600 
    text-sm font-bold inline-flex justify-center items-center py-3 px-4 rounded shadow-sm whitespace-nowrap hover:shadow 
    dark:text-slate-400 dark:hover:text-slate-300 dark:ring-slate-500 dark:hover:ring-slate-300 transition-all;
}
</style>
