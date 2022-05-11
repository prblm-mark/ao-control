<template>
    <div class="cc__date-selector">
        <h4 class="cc__h4">Date Range</h4>

        <span class="cc__date-selector-h-full">
            <BaseSelect
                :modelValue="duration"
                :options="options"
                @change="handleChange"
            />
        </span>

        <span
            class="cc__date-selector-h-full row-start-2 col-start-1 col-span-2"
        >
            <BaseInput
                :modelValue="date"
                type="date"
                required
                @change="handleChange"
            />
        </span>

        <span class="cc__date-selector-h-full row-start-1 col-start-3">
            <PrimaryButton label="Apply" :full="true" />
        </span>

        <span class="cc__date-selector-h-full row-start-2 col-start-3">
            <SecondaryButton label="Clear" :full="true" />
        </span>

        <span class="col-start-1 col-span-full mt-2">
            <BaseCheckbox
                :modelValue="compare"
                label="Compare to previous year"
            />
        </span>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import BaseInput from '../forms/BaseInput.vue'
import BaseCheckbox from '../forms/BaseCheckbox.vue'
import PrimaryButton from '../buttons/PrimaryButton.vue'
import SecondaryButton from '../buttons/SecondaryButton.vue'
import BaseSelect from '../forms/BaseSelect.vue'

export default defineComponent({
    components: {
        BaseInput,
        BaseCheckbox,
        PrimaryButton,
        SecondaryButton,
        BaseSelect,
    },
    setup() {
        const options = ref(['Last 7 Days', 'Last 14 Days', 'Last 30 Days'])
        const duration = ref('Last 7 Days')
        const date = ref('2022-07-09')
        const compare = ref()

        const handleChange = (e) => console.log(e.target.value)
        return { options, date, duration, compare, handleChange }
    },
})
</script>

<style>
.cc__date-selector {
    @apply w-full max-w-[400px] grid grid-cols-[1fr_minmax(125px,_1fr)_75px] sm:grid-cols-[1fr_minmax(175px,_1fr)_75px] auto-rows-min gap-2 items-center p-3 md:p-4 rounded bg-ao-mid-blue-300 dark:bg-slate-800;
}
.cc__date-selector h4 {
    @apply whitespace-nowrap;
}
.cc__date-selector .cc__date-selector-h-full,
.cc__date-selector .cc__date-selector-h-full * {
    @apply h-full;
}
</style>
