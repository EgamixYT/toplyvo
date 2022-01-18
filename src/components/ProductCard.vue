<template>
    <span class="flex justify-between" @click="router.push('/product/' + product.id)" v-for="product in products" :key="product.id">
    <div class="flex mt-6 ml-2"  >
            <div  :class="product.colorbanner " >{{ product.name }}
      </div>
      </div>
        <div class="mt-6">
            <div class="font-bold text-xl text-gray-800">
                <span> {{ product.price }} </span>
            </div>
            <div class="mt-2 text-gray-400">
                <span> {{ product.description }} </span>
            </div>
        </div>
        <div class="mt-8">
            <img class="block lg:hidden h-14 w-auto rounded-full " src="../assets/images/okko.jpg" alt="Workflow" />
        </div>
    </span>
    
</template>

<script setup>
import router from '../router/index.js'
import Card1 from '../components/card1.vue'
    const products = [{
            id: 1,
            name: 'ДТ евро',
            colorbanner: 'bg-gray-800 text-blue-600 p-6 rounded-md font-semibold',
            price: '28.50 грн / л',
            description: 'Экономия 1.25 грн / л',
        },
        {
            id: 2,
            name: 'ДТ pulls',
            colorbanner: 'bg-gray-500 text-white p-6 rounded-md font-semibold',
            price: '32.00 грн / л',
            description: 'Экономия 1.25 грн / л',
        },
        {
            id: 3,
            name: '95 евро',
            colorbanner: 'bg-green-400 text-white p-6 rounded-md font-semibold',
            price: '30.40 грн / л',
            description: 'Экономия 1.25 грн / л',
        },
        {
            id: 4,
            name: '95 pulls',
            colorbanner: 'bg-red-600 text-white p-6 rounded-md font-semibold',
            price: '33.00 грн / л',
            description: 'Экономия 1.25 грн / л',
        },
        {
            id: 5,
            name: '92 евро',
            colorbanner: 'bg-yellow-700 text-white p-6 rounded-md font-semibold',
            price: '29.20 грн / л',
            description: 'Экономия 1.25 грн / л',
        },
        {
            id: 6,
            name: 'Газ',
            colorbanner: 'bg-yellow-400 text-white py-6 px-11 rounded-md font-semibold',
            price: '18 грн / л',
            description: 'Экономия 1.25 грн / л',
        }
    ]


</script>

<style scoped>

</style>