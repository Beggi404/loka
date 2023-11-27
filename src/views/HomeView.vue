<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {Button, Carousel} from "flowbite-vue";

const Room9 = [
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
  <Carousel :pictures="Room9" class="">
  </Carousel>
  <div class="flex justify-center">
    <div class="flex">
      <div class="mt-10 w-96">
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h1 class="text-2xl font-semibold mb-4 text-center">Reserve here</h1>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700" for="date">Arrival:</label>
            <input
                type="date"
                id="date"
                v-model="reservationDate"
                @change="updateReservation"
                class="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700" for="time">Time:</label>
            <input
                type="time"
                id="time"
                v-model="reservationTime"
                @change="updateReservation"
                class="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700" for="date">Departure:</label>
            <input
                type="date"
                id="date"
                v-model="departureDate"
                @change="updateReservation"
                class="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700" for="time">Time:</label>
            <input
                type="time"
                id="time"
                v-model="departureTime"
                @change="updateReservation"
                class="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <p class="font-semibold">Arrival:</p>
            <p>Arrival: {{ reservationDate }}</p>
            <p>Time: {{ reservationTime }}</p>
          </div>
          <div>
            <p class="font-semibold">Departure:</p>
            <p>Arrival: {{ departureDate }}</p>
            <p>Time: {{ departureTime }}</p>
          </div>

        </div>
      </div>
    </div>
    <div class="ml-12 mt-10 w-2/3">
      <div class="bg-white p-4 rounded-lg shadow-md ">
        <h1 class="text-2xl font-semibold mb-4 text-center"></h1>
        <h1>About Our Guesthouse</h1>
        <p>Welcome to our cozy guesthouse located in the picturesque town of Grindavík. Nestled in the heart of Iceland, our guesthouse offers a comfortable and relaxing stay for travelers seeking a tranquil escape from the hustle and bustle of city life.</p>
        <p>At our guesthouse, we prioritize creating a warm and inviting atmosphere for all our guests. Whether you are here for a short vacation, an adventurous exploration of the stunning Icelandic landscapes, or simply a peaceful getaway, our dedicated staff is committed to ensuring your stay is memorable and enjoyable.</p>
        <h2>Our Mission</h2>
        <p>Our mission is to provide an exceptional guest experience that combines the natural beauty of Iceland with the comfort and convenience of modern amenities. We aim to be a home away from home for all our guests, where they can unwind and immerse themselves in the unique charm of Grindavík.</p>
        <h2>Our Team</h2>
        <p>Our team consists of passionate individuals who are enthusiastic about sharing the wonders of Grindavík with our guests. From our dedicated front desk staff to our talented chefs, everyone at our guesthouse is committed to making your stay as pleasant and memorable as possible.</p>
        <p>Feel free to reach out to us if you have any questions, need assistance, or want local recommendations during your stay. We are here to ensure that you have a remarkable and unforgettable experience in Grindavík.</p>
      </div>
    </div>
  </div>
  <div class="bg-gray-200 mx-auto py-6 flex justify-center mt-10">
    <Button type="" href="/book">Book now </Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reservationDate: '',
      reservationTime: '',
      departureDate: '',
      departureTime: '',
    };
  },
  methods: {
    updateReservation() {
      // You can implement logic to handle the reservation data here
      console.log('Reservation Date:', this.reservationDate);
      console.log('Reservation Time:', this.reservationTime);
      console.log('Reservation Date:', this.departureDate);
      console.log('Reservation Time:', this.departureTime);
    },
  },
};
</script>








