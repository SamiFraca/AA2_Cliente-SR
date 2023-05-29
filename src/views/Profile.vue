<template>
  <Header/>
  <MainProfile />
<Footer/>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header/Header.vue";
import MainProfile from "@/components/profile/Inputs.vue"
import Footer from "@/components/footer/Footer.vue"
export default {
  name: "Profile",
  data() {
    return {
     userId: null
    };
  },
  components: { MainProfile, Header,Footer },
  methods: {},
};
</script>
