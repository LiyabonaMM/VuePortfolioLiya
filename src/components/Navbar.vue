<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/work-education">Work/Education</router-link></li>
      <li><router-link to="/skills">Skills</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/testimonials">Testimonials</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
/* Add your navbar styles here */
</style>
