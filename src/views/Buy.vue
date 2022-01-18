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
    <div class="flex justify-center mt-12">
        <p class="text-gray-800 font-bold">Выберите нужное топливо</p>
    </div>

    <div>
        <product-card></product-card>
    </div>
</template>

<script setup>
    import ProductCard from '../components/ProductCard.vue'
</script>

<style scoped>
    .nav {
        background-color: #56D85A;
    }
</style>