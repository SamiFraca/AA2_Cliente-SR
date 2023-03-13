<template>
  <div class="back">
    <Header />
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import { Header } from "@/components/header/index.js";
import Main from "@/components/home/Main.vue";
import axios from "axios";
const apiURL = "https://watchmeapi-test.azurewebsites.net";
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
.back {
  overflow: hidden;
  height: 100vh;
}
</style>
