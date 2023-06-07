<template>
  <Header />
  <ModifyBar />
  <Footer />
</template>
<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import ModifyBar from "@/components/profile/ModifyBar.vue";
export default {
  name: "CreateBarPopup",
  data() {
    return {
    };
  },
  components:{ Header, Footer, ModifyBar }
};
</script>
