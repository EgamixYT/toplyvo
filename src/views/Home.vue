<template>
    <div class="bg-white">
        <header>
            <Popover class="relative bg-white">
                <div
                    class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                    <div class="flex justify-start lg:w-0 lg:flex-1">
                        <router-link to="/">
                            <span class="sr-only">Budexp</span>
                            <h1 class="text-green-600 font-bold text-xl">БУДЕКСПЕРТ-Т</h1>
                        </router-link>
                    </div>
                    <div class="-mr-2 -my-2 md:hidden">
                        <PopoverButton
                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                            <span class="sr-only">Open menu</span>
                            <MenuIcon class="h-6 w-6" aria-hidden="true" />
                        </PopoverButton>
                    </div>
                    <PopoverGroup as="nav" class="hidden md:flex space-x-10">
                        
                        <router-link to="/price" class="text-base font-medium text-gray-500 hover:text-green-700">
                            Ціни
                        </router-link>
                        <router-link to="/about" class="text-base font-medium text-gray-500 hover:text-green-700">
                            Про нас
                        </router-link>
                        <router-link to="/contacts" class="text-base font-medium text-gray-500 hover:text-green-700">
                            Контактна інформація
                        </router-link>
                      


                    </PopoverGroup>
                </div>

                <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                    <PopoverPanel focus
                        class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div
                            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div class="pt-5 pb-6 px-5">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <h1 class="text-green-600 font-bold text-xl">БУДЕКСПЕРТ-Т</h1>
                                    </div>
                                    <div class="-mr-2">
                                        <PopoverButton
                                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                            <span class="sr-only">Close menu</span>
                                            <XIcon class="h-6 w-6" aria-hidden="true" />
                                        </PopoverButton>
                                    </div>
                                </div>
                            </div>
                            <div class="py-6 px-5 ">
                                <div class="grid grid-cols-1 gap-4 ">
                                    <router-link to="/price"
                                        class="text-base font-medium text-gray-500 hover:text-green-700">
                                        Ціни
                                    </router-link>
                                    <router-link to="/about"
                                        class="text-base font-medium text-gray-500 hover:text-green-700">
                                        Про нас
                                    </router-link>
                                    <router-link to="/contacts"
                                        class="text-base font-medium text-gray-500 hover:text-green-700">
                                        Контактна інформація
                                    </router-link>
                                   

                                </div>

                            </div>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>
        </header>

        <main>
            <!-- Hero section -->
            <div class="relative">
                <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                        <div class="absolute inset-0">
                            <img class="h-full w-full object-cover"
                                src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="People working on laptops" />
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 mix-blend-multiply" />
                        </div>
                        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span class="block text-white">Будексперт-Т -</span>
                                <span class="block text-gray-200">послуги з інжинірінгу</span>
                            </h1>
                            <p class="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                               БТІ, оцінка нерухомості, будівельно-технічна експертиза
                            </p>
                            <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                    <a href="mailto:budexpert.od@gmail.com?subject=Feedback&body=Хочу заказать услуги"
                                        class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-700 bg-white hover:bg-indigo-50 sm:px-8">
                                        Написати нам
                                    </a>
                                    <router-link to="/about"
                                        class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                                        Більше Інфо
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Alternating Feature Sections -->
            <Examples />
            <!-- Gradient Feature Section -->
            <Features />
            <!--Blog Section-->
            <Blog />
            <!-- CTA Section -->
            <Cta />
        </main>
    </div>
 <footer class="bg-white">
            <Footer />
        </footer>
</template>

<script setup>
//components
    import Blog from '../components/blog.vue'
    import Footer from '../components/Footer.vue'
    import Features from '../components/features.vue'
    import Cta from '../components/ctasection.vue'
    import Examples from '../components/examples.vue'
//icons
    import {
        AnnotationIcon,
        ChatAlt2Icon,
        InboxIcon,
        QuestionMarkCircleIcon,
    } from '@heroicons/vue/outline'

//objects
    const solutions = [{
            name: 'Inbox',
            description: 'Get a better understanding of where your traffic is coming from.',
            href: '#',
            icon: InboxIcon,
        },
        {
            name: 'Messaging',
            description: 'Speak directly to your customers in a more meaningful way.',
            href: '#',
            icon: AnnotationIcon,
        },
        {
            name: 'Live Chat',
            description: "Your customers' data will be safe and secure.",
            href: '#',
            icon: ChatAlt2Icon
        },
        {
            name: 'Knowledge Base',
            description: "Connect with third-party tools that you're already using.",
            href: '#',
            icon: QuestionMarkCircleIcon,
        },
    ]
</script>