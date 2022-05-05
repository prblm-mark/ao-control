<template>
    <header>
        <div>
            <LogoType />

            <p>Control Center Design System V1.0</p>

            <ThemeToggle />
        </div>
    </header>
</template>

<script>
import LogoType from '../assets/logoType.vue'
import ThemeToggle from './mode/ThemeToggle.vue'
export default {
    components: { LogoType, ThemeToggle },
}
</script>

<style scoped>
header {
    @apply w-full border-b border-ao-mid-blue-300 dark:border-slate-800 p-4 sm:px-5 xl:px-0;
}
header > div {
    @apply flex flex-col relative max-w-7xl mx-auto sm:flex-row sm:justify-between sm:items-center;
}
header p {
    @apply text-sm mt-1 sm:mt-0;
}
</style>
