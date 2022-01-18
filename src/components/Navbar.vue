<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-white shadow " >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
    
        </div>
        <div class="flex-1 flex items-center justify-start">
          <div class="flex-shrink-0 flex items-center ">
           <router-link to="/"><ArrowNarrowLeftIcon class="md:h-8 lg:h-8 h-6 text-gray-400 mr-8"/></router-link>
            <h1 class="text-green-700 font-bold text-lg">БУДЕКСПЕРТ-Т</h1>
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon, ArrowNarrowLeftIcon } from '@heroicons/vue/outline'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
    ArrowNarrowLeftIcon
  },
}
</script>