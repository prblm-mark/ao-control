<script setup>
// import IconDark from '../icons/IconDark.vue'
// import IconLight from '../icons/IconLight.vue'
// import { ref } from 'vue'
const props = defineProps({
    icon: Object,
    iconString: String,
})

console.log(props.icon)
// console.log(props.iconString)

// const currentIcon = ref(props.iconString)

// const icons = {
//     IconLight,
//     IconDark,
// }
</script>

<template>
    <div class="cc__card-heading">
        <div>
            <h2 class="cc__h2">Heading 2</h2>
        </div>
        <div class="cc__card-heading-aside">
            <!-- <component :is="icons[currentIcon]"></component> -->
            <component :is="props.icon"></component>
        </div>
    </div>
</template>

<style scoped></style>
