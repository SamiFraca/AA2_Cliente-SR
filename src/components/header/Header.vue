<template>
  <nav
    class="h-24 items-center flex justify-center justify-between mx-4 sticky"
  >
    <div class="justify-center flex items-center">
      <img
        src="../../assets/logo.png"
        style="height: 4rem"
        class="logo"
        @click="this.$router.push('/')"
      />
    </div>

    <div
      v-if="!this.token"
      class="justify-center flex justify-between p-8 hidden sm:inline-block"
    >
      <div v-if="isMobile">
       <MobileNotLogged />
      </div>
      <div v-else>
        <router-link
          to="/login"
          class="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
        >
          {{ $t("message.logIn") }}</router-link
        >
        <!-- <button class="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"> -->
        <router-link
          to="/sign"
          class="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
          >{{ $t("message.signIn") }}
        </router-link>
      </div>
    </div>
    <div v-else class="justify-center flex justify-between p-8 sm:inline-block">
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
            to="/about"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-700 mr-4"
          >
            {{ $t("message.account") }}
          </router-link>
          <!-- <router-link
            to="/contact"
            class="block mt-8 lg:inline-block lg:mt-2 text-gray-400 hover:text-white mr-4"
          >
            Contact
          </router-link> -->
          <router-link
            to="/"
            class="block mt-4 lg:inline-block lg:mt-2 text-gray-400 hover:text-gray-700 mr-4"
            @click="closeSession()"
          >
            {{ $t("message.closeSession") }}
          </router-link>
        </div>
      </div>
    </div>
    <!-- <div class="self-center mr-8 sm:hidden">
      <png><img src="../../assets/dropdown.png" /></png>
    </div> -->
  </nav>
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
import MobileNotLogged from "./MobileNotLogged.vue"
export default {
  components:{
    MobileNotLogged
  },
  data() {
    return {
      token: null,
      isMobile: false,
    };
  },
  mounted() {
    this.token = JSON.parse(sessionStorage.getItem("token"));
    window.addEventListener("click", this.closeDropdown);
    this.isMobile = this.isMobileTrigger;
    window.addEventListener("resize", this.resize);
  },
  computed: {
    isMobileTrigger() {
      console.log(window.innerWidth)
      return window.innerWidth <= 780;
    },
  },
  methods: {
    toggleDropdown() {
      this.$refs.dropdownContent.classList.toggle("active");
    },
    closeSession(){
     if(this.token != null){
      this.token = null;
      sessionStorage.removeItem("token");
     }
    },
    closeDropdown(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.$refs.dropdownContent.classList.remove("active");
      }
    },
    resize(){
      this.isMobile = this.isMobileTrigger;
      console.log(this.isMobileTrigger)
    }
  },
};
</script>

<style></style>
