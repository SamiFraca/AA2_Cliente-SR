<template>
    <Header />
    <Sports />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header.vue'
import Sports from '@/components/search/Sports.vue'
export default {
  name: "sport",
  data() {
    return {

    }
  },
  components: { Sports, Header },
  methods: {
  },
};
</script>