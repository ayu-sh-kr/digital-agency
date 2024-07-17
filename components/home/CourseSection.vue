<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
import CourseCard, {type CourseData} from "~/components/home/course/CourseCard.vue";

const colors = [
    {
        light: 'bg-violet-200 text-violet-400 hover:border hover:scale-105 transition duration-300 hover:border-violet-500',
        dark: 'dark:bg-violet-500 dark:text-violet-800 dark:hover:border-violet-900',
        color: 'violet',
        icon: 'text-violet-400 dark:text-violet-800'
    },

    {
        light: 'bg-emerald-200 text-emerald-400 hover:border hover:scale-105 transition duration-300 hover:border-emerald-500',
        dark: 'dark:bg-emerald-500 dark:text-emerald-800 dark:hover:border-emerald-900',
        color: 'emerald',
        icon: 'text-emerald-400 dark:text-emerald-800'
    },

    {
        light: 'bg-orange-200 text-orange-400 hover:border hover:scale-105 transition duration-300 hover:border-orange-500',
        dark: 'dark:bg-orange-500 dark:text-orange-800 dark:hover:border-orange-500',
        color: 'orange',
        icon: 'text-orange-400 dark:text-orange-800'
    }
]

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
        <CourseCard v-for="(item, index) in items"  :data="item" :light="colors[index].light" :dark="colors[index].dark" :color="colors[index].color" :icon="colors[index].icon"/>
    </div>
</section>
</template>

<style scoped>

</style>