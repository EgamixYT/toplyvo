<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<Navbar/>
  <div class="bg-white mt-2">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="divide-y-2 divide-gray-200">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <h2 class="text-2xl font-extrabold text-green-700 sm:text-3xl">
            Контактна <p>інформація</p>
          </h2>
          <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
            <div>
              <h3 class="text-lg leading-6 font-semibold text-gray-700 ">
            E-mail 
              </h3>
              <dl class="mt-2 text-base text-gray-500">
                <div>
                  <dt class="sr-only">
                    Email
                  </dt>
                  <dd>
                    budexpert.od@gmail.com
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-semibold text-gray-700 ">
          Соціальні мережі
              </h3>
              <dl class="mt-4 text-base text-gray-500">
                 <div class="flex  space-x-6 md:order-2">
        <a  class="text-gray-400 hover:text-gray-500" href="https://tlgg.ru/@Budexpertt">
       <img src="../assets/images/telegram.png" class="w-6" alt="">
        </a>
          <a  class="text-gray-400 hover:text-gray-500 " href="https://skobelkin.ru/whatsapp/380952775700" target="_blank">
       <img src="../assets/images/whatsapp.png" class="w-6" alt="">
        </a>
          <a  class="text-gray-400 hover:text-gray-500"  href="https://skobelkin.ru/viber/380952775700" target="_blank">
       <img src="../assets/images/viber.png" class="w-6" alt="">
        </a>
      </div>
              </dl>
            </div>
            <div>
              <h3 class="text-lg leading-6 font-semibold text-gray-700">
               Номер телефону
              </h3>
              <dl class="mt-2 text-base text-gray-500">
                <div class="mt-1">
                  <dt class="sr-only">
                    Phone number
                  </dt>
                  <dd>
                   +38-095-277-57-00
                  </dd>
                  <dd>
                   Дзінька Анатолій Іванович
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
          <h2 class="text-2xl font-extrabold text-green-700 sm:text-3xl">
            Адреса
          </h2>
          <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
            <div>
              <h3 class="text-lg leading-6 font-semibold text-gray-700">
                Одеська область
              </h3>
              <div class="mt-2 text-base text-gray-500">
                <p>
                  м.Чорноморськ
                </p>
                <p class="mt-1">
                  Вул 1-Травня, 1-А, офіс 16 
                </p>
              </div>
            </div>
          </div>
        </div>
          <div class="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
          <h2 class="text-2xl font-extrabold text-green-700 sm:text-3xl">
           Подивитися на карті
          </h2>
          <div class="mt-6 md:mt-2 flex justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1378.2863735273731!2d30.65627390904153!3d46.298461646002025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c7c96d2f67f591%3A0x2aff3cdcd256e84b!2z0YPQuy4gMS3Qs9C-INCc0LDRjywgMdCwLCDQp9C10YDQvdC-0LzQvtGA0YHQuiwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjgwMDM!5e0!3m2!1sru!2sua!4v1641830484988!5m2!1sru!2sua" class="w-auto" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
    
    <footer class="mt-40">
    <Footer/>
    </footer>
  </div>
  
</template>
<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>