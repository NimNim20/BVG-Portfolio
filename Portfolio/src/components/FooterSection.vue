<script setup>
</script>

<template>
    <div id="scrollToContact" class="fourth-container">
        <h1 class="contact">Contact Info</h1>
        <div class="address">
          <div class="contact-info">
            <h3 class="contact-info-title"><strong>E-mail:</strong></h3>
            <p>bbvgard@gmail.com</p>
          </div>
          <div class="contact-address">
            <h3 class="socials"><strong>My Platforms</strong></h3>
            <div class="contact-icons">
              <!-- <img src="../assets/linkedin-logo.svg" alt="" class="social-icons">
              <img src="../assets/github-logo.svg" alt="" class="social-icons"> -->
            </div>
          </div>            
        </div>
    </div>
</template>

<style scoped lang="scss">
.fourth-container{
  padding: 100px 10%;
  margin: 0 auto;
  background-color: #301E67;
}

.contact{
  font-size: 40px;
  margin-bottom: 20px;
}
        
.address{
  display: flex;
  gap: 200px;
  font-size: 20px;
}

.socials{
  margin-bottom: 10px;
}

.contact-icons{
  width: 30px;
  display: flex;
  gap: 20px;
}

.social-icons{
  width: 100%;
}

</style>