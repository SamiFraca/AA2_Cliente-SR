<template>
  <Header />
  <Report />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header/Header.vue";
import Report from "@/components/profile/reports/Report.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
  name: "Reports",
  data() {
    return {
      userId: null,
    };
  },
  components: { Report, Header, Footer },
  methods: {},
};
</script>
