<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="max-w-md mx-auto my-8 p-8 bg-gray-200 rounded shadow">
    <h2 class="text-2xl font-semibold mb-4">Payment Details</h2>
    <form @submit.prevent="processPayment">
      <div class="mb-4">
        <label for="card-number" class="block text-sm font-medium text-gray-600">Card Number:</label>
        <input type="text" id="card-number" v-model="cardNumber" required
               class="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-4">
        <label for="expiry-date" class="block text-sm font-medium text-gray-600">Expiry Date:</label>
        <input type="text" id="expiry-date" v-model="expiryDate" placeholder="MM/YY" required
               class="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-4">
        <label for="cvc" class="block text-sm font-medium text-gray-600">CVC:</label>
        <input type="text" id="cvc" v-model="cvc" required
               class="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500">
      </div>

      <button type="submit" onclick="success()" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Pay Now
      </button>
    </form>

    <div v-if="paymentSuccessful" class="mt-4">
      <alert class="text-green-600">Payment successful! Thank you for your purchase!</alert>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      paymentSuccessful: false,
    };
  },
  methods: {
    processPayment() {
      // Perform payment processing logic here (e.g., send a request to a backend)
      // For simplicity, we'll just simulate a successful payment
      this.paymentSuccessful = true;
    },
  },
};
function success() {
  alert("Payment successful! Thank you for your purchase!")
}
</script>