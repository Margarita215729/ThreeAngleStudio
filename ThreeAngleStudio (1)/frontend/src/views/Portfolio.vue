<template>
  <div class="portfolio">
    <section class="gallery">
      <h1>Our Portfolio</h1>
      <div class="gallery-grid">
        <div v-for="item in portfolioItems" :key="item.id" class="gallery-item">
          <img :src="item.imageUrl" :alt="item.title" />
          <h2>{{ item.title }}</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      portfolioItems: [
        { id: 1, title: "Wedding Photoshoot", imageUrl: "/images/wedding.jpg" },
        { id: 2, title: "Fashion Shoot", imageUrl: "/images/fashion.jpg" },
        { id: 3, title: "Event Photography", imageUrl: "/images/event.jpg" },
      ],
    };
  },
};
</script>

<style>
.gallery {
  text-align: center;
  background-color: #fffaf1;
  padding: 3rem 1rem;
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
  height: auto;
  border-radius: 10px;
}

.gallery-item h2 {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
</style>
