<script setup lang="ts">

</script>

<template>
<section  v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1, transition: { repeatType: 'mirror' } }"
          :delay="200"
          :duration="1200" class="px-3 grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center font-tahoma py-20 gap-y-5">
    <div class="md:text-6xl sm:text-5xl text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 text-center tracking-wide">
        Take your offline business online only in 30 days.
    </div>
    <div class="flex flex-col gap-y-3 items-center text-center">
        <p class="text-gray-800 dark:text-gray-200 text-lg">Learn digital marketing in Hindi by India's leading digital coach.</p>
        <UButton label="Register for Masterclass" size="xl" />
    </div>
</section>
</template>

<style scoped>

</style>