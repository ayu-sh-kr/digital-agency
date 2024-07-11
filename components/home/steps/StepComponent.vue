<script setup lang="ts">
import SectionHeader from "~/components/utils/SectionHeader.vue";

const props = defineProps({
    header_color: {
        type: String,
        required: true
    },

    header_simple: {
        type: String,
        required: true
    },

    sub_header: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    icon: {
        type: String,
        required: true
    }
})

export interface StepData {
    header_color: string,
    header_simple: string,
    sub_header: string,
    description: string,
    icon: string
}
</script>

<template>
    <section v-motion-pop-visible-once class="px-3 py-12 sm:py-16 md:py-20 font-tahoma">
        <div class="text-center">
            <SectionHeader :simple_text="header_simple" :color_text="header_color" />
            <div class="py-16 grid md:grid-cols-2 grid-cols-1 place-items-center place-content-center gap-y-5">
                <div>
                    <UIcon :name="icon" dynamic class="w-32 h-32 text-primary"/>
                </div>
                <div class="flex flex-col gap-y-5">
                    <h1 class="font-semibold text-gray-800 dark:text-gray-200 md:text-xl text-lg">{{ sub_header }}</h1>
                    <p class="text-gray-900 dark:text-gray-100 sm:px-10 md:px-16">
                        {{ description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>