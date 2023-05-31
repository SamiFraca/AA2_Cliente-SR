<template>
  <div
    class="bg-white w-sign-width h-sign-height relative rounded-lg flex justify-center"
  >
    <form @submit.prevent="submitForm">
      <div class="flex flex-col my-12 justify-center">
        <input
          v-model="Username"
          type="text"
          :placeholder="$t('message.name')"
          class="border-solid h-16 w-96 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg"
        />
        <input
          v-model="Password"
          type="password"
          :placeholder="$t('message.password')"
          class="border-solid h-16 w-96 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg mt-8"
        />
        <input
          v-model="Password2"
          type="password"
          :placeholder="$t('message.password')"
          class="border-solid h-16 w-96 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg mt-8"
        />
        <br />
        <p v-if="!passwordsMatch" class="flex flex-start">
          {{ $t("message.errorPassword") }}
        </p>
        <div class="mt-8 flex">
          <h3>{{ $t("message.barOwner") }}</h3>
          <span class="ml-5"
            >{{ $t("message.yes") }}
            <input
              type="radio"
              name=""
              id=""
              class=""
              v-model="selectedOption"
              value="option1"
          /></span>
          <span class="ml-5"
            >No
            <input
              type="radio"
              name=""
              id=""
              class=""
              v-model="selectedOption"
              value="option2"
          /></span>
        </div>
      </div>
      <button
        class="bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded"
        type="submit"
        :disabled="!formValid"
        :class="{ disabled: !formValid }"
      >
        {{ $t("message.signIn") }}
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
export default {
  name: "Input",
  inject: ["router"],
  data() {
    return {
      id: 0,
      Username: "",
      Password: "",
      Password2: "",
      selectedOption: null,
      myBar: null,
    };
  },
  components: {},
  computed: {
    passwordsMatch() {
      return this.Password === this.Password2;
    },
    formValid() {
      return (
        this.passwordsMatch &&
        this.Password.length > 0 &&
        this.Password2.length > 0
      );
    },
  },
  methods: {
    submitForm() {
      if (
        !this.Username ||
        !this.Password ||
        !this.Password2 ||
        !this.selectedOption
      ) {
        alert("Fill everything");
      } else {
        this.createUser();
      }
    },
    verifyAdmin() {
      this.selectedOption === "option1"
        ? (this.selectedOption = true)
        : (this.selectedOption = false);
    },
    async createUser() {
      try {
        const user = {
          id: 0,
          isAdmin: this.selectedOption,
          myBar: null,
          password: this.Password,
          username: this.Username,
        };
        const response = await axios
          .post("https://watchmeapi-test.azurewebsites.net/Users", user)
          .then(() => {
            this.$router.push({
              name: "Home",
              query: { registrationSuccess: true },
            });
          });

        console.log("User created:", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style>
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
