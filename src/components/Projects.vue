<template>
  <section class="work-education">
    <div class="container">
      <h2>Work/Education</h2>
      <div v-for="experience in experiences" :key="experience.id">
        <h3>{{ experience.title }}</h3>
        <p>{{ experience.company }}</p>
        <p>{{ experience.duration }}</p>
        <p>{{ experience.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import experienceData from '@/data/experience.json';

export default {
  name: 'WorkEducation',
  data() {
    return {
      experiences: experienceData
    };
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
