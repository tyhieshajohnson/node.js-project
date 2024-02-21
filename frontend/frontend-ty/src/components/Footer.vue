<!-- HTML -->
<template>
  <div class="body w-100" style="background-color: #141414;">
    <div class="footer-container">
      <div class="footer-content w-100">
        <p
          style="
            font-family: 'Manrope', sans-serif;
            font-size: small;
            padding-left: 100px;
            padding-top: 15px;
            color: #AAAAAA;
          "
        >
          Made by <strong style="color: #AAAAAA;">Tyhiesha Johnson</strong> and <strong style="color: #AAAAAA;">Sivuyisiwe Peter</strong> &copy; <strong style="color: #F9EF23;">Nexus Gym</strong> 2024
        </p>
        <div
          class="icon-container"
          style="padding-top: 15px; 
          padding-right: 100px;"
        >
          <a href="https://api.whatsapp.com/send?phone=27760775241"
            ><i class="fa-brands fa-whatsapp" style="color: #AAAAAA"></i
          ></a>

          <a href="https://www.linkedin.com/in/tyhieshajohnson/"
            ><i class="fa-brands fa-linkedin" style="color: #AAAAAA"></i
          ></a>

          <a href="https://github.com/tyhieshajohnson/"
            ><i class="fa-brands fa-github" style="color: #AAAAAA"></i
          ></a>

          <a href="https://www.instagram.com/gold4n.ace/"
            ><i class="fa-brands fa-instagram" style="color: #AAAAAA"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- CSS -->
<style scoped>
.footer-content {
  border-top: solid 1px #696969;
  background-color: #323232;
  display: flex;
  justify-content: space-between;
}

.icon-container {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 600px) {
.footer-content {
  font-size: 8px;
  display: flex;
  justify-content: space-between;
}
.icon-container {
  display: flex;
  position: absolute;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 150px;
}

.footer-content {
  padding: none;
}
}
</style>
