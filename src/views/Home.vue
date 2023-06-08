<template>
  <div>
    <Header :fixed="true" />
    <Main />
    <Footer />
  </div>
</template>

<script>
import { Header } from "@/components/header/index.js";
import Main from "@/components/home/Main.vue";
import Footer from "@/components/footer/Footer.vue";
import axios from "axios";
const apiURL = "https://watchmeapi-test.azurewebsites.net";
export default {
  name: "Home",
  components: { Header, Main, Footer },
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
