<script setup></script>

<template>
    <div class="cc__report-heading">
        <div>
            <h2 class="cc__h2">
                <slot></slot>
            </h2>
            <p>
                <slot name="intro"></slot>
            </p>
        </div>

        <div class="cc__report-heading-aside">
            <slot name="logo"></slot>
        </div>
    </div>
</template>

<style scoped>
.cc__report-heading {
    @apply flex items-center justify-between text-sm md:text-base;
}
.cc__report-heading-aside {
    @apply max-w-[100px] md:max-w-[150px] ml-5 md:ml-6;
}
</style>
