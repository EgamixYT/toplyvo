<template>
<div>
    <div class="flex justify-center mt-32">
        <img class="block lg:hidden h-20 w-auto rounded-full " src="../assets/images/okko.jpg" alt="Workflow" />
    </div>
    <div class="flex justify-center mt-8">
   <div>
    <label for="number" class="block text-sm font-semibold  text-gray-700">Код из смс</label>
    <div class="mt-1">
      <input type="tel" name="tel" id="tel" class="shadow-md rounded-sm border-b mt-2 h-8 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-md font-semibold text-gray-700 border-gray-300 rounded-" placeholder="" />
    </div>
    <div class="mt-4">
      <p class="text-sm text-gray-400">SMS прийдет на указанный номер</p>
      <p class="text-sm text-gray-400 mt-2"> Отправить код повторно</p>
       <p class="text-sm text-gray-400"> Через 59сек</p>
      </div>
  </div>
  </div>
   <div class="flex justify-center text-gray-100 mt-12">
      <router-link to="/validation" class="button-buy py-4 px-24 "> Продолжить </router-link>
  </div>
  <div class="flex justify-center text-gray-400 mt-2 ">
      <router-link to="/" class=" py-4 px-24 font-semibold"> Назад </router-link>
  </div>
  </div>
</template>

<script setup>

</script>

<style  scoped>
  .button-buy {
        background-color: #56D85A;
        border-radius: 0.375rem;
   
    }
</style>