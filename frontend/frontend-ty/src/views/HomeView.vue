<template>
  <div class="background-image">
    <Loader v-if="loading" />
    <div class="home-content" v-else>
      <img src="https://i.ibb.co/7vhH7MN/Gold-s-Gym.jpg" />
      <div class="text-container">
        <h1>SHOW YOUR <span style="color: #F9EF23;">BEST</span></h1>
        <button>
          <router-link
              to="/services"
              class="nav-link"
              style="font-family: 'Manrope', sans-serif"
              >OUR SERVICES
            </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  name: "HomeView",
  components: {
    Loader,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>

<!-- CSS -->
<style scoped>
.background-image img {
  width: 100%;
}

.home-content {
  position: relative;
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

h1 {
  font-size: 96px;
  margin-bottom: 20px;
  font-weight: 1000;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    background-color: #6D690B; 
    color: white; 
    border: none;
    cursor: pointer;
    font-weight: 400;
    border-radius: 7px;
}

/* MEDIA QUERIES */
@media only screen and (max-width: 600px) {
  .background-image img {
  width: 100%;
}

.home-content {
  position: relative;
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

h1 {
  font-size: larger;
  margin-bottom: 20px;
  font-weight: 1000;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    background-color: #6D690B; 
    color: white; 
    border: none;
    cursor: pointer;
    font-weight: 400;
    border-radius: 7px;
}
}
</style>
