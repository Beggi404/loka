<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { Modal } from 'flowbite-vue'
import { ref } from 'vue'

const isShowModal = ref(false)
function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}
</script>

<template>

  <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="" class="flex items-center">
        <img src="src/assets/Logo.png" class="h-8 mr-3" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Anita's Guesthouse</span>
      </a>
      <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div id="mega-menu-full" class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1 mr-4">
        <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <RouterLink to="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/rooms" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Rooms</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About us</RouterLink>
          </li>
          <li>
            <RouterLink to="/reviews" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Reviews</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div id="mega-menu-full-dropdown" class="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
      <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
        <ul>
          <li>
            <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Room 1</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">A small but comfortable room with one bed and a tv</span>
            </a>
          </li>
          <li>
            <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Room 2</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
          </li>
          <li>
            <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Marketing CRM</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Online Stores</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
          </li>
          <li>
            <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Segmentation</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
          </li>
          <li>
            <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Marketing CRM</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
          </li>
        </ul>
      </div>
    </div> -->
  </nav>

  <nav>


  </nav>

      <RouterView />
</template>


