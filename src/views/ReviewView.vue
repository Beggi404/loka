RoomView.vue
<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { Button, Textarea } from 'flowbite-vue'
import { TheCard } from 'flowbite-vue'
import { Rating } from 'flowbite-vue'
import { Avatar } from 'flowbite-vue'
import { Checkbox } from 'flowbite-vue'
import { ref } from 'vue'
import {RouterLink} from "vue-router";
const ref1 = ref(true)
import { FileInput } from 'flowbite-vue'

const files = ref([])



</script>


<template>
  <div class="absolute inset-x-0 bottom-0 h-16 mb-12 ...">
    <form>
      <Textarea custom rows="3" placeholder="Write you message..." label="Review us!">
        <template #footer>
          <div class="flex items-center justify-between">

            <Button type="submit">Post comment</Button>
            <div class="flex">
              <file-input v-model="files" multiple />
                <div v-if="files.length !== 0" class="mt-4 border-[1px] border-gray-300 dark:border-gray-600 p-2 rounded-md ">
                  <div v-for="file in files" :key="file">
                      {{ file.name }}
                  </div>
                </div>

            </div>
          </div>

        </template>
      </Textarea>
    </form>
    <div>
      <Checkbox>
        <RouterLink to="/tos" class="text-primary-600 dark:text-primary-500 hover:underline ml-1">I agree with the terms and conditions</RouterLink>
      </Checkbox>
    </div>
  </div>
  <div class="flex justify-content: space-around flex-flow: row wrap place-content-center...">
  <the-card href="#" class="justify-content: space-around">
      <Avatar status="online" rounded img="https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg" />
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Barack obama</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      This is a great guest house and the rooms were really clean
    </p>
    <Rating :rating="5" />
  </the-card>

  <the-card href="#" class="justify-content: space-around">
      <Avatar status="online" rounded img="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/justin-timberlake-cartoon-portrait-2-ahmad-nusyirwan.jpg" />
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Justin timberlake</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      This is one fantastic guest house and i highly recommend it
    </p>
    <Rating :rating="5" />
  </the-card>
    <the-card href="#" class="justify-content: space-around">
      <Avatar status="online" rounded img="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/justin-timberlake-cartoon-portrait-2-ahmad-nusyirwan.jpg" />
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        This is one fantastic guest house and i highly recommend it
      </p>
      <Rating :rating="3.5" />
    </the-card>
  </div>
</template>
