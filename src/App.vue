<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav class="navbar bg-dark navbar-dark">
  <div class="container">
    <router-link class="navbar-brand" to="/">
      <img 
        src="@/assets/logo.svg" 
        alt="Logo" 
        width="30" 
        height="24" 
        class="d-inline-block align-text-top">
      Poke Api
    </router-link>
    <router-link to="/" class="btn btn-outline-primary">Home</router-link>
    <RouterLink to="/pokemons" class="btn btn-outline-primary">Pokemons</RouterLink>
  </div>
</nav>
<div class="container text-center">
  <RouterView />
</div>
  
</template>

<style scoped>
</style>
