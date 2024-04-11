<template>
  <main>
    <h1 class="text-3xl font-bold underline">
      Hello
    </h1>

    <button @click="selectedCategory = 'web'">Web</button>
    <button @click="selectedCategory = 'photo'">Photo</button>
    <button @click="selectedCategory = ''">All</button>

    <div v-for="projectItem in filteredProjectItems" :key="projectItem" class="card">
      <h2>{{ projectItem.title }}</h2>
      <p>{{ projectItem.description }}</p>
      <p>{{ projectItem.id }}</p>
      <p :class="projectItem.category">{{ projectItem.category }}</p>

      <img :src="projectItem.image" alt="">
      <div v-if="projectItem.link">
        <a :href="projectItem.link">Link</a>
      </div>
      <div v-else>

      </div>
    </div>
  
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import getProjects from '@/modules/getProjects.js'
const { projectItems } = getProjects()

let selectedCategory = ref('')

const filteredProjectItems = computed(() => {
  if (selectedCategory.value == '') {
    return projectItems.value
  }
    else {
      return projectItems.value.filter(item => item.category == selectedCategory.value)
    }
})
</script>

<style lang="scss">
.card {
  color:#333;
  background-color: #f4f4f4;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.web {
  background-color: #af7012;
}
.photo {
  background-color: #f256e2;
}
</style>