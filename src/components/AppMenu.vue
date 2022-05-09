<template>
    <nav>
        <button @click="showMenu = !showMenu">
            <IconMenu :showMenu="showMenu" />
        </button>
        <h5>Design System Menu</h5>
        <hr />
        <menu :class="{ block: showMenu }">
            <RouterLink to="/">Colours</RouterLink>
            <RouterLink to="/fonts">Fonts</RouterLink>
            <RouterLink to="/headings">Headings</RouterLink>
            <RouterLink to="/buttons">Buttons</RouterLink>
            <RouterLink to="/form-elements">Form Elements</RouterLink>
            <RouterLink to="/dashboard">Dashboard</RouterLink>
        </menu>
    </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
import IconMenu from './icons/IconMenu.vue'
export default {
    components: { IconMenu },
    setup() {
        const showMenu = ref(false)

        return {
            showMenu,
        }
    },
}
</script>

<style>
nav {
    @apply relative md:w-72 md:fixed;
}
nav button {
    @apply absolute left-0 top-0 text-ao-mid-blue-800 dark:text-slate-200 cursor-pointer md:hidden;
}
nav h5 {
    @apply text-sm mb-3 pl-10 pt-0.5 md:p-0 font-semibold text-ao-mid-blue-800 dark:text-slate-200;
}
nav hr {
    @apply absolute w-screen top-10 -left-4 sm:-left-5 border-ao-mid-blue-300 dark:border-slate-800 md:hidden;
}
nav menu {
    @apply hidden mt-10 md:mt-0 md:block;
}
nav a {
    @apply w-full block text-sm px-4 py-1.5 font-normal text-ao-dark-blue-600 dark:text-slate-400 border-l border-ao-mid-blue-300 dark:border-slate-700 transition-colors;
}
nav a:hover {
    @apply text-ao-mid-blue-800 border-ao-mid-blue-400 dark:text-slate-200 dark:border-slate-500;
}
nav a.router-link-exact-active {
    @apply font-semibold text-ao-mid-blue border-ao-mid-blue dark:text-ao-light-blue dark:border-ao-light-blue;
}
</style>
