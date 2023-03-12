<template>
      <Header />
      <Names />
  </template>
  
  <script>
  // @ is an alias to /src
  import Header from '@/components/header/Header.vue'
  import Names from '@/components/search/Names.vue'
  export default {
    name: "ListbyName",
    data() {
      return {

      }
    },
    components: { Names, Header },
    methods: {
    },
  };
  </script>