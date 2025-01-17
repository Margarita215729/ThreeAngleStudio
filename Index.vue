<template>
  <div id="app">
    <header>
      <h1>ThreeAngleStudio</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <section class="hero">
      <h1>Welcome to ThreeAngleStudio</h1>
      <p>Photography & Makeup Services</p>
      <button @click="scrollToPortfolio">View Portfolio</button>
    </section>

    <section id="portfolio" class="gallery">
      <h1>Our Portfolio</h1>
      <div class="gallery-grid">
        <div class="gallery-item" v-for="item in portfolioItems" :key="item.id">
          <img :src="item.imageUrl" :alt="item.title" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </section>

    <footer>
      <p>&copy; 2025 ThreeAngleStudio. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      portfolioItems: [
        { id: 1, title: "Wedding Photoshoot", imageUrl: "/img/wedding-photoshoot.jpg" },
        { id: 2, title: "Fashion Shoot", imageUrl: "/img/fashion-shoot.jpg" },
        { id: 3, title: "Event Photography", imageUrl: "/img/event-photography.jpg" },
      ],
    };
  },
  methods: {
    scrollToPortfolio() {
      document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #fffaf1;
  color: #1a1a1a;
}
header {
  background-color: #1a1a1a;
  color: #fffaf1;
  padding: 1rem;
  text-align: center;
}
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
nav ul li a {
  color: #fffaf1;
  text-decoration: none;
}
nav ul li a:hover {
  color: #a19689;
}
.hero {
  background: linear-gradient(to right, #1a1a1a, #a19689);
  color: #fffaf1;
  padding: 3rem 1rem;
  text-align: center;
}
button {
  background-color: #a19689;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #1a1a1a;
}
.gallery {
  padding: 2rem;
  text-align: center;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
.gallery-item {
  border: 1px solid #a19689;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}
footer {
  background-color: #1a1a1a;
  color: #fffaf1;
  padding: 1rem;
  text-align: center;
}
</style>
