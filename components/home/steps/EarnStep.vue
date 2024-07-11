<script setup lang="ts">

import StepComponent, {type StepData} from "~/components/home/steps/StepComponent.vue";

const item: StepData = {
    header_color: 'Earn From',
    header_simple: 'Digital Marketing',
    sub_header: 'Earn by creating and selling your own digital products',
    description: `Provide digital marketing consulting to companies. Help them optimize their strategies and achieve better results.
                        Help businesses set up and manage their online stores. Understand platforms like Shopify or WooCommerce.`,
    icon: 'ic:baseline-attach-money'
}
</script>

<template>
    <StepComponent :icon="item.icon" :description="item.description" :sub_header="item.sub_header" :header_simple="item.header_simple" :header_color="item.header_color" />
</template>

<style scoped>

</style>