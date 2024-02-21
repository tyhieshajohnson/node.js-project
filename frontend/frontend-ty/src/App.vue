<!-- HTML -->
<template>
  <!-- Navigation Bar -->
  <Navigation />
  <!-- End of Navigation Bar -->
  <router-view />
  <!-- <RouterView /> -->
  <!-- Footer -->
  <Footer/>
  <!-- Footer End -->
  <Loader/>
</template>

<!-- JAVASCRIPT -->
<script>
import Navigation from "@/components/NavigationBar.vue";
import Footer from "@/components/Footer.vue";
// import Loader from "@/components/Loader.vue";
import { RouterView } from "vue-router";

export default {
  name: "HomeView",
  components: {
    Navigation,
    Footer,
    // Loader
},
};
</script>

<!-- CSS -->
<style></style>