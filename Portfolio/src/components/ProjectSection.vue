<template>
  <div id="scrollToProjects" class="projects">
    <div class="sectioning">
      <div v-for="projectItem in filteredProjectItems" :key="projectItem" class="card">
          <div class="filter-buttons font-bold flex justify-center mb-2">
            <h1>
              <button @click="selectedCategory = 'Web'" class="text-white p-2">Web</button>
              <button @click="selectedCategory = 'App'" class="text-white p-2">App</button>
              <button @click="selectedCategory = 'Video'" class="text-white p-2">Video</button>
              <button @click="selectedCategory = ''" class="text-white p-2">All</button>
            </h1>
          </div>
          <img :src="projectItem.image" alt="" class="filler-image">
          <h2 class="text-white font-bold">{{ projectItem.title }}</h2>
  
          <div class="info-text">
            <div class="description">
              <p class="text-white">{{ projectItem.description }}</p>
            </div>  
            
          </div>
            <div class="required">
              <p class="text-white font-bold">{{ projectItem.require }}</p>
            </div>
            <div v-if="projectItem.link">
              <a :href="projectItem.link" class="project-link text-white font-bold underline">Go to project here</a>
            </div>
            <div v-else>
          </div>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  gap: 50px;
}

.sectioning{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  gap: 10px;
}

.card {
    width: 80%;
    max-width: 1200px;
    height: auto;
    background-color: var(--vt-c-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  }

.card img {
  display: flex;
  width: 60%;
  height: 55%;
  margin: 1rem;
}

.info-text{
  display: flex;
  flex-direction: column;
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

.project-link{
  transition: all 0.3s ease-in-out;
}

.project-link:hover{
  color: var(--vt-c-white-soft);
  transition: all 0.3s ease-in-out;
}


@media only screen and (max-width: 1220px) {
  .card {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .card img {
    width: 60%;
    height: 100%;
  }

  .info-text{
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .project-items {
    width: 100%;
  }

  .filter-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .text-1xl {
    font-size: 1.5rem;
  }
  
}

@media (max-width: 768px){
  .projects{
    padding: 0 20px;
  }

  .card{
    width: 100%;
    margin-top: 10%;
    margin-bottom: 10%;
  }

  .card img{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>