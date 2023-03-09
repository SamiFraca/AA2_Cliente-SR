<template>
  <Header />
  <Main />
</template>

<script>
// @ is an alias to /src
import { Header } from "@/components/header/index.js";
import Main from "@/components/home/Main.vue";
import axios from "axios";

export default {
  name: "Home",
  components: { Header, Main },
  methods: {
    getList() {
      axios.get("https://api.sampleapis.com/coffee/hot").then((response) => {
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
