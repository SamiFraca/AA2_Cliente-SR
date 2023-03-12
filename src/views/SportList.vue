<template>
  <Header />
  <Sports />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header.vue'
import Sports from '@/components/search/Sports.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  name: "sport",
  data() {
    return {

    }
  },
  components: { Sports, Header, Footer },
  methods: {
  },
};
</script>