<template>
  <div id="app">
    <header>
      <h1>ThreeAngleStudio</h1>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2025 ThreeAngleStudio</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  color: #fffaf1;
  background-color: #1a1a1a;
  text-align: center;
}

header {
  background-color: #a19689;
  padding: 1rem;
}

footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 1rem;
}
</style>
