<template>
  <v-main>
    <transition name="fade">
      <div v-if="isRegistered" class="success-message">You have successfully registered!</div>
    </transition>
    <div class="mt-12">
      <h1 class="text-5xl">We Serve, You enjoy</h1>
    </div>
    <div class="sm:flex sm:m-auto mt-8">
      <div class="m-auto flex flex-col sm:flex-row">
        <input type="text" class="px-8 py-3 border-2 sm:rounded-lg sm:mr-8 sm:mt-8 sm:ml-8" placeholder="Name" /><input
          type="text" class="px-8 py-3 border-2 rounded-lg sm:mr-8 mt-8" placeholder="Location" />
        <input type="text" class="px-8 py-3 border-2 rounded-lg mt-8 sm:w-full md:mt-8" placeholder="Sport" />
      </div>
    </div>
    <div><img src="../../assets/GQ_50Greatest_final_v2.webp" class="hidden sm:block"></div>
  </v-main>
</template>

<script>
export default {

  data() {
    return {
      isRegistered: false,
    }
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const registrationSuccess = urlParams.get('registrationSuccess');
    if (registrationSuccess === 'true') {
      this.isRegistered = true;
      setTimeout(() => {
        this.isRegistered = false;
      }, 4000); // 4 seconds delay before hiding the success message
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
