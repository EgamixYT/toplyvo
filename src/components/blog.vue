<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-green-700 sm:text-4xl">
        Наші роботи
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Проєкти які були успішно виконані 
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div  class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="../assets/images/example2.png" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <router-link to="/example2" class="hover:underline">
                Оформлення ТП
                </router-link>
              </p>
              <a  class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                ТП на багатоквартирний будинок
                </p>
                <p class="mt-3 text-base text-gray-500">
                 Оформлення Технічного паспорту на багатоквартирний будинок
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
            </div>
          </div>
        </div>
         <div  class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="../assets/images/example1.png" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <router-link to="/example1" class="hover:underline">
                Оформлення ТП
                </router-link>
              </p>
              <a  class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                ТП на квартиру
                </p>
                <p class="mt-3 text-base text-gray-500">
                 Оформлення Технічного паспорту на житлову квартиру
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
            </div>
          </div>
        </div>
          <div  class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="../assets/images/example3.png" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <router-link to="/example3" class="hover:underline">
                Оформлення ТП
                </router-link>
              </p>
              <a  class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                ТП на громадський будинок
                </p>
                <p class="mt-3 text-base text-gray-500">
                 Оформлення Технічного паспорту на громадський будинок
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>