<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-pink-900 navbar-wrapper fixed top-0 text-white flex justify-between w-full items-center px-4 py-3 pb-2">
    <h1></h1>
    <nav>
        <RouterLink to="/" class="mr-2">Home</RouterLink>
        <RouterLink to="/about" class="mr-2">About</RouterLink>
        <RouterLink to="/projects" class="mr-2">My Projects</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>


<style scoped>

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>