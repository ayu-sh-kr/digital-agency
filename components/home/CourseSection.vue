<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
import CourseCard, {type CourseData} from "~/components/home/course/CourseCard.vue";

const items: CourseData[] = [
    {
        icon: 'mdi:account-card',
        label: 'LokNeeti',
        description: [
            'Create your Digital Ecosystem in 12 Weeks',
            'Content Creation Shaastra',
            'Social Media Shaastra',
            'Website & SEO Shaastra',
            'PPC Advertising Shaastra & Much More'
        ]
    }
]
</script>

<template>
<section class="px-3 font-tahoma dark:bg-gray-950 bg-gray-200 py-10">
    <SectionHeader simple_text="Offered" color_text="Courses"/>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center">
        <CourseCard v-for="item in items" :data="item"/>
    </div>
</section>
</template>

<style scoped>

</style>