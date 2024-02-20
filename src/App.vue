<template>
  <div id="app">
    <NavBar /> <!-- Corrected the component name to NavBar -->
    <div class="main-content">
      <router-view />
    </div>
    <TheFooter />

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'; 
import TheFooter from './components/TheFooter.vue'; 

export default {
  name: 'App',
  components: {
    NavBar, // Corrected component name
    TheFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main-content {
    padding-top: 60px; /* Adjust according to your navbar height */
}
</style>
