<script setup lang="ts">

import type {PropType} from "vue";
import CourseCard from "~/components/home/course/CourseCard.vue";
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
<div class="flex flex-col items-center justify-between bg-transparent backdrop-blur shadow-lg rounded-lg px-3 py-2">
    <div class="py-12">
        <Icon :name="data.icon" class="w-24 h-24 text-gray-600" />
    </div>
    <SectionHeader simple_text="" :color_text="data.label"/>
    <ul type="disc" class="px-3 py-5">
        <li v-for="content in data.description" class="text-lg py-2 text-gray-900 dark:text-gray-100 text-left w-full">{{content}}</li>
    </ul>
    <UButton label="Join Now" size="lg"/>
</div>
</template>

<style scoped>

</style>