<script setup lang="ts">

const props = defineProps({
    color_text: {
        type: String,
        required: true
    },

    simple_text: {
        type: String,
        required: true
    }
})
</script>

<template>
<div class="text-center font-tahoma py-10">
    <h3 class="lg:text-3xl md:text-2xl text-xl"><span class="text-primary">{{ color_text }}</span> {{ simple_text }}</h3>
</div>
</template>

<style scoped>

</style>