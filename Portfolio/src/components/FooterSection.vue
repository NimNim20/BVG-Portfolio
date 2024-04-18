<script setup>
</script>

<template>
    <div id="scrollToContact" class="fourth-container">
        <h1 class="contact">Contact Info</h1>
        <div class="info">
          <div class="email">
            <h3><strong>E-mail:</strong></h3>
            <p>bbvgard@gmail.com</p>
          </div>
          <div class="platforms">
            <h3 class="socials"><strong>My Platforms</strong></h3>
              <a href="https://github.com/NimNim20">
                <h3>My GitHub Profile</h3>
                <img class="social-icons flex justify-center h-24 w-24" src="../assets/github.svg" alt="Github Icon">
              </a>
            
              <a href="https://www.linkedin.com/in/benjamin-vid-gard-387254293/">
                <h3>My LinkedIn Profile</h3>
                <img class="social-icons h-24 w-24" src="../assets/linkedin.svg" alt="">
              </a>
            
          </div>            
        </div>
    </div>
</template>

<style scoped lang="scss">
.fourth-container{
  padding: 75px 5%;
  margin: 0 auto;
  background-color: var(--vt-c-white);
  color: #fff;
}

.contact{
  // color: #fff;
  font-size: 40px;
  margin-bottom: 20px;
}
        
.info{
  display: flex;
  gap: 200px;
  font-size: 20px;
}

.socials{
  margin-bottom: 10px;
  display: flex;
  // color: #fff;
}

.platforms{
  // gap: 10px;
}

.social-icons{
  width: 40px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  // justify-content: space-around;
}

li{
  list-style: none;
}


@media (max-width: 768px){
  .fourth-container{
    padding-bottom: 350px;
    margin: 0 auto;

  }

  .info{
    flex-direction: column;
    gap: 50px;
  }
}

</style>