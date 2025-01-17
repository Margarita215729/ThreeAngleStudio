<template>
  <section class="hero fade-in">
    <h1>Welcome to ThreeAngleStudio</h1>
    <p>Photography & Makeup Services</p>
    <button @click="scrollToGallery">View Portfolio</button>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Hero",
  methods: {
    scrollToGallery() {
      gsap.to(window, { duration: 1, scrollTo: { y: ".gallery", offsetY: 50 } });
    },
  },
};
</script>

<style>
.hero {
  background: linear-gradient(to right, #1a1a1a, #a19689);
  color: #fffaf1;
  text-align: center;
  padding: 4rem 1rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.hero button {
  font-size: 1rem;
}
</style>
