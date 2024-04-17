<script setup>
</script>

<template>
  <header>
    <div class="navbar top-0 flex justify-between w-full items-center mb-3">
      <h1 class="name-logo">Hello, I'm Benjamin!</h1>
  
      <nav>

        <ul>
          <li class="nav-links"><a href="#scrollToTop" class="nav-links">Home</a></li>
          <li class="nav-links"><a href="#scrollToAbout" class="nav-links">About Me</a></li>
          <li class="nav-links"><a href="#scrollToProjects" class="nav-links">Projects</a></li>
          <li class="nav-links"><a href="#scrollToContact" class="nav-links">Contact Me</a></li>
        </ul>

      </nav>
    </div>
  </header>
</template>

<style scoped>

header {
  /* position: fixed; */
  width: 100%;
  height: 80px;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  transition: all 0.4s ease-in-out;
}

.name-logo {
  font-size: 1.5rem;
  color: #fff;
  font-weight: 500;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav ul{
  display: flex;
  gap: 50px;
}

.nav-links {
  color: #f3f4ed;
  list-style-type: none;
  font-weight: 500;
  font-size: large;
  text-decoration: none; 
}

.navbar {
  background-color: var(--vt-c-white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.4s ease-in-out;
}

.category{
  font-size: 1.2rem;
}


@media only screen and (max-width: 1000px) {
  nav{
    display: none;
  } 
}

</style>