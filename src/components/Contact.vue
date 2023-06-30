<template>
  <section class="contact">
    <div class="container">
      <h2>Contact</h2>
      <p>{{ contactInfo.email }}</p>
      <p>{{ contactInfo.phone }}</p>
      <p>{{ contactInfo.address }}</p>
    </div>
  </section>
</template>

<script>
import contactData from '@/data/contact.json';

export default {
  name: 'Contact',
  data() {
    return {
      contactInfo: contactData
    };
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
