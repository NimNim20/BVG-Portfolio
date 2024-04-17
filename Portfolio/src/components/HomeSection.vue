<script setup>
    
</script>


<template>
  <div id="scrollToTop" class="container">
    <div class="home-section">

      <div class="text">
        <h1 class="name-section"></h1>
        <p class="introduction"> 
          My name is <strong>Benjamin Vid Gard</strong> and I am a multimedia designer. <br>
          I am a passionate website developer who aspires to be a fullstack developer. 
        </p>
      </div>
      
      <div class="image">
        <img src="@/assets/Ghost_Clothing.png" alt="" class="portrait">
      </div>


    </div>
  </div>
</template>


<style lang="scss" scoped>

.container{
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0;
}

.home-section{
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 90%;
  margin: 0 auto;
}

.image{
  grid-column-start: 2;
  grid-column-end: 6;
}

.portrait{
  width: 100%;
  border-radius: 100%;
}

.text{
  grid-column-start: 6;
  grid-column-end: 15;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name-section{
  font-size: 100px;
  margin-bottom: 0;
}

.introduction{
  color: #000;
  font-size: 25px;
}

@media only screen and (max-width: 1220px) {
        
  .home-section{
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .image{
    order: 2;
  }

  .text{
    order: 1;
  }

  .name-section{
    font-size: 50px;
  }

  .introduction{
    font-size: 20px;
  }
}
            
</style>