<template>
    <div class="cc__card">
        <div class="cc__card-heading">
            <div>
                <h2 class="cc__h2">Articles</h2>
            </div>

            <div class="cc__card-heading-aside">
                <a href="#"> <span>View Report</span><IconExport /></a>
            </div>
        </div>

        <div class="cc__table-container">
            <table class="cc__table cc__table-overview">
                <thead>
                    <tr>
                        <th v-for="data in overviewData" :key="data.name">
                            <h6 class="cc__h6 cc__table-subheading">
                                {{ data.name }}
                            </h6>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td v-for="data in overviewData" :key="data.name">
                            <h3 class="cc__h3 cc__table-overview-stat">
                                {{ data.stat }}
                            </h3>
                            <span class="cc__table-overview-details">
                                {{ data.detailsTitle }} <br />
                                {{ data.details }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="cc__table-listing">
            <div
                class="cc__table-listing-grid"
                v-for="(data, index) in listingData"
                :key="index"
            >
                <div class="cc__table-listing-main">
                    <div>
                        <span class="cc__h3 cc__table-listing-counter">
                            {{ index + 1 }}
                        </span>

                        <a href="#">{{ data.title }}</a>
                    </div>
                </div>
                <div class="cc__table-listing-details">
                    <table class="cc__table">
                        <tr>
                            <td v-for="stat in data.stats" :key="stat.name">
                                <h3 class="cc__h6 cc__table-subheading">
                                    {{ stat.name }}
                                </h3>
                                <b>{{ stat.details }}</b>
                                {{ stat.detailsPercent }}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import IconExport from '../icons/IconExport.vue'

export default defineComponent({
    props: {
        overviewData: {
            type: [Array],
            required: true,
        },
        listingData: {
            type: [Array],
            required: true,
        },
    },
    setup() {
        return {}
    },
    components: { IconExport },
})
</script>

<style scoped>
.cc__table-container {
    @apply grid lg:grid-cols-dashboard-table-lg xl:grid-cols-dashboard-table border-b border-ao-mid-blue-200 dark:border-slate-700 overflow-x-auto;
}
/* General table styles */
.cc__table {
    @apply table-fixed w-[200%] sm:w-full h-full border-collapse lg:col-start-2;
}
.cc__table thead tr {
    @apply border-b border-ao-mid-blue-200 dark:border-slate-700;
}
.cc__table td,
.cc__table th {
    @apply first:border-l-0 lg:first:border-l border-l border-ao-mid-blue-200 dark:border-slate-700 text-left p-3 lg:py-2 align-top;
}
.cc__table-subheading {
    @apply text-xs font-semibold;
}
/* Specifc styles to main stats section at top */
.cc__table-overview-details {
    @apply text-xs block leading-tight text-ao-mid-blue-500 dark:text-slate-400;
}
/* Specifc styles to idividual listing section */
.cc__table-listing {
    @apply col-start-1 col-span-full;
}
.cc__table-listing-grid {
    @apply grid lg:grid-cols-dashboard-table-lg xl:grid-cols-dashboard-table;
}
.cc__table-listing-main {
    @apply col-span-1 p-3 border-b border-ao-mid-blue-200 dark:border-slate-700;
}
.cc__table-listing-main > div {
    @apply inline-flex;
}
.cc__table-listing-counter {
    @apply text-ao-teal dark:text-ao-light-blue ml-0.5 mr-3 lg:mr-4 text-2xl font-bold;
}
.cc__table-listing-grid:last-of-type .cc__table-listing-main {
    @apply lg:border-b-0;
}
.cc__table-listing-main a {
    @apply text-sm font-bold inline-block hover:text-ao-mid-blue-500 dark:text-slate-300 transition-colors leading-tight line-clamp-2;
}
.cc__table-listing-details {
    @apply overflow-x-auto;
}
.cc__table-listing-details td {
    @apply text-xs leading-tight text-ao-mid-blue-700 lg:text-ao-mid-blue-600 dark:text-slate-400;
}
.cc__table-listing .cc__table-subheading {
    @apply mb-1 lg:hidden;
}
.cc__table-listing td {
    @apply lg:align-middle;
}
.cc__table-listing > div:not(:last-of-type) tr {
    @apply border-b border-ao-mid-blue-200 dark:border-slate-700;
}
</style>
