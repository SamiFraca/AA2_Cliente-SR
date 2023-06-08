<template>
  <div class="flex flex-col md:flex-row">
    <SideMenu activeLink="account" />
    <div class="flex flex-col p-4 max-w-5xl mx-auto text-left justify-start">
      <h1 class="text-4xl mb-4 ml-4 mt-8">
        {{ $t("message.hello") }} {{ userData.username }}
      </h1>
      <div class="flex flex-col rounded-md shadow-sm bg-white p-6">
        <h2 class="text-2xl font-bold mb-4">Account details</h2>
        <div class="flex flex-row mb-6 md:gap-20 justify-start">
          <div class="flex flex-col">
            <h3 class="text-lg font-bold mb-2">Username</h3>
            <h4 class="text-gray-500">{{ userData.username }}</h4>
          </div>
          <div class="flex">
            <button
              type="button"
              class="text-sm underline cursor-pointer underline-offset font-medium"
            >
              Change password
            </button>
          </div>
        </div>
        <div class="mt-4 text-left">
          <h2 class="text-2xl font-bold mb-4">E-mail address</h2>
          <p class="text-gray-500 mb-4 md:w-3/6 text-left">
            By providing your email address in the designated field, you consent
            to receive updates and promotional material from us via email. Don't
            worry, we won't spam you and you can unsubscribe at any time.
          </p>
          <div class="flex flex-row justify-start mt-4">
            <input
              type="email"
              placeholder="Enter your email address"
              class="border border-gray-200 p-2 rounded-md md:w-1/4 mr-4 mb-4"
            />
            <button
              type="button"
              class="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 h-10"
              id="newsletter_button"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <h2 class="text-2xl font-bold mb-4 ml-4">Your establishments</h2>
        <div class="flex flex-col bg-white p-6 text-left">
          <div class="flex-col flex">
            <div v-for="bars in this.userBars" :key="bars.id" class="flex mb-8">
              <img v-if="bars.imageUrl" :src="bars.imageUrl" class="img-size" />
              <img v-else src="https://placehold.co/300x250" />
              <div v-if="bars" class="ml-4 mt-2 md:mt-0">
                <h3 class="text-lg font-bold mb-2">Name</h3>
                <p>{{ bars.name }}</p>
                <h3 class="text-lg font-bold mt-4 mb-2">Location</h3>
                <p>{{ bars.location }}</p>
                <h3 class="text-lg font-bold mt-4 mb-2">Description</h3>
                <p class="text-gray-500">
                  {{ bars.description }}
                </p>
              </div>
              <div class="justify-center flex" v-else>
                <p class="text-center justify-center">
                  You don't have any registered establishments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SideMenu from "@/components/profile/SideMenu.vue";
export default {
  data() {
    return {
      userId: null,
      tokenObject: null,
      userData: {
        username: localStorage.getItem("username") || "",
      },
      userBars: null,
      isMenuOpen: false,
    };
  },
  components: { SideMenu },
  async mounted() {
    this.userId = localStorage.getItem("userId");
    this.tokenObject = JSON.parse(sessionStorage.getItem("token"));
    const tokenValue = this.tokenObject.token;
    // console.log(this.userId);
    // console.log(tokenValue);

    if (this.tokenObject) {
      const url = `https://watchmeapi-test.azurewebsites.net/Users/${this.userId}?token=${tokenValue}`;
      try {
        const response = await axios.get(url);
        this.userData = response.data;
        localStorage.setItem("username", this.userData.username);
        console.log(this.userData);
      } catch (error) {
        console.log(error);
        this.$router.push("/login");
      }
    } else {
      this.sessionStorage.removeItem("token");
      this.$router.push("/login");
    }
    if (this.tokenObject) {
      const url = `https://watchmeapi-test.azurewebsites.net/Bars/User?UserId=${this.userId}`;
      try {
        const response = await axios.get(url);
        this.userBars = response.data;
        console.log(this.userBars);
        localStorage.setItem("Bars", this.userBars);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style>
.underline-offset {
  text-underline-offset: 5px;
}
.active-link::before {
  border-left: 2px;
}
.m-0-auto {
  margin: 0 auto;
}
</style>
