<template>
    <div class="cc__stat-card">
        <div class="cc__stat-card-icon"><slot name="icon" /></div>
        <div>
            <h6 class="cc__h6"><slot name="title" /></h6>
            <h3 class="cc__h3" :class="status">
                <span v-if="status === 'up'">
                    <IconStatUp />
                </span>
                <span v-else>
                    <IconStatDown />
                </span>
                <slot name="stat" />
            </h3>
            <p><slot name="comparison" /></p>
        </div>
    </div>
</template>

<script>
import IconStatUp from '../icons/IconStatUp.vue'
import IconStatDown from '../icons/IconStatDown.vue'
export default {
    props: {
        status: {
            type: String,
            required: true,
        },
    },
    setup() {
        return {}
    },
    components: { IconStatUp, IconStatDown },
}
</script>

<style scoped>
.cc__stat-card {
    @apply grid grid-cols-[64px_minmax(150px,_1fr)] gap-4 items-center bg-white dark:bg-slate-800 shadow rounded-md p-4 hover:shadow-md transition-shadow;
}
.cc__stat-card * {
    @apply leading-none;
}
.cc__stat-card-icon {
    @apply bg-ao-teal-600 text-white dark:text-slate-200 rounded flex items-center justify-center h-16;
}

.cc__stat-card:nth-child(2n) .cc__stat-card-icon {
    @apply bg-ao-light-blue;
}
.cc__stat-card:nth-child(3n) .cc__stat-card-icon {
    @apply bg-ao-aqua;
}
.cc__stat-card h3 {
    @apply inline-flex mt-1;
}
.cc__stat-card h3 span {
    @apply -ml-1;
}
.cc__stat-card h3.up {
    @apply text-ao-green;
}
.cc__stat-card h3.down {
    @apply text-red-500;
}
.cc__stat-card p {
    @apply text-xs font-semibold whitespace-nowrap;
}
</style>
