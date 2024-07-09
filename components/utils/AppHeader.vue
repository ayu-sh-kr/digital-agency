<script setup lang="ts">

import {useDark} from "@vueuse/core";
import {useToggle} from "@vueuse/shared";

const isDark = useDark();
const toggleDark = useToggle(isDark);


let isScrolled = ref(false);
let currentPos = ref<number>(0);
let headerVisible = ref(true);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
    isScrolled.value = window.scrollY > 50;
    headerVisible.value = currentPos.value > scrollY;
    setTimeout(() => {
        currentPos.value = scrollY;
    }, 2000)
}

const route = useRoute();
const activeHeader = computed(() => items.find(item => item.url === route.path) || {label: '', to: ''});


const items: Links[] = [
    {
        url: '/',
        label: 'Home'
    },

    {
        url: '/membership',
        label: 'Membership'
    },

    {
        url: '/reviews',
        label: 'Reviews'
    },

    {
        url: '/about',
        label: 'About'
    },

    {
        url: '/blogs',
        label: 'Blogs'
    },

    {
        url: '/shop',
        label: 'Shop'
    }
];



export interface Links {
    url: string,
    label: string
}
</script>

<template>
<header class="grid md:grid-cols-4 grid-cols-2 px-3 place-content-center py-3 font-tahoma sticky top-0 z-30 "
        :class="{'bg-transparent backdrop-blur shadow-none hover:shadow-md animate-up': isScrolled, '': !isScrolled, 'animate-down': headerVisible}"
>
    <div class="col-span-1 font-semibold text-3xl text-teal-600">Logo</div>
    <div class="col-span-2 md:flex items-center justify-center hidden">
        <ul class="flex items-center justify-center gap-x-5">
            <li
                v-for="item in items"
                class="hover:text-teal-600 text-lg"
                :class="{'text-teal-600': activeHeader.label === item.label}"
            >
                <NuxtLink :to="item.url">{{item.label}}</NuxtLink>
            </li>
        </ul>
    </div>
    <div class="col-span-1 flex items-center justify-end px-3">
        <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            size="sm"
            color="primary"
            square
            variant="solid"
            @click="toggleDark()"
        />
    </div>
</header>
</template>

<style scoped>

.animate-up {
    @apply transform -translate-y-full duration-700
}

.animate-down {
    @apply transform translate-y-0 duration-700
}

</style>