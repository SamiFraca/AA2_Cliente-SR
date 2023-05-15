<template>
  <Header />
  <Profile />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header/Header.vue";
import Profile from "@/components/profile/Inputs.vue"
import Footer from "@/components/footer/Footer.vue";
export default {
  name: "Profile",
  data() {
    return {};
  },
  components: { Profile, Header, Footer },
  methods: {},
};
</script>
