<template>
    <div class="relative pt-16 pb-32 overflow-hidden">
        <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
        <div class="relative">
            <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                    <div>
                        <div>
                            <span
                                class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600">
                                <HomeIcon class="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                        </div>
                        <div class="mt-6">
                            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                                Будексперт - швидко та якісно
                            </h2>
                            <h1 class="mt-4 text-lg text-gray-500">
                                <p>Отримайте потрібні послуги швидко та якісно.</p>
                                Будексперт на ринку юрідичних послуг з інжинірінгу понад 10 років

                            </h1>
                            <div class="mt-6">
                                <router-link to="/about"
                                    class="inline-flex bg-gradient-to-r from-green-500 to-green-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-green-700 hover:to-green-600">
                                    Більше інформаціі
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 border-t border-gray-200 pt-6">

                    </div>
                </div>
                <div class="mt-12 sm:mt-16 lg:mt-0">
                    <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                        <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                            src="https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="Inbox user interface" />
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-24">
            <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                    <div>
                        <div>
                            <span
                                class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600">
                                <SparklesIcon class="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                        </div>
                        <div class="mt-6">
                            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                                Залишити замовлення
                            </h2>
                            <h1 class="mt-4 text-lg text-gray-500">
                                <p>Якщо щось не зрозуміло, або хочете зробити замовлення -</p>
                                Напишіть, або зателефонуйте, і наш менеджер допоможе вам.
                            </h1>
                            <div class="mt-6">
                                <router-link to="/contacts"
                                    class="inline-flex bg-gradient-to-r from-green-500 to-green-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-green-700 hover:to-green-600">
                                    Контактна інформація
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                    <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                        <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                            src="https://images.unsplash.com/photo-1565953554309-d181306db7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                            alt="Customer profile user interface" />
                    </div>
                </div>
            </div>
        </div>
        <div class="relative mt-24">
            <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                    <div>
                        <div>
                            <span
                                class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600">
                                <HomeIcon class="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                        </div>
                        <div class="mt-6">
                            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                                Цінова політика
                            </h2>
                            <p class="mt-4 text-lg text-gray-500">
                                Ми надаємо широкий спектр послуг, пов’язаних з
                                розробкою та оформленням документації на об’єкти нерухомості.
                            </p>
                            <div class="mt-6">
                                <router-link to="/price"
                                    class="inline-flex bg-gradient-to-r from-green-500 to-green-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-green-700 hover:to-green-600">
                                    Дізнатися ціни
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 border-t border-gray-200 pt-6">

                    </div>
                </div>
                <div class="mt-12 sm:mt-16 lg:mt-0">
                    <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                        <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                            src="https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="Inbox user interface" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {
        defineComponent,
        h
    } from 'vue'
    import {
        Popover,
        PopoverButton,
        PopoverGroup,
        PopoverPanel
    } from '@headlessui/vue'
    import {
        AnnotationIcon,
        ChatAlt2Icon,
        ChatAltIcon,
        DocumentReportIcon,
        HeartIcon,
        InboxIcon,
        MenuIcon,
        PencilAltIcon,
        QuestionMarkCircleIcon,
        ReplyIcon,
        SparklesIcon,
        TrashIcon,
        UsersIcon,
        XIcon,
        HomeIcon,
        BookOpenIcon,
        LibraryIcon
    } from '@heroicons/vue/outline'
    import {
        ChevronDownIcon
    } from '@heroicons/vue/solid'
</script>

<style lang="scss" scoped>

</style>