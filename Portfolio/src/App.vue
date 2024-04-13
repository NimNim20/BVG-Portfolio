<script setup>
import { RouterLink, RouterView } from 'vue-router'

import NavBar from './components/NavBar.vue'

</script>

<template>

  <NavBar />
  <header>
    

    <div class="">
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">My Projects</RouterLink>
        <RouterLink to="/footer">Footer</RouterLink>
      </nav>
    </div>
  </header>

  <Transition mode="out-in" name="slide-fade">
    <RouterView />
  </Transition>

</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active, .slide-fade-leave-active{
  transition: all 0.5s ease;

}

.slide-fade-enter-from, .slide-fade-leave-to{
  opacity: 0;
  transform: translate(750px, -750px);
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
