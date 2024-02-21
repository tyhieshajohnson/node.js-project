<!-- HTML -->
<template>
  <div class="loader-container w-80 vh-80">
    <img class="loader-image" src="https://i.ibb.co/k3RqrMD/Screenshot-2024-02-21-122216.pnghttps://i.ibb.co/phQZqDX/Screenshot-2024-02-21-132743.png" alt="">
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
export default {
  name: 'Loader',
  props: {
    msg: String
  }
}
</script>

<!-- CSS -->
<style scoped>
.loader-container {
  background-color: #141414;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .loader-container {
    background-color: #141414;
    width: 100%;
    height: 100%;
  }
.loader-image {
  width: 100px;
  height: 100px;
  margin-top: 200px;
  margin-bottom: 202px;
}
}
</style>
