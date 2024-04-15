<template>
  <main>
    <h1 class="text-3xl font-bold underline">
      
    </h1>
    <div>
      <button @click="selectedCategory = 'Web'">Web</button>
      <button @click="selectedCategory = 'Photo'">Photo</button>
      <button @click="selectedCategory = ''">All</button>
    </div>

    <div v-for="projectItem in filteredProjectItems" :key="projectItem" class="card">
      <router-link :to="`/projectdetails/${projectItem.id}`">
        <h2>Go to this project</h2>
      </router-link>
      <h2>{{ projectItem.title }}</h2>
      <p>{{ projectItem.description }}</p>
      <p :class="projectItem.category">{{ projectItem.category }}</p>
      <p>{{ projectItem.id }}</p>

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

// .web {
//   background-color: #af7012;
// }
// .photo {
//   background-color: #f256e2;
// }
</style>