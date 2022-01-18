<template>
    <div class="nav h-12 flex items-center">
        <router-link to="/">
            <ChevronLeftIcon class="h-8 w-8 text-white" />
        </router-link>
        <router-view></router-view>
        <p class="text-lg text-white font-semibold ml-2">Покупка топлива</p>
    </div>
    <span class="flex justify-between">
        <div class="flex mt-6 ml-2">
            <div :class="product.colorbanner">{{ product.name }}
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

    <div>
        <div class="flex justify-between mt-12 ml-2 mr-2 items-center">
            <div>
                <p class="text-gray-600">Талон</p>
                <p class="text-gray-800 font-bold text-xl">5 л</p>
            </div>
            <button @click="counter5l = counter5l - 1">
                <MinusIcon class="h-6 w-6 text-gray-800" v-if="counter5l > 0" />
            </button>
            {{counter5l}}
            <button @click="counter5l = counter5l + 1">
                <PlusIcon class="h-6 w-6 text-gray-800" />
            </button>
        </div>
        <div class="flex justify-between mt-12 ml-2 mr-2 items-center">
            <div>
                <p class="text-gray-600">Талон</p>
                <p class="text-gray-800 font-bold text-xl">10 л</p>
            </div>
            <button @click="counter10l = counter10l - 1">
                <MinusIcon class="h-6 w-6 text-gray-800" v-if="counter10l > 0" />
            </button>
            {{counter10l}}
            <button @click="counter10l = counter10l + 1">
                <PlusIcon class="h-6 w-6 text-gray-800" />
            </button>
        </div>
        <div class="flex justify-between mt-12 ml-2 mr-2 items-center">
            <div>
                <p class="text-gray-600">Талон</p>
                <p class="text-gray-800 font-bold text-xl">20 л</p>
            </div>
            <button @click="counter20l = counter20l - 1">
                <MinusIcon class="h-6 w-6 text-gray-800" v-if="counter20l > 0" />
            </button>
            {{counter20l}}
            <button @click="counter20l = counter20l + 1">
                <PlusIcon class="h-6 w-6 text-gray-800" />
            </button>
        </div>
        <div class="flex justify-between mt-12 ml-2 mr-2 items-center">
            <div>
                <p class="text-gray-600">Талон</p>
                <p class="text-gray-800 font-bold text-xl">40 л</p>
            </div>
            <button @click="counter40l = counter40l - 1">
                <MinusIcon class="h-6 w-6 text-gray-800" v-if="counter40l > 0" />
            </button>
            {{counter40l}}
            <button @click="counter40l = counter40l + 1">
                <PlusIcon class="h-6 w-6 text-gray-800" />
            </button>
        </div>
    </div>
    <div class="bg-gray-100 h-full mt-6">
        <div class="flex justify-between">
            <div class="flex  justify-start">
                <p class="text-gray-800 mt-4 ml-2 font-bold text-2xl">
                    {{ volume = (counter5l * 5) + (counter10l * 10) + (counter20l * 20) + (counter40l * 40) + ' ' +'л' }}
                </p>
            </div>
            <div class="flex flex-col mr-4 mt-6">
                <p class="text-4xl font-bold">
                    {{ sum = (counter5l * 142.5) + (counter10l * 285) + (counter20l * 570) + (counter40l * 1140) + ' ' +'грн.' }}
                </p>
                <p class="text-green-400">{{  econ = ((counter5l * 5) + (counter10l * 10) + (counter20l * 20) + (counter40l * 40))*1.25 + ' ' + 'грн' }}</p>
            </div>
        </div>
        <div class="flex justify-center mt-8 pb-20">
            <router-link to="/pay" class="nav px-20 py-4 text-white text-xl font-senibold rounded-md">Продолжить
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'

    const economy = ref(1.5)
    const econ = ref(0)
    const volume = ref(0)
    const sum = ref(0)
    const counter5l = ref(0)
    const counter10l = ref(0)
    const counter20l = ref(0)
    const counter40l = ref(0)
   
   
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