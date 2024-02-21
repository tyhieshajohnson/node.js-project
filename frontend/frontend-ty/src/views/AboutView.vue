<!-- HTML -->
<template>
  <div class="about">
    <div class="description">
     <h1>ABOUT OUR FIT FAMILY</h1>  
     <h3>Nexus was founded in 2024. <br>Since then, we have expanded to 3 various locations nation wide</h3>
     <!-- Services -->
     <router-link
              to="/services"
              class="nav-link"
              style="font-family: 'Manrope', sans-serif"
              >Our Merch
            </router-link>
    </div>
    <!-- Images -->
    <div class="about-image">
      <img class="about-images" src="https://i.ibb.co/yNF4tFJ/Magma-Sports-wear-Gym-Editorial-Shoot.jpg" alt="">
      <img class="about-images" src="https://i.ibb.co/3p0m0gm/Magma-Sports-wear-Gym-Editorial-Shoot-2.jpg" alt="">
    </div>
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
</script>

<!-- CSS -->
<style>
.about {
  background-color: #141414;
}

/* MEDIA QUERIES */
@media only screen and (max-width: 600px) {
.description h1{
  color: #F9EF23;
  text-align: center;
  font-weight: 900;
}

.description h3 {
  color: white;
  text-align: center;
  font-size: small;
}

.nav-link {
  color: white;
  text-decoration: underline;
  font-size: xx-small;
  padding-left: 110px;
  margin-top: 15px;
}

.about-image {
  margin-top: 20px;
}

.about-images {
  width: 373px;
  height: 424px;
  padding: 20px;
  margin-left: 130px;
}
}
</style>