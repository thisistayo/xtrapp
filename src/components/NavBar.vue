<template>
    <div class="navbar">
      <router-link to="/" class="navbar-logo" title="sequere flumen, quoquo duca">
        <img width="42" height="42" src="../assets/img/river.jpg" class="avatar" alt="avatar">
      </router-link>
      <router-link to="/archive">archive</router-link>
      <router-link to="/about">about</router-link>
      <a href="https://xingutheriver.bandcamp.com" target="_blank" rel="noopener noreferrer">bandcamp</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  .navbar {
    width: 100%;
    background-color: #fff;
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  
  .navbar-logo {
    margin-right: auto;
  }
  
  .navbar a {
    text-decoration: none;
    color: #000;
    margin-left: 20px;
  }
  
  /* Optionally, adjust styles for hover and active states */
  .navbar a:hover {
    color: #ff0;
  }
  
  .avatar {
    border-radius: 50%;
  }
  </style>
  