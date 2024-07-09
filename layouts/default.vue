<script setup lang="ts">

import AppHeader from "~/components/utils/AppHeader.vue";
</script>

<template>
    <AppHeader/>
    <slot/>
    <UNotifications/>
</template>

<style scoped>

</style>