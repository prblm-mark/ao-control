<template>
    <main class="system-content">
        <h2 class="system-heading">Form Elements</h2>
        <p>
            Form element types are a key to the control center, and therefore
            there are lots of states and variations to consider.
        </p>
        <div class="system-panel">
            <form
                class="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
            >
                <BaseInput
                    :v-model="inputText"
                    label="Text"
                    type="text"
                    placeholder="Enter your name"
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
            </form>
        </div>
    </main>
</template>

<script>
import { ref } from 'vue'
import BaseInput from '@/components/forms/BaseInput.vue'

export default {
    components: {
        BaseInput,
    },

    setup() {
        const inputText = ref('')
        const inputNumber = ref('')
        const inputEmail = ref('')
        const inputPassword = ref('')
        const inputUrl = ref('')
        const inputDate = ref('')

        const handleChange = (e) => console.log(e.target.value)

        return {
            inputText,
            inputNumber,
            inputEmail,
            inputPassword,
            inputUrl,
            inputDate,
            handleChange,
        }
    },
}
</script>

<style></style>
