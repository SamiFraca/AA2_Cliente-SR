<template>
      <Header />
      <Names />
      <Footer/>
  </template>
  
  <script>
  // @ is an alias to /src
  import Header from '@/components/header/Header.vue'
  import Names from '@/components/search/Names.vue'
  import Footer from '@/components/footer/Footer.vue'
  export default {
    name: "ListbyName",
    data() {
      return {

      }
    },
    components: { Names, Header,Footer },
    methods: {
    },
  };
  </script>