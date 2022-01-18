<template>
    <div>
    <!-- Gradient Feature Section -->
            <div class="bg-gradient-to-r from-green-700 to-green-600 m-4 rounded-md shadow-lg">
                <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                    <h2 class="text-3xl font-extrabold text-white tracking-tight">
                        Види послуг
                    </h2>
                    <p class="mt-4 max-w-3xl text-lg text-green-100">
                        Послуги які ви можете отримати від нашої компаніі
                    </p>
                    <div
                        class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                        <div v-for="feature in features" :key="feature.name">
                            <div>
                                <span
                                    class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10 hover:bg-green-600">
                                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                                </span>
                            </div>
                            <div class="mt-6">
                                <h3 class="text-lg font-medium text-white">{{ feature.name }}</h3>
                                <p class="mt-2 text-base text-purple-200">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>
   import {
        PencilAltIcon,
        HomeIcon,
        BookOpenIcon,
        LibraryIcon
    } from '@heroicons/vue/outline'
  const features = [{
            name: 'Виготовлення технічних паспортів',
            description: 'Послуги з виготовлення технічних паспортів на об’єкти нерухомості(квартири, житлові, садові, дачні будинки; громадські будинки; багатоповерхові багатоквартирні будинки; виробничі комплекси та ін.)',
            icon: HomeIcon,
        },
        {
            name: 'Визначення ринкової вартості об`єктів',
            description: 'Послуги з оцінки нерухомості в цілях оподаткування при складанні договорів купівлі-продажу, дарування, спадкування.',
            icon: BookOpenIcon,
        },
        {
            name: 'Будівельно-технічна експертиза',
            description: 'Проведення судових будівельно-технічних, земельно-технічних, оціночно-будівельних експертиз та експертних досліджень.',
            icon: LibraryIcon,
        },
        {
            name: 'Узаконювання самовільного будівництва.',
            description: 'Юридичні послуги с сфері нерухомості: допомога в отриманні будівельних паспортів; реєстрація повідомлень про початок виконання будівельних робіт, про готовність об’єкта до експлуатації, інше.',
            icon: PencilAltIcon,
        },

    ]
</script>

<style lang="scss" scoped>

</style>