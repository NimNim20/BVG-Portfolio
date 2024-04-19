<script setup>
    
</script>


<template>
  <div id="scrollToAbout" class="about-container">
    <h1 class="title">About Me</h1>

    <div class="about-content">
      <div class="about-text">
        <p>
          Hey there! I'm an aspiring full-stack developer and multimedia designer with a passion for creating captivating digital experiences. I specialize in HTML, CSS, and JavaScript, crafting beautiful and functional websites that leave a lasting impression. <br> <br>
          Alongside my coding skills, I'm proficient in the Adobe Creative Suite, from designing visuals in Photoshop to creating motion graphics in After Effects. I'm always eager to tackle new challenges and push the boundaries of creativity in both design and development.
        </p>
      </div>

      
      <div class="video-cv">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3uHmMDMjjwU" title="Video CV - Benjamin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div class="downloadCV">
        <a href="CV - Benjamin.pdf" download="CV - Benjamin.pdf">
          <button class="my-cv">Download My CV .pdf</button>
        </a>
      </div>

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
  padding: 50px 0;
  background-color: var(--vt-c-white);
}

.video-cv{
  display: flex;
  justify-content: center;
  align-items: center;
}

// body{
//   margin: 0;
//   padding: 0;
//   background-color: #f0f0f0; /* fallback background color */
//   background-image: url('../assets/ThemeMirrored.svg');
//   background-size: fill; /* Adjust as needed */
// }

.title{
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  // margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: grey;
  padding: 10px 20px;
  height: 100px;
  width: 175px;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
}

.my-cv:hover{
  background-color: var(--vt-c-white-soft);
  color: white;
  transition: all 0.3s ease-in-out;
}

.downloadCV{
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 10;
  grid-column-end: 15;
}


@media only screen and (max-width: 1220px) {
  .about-content{
    display: flex;
    flex-direction: column;
    // gap: 50px;
  }

  .about-text{
    order: 2;
  }

  .video-cv{
    order: 1;
  }

  .my-cv{
    order: 3;
  }

  .downloadCV{
    order: 4;
  }
}

@media (max-width: 768px){
  .title{
    font-size: 1.5rem;
    // margin-top: 5%;
    margin-bottom: 35px;
  }

  .about-text{
    font-size: 16px;
  }

  .my-cv{
    font-size: 14px;
    padding: 5px 10px;
    height: 75px;
    width: 150px;
  }
}

@media only screen and (max-width: 828px){
  .about-container{
    padding-bottom: 350px;
    margin: 0 auto;
  }

  .about-content{
    display: flex;
    flex-direction: column;
    // gap: 25px;
  }

  .video-cv{
    width: 100%;
    height: 56.25vh;
    order: 1;
  }

  .my-cv{
    order: 3;
  }

  .downloadCV{
    order: 4;
  }

  .about-text{
    font-size: 14px;
    order: 2;
  }
}

</style>