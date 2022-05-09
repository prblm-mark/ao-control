<template>
    <main class="system-content">
        <h2 class="system-heading">Form Elements</h2>
        <p>
            Form element types are a key to the control center, and therefore
            there are lots of states and variations to consider.
        </p>
        <div class="system-panel">
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
                    :v-model="inputDate"
                    label="Date"
                    type="date"
                    placeholder="Select date"
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

                <BaseCheckbox :modelValue="inputCheckbox" label="Checkbox" />
            </form>
        </div>
    </main>
</template>

<script>
import { ref } from 'vue'
import BaseInput from '@/components/forms/BaseInput.vue'
import formSelectOptions from '@/data/formSelectOptions.json'
import BaseSelect from '../components/forms/BaseSelect.vue'
import BaseCheckbox from '../components/forms/BaseCheckbox.vue'

export default {
    components: {
        BaseInput,
        BaseSelect,
        BaseCheckbox,
    },

    setup() {
        const inputText = ref('')
        const inputNumber = ref('')
        const inputEmail = ref('')
        const inputPassword = ref('')
        const inputUrl = ref('')
        const inputDate = ref('')
        const inputDisabled = ref()
        const inputSelect = ref('Default Option')
        const error = ref('')

        const handleChange = (e) => {
            const result = e.target.value
            result.toLowerCase()
            result === 'error'
                ? (error.value = 'This is some error text')
                : (error.value = '')
        }

        return {
            inputText,
            inputNumber,
            inputEmail,
            inputPassword,
            inputUrl,
            inputDate,
            handleChange,
            inputDisabled,
            inputSelect,
            formSelectOptions,
            error,
        }
    },
}
</script>

<style></style>
