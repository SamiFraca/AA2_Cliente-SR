<template>
  <div
    class="bg-white w-sign-width h-sign-height relative rounded-lg flex justify-center"
  >
    <form @submit.prevent="Data">
      <div class="flex flex-col my-12 justify-center">
        <input
          v-model="inputData"
          type="text"
          placeholder="Username"
          class="border-solid h-16 w-96 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg"
        />
        <input
          v-model="inputData"
          type="text"
          placeholder="Username"
          class="border-solid h-16 w-96 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg mt-8"
        />
        <input
          v-model="inputData"
          type="text"
          placeholder="Username"
          class="border-solid h-16 w-96 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg mt-8"
        />
        <div class="mt-8 flex flex-col">
          <h3>Are you a bar owner?</h3>
          <div class="flex mt-8">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
            >
              Yes
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
            >
              No
            </button>
          </div>
        </div>
      </div>
      <button
        class="bg-blue-700 hover:bg-blue-900  text-white font-bold px-4 py-2 rounded"
      >Register</button>
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
