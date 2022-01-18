<template>
    <div id="nav" class="h-10 flex items-center shadow-md nav">
        <div>
            <router-link to="/">
                <ChevronLeftIcon class="h-7 w-7 text-gray-100 " />
            </router-link>
        </div>
        <div class="ml-2">
            <p class="text-white font-semibold ">Покупка товара</p>
        </div>
    </div>
    <div>
    </div>
     <span class="flex justify-between">
        <div class="flex mt-6 ml-2">
            <div :class="product.colorbanner">{{ product.name }}
            </div>
        </div>
        <div class="mt-6">
            <div class="font-bold text-xl text-gray-800">
                <span> 1 Талон</span>
            </div>
            <div class="mt-2 text-gray-600">
                <span>151.10 грн/ 5 л</span>
            </div>
        </div>
        <div class="mt-8">
            <img class="block lg:hidden h-14 w-auto rounded-full " src="../assets/images/okko.jpg" alt="Workflow" />
        </div>
    </span>
    <span class="flex  justify-between mt-2">
        <p class="mt-2 ml-2 text-gray-400">Стоимость на АЗС </p>
        <p class="mt-2 mr-2 text-gray-400">159.89</p>
    </span>
    <div class="h-96 "></div>
    <footer aria-labelledby="footer-heading" class="bg-gray-100 ">
        <div class="flex justify-between items-center mt-4 pt-4">
        <p class="text-gray-800 text-xl font-semibold">Выберите способ оплаты</p>
        <ChevronDownIcon class="h-5 w-5 mr-2"/>
        </div>
        <div class="flex justify-center mt-12 text-gray-100 text-xl pb-36 font-semibold ">
        <router-link to="/" class="nav py-4 rounded-md px-24 ">Оплатить</router-link>
        </div>
    </footer >
   
</template>

<script setup>
 const product = {
        id: 1,
        name: 'ДТ евро',
        colorbanner: 'bg-gray-800 text-blue-600 p-6 rounded-md font-semibold',
        price: '28.50 грн / л',
        description: 'Экономия 1.25 грн / л',
    }
</script>

<style scoped>
    .nav {
        background-color: #56D85A;
    }
</style>