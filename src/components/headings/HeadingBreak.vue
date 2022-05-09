<template>
    <div class="cc__heading-line">
        <h3 class="cc__h3">{{ heading }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        heading: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped></style>
