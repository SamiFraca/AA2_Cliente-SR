<template>
    <Header />
    <Details />
    <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header.vue'
import Details from '@/components/details/Details.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  name: "BarDetails",
  data() {
    return {
      from: null
    }
  },
  components: { Details, Header, Footer },
  methods: {
  },
};
</script>