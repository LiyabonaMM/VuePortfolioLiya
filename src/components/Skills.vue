<template>
  <section class="skills">
    <div class="container">
      <h2>Skills</h2>
      <ul>
        <li v-for="skill in skills" :key="skill.id">{{ skill.name }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import skillsData from '@/data/skills.json';

export default {
  name: 'Skills',
  data() {
    return {
      skills: skillsData
    };
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
