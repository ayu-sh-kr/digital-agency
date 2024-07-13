<script setup lang="ts">

import type {PropType} from "vue";

const props = defineProps({
    data: {
        type: Object as PropType<CourseData>,
        required: true
    },

    color: {
        type: String
    },

    dark: {
        type: String
    },

    light: {
        type: String
    }
})


export interface CourseData {
    icon: string,
    label: string,
    description: string[]
}
</script>

<template>
<div class="flex flex-col items-center justify-between rounded-xl px-3 py-4 shadow-lg"
     :class="light ? `${light} ` : ' ' + dark ? `${dark} ` : ' '"
>
    <div class="py-12">
        <Icon :name="data.icon" class="w-24 h-24"
              :class=" light ? `${light} ` : ' ' + dark ? `${dark} ` : ' '"
        />
    </div>
    <h1 class="text-center lg:text-4xl md:text-3xl">{{data.label}}</h1>
    <ul class="px-3 py-5">
        <li v-for="content in data.description" class="md:text-lg text-sm py-2 text-left w-full">{{content}}</li>
    </ul>
    <button :class="`text-white rounded-xl bg-${color}-400 px-3 py-1`">Join Now</button>
</div>
</template>

<style scoped>

</style>