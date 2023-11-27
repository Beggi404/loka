<script setup>

</script>

<template>
  <div class="max-w-md mx-auto my-8 p-8 bg-gray-200 rounded shadow">
    <h2 class="text-2xl font-semibold mb-4">Book a Room</h2>
    <form @submit.prevent="bookRoom">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-600">Name:</label>
        <input type="text" id="name" v-model="name" required
               class="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-4">
        <label for="check-in" class="block text-sm font-medium text-gray-600">Check-in Date:</label>
        <input type="date" id="check-in" v-model="checkInDate" required
               class="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-4">
        <label for="check-out" class="block text-sm font-medium text-gray-600">Check-out Date:</label>
        <input type="date" id="check-out" v-model="checkOutDate" required
               class="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500">
      </div>

      <button type="submit"  class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        <a href="/payment">Book Now</a>
      </button>
    </form>

    <div v-if="bookingSuccessful" class="mt-4">
      <p class="text-green-600">Booking successful! Thank you, {{ name }}!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      checkInDate: '',
      checkOutDate: '',
      bookingSuccessful: false,
    };
  },
  methods: {
    bookRoom() {
      // Perform booking logic here (e.g., send a request to a backend)
      // For simplicity, we'll just simulate a successful booking
      this.bookingSuccessful = true;
    },
  },
};
</script>