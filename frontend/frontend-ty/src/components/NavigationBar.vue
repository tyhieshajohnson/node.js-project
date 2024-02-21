<!-- HTML -->
<template>
  <div class="navigation-container">
    <nav class="navbar navbar-expand-lg bg-body-">
      <div class="navigation-fluid">
        <a class="navbar-brand" href="#">
          <img
            class="navigation-image"
            src="https://i.ibb.co/k3RqrMD/Screenshot-2024-02-21-122216.png"
            style="height: 70px"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          style="background-color: #141414"
        >
          <div class="navbar-nav">
            <!-- Home Router -->
            <router-link
              to="/"
              class="nav-link"
              style="font-family: 'Manrope', sans-serif"
              >Home
            </router-link>
            <!-- About Router -->
            <router-link
              to="/about"
              class="nav-link"
              style="font-family: 'Manrope', sans-serif"
              >About
            </router-link>
            <!-- Services -->
            <router-link
              to="/services"
              class="nav-link"
              style="font-family: 'Manrope', sans-serif"
              >Service
            </router-link>
            <!-- Testimonial -->
            <router-link
              to="/testimonial"
              class="nav-link"
              style="font-family: 'Manrope', sans-serif"
              >Testimonials
            </router-link>
            <!-- Contact -->
            <router-link
              to="/contact"
              class="nav-link"
              style="font-family: 'Manrope', sans-serif"
              >Contact
            </router-link>
            <button>
              <!-- Cart -->
              <router-link
                to="/cart"
                class="nav-link"
                style="font-family: 'Manrope', sans-serif"
                >Cart
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
export default {
  name: "Navigation",
  props: {
    msg: String,
  },
};
</script>

<!-- CSS-->
<style scoped>
.navigation-container {
  background-color: #141414;
  height: 90px;
}

.navigation-container a {
  color: white;
}
.navigation-image {
  width: 300px;
  /* height: 100px; */
}
.navigation-fluid {
  display: flex;
}

@media only screen and (max-width: 600px) {
  .navigation-image {
    width: 150px;
  }

  .navigation-container {
    background-color: #141414;
    height: 90px;
  }
  .icon-container {
    display: flex;
    position: absolute;
    justify-content: space-between;
    margin-top: 40px;
    margin-left: 150px;
  }
}
</style>
