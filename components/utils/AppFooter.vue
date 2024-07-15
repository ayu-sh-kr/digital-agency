<script setup lang="ts">


import type {Link} from "~/components/utils/AppHeader.vue";

const menu: Link[] = [
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


const policy: Link[] = [
    {
        label: 'Delivery and Return',
        url: '/'
    },

    {
        label: 'Frequently Asked Question',
        url: '/'
    },

    {
        label: 'Privacy and Cookie Policy',
        url: '/'
    },

    {
        label: 'Terms and Conditions',
        url: '/'
    }
]


const knots: Link[] = [
    {
        label: 'Contact Us',
        url: '/',
    },

    {
        label: 'Consult An Expert',
        url: '/',
    },

    {
        label: 'Our Story',
        url: '/'
    },

    {
        label: 'Meet The Founders',
        url: '/'
    }
]

</script>

<template>
    <footer class="px-2 py-10 bg-black dark:bg-white text-gray-100 dark:text-gray-950">
        <div class="grid grid-cols-2 md:grid-cols-5 sm:place-content-start sm:place-items-start gap-y-5">
            <div class="col-span-2 sm:px-3 flex flex-col justify-between gap-y-10">
                <div>
                    <h4 class="text-gray-200 dark:text-gray-900 font-thin font-aktive sm:font-dm text-sm tracking-wide">ABOUT DIGITAL AGENCY</h4>
                    <p class="mt-5 text-0.75 font-aktive sm:font-dm">
                        Working in the field of Digital Marketing over the span of 20 years.
                    </p>
                </div>
            </div>
            <div>
                <h4 class="text-gray-200 dark:text-gray-900 font-thin font-aktive sm:font-dm text-sm tracking-wide">
                    MAIN MENU
                </h4>

                <ul class="footer-links">
                    <li v-for="item in menu" class="text-0.75">
                        <NuxtLink :to="item.url" class="hover:text-primary">
                            {{item.label}}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="text-gray-200 dark:text-gray-900 font-thin font-aktive sm:font-dm text-sm tracking-wide">
                    STORE POLICY
                </h4>

                <ul class="footer-links">
                    <li v-for="item in policy" class="text-0.75">
                        <NuxtLink :to="item.url" class="hover:text-primary">
                            {{item.label}}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="text-gray-200 dark:text-gray-900 font-thin font-aktive sm:font-dm text-sm tracking-wide">
                    DIGITAL AGENCY
                </h4>

                <ul class="footer-links">
                    <li v-for="item in knots" class="text-0.75">
                        <NuxtLink :to="{path: item.url}"
                                  class="hover:text-primary">
                            {{item.label}}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex gap-x-5 mt-8 justify-center">
            <NuxtLink :to="'https://www.instagram.com/'" target="_blank" class="block">
                <UIcon name="i-mdi-instagram" dynamic class="h-6 w-6 dark:text-gray-700 dark:hover:text-gray-900 text-gray-400 hover:text-gray-200"/>
            </NuxtLink>

            <NuxtLink :to="'https://facebook.com'" target="_blank" class="block">
                <UIcon name="i-mdi-facebook" dynamic class="h-6 w-6 font-aktive sm:font-dm dark:text-gray-700 dark:hover:text-gray-900 text-gray-400 hover:text-gray-200"/>
            </NuxtLink>

            <NuxtLink :to="'https://linkedin.com/'" target="_blank" class="block">
                <UIcon name="i-mdi-linkedin" dynamic class="h-6 w-6 font-aktive sm:font-dm dark:text-gray-700 dark:hover:text-gray-900 text-gray-400 hover:text-gray-200"/>
            </NuxtLink>

            <NuxtLink :to="'https://whatsapp.com'" target="_blank" class="block">
                <UIcon name="i-mdi-whatsapp" dynamic class="h-6 w-6 font-aktive sm:font-dm dark:text-gray-700 dark:hover:text-gray-900 text-gray-400 hover:text-gray-200"/>
            </NuxtLink>
        </div>
    </footer>
</template>

<style scoped>
.footer-links{
    @apply flex flex-col justify-start overflow-hidden gap-y-3 mt-3 font-aktive sm:font-dm;
}
</style>