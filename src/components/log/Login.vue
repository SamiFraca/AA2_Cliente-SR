<template>
  <div
    class="bg-white w-login-width h-login-height relative rounded-lg flex justify-center items-center"
  >
    <form @submit.prevent="login">
      <div class="flex flex-col my-12 justify-center">
        <input
          v-model="Username"
          type="text"
          :placeholder="$t('message.name')"
          required
          class="border-solid h-16 w-96 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg m-0 m-auto"
        />
        <input
          v-model="Password"
          type="password"
          :placeholder="$t('message.password')"
          required
          class="border-solid h-16 w-96 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg mt-8 m-0 m-auto"
        />
        <br />
        <div v-if="NoUsernameFound" class="no-results-logger shake">
          {{ $t("message.invalid") }}
        </div>
      </div>
      <button
        class="bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded"
        type="submit"
        :disabled="!formValid"
        :class="{ disabled: !formValid }"
      >
      {{ $t("message.logIn") }}
      </button>
    </form>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "Login",
  data() {
    return {
      Username: "",
      Password: "",
      NoUsernameFound: false,
    };
  },
  components: {},
  methods: {
    login() {
      const credentials = {
        Username: this.Username,
        Password: this.Password,
      };
      this.$store
        .dispatch("login", credentials)
        .then(() => {
          this.$router.push({ name: "Home", query: { LoginSuccess: true } });
        })
        .catch((error) => {
          console.log(error);
          this.NoUsernameFound = true;
        });
    },
  },
  computed: {
    formValid() {
      return this.Username && this.Password;
    },
  },
};
</script>
<style>
.no-results-logger {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(163, 10, 10);
  color: white;
  border-radius: 10px;
  padding: 5px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
