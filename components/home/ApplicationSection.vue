<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
</script>

<template>
    <section class="px-3 py-10 font-tahoma">
        <SectionHeader simple_text="Application" color_text="Digital Marketing"/>
        <h1 class="text-center text-gray-900 dark:text-gray-100 text-xl">Watch our curated videos to get insight into the world of Digital Marketing</h1>
        <div class="py-10 px-3 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center">
            <iframe width="360" height="230" src="https://www.youtube.com/embed/4UDwrfTNmo4?si=g7Eunz4ye7oKEdZn"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="360" height="230" src="https://www.youtube.com/embed/4UDwrfTNmo4?si=g7Eunz4ye7oKEdZn"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="360" height="230" src="https://www.youtube.com/embed/4UDwrfTNmo4?si=g7Eunz4ye7oKEdZn"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </section>
</template>

<style scoped>

</style>