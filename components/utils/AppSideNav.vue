<script setup lang="ts">

const links: Link[] = [
    {label: 'Home', to: '/', icon: 'i-heroicons-home'},

    {to: '/membership', label: 'Membership', icon: 'i-heroicons-user-circle'},

    {to: '/reviews', label: 'Reviews', icon: 'i-heroicons-star'},

    {to: '/about', label: 'About', icon: 'i-heroicons-information-circle'},

    {to: '/blogs', label: 'Blogs', icon: 'i-heroicons-book-open'},

    {to: '/shop', label: 'Shop', icon: 'i-heroicons-shopping-bag'}
]

export interface Link {
    label: string,
    to: string,
    icon?: string,
    iconClass?: string
}

export interface IconType {
    icon: string,
    color?: string
}

</script>

<template>
    <UVerticalNavigation :links="links"
                         :ui="{
                               icon: {
                                   active: 'text-primary dark:text-primary',
                                   inactive: 'text-gray-800 dark:text-gray-200 group-hover:text-gray-950 dark:group-hover:text-gray-100'
                               }

                         }"
    />
</template>

<style scoped>

</style>