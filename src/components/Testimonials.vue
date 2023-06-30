<template>
  <section class="testimonials">
    <div class="container">
      <h2>Testimonials</h2>
      <div v-for="testimonial in testimonials" :key="testimonial.id">
        <h3>{{ testimonial.name }}</h3>
        <p>{{ testimonial.company }}</p>
        <p>{{ testimonial.message }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import testimonialsData from '@/data/testimonials.json';

export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: testimonialsData
    };
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
