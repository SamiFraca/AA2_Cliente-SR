<template>
    <div
        class="dropdown lg:mr-8 text-start"
        @click.prevent="toggleDropdown()"
        ref="dropdown"
      >
        <png><img src="../../assets/dropdown.png" /></png>
        <div
          class="dropdown-content text-left lg:min-width"
          ref="dropdownContent"
        >
          <router-link
            to="/login"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-700 mr-4"
          >
            {{ $t("message.login") }}
          </router-link>
          <router-link
            to="/signin"
            class="block mt-4 lg:inline-block lg:mt-2 text-gray-400 hover:text-gray-700 mr-4"
          >
            {{ $t("message.signin") }}
          </router-link>
        </div>
      </div>
  </template>
  <style>
  .logo {
    cursor: pointer;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  
  .dropdown-content {
    position: absolute;
    z-index: 1;
    display: none;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    margin-left: -16px;
    margin-top: 4px;
    border-radius: 4px;
  }
  @media screen and (min-width: 780px) {
    .dropdown-content {
      min-width: 180px;
    }
  }
  .active {
    display: block;
  }
  </style>
  <script>
  export default {
    data() {
      return {
        token: null,
      };
    },
    mounted() {
      this.token = JSON.parse(sessionStorage.getItem("token"));
      window.addEventListener("click", this.closeDropdown);
    },
    methods: {
      toggleDropdown() {
        this.$refs.dropdownContent.classList.toggle("active");
      },
      closeDropdown(event) {
        if (!this.$refs.dropdown.contains(event.target)) {
          this.$refs.dropdownContent.classList.remove("active");
        }
      },
    },
  };
  </script>
  
  <style></style>
  