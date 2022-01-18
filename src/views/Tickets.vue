<template>
    <div id="nav" class="h-10 flex items-center shadow-md nav">
        <div>
            <router-link to="/">
                <ChevronLeftIcon class="h-7 w-7 text-gray-100 " />
            </router-link>
        </div>
        <div class="ml-2">
            <p class="text-white font-semibold ">Мои талоны</p>
        </div>
    </div>
       <span class="flex justify-between" v-for="ticket in tickets" :key="ticket.id">
    <div class="flex mt-6 ml-2">
            <div  :class="ticket.colorbanner ">{{ ticket.name }}
      </div>
      </div>
        <div class="mt-6">
            <div class="font-bold text-xl text-gray-800">
                <span> {{ ticket.volume }} </span>
            </div>
            <div class="mt-2 text-gray-400">
                <span> {{ ticket.description }} </span>
            </div>
        </div>
        <div class="mt-8">
            <img class="block lg:hidden h-14 w-auto rounded-full " src="../assets/images/okko.jpg" alt="Workflow" />
        </div>
    </span>
</template>

<script setup>
 const tickets = [{
            id: 1,
            name: 'ДТ евро',
            colorbanner: 'bg-gray-800 text-blue-600 p-6 rounded-md font-semibold',
            volume: '5л',
            description: 'до 23:59/13.02.22',
        },
     {
            id: 2,
        name: 'ДТ pulls',
            colorbanner: 'bg-gray-500 text-white p-6 rounded-md font-semibold',
            volume: '5л',
            description: 'до 23:59/13.02.22',
        },
        {
            id: 3,
            name: '95 евро',
            colorbanner: 'bg-green-400 text-white p-6 rounded-md font-semibold',
            volume: '5л',
            description: 'до 23:59/13.02.22',
        },
        {
            id: 4,
            name: 'Газ',
            colorbanner: 'bg-yellow-400 text-white py-6 px-11 rounded-md font-semibold',
            volume: '5л',
            description: 'до 23:59/13.02.22',
        },
        {
            id: 5,
            name: '92 евро',
            colorbanner: 'bg-yellow-700 text-white p-6 rounded-md font-semibold',
            volume: '5л',
            description: 'до 23:59/13.02.22',
        },
    ]
</script>

<style scoped>
    .nav {
        background-color: #56D85A;
    }
</style>