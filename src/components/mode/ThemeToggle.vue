<template>
    <div class="theme-toggle">
        <input
            type="checkbox"
            class="theme-checkbox"
            id="theme-checkbox"
            @change="toggleTheme"
        />
        <label for="theme-checkbox" class="theme-label">
            <IconDark />
            <IconLight />
            <span class="ball"></span>
        </label>
    </div>
</template>

<script>
import IconDark from '../icons/IconDark.vue'
import IconLight from '../icons/IconLight.vue'
import { useModeStore } from '@/store/ModeStore'

export default {
    components: { IconDark, IconLight },

    setup() {
        const ModeStore = useModeStore()

        const toggleTheme = () => {
            document.documentElement.classList.toggle('dark')
            ModeStore.darkMode = !ModeStore.darkMode
        }

        return { toggleTheme }
    },
}
</script>

<style scoped>
.theme-toggle {
    @apply absolute top-1 right-0 sm:relative sm:top-0;
}

.theme-checkbox {
    @apply opacity-0 absolute;
}

.theme-label {
    @apply w-[54px] h-[28px] bg-ao-teal dark:bg-ao-light-blue text-ao-mid-blue-200 rounded-full relative p-[4px] cursor-pointer flex justify-between items-center;
}

.theme-label .ball {
    @apply h-[22px] w-[22px] bg-ao-mid-blue-200 absolute rounded-full transition-transform top-[3px] left-[3px];
}

.theme-checkbox:checked + label .ball {
    @apply translate-x-[25px];
}
</style>
