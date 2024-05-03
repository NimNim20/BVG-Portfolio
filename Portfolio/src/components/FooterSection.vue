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
            <div class="social-icons">
              <a target="_blank" href="www.linkedin.com/in/benjaminvidgard" class="social-links"><img src="@/assets/linkedin.svg" alt="" class="social-icons"></a>
              <a target="_blank" href="https://github.com/NimNim20" class="social-links"><img src="@/assets/github.svg" alt="" class="social-icons"></a>
            </div>
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
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 5px;

  a{
    width: 10%;
  }
}



@media (max-width: 768px){
  .fourth-container{
    padding-bottom: 25%;
    padding-top: 50%;
    margin: 0 auto;

  }

  .info{
    flex-direction: column;
    gap: 25px;
  }
}

@media only screen and (max-width: 932px){
  .fourth-container{
    padding-bottom: 5%;
    padding-top: 5%;
    margin: 0 auto;
    // height: fit-content;
  }

  .info{
    flex-direction: column;
    gap: 25px;
  }

  .platforms{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .socials{
    margin-bottom: 0;
    display: flex;
  }

  .social-icons{
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: start;
  }

  .social-links{
    width: 40px;
  }
}

</style>