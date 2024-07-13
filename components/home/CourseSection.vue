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
    },

    {
        icon: 'mdi:currency-rupee',
        label: 'DhanNeeti',
        description: [
            'Create New & Multiple Sources Of Income',
            'MSI Shaastra',
            'Affiliate Marketing Shaastra',
            'Content Marketing Shaastra',
            'Influencer Marketing Shaastra & Much More'
        ]
    },

    {
        icon: 'mdi:crown',
        label: 'RaajNeeti',
        description: [
            'Scale Up Your Business With Automations',
            'Tribe Building Mastery',
            'Automation Mastery',
            'Webinar Selling Mastery',
            'Group Consultations & Much More'
        ]
    }
]
</script>

<template>
<section class="px-3 font-tahoma py-10">
    <SectionHeader simple_text="Offered" color_text="Courses"/>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-y-10">
        <CourseCard v-for="item in items" :data="item"/>
    </div>
</section>
</template>

<style scoped>

</style>