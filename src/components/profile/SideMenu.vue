<template>
  <div
    class="md:flex md:flex-col md:p-4 md:px-10 md:shadow-sm md:border-r md:border-logo-border-sidebar"
  >
    <ul class="flex md:flex-col justify-center mt-6 md:mb-0 mb-16 gap-4 md:gap-0">
      <li class="md:mb-6">
        <template v-if="userId">
          <router-link
            :to="{
              name: 'Account',
              params: {
                itemId: this.userId,
              },
            }"
            :class="{
              'active-link mr-4 md:mr-0 border-r-2 md:border-r-0 border-gray-400 md:border-logo-color pr-2 pl-2 md:pr-0':
                activeLink === 'account',
            }"
            class="text-m font-medium"
          >
            Account
          </router-link>
        </template>
      </li>
      <li v-if="userData.isAdmin">
        <a
          href="#"
          :class="{
            'active-link mr-4 md:mr-0 border-l-2 pr-0 md:pl-2  border-gray-400 md:border-logo-color pl-2  md:ml-0':
              activeLink === 'admin',
          }"
          class="text-m font-medium"
        >
          <router-link
            :to="{
              name: 'admin',
              params: {
                itemId: this.userId,
              },
            }"
            >Admin</router-link
          >
        </a>
      </li>
      <li v-if="userData.isAdmin" class="md:mt-6">
        <a
          href="#"
          :class="{
            'active-link mr-4 md:mr-0 border-l-2 pr-0 md:pl-2  border-gray-400 md:border-logo-color pl-2  md:ml-0':
              activeLink === 'reports',
          }"
          class="text-m font-medium mt-10"
        >
          <router-link
            :to="{
              name: 'Reports',
              params: {
                itemId: this.userId,
              },
            }"
            >Reports</router-link
          >
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    activeLink: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      userId: null,
      tokenObject: null,
      userData: {
        username: localStorage.getItem("username") || "",
      },
      isLoading: true,
    };
  },
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
        console.log(this.isLoading);
      }
    } else {
      this.sessionStorage.removeItem("token");
      this.$router.push("/login");
    }
  },
};
</script>

<style>
.active-link {
  font-size: 1rem; /* text-m */
  font-weight: 500; /* font-medium */
  padding-left: 0.5rem; /* px-2 */
  color: #057cbe;

  /* Media Query for medium screens and larger (min-width: 768px) */
  @media (min-width: 768px) {
    border-left-width: 2px;
    border-color: #3b82f6; /* md:border-blue-500 */
  }

  background-color: #fff; /* bg-white */

  /* Add any other styles for the active link state */
  border-radius: 0; /* rounded-none */
}
active-link:hover {
  color: #057cbe;
}
</style>
