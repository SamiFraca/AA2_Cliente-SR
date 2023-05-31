<template>
  <div
    class="bg-white w-login-width h-login-height relative rounded-lg flex justify-center items-center flex-col"
  >
    <span class="cancel-icon flex self-end mr-8 cursor-pointer" @click="Close"></span>

    <form @submit.prevent="create">
      <div class="flex flex-col my-12 justify-center">
        <input
          v-model="Name"
          type="text"
          :placeholder="$t('message.name')"
          required
          class="border-solid h-16 w-96 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg m-0 m-auto"
        />
        <input
          v-model="Locatiom"
          type="Location"
          :placeholder="$t('message.location')"
          required
          class="border-solid h-16 w-96 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg mt-8 m-0 m-auto"
        />
        <br />
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
      Name: "",
      Location: "",
      Description: "",
      close: false,
    };
  },
  props: {},
  components: {},
  methods: {
    postBar() {
      const credentials = {
        Name: this.name,
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
    Close() {
      this.close = false;
      const closeValue = this.close;
      console.log("dkasdkds")
      this.$emit("close-event", closeValue);
    },
  },
  computed: {
    formValid() {
      return this.Username && this.Password;
    },
  },
};
</script>

<style scoped>
.cancel-icon {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gNy43MTg3NSA2LjI4MTI1IEwgNi4yODEyNSA3LjcxODc1IEwgMjMuNTYyNSAyNSBMIDYuMjgxMjUgNDIuMjgxMjUgTCA3LjcxODc1IDQzLjcxODc1IEwgMjUgMjYuNDM3NSBMIDQyLjI4MTI1IDQzLjcxODc1IEwgNDMuNzE4NzUgNDIuMjgxMjUgTCAyNi40Mzc1IDI1IEwgNDMuNzE4NzUgNy43MTg3NSBMIDQyLjI4MTI1IDYuMjgxMjUgTCAyNSAyMy41NjI1IFoiLz48L3N2Zz4=");
  content: "";
  display: inline-block;
  background-size: 40px 25px;
  width: 40px;
  background-repeat: no-repeat;
  height: 40px;
}
</style>
