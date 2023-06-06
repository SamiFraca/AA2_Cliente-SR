<template>
  <div class="flex flex-col md:flex-row mx-auto">
    <SideMenu activeLink="admin" />
    <div
      class="flex flex-col p-4 max-w-5xl text-left justify-start w-full mx-auto mt-4"
    >
      <div
        class="flex justify-between sm:items-center items-start sm:flex-row flex-col"
      >
        <h1 class="text-4xl mb-4 ml-4 mt-4">Your establishments</h1>
        <button
          class="border px-6 h-10 border-blue-400 text-gray-600 hover:bg-blue-400 transition hover:text-white sm:ml-0 ml-6 rounded-md"
          @click="showForm = !showForm"
        >
          Create
        </button>
        <div
          v-if="showForm"
          class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-25 transition z-50"
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
              class="flex flex-col md:flex-row mb-12 relative border-b pb-4"
            >
              <template v-if="isLoading">
                <div class="flex items-center justify-center h-40">
                  <Loader />
                </div>
              </template>
              <template v-else>
                <img
                  v-if="bars && !bars.imageUrl"
                  src="../../assets/logo.png"
                  class="md:absolute top-0 img-size img-default  border"
                />
                <img
                  v-else
                  :src="bars.imageUrl"
                  class="img-size md:absolute top-0"
                />
                <div v-if="bars" class="ml-4 mt-2 md:mt-0 pl-300 w-full">
                  <div class="flex justify-between">
                    <div class="flex flex-col">
                      <h3 class="text-lg font-bold mb-2">Name</h3>
                      <p>{{ bars.name }}</p>
                    </div>
                    <div class="flex gap-4">
                      <button
                        type="button"
                        class="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-700 h-10"
                      >
                        <router-link
                          :to="{
                            name: 'Modify',
                            params: {
                              itemId: this.userId,
                              barId: bars.id
                            },
                          }"
                          >Modify</router-link
                        >
                      </button>
                      <button
                        type="button"
                        class="bg-red-500 text-white px-4 rounded-md hover:bg-red-700 h-10"
                        @click="deleteBar(bars)"
                      >
                        Delete
                      </button>
                      <div
                        v-if="showDelete"
                        class="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-opacity-25 justify-center bg-gray-100 bg-opacity-25 transition z-50"
                      >
                        <DeletePopup
                          @close-event-delete="closeEventDelete"
                          :bar="selectedBar"
                          v-if="showDelete"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 class="text-lg font-bold mt-4 mb-2">Location</h3>
                  <p>{{ bars.location }}</p>
                  <h3 class="text-lg font-bold mt-4 mb-2">Description</h3>
                  <p class="text-gray-500">{{ bars.description }}</p>
                  <h3 class="text-lg font-bold mb-2">Shows</h3>
                  <button
                    type="button"
                    class="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 h-10"
                    @click="toggleSeeMore(bars.id)"
                  >
                    {{ isExpanded(bars.id) ? "Hide" : "See More" }}
                  </button>
                  <div v-if="isExpanded(bars.id)">
                    <div v-if="bars.shows && bars.shows.length > 0" class="flex flex-col gap-4 mt-4">
                      <div v-for="shows in bars.shows" :key="shows.id" class="border p-4">
                        <h3 class="font-bold text-md mt-4">Title</h3>
                        <p>{{ shows.title }}</p>
                        <h3 class="font-bold text-md">Sport / Event type</h3>
                        <p>{{ shows.sport }}</p>
                        <h3 class="font-bold text-md">Schedule</h3>
                        <p>From {{ shows.startTime }} to {{ shows.endTime }}</p>
                        <h3 class="font-bold text-md">Capacity</h3>
                        <p>Maximum Capacity: {{ shows.maxCap }}</p>
                        <p>Actual Capacity: {{ shows.actualCap }}</p>
                      </div>
                    </div>
                  </div>
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
import DeletePopup from "@/components/profile/DeletePopup.vue";
export default {
  data() {
    return {
      userId: null,
      tokenObject: null,
      userData: {
        username: localStorage.getItem("username") || "",
      },
      userBars: [],
      isMenuOpen: false,
      showForm: false,
      isLoading: true,
      seeMore: false,
      expandedBars: [],
      showDelete: false,
      selectedBarId: null,
    };
  },
  components: { CreatePopup, Loader, SideMenu, DeletePopup },
  async mounted() {
    this.userId = localStorage.getItem("userId");
    this.tokenObject = JSON.parse(sessionStorage.getItem("token"));
    const tokenValue = this.tokenObject.token;
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
    },
    deleteBar(bars) {
      console.log("hola");
      this.selectedBar = bars;
      this.showDelete = !this.showDelete;
    },
    closeEventDelete(value) {
      this.showDelete = value;
    },
    toggleSeeMore(barId) {
      const index = this.expandedBars.indexOf(barId);
      if (index > -1) {
        this.expandedBars.splice(index, 1);
      } else {
        this.expandedBars.push(barId);
      }
    },
    isExpanded(barId) {
      return this.expandedBars.includes(barId);
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

.img-size {
  width: 300px;
  height: 250px;
  object-fit: cover;
}
.img-default{
  object-fit: contain !important;
}

.pl-300 {
  @media (min-width: 768px) {
    padding-left: 300px;
  }
}
</style>
