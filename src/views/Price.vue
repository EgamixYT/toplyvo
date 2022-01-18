<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Navbar />
  <div class="max-w-7xl mx-auto py-24 px-4  sm:px-6 lg:px-8 ">
    <div class=" rounded-lg p-8  shadow-xl">
      <h2 class="text-3xl font-extrabold text-green-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">Ціни
        за послуги</h2>
      <p class="mt-6 max-w-2xl text-xl text-gray-500">Оберіть потрібні послуги, та натисніть замовити</p>
    </div>
    <!-- Tiers -->
    <div class="mt-8 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 bg-gray-100 p-4 rounded-lg shadow-xl">
      <div v-for="tier in pricing.tiers" :key="tier.title"
        class="relative p-8  border border-gray-200 rounded-2xl shadow-xl flex flex-col">
        <div class="flex-1">
          <div class="flex justify-center">
            <h3 class="text-xl font-semibold text-green-900">{{ tier.title }}</h3>
          </div>
          <p class="mt-4 flex items-baseline justify-center text-green-800">
            <span class="text-5xl font-extrabold tracking-tight">{{ tier.price }}</span>
            <span class="ml-1 text-xl font-semibold">{{ tier.frequency }}</span>
          </p>
          <div class="flex justify-center">
            <p class="mt-6 text-gray-500">{{ tier.description }}</p>
          </div>
          <!-- Feature list -->
          <ul role="list" class="mt-6 space-y-6">
            <li v-for="feature in tier.features" :key="feature" class="flex">
              <CheckIcon class="flex-shrink-0 w-6 h-6 text-green-500" aria-hidden="true" />
              <span class="ml-3 text-green-600">{{ feature }}</span>
            </li>
          </ul>
        </div>
        <a href="mailto:budexpertt@gmail.com?subject=Feedback&body=Хочу заказать услуги"
          class="bg-green-500 text-white hover:bg-green-600    mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">{{ tier.cta }}</a>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
  import {
    CheckIcon
  } from '@heroicons/vue/outline'
  import Footer from '../components/Footer.vue'
  import Navbar from '../components/Navbar.vue'
  const pricing = {
    tiers: [{
        title: 'ТП на квартиру',
        price: 'від 1000',
        frequency: '/грн',
        description: 'Ціна може змінюватись в залежності від типу будівлі',
        features: ['Оформлення ТП для квартир', 'Строк виготовлення 10 днів',
          'За заявою, можливо виконати за менший термін'
        ],
        cta: 'Замовити',
        mostPopular: false,
      },
      {
        title: 'ТП житловий, садовий, дачний будинок',
        price: 'від 2200',
        frequency: '/грн',
        description: 'Ціна може змінюватись в залежності від типу будівлі',
        features: ['ТП житловий, садовий, дачний будинок.', 'Оформлення ТП для приватних будинків',
          'Строк виготовлення - до 10 днів'
        ],
        cta: 'Замовити',
        mostPopular: false,
      },
      {
        title: 'ТП на громадські будинки',
        price: 'За запитом',
        description: 'Уточнювати ціну у менеджера',
        features: ['Багатоповерхові багатоквартирні будинки;', 'Виробничі комплекси.'],
        cta: 'Замовити',
        mostPopular: false,
      },
      {
        title: 'Оцінка об`єктів нерухомості',
        price: 'від 800',
        frequency: '/грн',
        features: [
          'Оцінка нерухомості в цілях оподаткування',
          'Строк виконання 1-2 дні',

        ],
        cta: 'Замовити',
        mostPopular: true,
      },
      {
        title: 'Судова будівельно-технічна експертиза',
        price: 'За запитом',
        description: 'Уточнювати ціну у менеджера',
        features: [
          'Визначення ринкової вартості нерухомого майна для суду',
          'Визначення залишкової, дійсної чи відновної вартості об`єкту будівництв',
          'Визначення вартості проектних робіт з проведення будівництва, ремонтних робіт чи реконструкції об`єкту будівництва',
        ],
        cta: 'Замовити',
        mostPopular: false,
      },
      {
        title: 'Юридичні послуги',
        price: 'За запитом',
        description: 'Уточнювати ціну у менеджера',
        features: [
          'Вартість та строк виконання залежить від складності завдання.',
        ],
        cta: 'Замовити',
        mostPopular: false,
      },
    ],
  }

  export default {
    components: {
      CheckIcon,
      Footer,
      Navbar
    },
    setup() {
      return {
        pricing,
      }
    },
  }
</script>