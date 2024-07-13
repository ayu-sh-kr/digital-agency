<script setup lang="ts">

import type {PropType} from "vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";

const props = defineProps({
    data: {
        type: Object as PropType<CourseData>,
        required: true
    }
})


export interface CourseData {
    icon: string,
    label: string,
    description: string[]
}
</script>

<template>
<div class="flex flex-col items-center justify-between rounded-xl px-3 py-4 bg-violet-200 dark:bg-violet-500 shadow-lg">
    <div class="py-12">
        <Icon :name="data.icon" class="w-24 h-24 text-violet-400 dark:text-violet-900"/>
    </div>
    <h1 class="text-center text-violet-400 dark:text-violet-900 lg:text-4xl md:text-3xl">{{data.label}}</h1>
    <ul type="disc" class="px-3 py-5">
        <li v-for="content in data.description" class="md:text-lg text-sm py-2 text-left w-full">{{content}}</li>
    </ul>
    <UButton label="Join Now" color="blue" size="lg"/>
</div>
</template>

<style scoped>

</style>