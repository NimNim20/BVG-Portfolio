<script setup>
    
</script>


<template>
  <div id="scrollToAbout" class="about-container">
    <h1 class="title">About Me</h1>

    <div class="about-content">
      <div class="about-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis incidunt totam est fuga libero? Est hic, quod unde dolore, deserunt quia, asperiores suscipit commodi impedit velit sint? Officiis, dicta perspiciatis.
        </p>
      </div>

      
      <div class="video-cv">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3uHmMDMjjwU" title="Video CV - Benjamin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <button class="my-cv">Download My CV .pdf</button>

    </div>

  </div>
</template>


<style lang="scss" scoped>
.about-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--vt-c-white-soft);
  padding: 100px 0;
}

.title{
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.about-content{
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  gap: 50px;
  width: 90%;
  margin: 0 auto;
}

.about-text{
  display: flex;
  color: #fff;
  font-size: 18px;
  align-items: center;
  grid-column-start: 2;
  grid-column-end: 8;
}

.my-cv{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: var(--vt-c-white);
  padding: 10px 20px;
  height: 100px;
  width: 175px;
  border-radius: 20px;
}

</style>