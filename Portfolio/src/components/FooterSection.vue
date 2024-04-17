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
              <!-- <img src="../assets/linkedin-logo.svg" alt="" class="social-icons">
              <img src="../assets/github-logo.svg" alt="" class="social-icons"> -->
            </div>
          </div>            
        </div>
    </div>
</template>

<style scoped lang="scss">
.fourth-container{
  padding: 100px 5%;
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

.email{
  // color: #fff;
}

.socials{
  margin-bottom: 10px;
  // color: #fff;
}

.social-icons{
  width: 30px;
  display: flex;
  gap: 20px;
}


@media (max-width: 768px){
  .info{
    flex-direction: column;
    gap: 50px;
  }
}

</style>