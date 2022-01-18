<template>
   <div class="bg-white">
                <div
                    class="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span class="block">Готові зробити замовлення?</span>
                        <span class="block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                            Напишіть нам або зателефонуйте</span>
                    </h2>
                    <div class="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                        <a href="mailto:budexpert.od@gmail.com?subject=Feedback&body=Хочу заказать услуги"
                            class="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-green-700 hover:to-green-600">
                            Написать
                        </a>
                        <router-link to="/contacts"
                            class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-800 bg-green-50 hover:bg-green-100">
                            Узнать номер
                        </router-link>
                    </div>
                </div>
            </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>