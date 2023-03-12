<template>
  <transition name="fade">
    <div v-if="isRegistered" class="success-message">You have successfully registered!</div>
  </transition>
  <transition name="fade">
    <div v-if="isLogged" class="success-message">Welcome back {{ LoggedUsername }}!</div>
  </transition>
  <div class="mt-12">
    <h1 class="text-5xl">We Serve, You enjoy</h1>
  </div>
  <div class="sm:flex sm:m-auto mt-8">
    <div class="m-auto flex flex-col sm:flex-row">
      <input type="text" class="px-8 py-3 border-2 sm:rounded-lg sm:mr-8 sm:mt-8 sm:ml-8" placeholder="Name"
        v-model="searchName" @keyup.enter="submitName" /><input type="text"
        class="px-8 py-3 border-2 rounded-lg sm:mr-8 mt-8" placeholder="Location" v-model="searchLocation"
        @keyup.enter="submitLocation" />
      <input type="text" class="px-8 py-3 border-2 rounded-lg mt-8 sm:w-full md:mt-8" placeholder="Sport"
        v-model="searchSport" @keyup.enter="submitSport" />
    </div>
  </div>
  <div><img src="../../assets/GQ_50Greatest_final_v2.webp" class="hidden sm:block"></div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
import { ref } from 'vue';
export default {

  data() {
    return {
      isRegistered: false,
      isLogged: false,
      LoggedUsername: null,
      searchLocation: '',
      locations: [],
      searchName: '',
      searchSport: ''
    }
  },
  methods: {
    async submitSport() {
      const isRedirected = ref(false);
      console.log("entraSport")
      const url = `https://localhost:8080/Bars/shows/sport?sport=${this.searchSport}`;
      try {
        await axios.get(url)
          .then((response) => {
            console.log(this.setLocations)
            localStorage.setItem('sportSearch', JSON.stringify(response.data))
            if (!isRedirected.value) {
              isRedirected.value = true
              this.$router.push('/sports')
            }
          });
      } catch (error) {
        console.log(error)
      }
    },
    async submitName() {
      const isRedirected = ref(false);
      console.log("entraName")
      const url = `https://localhost:8080/Bars/name?name=${this.searchName}`;
      try {
        await axios.get(url)
          .then((response) => {
            console.log(this.setLocations)
            localStorage.setItem('nameSearch', JSON.stringify(response.data))
            if (!isRedirected.value) {
              isRedirected.value = true
              this.$router.push('/names')
            }
          });
      } catch (error) {
        console.log(error)
      }
    },
    ...mapMutations(['setLocations']),
    async submitLocation() {
      const isRedirected = ref(false);
      console.log("entraLocation")
      const url = `https://localhost:8080/Bars/locations?location=${this.searchLocation}`;
      try {
        await axios.get(url)
          .then((response) => {
            this.setLocations(response.data)
            console.log(this.setLocations)
            localStorage.setItem('locationSearch', JSON.stringify(response.data))
            if (!isRedirected.value) {
              isRedirected.value = true
              this.$router.push('/locations')
            }
          });
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const registrationSuccess = urlParams.get('registrationSuccess');
    const loggedSuccess = urlParams.get("LoginSuccess")
    const loggedUser = localStorage.getItem("user")
    console.log(localStorage.getItem("user"))
    console.log(JSON.parse(loggedUser))
    console.log(this.LoggedUsername)
    if (registrationSuccess === 'true') {
      this.isRegistered = true;
      setTimeout(() => {
        this.isRegistered = false;
      }, 4000);
    }
    if (loggedSuccess === 'true' && loggedUser) {
      const user = JSON.parse(loggedUser)
      this.LoggedUsername = user
      this.isLogged = true;
      setTimeout(() => {
        this.isLogged = false;
      }, 4000);
    }
  },

};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@600&display=swap");

h1 {
  font-family: "Mukta", sans-serif;
}

body {
  overflow: hidden;
}

.success-message {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
