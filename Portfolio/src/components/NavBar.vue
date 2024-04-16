<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar fixed top-0 text-white flex justify-between w-full items-center mb-3">
    <h1 class="category">Hello, I'm Benjamin!</h1>
    <nav>
        <RouterLink to="/" class="category mr-2">Home</RouterLink>
        <RouterLink to="/about" class="category mr-2">About</RouterLink>
        <RouterLink to="/projects" class="category mr-2">My Projects</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>


<style scoped>

.navbar {
  background-color: #301E67;
  height: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.category{
  font-size: 1.2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>