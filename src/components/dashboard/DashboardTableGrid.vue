<template>
    <div class="cc__card">
        <div class="cc__card-heading">
            <div>
                <h2 class="cc__h2">Articles</h2>
            </div>

            <div
                class="cc__card-heading-aside inline-flex items-center space-x-2 text-ao-mid-blue-600 text-sm font-semibold"
            >
                <span>View Report</span><IconExport />
            </div>
        </div>

        <div class="cc__table">
            <div class="cc__table-body">
                <div>
                    <h6 class="cc__h6 cc__table-heading">Page Views</h6>
                    <div>
                        <h3 class="cc__h3">190, 685</h3>
                        <span
                            class="text-xs block leading-tight text-ao-mid-blue-500"
                            >% of Total: <br />
                            100.00% (190, 685)
                        </span>
                    </div>
                </div>

                <div>
                    <h6 class="cc__h6 cc__table-heading">Unique Page Views</h6>
                    <div>
                        <h3 class="cc__h3">162, 985</h3>
                        <span
                            class="text-xs block leading-tight text-ao-mid-blue-500"
                            >% of Total: <br />
                            100.00% (190, 685)
                        </span>
                    </div>
                </div>

                <div>
                    <h6 class="cc__h6 cc__table-heading">Page Views</h6>
                    <div>
                        <h3 class="cc__h3">190, 685</h3>
                        <span
                            class="text-xs block leading-tight text-ao-mid-blue-500"
                            >% of Total: <br />
                            100.00% (190, 685)
                        </span>
                    </div>
                </div>

                <div>
                    <h6 class="cc__h6 cc__table-heading">Unique Page Views</h6>
                    <div>
                        <h3 class="cc__h3">162, 985</h3>
                        <span
                            class="text-xs block leading-tight text-ao-mid-blue-500"
                            >% of Total: <br />
                            100.00% (190, 685)
                        </span>
                    </div>
                </div>

                <div>
                    <h6 class="cc__h6 cc__table-heading">Page Views</h6>
                    <div>
                        <h3 class="cc__h3">190, 685</h3>
                        <span
                            class="text-xs block leading-tight text-ao-mid-blue-500"
                            >% of Total: <br />
                            100.00% (190, 685)
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-start-1 col-span-full">Listed articles</div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import IconExport from '../icons/IconExport.vue'

export default defineComponent({
    setup() {
        return {}
    },
    components: { IconExport },
})
</script>

<style scoped>
.cc__table {
    @apply grid lg:grid-cols-[minmax(max-content,_300px)_1fr] border-b border-ao-mid-blue-200;
}
.cc__table-heading {
    @apply text-xs font-bold  border-b border-ao-mid-blue-200 p-3;
}
.cc__table-body {
    @apply grid grid-cols-5 auto-cols-[minmax(0,_1fr)] col-start-2;
}
.cc__table-body > div {
    @apply grid auto-rows-[minmax(20px,_auto)] border-l border-ao-mid-blue-200;
}
.cc__table-body > div > div {
    @apply row-start-2;
}
</style>
