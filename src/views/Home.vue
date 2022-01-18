<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex justify-between h-16">
                <div class="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center">
                        <img class="block lg:hidden h-14 w-auto rounded-full " src="../assets/images/okko.jpg"
                            alt="Workflow" />
                            <p class="text-gray-700 text-xl font-semibold">TOPLYVO CLUB</p>
                        <img class="hidden lg:block h-16 w-auto rounded-full p-2" src="../assets/images/okko.jpg"
                            alt="Workflow" />
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">

                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                </div>
                <div class=" flex items-center  sm:hidden">
                    <!-- Mobile menu button -->
                    <DisclosureButton
                        class="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 bg-white shadow-lg ">
                        <span class="sr-only">Open main menu</span>
                        <MenuIcon v-if="!open" @click="isOpen =  true" class="block h-6 w-6" aria-hidden="true" />
                        <XIcon v-else class="block h-6 w-6" @click="isOpen = false" aria-hidden="true" />
                    </DisclosureButton>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden pb-64">
            <div class="ml-4 mt-4 text-gray-800 font-semibold">
                <p>+38 (096) 901 69 58</p>
                <p>+38 (096) 901 69 58</p>
            </div>
            <div>
                <p class="ml-4 mt-4 text-gray-800 font-semibold hover:text-gray-400" v-if="!isLogin" @click="isLogin = true">Войти в аккаунт</p>
                <p class="ml-4 mt-4 text-gray-800 font-semibold" v-if="isLogin" @click="isLogin = false">Выйти</p>
                <div class="flex flex-col">
                <router-link to="/tickets" class="ml-4 mt-4 text-gray-800 font-semibold" v-if="isLogin">Мои талоны</router-link>
                <a href="https://invite.viber.com/?g2=AQBKlr1IsR1JE0zCp1OmoVIen7V0XKG0g6G9zG2W%2BUu1C2sgOgaxMtMWz0bPOtG%2F" target="_blank" class="viber">Мы в вайбере</a>
                </div>
            </div>
            <div class="pt-2 pb-4 ">
                <img src="../assets/images/bg.png" alt="">
            </div>
        </DisclosurePanel>
    </Disclosure>
    <div v-show="!isOpen" class="py-4">
        <div>
            <img src="../assets/images/bg.png" alt="">
        </div>
        <div class="ml-4">
            <p class="text-4xl font-bold  text-gray-900">Покупать топливо</p>
            <p class="text-4xl font-bold  text-gray-900">легко и быстро</p>
        </div>
        <div class="ml-4 mt-4">
            <p class="text-gray-800 font-medium text-xl">
                Покупай топливные талоны
            </p>
            <p class="text-gray-800 font-medium text-xl">
                по оптовым ценам
            </p>
            <p class="text-gray-800 font-medium text-xl">
                в сетях наших партнеров!
            </p>
        </div>
        <div class="mt-6 flex justify-center text-gray-100 text-xl">
            <router-link to="/verification" class="button-buy">Купить топливо</router-link>
        </div>
    </div>
</template>

<script setup>
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems
    } from '@headlessui/vue'
    import {
        BellIcon,
        MenuIcon,
        XIcon
    } from '@heroicons/vue/outline'
import {ref} from 'vue'

const isLogin = ref(false)
const isOpen = ref(false)

</script>

<style scoped>
    .button-buy {
        background-color: #56D85A;
        border-radius: 0.375rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 6rem/* 96px */;
        padding-right: 6rem/* 96px */;
    }
    .viber{
        --tw-text-opacity: 1;
         color: #83BD57 ;
         font-weight: 600;
         margin-left: 1rem/* 16px */;
         margin-top: 0.5rem/* 8px */;
    }
</style>