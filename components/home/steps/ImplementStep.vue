<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
</script>

<template>
    <section v-motion-pop-visible-once class="px-3 py-12 sm:py-16 md:py-20 font-tahoma">
        <div class="text-center">
            <SectionHeader simple_text="Digital Marketing" color_text="Implement" />
            <div class="py-16 grid md:grid-cols-2 grid-cols-1 place-items-center place-content-center gap-y-5">
                <div class="md:hidden block">
                    <UIcon name="ic:twotone-settings-suggest" dynamic class="w-32 h-32 text-primary"/>
                </div>
                <div class="flex flex-col gap-y-5">
                    <h1 class="font-semibold text-gray-800 dark:text-gray-200 md:text-xl text-lg">Implement Digital Marketing rules the correct way</h1>
                    <p class="text-gray-900 dark:text-gray-100 sm:px-10 md:px-16">
                        Start by understanding what you want to achieve. Are you aiming for brand awareness,
                        lead generation, sales, or customer retention? Set clear, measurable goals.

                        Identify your target audience. Understand their demographics, interests, and online behavior. This knowledge will guide your marketing efforts.
                    </p>
                </div>
                <div class="md:block hidden">
                    <UIcon name="ic:twotone-settings-suggest" dynamic class="w-32 h-32 text-primary"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>