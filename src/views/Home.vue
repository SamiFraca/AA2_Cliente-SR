<template>
  <Header />
  <Main />
</template>

<script>
// @ is an alias to /src
import { Header } from "@/components/header/index.js";
import Main from "@/components/home/Main.vue";
import axios from "axios";
const apiURL = "https://localhost:8080"
export default {
  name: "Home",
  components: { Header, Main },
  methods: {
    getList() {
      axios.get(`${apiURL}/Users`).then((response) => {
        console.log(response.data);
      });
    },
  },
  beforeMount() {
    this.getList();
  },
};
</script>
<style>

</style>
