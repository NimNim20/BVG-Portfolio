<template>
  <div id="scrollToProjects" class="projects">
    <div v-for="projectItem in filteredProjectItems" :key="projectItem" class="card w-1/2">
        <div class="filter-buttons flex justify-center mb-4">
          <h1 class="text-1xl font-bold underline">
            <button @click="selectedCategory = 'Web'" class="text-white p-2">Web</button>
            <button @click="selectedCategory = 'Photo'" class="text-white p-2">Photo</button>
            <button @click="selectedCategory = ''" class="text-white p-2">All</button>
          </h1>
        </div>
        <h2 class="text-white">{{ projectItem.title }}</h2>

        <p :class="projectItem.category">{{ projectItem.category }}</p>

        <div class="project-items flex justify-center items-center">
          <div class="info mr-4">
            <router-link :to="`/projectdetails/${projectItem.id}`">
              <p class="text-white font-bold underline">Click me for more details</p>
            </router-link>
          </div>          
        </div>

        <div class="flex flex-row items-center">
          <div class="info-text">
            <p class="text-white">{{ projectItem.teaser }}</p>
          </div>  
          
          <img :src="projectItem.image" alt="" class="filler-image bg-yellow-900">
        </div>
          <div v-if="projectItem.link">
            <a :href="projectItem.link" class="text-white font-bold underline">Go to project here</a>
          </div>
          <div v-else>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const { projectItems } = getProjects()
import getProjects from '@/modules/getProjects.js'

const selectedCategory = ref('')

const filteredProjectItems = computed(() => {
  if (selectedCategory.value == '') {
    return projectItems.value
  }
    else {
      return projectItems.value.filter(item => item.category == selectedCategory.value)
    }
})
</script>

<style lang="scss" scoped>
.projects{
  display: grid;
  height: auto;
  padding: 100px 0;
  gap: 50px;
}

.card {
  height: auto;
  // width: 55%;
  display: flex;
  flex-direction: column;
  color:#333;
  background-color: #301E67;
  padding: 1rem;
  margin-top: 4rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card img {
  display: flex;
  width: 55%;
  height: 55%;
  margin: 1rem 0 0 1rem;
}

.info-text{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 5%;
  width: 55%;
  padding: 1rem;
}

.project-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>