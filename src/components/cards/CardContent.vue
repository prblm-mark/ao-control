<script setup></script>
<template>
    <div v-if="$slots.content" class="cc__card-content">
        <slot name="content"></slot>
    </div>
</template>
