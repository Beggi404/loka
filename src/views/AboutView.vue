<template>
  <div class="about-us">
    <h1>About Our Guesthouse</h1>
    <p>Welcome to our cozy guesthouse located in the picturesque town of Grindavík. Nestled in the heart of Iceland, our guesthouse offers a comfortable and relaxing stay for travelers seeking a tranquil escape from the hustle and bustle of city life.</p>
    <p>At our guesthouse, we prioritize creating a warm and inviting atmosphere for all our guests. Whether you are here for a short vacation, an adventurous exploration of the stunning Icelandic landscapes, or simply a peaceful getaway, our dedicated staff is committed to ensuring your stay is memorable and enjoyable.</p>
    <h2>Our Mission</h2>
    <p>Our mission is to provide an exceptional guest experience that combines the natural beauty of Iceland with the comfort and convenience of modern amenities. We aim to be a home away from home for all our guests, where they can unwind and immerse themselves in the unique charm of Grindavík.</p>
    <h2>Our Team</h2>
    <p>Our team consists of passionate individuals who are enthusiastic about sharing the wonders of Grindavík with our guests. From our dedicated front desk staff to our talented chefs, everyone at our guesthouse is committed to making your stay as pleasant and memorable as possible.</p>
    <p>Feel free to reach out to us if you have any questions, need assistance, or want local recommendations during your stay. We are here to ensure that you have a remarkable and unforgettable experience in Grindavík.</p>
    <button>
      <RouterLink to="/contact" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Reviews</RouterLink>
    </button>
  </div>

</template>

<script>
import {RouterLink} from "vue-router";

export default {
  name: 'AboutUs',
  components: {RouterLink},
  data() {
    return {};
  },
};
</script>

<style scoped>
.about-us {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: justify;
}
</style>