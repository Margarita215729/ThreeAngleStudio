<template>
  <section class="gallery fade-in">
    <h1>Our Gallery</h1>
    <div class="gallery-grid">
      <div v-for="item in placeholderImages" :key="item.id" class="gallery-item">
        <img :src="item.src" :alt="'Placeholder ' + item.id" @mouseenter="animateImage" />
        <p>Placeholder {{ item.id }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Gallery",
  data() {
    return {
      placeholderImages: Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        src: `https://placehold.co/300x300?text=${i + 1}`,
      })),
    };
  },
  methods: {
    animateImage(event) {
      gsap.to(event.target, { duration: 0.3, scale: 1.1 });
      gsap.to(event.target, { duration: 0.3, scale: 1, delay: 0.3 });
    },
  },
};
</script>

<style>
.gallery {
  text-align: center;
  padding: 2rem 1rem;
}

.gallery h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.gallery-item img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.gallery-item p {
  font-size: 1rem;
  margin-top: 0.5rem;
}
</style>
