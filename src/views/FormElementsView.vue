<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/forms/BaseInput.vue'
import formSelectOptions from '@/data/formSelectOptions.json'
import BaseSelect from '../components/forms/BaseSelect.vue'
import BaseCheckbox from '../components/forms/BaseCheckbox.vue'
import BaseRadioGroup from '@/components/forms/BaseRadioGroup.vue'
import SystemHeading from '@/components/system/SystemHeading.vue'
import SystemDescription from '@/components/system/SystemDescription.vue'
import CardElement from '../components/cards/CardElement.vue'

const inputText = ref('')
const inputNumber = ref('')
const inputEmail = ref('')
const inputPassword = ref('')
const inputUrl = ref('')
const inputDate = ref('2022-07-09')
const inputDisabled = ref()
const inputSelect = ref('Default Option')
const inputCheckbox = ref()
const inputRadio = ref(1)
const error = ref('')
const radioOptions = ref([
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 },
])

const handleChange = (e) => {
    // Create a dummy error if 'error' is typed
    const result = e.target.value
    result.toLowerCase()
    result === 'error'
        ? (error.value = 'This is some error text')
        : (error.value = '')
}
</script>
<template>
    <main class="system-content">
        <SystemHeading>Form Elements</SystemHeading>
        <SystemDescription>
            Form element types are a key to the control center, and therefore
            there are lots of states and variations to consider.
            <br />
            <b class="text-sm pt-2 block">
                Note: The date input will be using a js solution for the picker
                itself
            </b>
        </SystemDescription>

        <CardElement>
            <template #heading> Basic </template>
            <template #content>
                <form
                    class="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 items-end"
                >
                    <BaseInput
                        :v-model="inputText"
                        label="Text"
                        type="text"
                        placeholder="Enter your name"
                        :error="error"
                        @change="handleChange"
                    />
                    <BaseInput
                        :v-model="inputNumber"
                        label="Number"
                        type="number"
                        placeholder="Enter you age"
                        @change="handleChange"
                    />
                    <BaseInput
                        :v-model="inputEmail"
                        label="Email"
                        type="email"
                        placeholder="Email"
                        @change="handleChange"
                    />
                    <BaseInput
                        :v-model="inputPassword"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        @change="handleChange"
                    />
                    <BaseInput
                        :v-model="inputUrl"
                        label="URL"
                        type="url"
                        placeholder="Enter url"
                        @change="handleChange"
                    />
                    <BaseInput
                        :modelValue="inputDate"
                        label="Date"
                        type="date"
                        required
                        @change="handleChange"
                    />
                    <BaseInput
                        :v-model="inputDisabled"
                        label="Disabled"
                        type="text"
                        disabled
                        placeholder="This is disabled"
                        @change="handleChange"
                    />
                    <BaseSelect
                        :modelValue="inputSelect"
                        :options="formSelectOptions"
                        label="Basic Select"
                        @change="handleChange"
                    />
                    <BaseCheckbox
                        :modelValue="inputCheckbox"
                        label="Checkbox"
                    />
                    <BaseRadioGroup
                        :modelValue="inputRadio"
                        :options="radioOptions"
                        :name="inputRadio"
                    />
                </form>
            </template>
        </CardElement>
    </main>
</template>
