<template>
  <Header />
  <Main/>
</template>

<script>
import Header from "./components/header/Header.vue";
import Main from "./components/home/Main";

export default {
  name: "App",
  components: {
    Header,Main
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
