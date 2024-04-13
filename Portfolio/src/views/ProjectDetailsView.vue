<template>
  <div class="font-bold">
    <div v-if="!specificProjectItem">
      Nothing here, Brother!
    </div>
    <div v-else>
      <h1>{{ specificProjectItem.title }}</h1>
      <h1>{{ specificProjectItem.category }}</h1>
      <img :src="specificProjectItem.image" alt="">
      <h1>{{ specificProjectItem.description }}</h1>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import getProject from '@/modules/getProjects.js'
  const { projectItems } = getProject()
  const route = useRoute()
  const id = ref(route.params.id)

  const specificProjectItem = projectItems.value.find(item => item.id == id.value)
  
</script>

<style lang="scss" scoped>

</style>