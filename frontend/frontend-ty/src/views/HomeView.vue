<template>
  <div class="background-image">
    <Loader v-if="loading"/>
    <div v-else>
      <img
      src="https://i.ibb.co/7vhH7MN/Gold-s-Gym.jpg"
      alt="Magma-Sports-wear-Gym-Editorial-Shoot-2"
      border="0"
    /> 
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
    }, 5000);
  },
};
</script>

<style scoped>
.background-image img {
  width: 100%;
}
</style>
