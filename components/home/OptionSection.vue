<script setup lang="ts">

</script>

<template>
<section class="px-3 py-10 font-tahoma w-full">
    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-y-5 text-white w-full">
        <div class="option-base bg-green-500 hover:bg-green-700">
            <h1 class="font-extrabold text-5xl">Ready to get started?</h1>
            <h3 class="font-semibold underline text-2xl cursor-pointer">Read our blogs</h3>
        </div>
        <div class="option-base bg-blue-500 hover:bg-blue-700">
            <h1 class="font-extrabold text-5xl">Consider buying our course?</h1>
            <h3 class="font-semibold underline text-2xl cursor-pointer">Discover Courses</h3>
        </div>
        <div class="option-base bg-teal-500 hover:bg-teal-700">
            <h1 class="font-extrabold text-5xl">Want personal mentoring?</h1>
            <h3 class="font-semibold underline text-2xl cursor-pointer">Book a meet</h3>
        </div>
    </div>
</section>
</template>

<style scoped>

.option-base {
    @apply flex flex-col justify-around items-start px-10 py-5 h-[420px] w-full transition-all duration-500 transform hover:-translate-y-1
}
</style>