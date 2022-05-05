<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppMenu from './components/AppMenu.vue'
</script>

<template>
    <AppHeader />

    <section class="content">
        <AppMenu />

        <RouterView />
    </section>
</template>

<style>
.content {
    @apply grid md:grid-cols-[300px_1fr] md:flex max-w-7xl mx-auto overflow-hidden md:overflow-visible md:mt-4 p-4 sm:px-5 xl:px-0;
}
</style>
