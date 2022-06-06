<script setup>
import IconMore from '../icons/IconMore.vue'

defineProps({
    tableData: {
        type: Object,
        required: true,
    },
})

const toggleVisibility = (e) => {
    const elem = e.target.closest('div')
    const elemDetails = elem.nextElementSibling
    elemDetails.classList.toggle('hidden')
}
</script>

<template>
    <div class="cc__table-head">
        <div v-for="(label, index) in tableData.labels" :key="index">
            {{ label }}
        </div>
    </div>

    <div
        class="cc__table-body"
        v-for="(data, index) in tableData.data"
        :key="index"
    >
        <div class="cc__table-main">
            <div v-if="data.main.name === 'User'" class="cc__table-user">
                <a href="#">
                    <img
                        :src="data.main.value.avatar"
                        :alt="data.main.value.user"
                        class="cc__table-avatar"
                    />

                    {{ data.main.value.user }}
                </a>
            </div>
            <div v-else>
                <a href="#">{{ data.main.value }}</a>
            </div>

            <span
                class="cc__table-listing-more"
                @click="toggleVisibility($event)"
            >
                <IconMore />
            </span>
        </div>

        <div class="hidden lg:grid items-center">
            <div class="cc__table-grid">
                <div v-for="stat in data.stats" :key="stat.name">
                    <div v-if="stat.name === 'User'" class="cc__table-user">
                        <a href="#">
                            <img
                                :src="stat.value.avatar"
                                :alt="stat.value.user"
                                class="cc__table-avatar"
                            />

                            {{ stat.value.user }}
                        </a>
                    </div>
                    <div v-else>
                        <h6 class="cc__table-subheading">
                            {{ stat.name }}
                        </h6>

                        <b>{{ stat.value }}</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cc__table-head {
    @apply hidden lg:grid lg:grid-cols-[300px_minmax(100px,_1fr)] xl:grid-cols-[400px_minmax(100px,_1fr)] grid-flow-col auto-cols-fr;
}
.cc__table-head > div {
    @apply text-ao-mid-blue-500 dark:text-slate-400 text-sm font-medium px-3 py-4 whitespace-nowrap;
}

.cc__table-body {
    @apply text-sm grid lg:grid-cols-[300px_minmax(100px,_1fr)] xl:grid-cols-[400px_minmax(100px,_1fr)] lg:grid-flow-col auto-cols-fr border-t border-ao-mid-blue-200 dark:border-slate-700;
}
.cc__table-main {
    @apply flex items-center justify-between col-span-1 p-3 min-h-[4rem];
}
.cc__table-main a {
    @apply font-semibold inline-block pr-3 md:pr-4 lg:pr-0 hover:text-ao-mid-blue-500 dark:text-slate-300 dark:hover:text-slate-400 transition-colors leading-tight line-clamp-2;
}
.cc__table-avatar {
    @apply w-10 h-10 min-w-[2.5rem] object-cover rounded-full;
}
.cc__table-user,
.cc__table-user a {
    @apply inline-flex items-center gap-3;
}
.cc__table-listing-more {
    @apply lg:hidden cursor-pointer text-ao-mid-blue-400 hover:text-ao-mid-blue-600 dark:text-slate-400 dark:hover:text-slate-500 transition-colors;
}
.cc__table-grid {
    @apply grid grid-cols-2 sm:grid-flow-col sm:auto-cols-fr;
}
.cc__table-grid > div {
    @apply flex items-center min-h-[4rem] p-3 border-ao-mid-blue-200 dark:border-slate-700 even:border-l border-t sm:odd:border-l sm:first:!border-l-0 lg:!border-0;
}
.cc__table-grid > div a {
    @apply font-semibold hover:text-ao-mid-blue-500 dark:text-slate-300 dark:hover:text-slate-400 transition-colors;
}
.cc__table-subheading {
    @apply text-ao-mid-blue-500 dark:text-slate-400 text-xs lg:hidden;
}
.cc__table-grid b {
    @apply font-semibold lg:font-medium dark:text-slate-300;
}
</style>
