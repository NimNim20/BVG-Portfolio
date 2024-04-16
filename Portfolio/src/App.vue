<script setup>
import { RouterLink, RouterView } from 'vue-router'

import NavBar from '@/components/NavBar.vue'

</script>

<template>

<NavBar />
  
  <header>
    
    <div>
      <RouterLink>
      </RouterLink>
    </div>

  </header>

  <RouterView />

  <!-- Animations that didn't work -->
  <!-- <Transition mode="out-in" name="slide-fade"> -->
  <!-- </Transition> -->


  <!-- <RouterView v-slot=" { Component }">
  <transition mode="out-in" name="bounce">
    <component :is="Component" />
  </transition>
</RouterView> -->

</template>

<style scoped>
/* .bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.9)
  }
  50% {
    transform:scale(1.1)
  }
  100% {
    transform: scale(1)
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1)
  }
  50% {
    transform:scale(1.1)
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
} */


/* .fade-enter-active, .fade-leave-active {
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
} */

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
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
  border-left: 2px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
