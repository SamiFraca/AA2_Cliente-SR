<template>
  <Header />
  <Locations />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header.vue'
import Locations from '@/components/search/Locations.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  name: "ListLocations",
  data() {
    return {
      from: null
    }
  },
  components: { Locations, Header, Footer },
  methods: {
  },
};
</script>
