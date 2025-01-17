<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
header {
  background-color: #a19689;
  padding: 1rem;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
}

nav li {
  margin: 0 1rem;
}

nav a {
  text-decoration: none;
  color: #fffaf1;
}

nav a:hover {
  color: #1a1a1a;
}
</style>
