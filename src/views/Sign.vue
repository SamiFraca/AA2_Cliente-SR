<template>
  <div class="back-img relative justify-center flex items-center">
    <Inputs class="absolute" />
  </div>
</template>

<script>
// import Header from "@/components/header/Header.vue";
// @ is an alias to /src
import Inputs from "@/components/sign/Inputs.vue";
export default{
  name: "Sign",
  components: { Inputs },
  methods: {},
};
</script>
<style scoped>
.back-img {
  background-image: url(../assets/pexels-pixabay-269948.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
