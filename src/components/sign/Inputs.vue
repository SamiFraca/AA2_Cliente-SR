<template>
  <div class="bg-white w-sign-width h-sign-height relative rounded-lg">
    <form @submit.prevent="Data">
      <input v-model="inputData" type="text" placeholder="Enter data" />
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Input",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
