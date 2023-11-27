<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template class="border: 1px solid #005cb9 background-color: #f1f5f9 overflow: auto padding: 1em">
  <head>
    <meta charset="UTF-8">
    <title>Anita's Guesthouse - Terms of Service</title>
    <!-- Include Tailwind CSS stylesheet -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body class="bg-gray-100 p-8">

  <header class="text-3xl font-bold mb-8 text-center">
    <h1>Anita's Guesthouse - Terms of Service</h1>
  </header>

  <section class="bg-white p-4 rounded-lg shadow-lg">
    <h2 class="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
    <p>By using Anita's Guesthouse services, you agree to comply with and be bound by these Terms of Service.</p>
  </section>

  <section class="bg-white p-4 rounded-lg shadow-lg mt-4">
    <h2 class="text-2xl font-semibold mb-4">2. Reservations and Cancellations</h2>
    <p>Reservations can be made online or by phone.
      A valid credit card is required to secure your reservation.
      Full payment is due upon check-in, and we accept cash, credit cards, or paypal.
      If you need to cancel your reservation, please notify us at least 30 days prior to your scheduled arrival.
      Cancellations made within 30 days of the reservation may result in a 10% charge.</p>
  </section>

  <section class="bg-white p-4 rounded-lg shadow-lg mt-4">
    <h2 class="text-2xl font-semibold mb-4">3. Payment and Fees</h2>
    <p>...</p>
  </section>

  <section class="bg-white p-4 rounded-lg shadow-lg mt-4">
    <h2 class="text-2xl font-semibold mb-4">4. Privacy</h2>
    <p>...</p>
  </section>

  <section class="bg-white p-4 rounded-lg shadow-lg mt-4">
    <h2 class="text-2xl font-semibold mb-4">5. Termination</h2>
    <p>...</p>
  </section>

  <section class="bg-white p-4 rounded-lg shadow-lg mt-4">
    <h2 class="text-2xl font-semibold mb-4">6. Contact Information</h2>
    <p>For questions about these Terms of Service, please contact us at:</p>
    <address>
      Anita's Guesthouse<br>
      Address: [Your Address]<br>
      Phone: [Your Phone Number]<br>
      Email: [Your Email]
    </address>
  </section>

  <footer class="text-center text-gray-600 mt-8">
    <p>&copy; 2023 Anita's Guesthouse. All rights reserved.</p>
  </footer>
  </body>
  <RouterView />
</template>


