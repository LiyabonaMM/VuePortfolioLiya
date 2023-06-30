<template>
  <section class="landing">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <img
            src="path_to_your_image"
            alt="Your Name"
            class="img-fluid landing__image"
          />
        </div>
        <div class="col-lg-6">
          <h2 class="landing__title">Your Name</h2>
          <p class="landing__description">Short description about yourself</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.landing {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.landing__image {
  max-width: 100%;
}

.landing__title {
  font-size: 32px;
  margin-bottom: 20px;
}

.landing__description {
  font-size: 18px;
  color: #6c757d;
}
</style>
