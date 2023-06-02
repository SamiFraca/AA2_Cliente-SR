<template>
  <div class="flex flex-col md:flex-row mx-auto">
    <SideMenu activeLink="admin" />
    <div class="flex flex-col p-4 max-w-5xl text-left justify-start w-full mx-auto mt-4">
      <div
        class="flex justify-between sm:items-center items-start sm:flex-row flex-col"
      >
        <h1 class="text-4xl mb-4 ml-4 mt-4">Your establishments</h1>
        <button
          class="border px-6 h-10 border-blue-400 text-gray-600 hover:bg-blue-400 transition hover:text-white sm:ml-0 ml-6"
          @click="showForm = !showForm"
        >
          Create
        </button>
        <div
          v-if="showForm"
          class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-75 transition"
        >
          <CreatePopup @close-event="closeEvent" />
        </div>
      </div>
      <div class="mt-6">
        <div class="flex flex-col bg-white p-6 text-left">
          <div class="flex-col flex">
            <div
              v-for="bars in userBars"
              :key="bars.id"
              class="flex flex-col md:flex-row mb-8"
            >
              <template v-if="isLoading">
                <div class="flex items-center justify-center h-40">
                  <Loader />
                </div>
              </template>
              <template v-else>
                <img v-if="bars" src="https://placehold.co/300x250" />
                <div v-if="bars" class="ml-4 mt-2 md:mt-0">
                  <h3 class="text-lg font-bold mb-2">Name</h3>
                  <p>{{ bars.name }}</p>
                  <h3 class="text-lg font-bold mt-4 mb-2">Location</h3>
                  <p>{{ bars.location }}</p>
                  <h3 class="text-lg font-bold mt-4 mb-2">Description</h3>
                  <p class="text-gray-500">{{ bars.description }}</p>
                </div>
                <div class="justify-center flex" v-else>
                  <p class="text-center justify-center">
                    You don't have any registered establishments
                  </p>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CreatePopup from "@/components/profile/CreatePopup.vue";
import Loader from "@/components/loader/Loader.vue";
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
      showForm: false,
      isLoading: true,
    };
  },
  components: { CreatePopup, Loader, SideMenu },
  async mounted() {
    this.userId = localStorage.getItem("userId");
    this.tokenObject = JSON.parse(sessionStorage.getItem("token"));
    const tokenValue = this.tokenObject.token;
     console.log(this.isLoading)
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
      } finally {
        this.isLoading = false;
        console.log(this.isLoading)
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
      } catch (error) {
        console.log(error);
      }
    }
  },
  methods: {
    closeEvent(value) {
      this.showForm = value;
      console.log(this.showForm);
    },
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
