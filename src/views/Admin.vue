<template>
  <Header />
  <Admin />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header/Header.vue";
import Admin from "@/components/profile/Admin.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
  name: "admin",
  data() {},
  components: { Admin, Header, Footer },
  methods: {},
};
</script>
