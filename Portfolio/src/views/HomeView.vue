<script setup>
  import NavBar from '@/components/NavBar.vue';  
  import HomeSection from '@/components/HomeSection.vue';
  import AboutSection from '@/components/AboutSection.vue';
  import ProjectSection from '@/components/ProjectSection.vue';
  import FooterSection from '@/components/FooterSection.vue';

</script>


<template>

  <NavBar />
  <HomeSection />
  <AboutSection />
  <ProjectSection />
  <FooterSection />
  
</template>


<style lang="scss">

body {
      margin: 0;
      padding: 0;
      background-color: #f0f0f0; /* fallback background color */
      /* Use the Theme.svg as the background image */
      background-image: url('../assets/Theme.svg');
      background-size: fill; /* Adjust as needed */
      background-repeat: no-repeat;
    }

  @media screen and (max-width: 1220px){
    body{
      background-color: #f0f0f0;
      background-image: none;
    }
  }

</style>