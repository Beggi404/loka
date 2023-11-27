<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {Avatar, Modal, Rating, TheCard} from "flowbite-vue";
import { ref } from 'vue';
import { Carousel } from 'flowbite-vue';
import {  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionPanel, } from 'flowbite-vue'




const isShowModal = ref(false)
function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}
const isShowModal2 = ref(false)
function closeModal2() {
  isShowModal2.value = false
}
function showModal2() {
  isShowModal2.value = true
}
const isShowModal3 = ref(false)
function closeModal3() {
  isShowModal3.value = false
}
function showModal3() {
  isShowModal3.value = true
}


const Room1 = [
  {
    'src': 'src/assets/herbergi1.jpg',
    'alt': 'Picture 1',
  },
  {
    'src': 'src/assets/herbergi1 (2).jpg',
    'alt': 'Picture 2',
  },
  {
    'src': 'src/assets/image0_0 (2).jpg',
    'alt': 'Picture 3',
  },
]
const Room2 = [
  {
    'src': 'src/assets/image0_0 (2).jpg',
    'alt': 'Picture 1',
  },
  {
    'src': 'src/assets/image0_0 (3).jpg',
    'alt': 'Picture 2',
  },
  {
    'src': 'src/assets/image1_0 (1).jpg',
    'alt': 'Picture 3',
  },
]
const Room3 = [
  {
    'src': 'src/assets/image1_0 (2).jpg',
    'alt': 'Picture 1',
  },
  {
    'src': 'src/assets/image1_0 (2).jpg',
    'alt': 'Picture 2',
  },
  {
    'src': 'src/assets/image1_0 (3).jpg',
    'alt': 'Picture 3',
  },
]

</script>

<template>

  <main>
    <div class="flex space-x-96 ">

    <div class="flex flex-col ">
      <the-card href="#" class="justify-content: space-around" @click="showModal" data-modal-target="defaultModal" data-modal-toggle="defaultModal" >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Room 1</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          The most basic room
        </p>
        <Rating :rating="3" />
      </the-card>
      <Modal :size="size" v-if="isShowModal" @close="closeModal">
        <template #header>
          <div class="flex items-center text-lg">
            Herbergi 1
          </div>
        </template>
        <template #body>
          <Carousel :pictures="Room1">
          </Carousel>
        </template>
        <template #footer>

        </template>
      </Modal>

      <the-card href="#" class="justify-content: space-around" @click="showModal2" >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Room 2</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
         the mid tier room best buck for your buck
        </p>
        <Rating :rating="4" />
      </the-card>
      <Modal :size="size" v-if="isShowModal2" @close="closeModal2">
        <template #header>
          <div class="flex items-center text-lg">
            Herbergi 2
          </div>
        </template>
        <template #body>
          <Carousel :pictures="Room2" class="">
          </Carousel>
        </template>
        <template #footer>

        </template>
      </Modal>

      <the-card href="#" class="justify-content: space-around" @click="showModal3" >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Room 3</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          The most expensive room
        </p>
        <Rating :rating="4" />
      </the-card>
      <Modal :size="size" v-if="isShowModal3" @close="closeModal3">
        <template #header>
          <div class="flex items-center text-lg">
            Herbergi 3
          </div>
        </template>
        <template #body>
          <Carousel :pictures="Room3" class="">
          </Carousel>
        </template>
        <template #footer>

        </template>
      </Modal>

    </div>
      <div class="place-content-end">
      <accordion>
        <accordion-panel>
          <accordion-header>About the rooms and surronding area</accordion-header>
          <accordion-content>
            <div>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                grindavik is a small fishing village located in the southern peninsula that is called reykjanes and has been around for around þousand years and will likely still keep going for more years
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                the first viking to go to grindavik iceland is named mola-knúpur he and his sons made a settlement here and the town grew and grew from there its was offically declared a municipality in 1974.
              </p>
            </div>
          </accordion-content>
        </accordion-panel>
        <accordion-panel>
          <accordion-header>Fun locations next to town</accordion-header>
          <accordion-content>
            <div>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                The blue lagoon is right next to the town and its close by that you can walk there
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                Check out the <a href="https://www.bluelagoon.com/" class="text-blue-600 dark:text-blue-500 hover:underline" >blue lagoon website</a> a beauityfull site and perfect scenery
              </p>
            </div>
          </accordion-content>
        </accordion-panel>
      </accordion>
      </div>
    </div>
  </main>
</template>
