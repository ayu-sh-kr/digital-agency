<script setup lang="ts">

import {useDark} from "@vueuse/core";
import {useToggle} from "@vueuse/shared";
import AppSideNav from "~/components/utils/AppSideNav.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const isSideNav = ref<boolean>(true);
const toggleSideNav = useToggle(isSideNav);


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


const items: Link[] = [
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



export interface Link {
    url: string,
    label: string
}
</script>

<template>
<header class="grid md:grid-cols-4 grid-cols-2 px-3 place-content-center py-3 font-tahoma sticky top-0 z-30 "
        :class="{'bg-transparent backdrop-blur shadow-none hover:shadow-md animate-up': isScrolled, '': !isScrolled, 'animate-down': headerVisible}"
>
    <div class="col-span-1 font-semibold text-3xl text-primary">Logo</div>
    <div class="col-span-2 md:flex items-center justify-center hidden">
        <ul class="flex items-center justify-center gap-x-5">
            <li
                v-for="item in items"
                class="hover:text-primary text-lg"
                :class="{'text-primary': activeHeader.label === item.label}"
            >
                <NuxtLink :to="item.url">{{item.label}}</NuxtLink>
            </li>
        </ul>
    </div>
    <div class="col-span-1 flex items-center justify-end gap-x-5">
        <UIcon
            class="text-primary w-8 h-8 hover:bg-gray-300 dark:hover:bg-gray-800 p-1 rounded-lg cursor-pointer"
            dynamic
            :name="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="primary"
            @click="toggleDark()"
        />
        <div class="sm:hidden block">
            <UIcon
                class="text-primary w-8 h-8 hover:bg-gray-300 dark:hover:bg-gray-800 p-1 rounded-lg cursor-pointer"
                dynamic
                name="i-heroicons-bars-3"
                @click="toggleSideNav()"
            />
        </div>
    </div>
</header>
<div class="sm:hidden block absolute z-30 right-0">
    <AppSideNav :hidden="isSideNav"/>
</div>
</template>

<style scoped>

.animate-up {
    @apply transform -translate-y-full duration-700
}

.animate-down {
    @apply transform translate-y-0 duration-700
}

</style>