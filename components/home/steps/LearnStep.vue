<script setup lang="ts">

import StepComponent, {type StepData} from "~/components/home/steps/StepComponent.vue";

const item: StepData = {
    header_color: 'Learn',
    header_simple: 'Digital Marketing',
    sub_header: 'Learn Digital Marketing and boost your business growth',
    description: `Digital marketing helps businesses reach wider audiences, build brand loyalty, and measure success effectively.
                    Digital marketing lets you be creative. Crafting engaging content, designing campaigns,
                    and experimenting with strategies allow you to express your creativity while achieving business goals.`,
    icon: 'i-heroicons-light-bulb'
}
</script>

<template>
    <StepComponent :icon="item.icon" :description="item.description" :sub_header="item.sub_header" :header_simple="item.header_simple" :header_color="item.header_color" />

</template>

<style scoped>

</style>