<template>
  <nav
    class="h-24 items-center flex justify-center justify-between mx-4 sticky border-b border-header-border"
  >
    <div class="justify-center flex items-center">
      <svg
        @click="this.$router.push('/')"
        class="cursor-pointer"
        width="164"
        height="38"
        viewBox="0 0 104 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_2)">
          <path
            d="M32.896 18L30.416 6.8H32.8L34.32 14.384L36.496 6.8H38.688L40.864 14.368L42.384 6.8H44.688L42.224 18H39.776L37.568 10.192L35.328 18H32.896ZM48.1506 18.144C47.5533 18.144 47.0253 18.0373 46.5666 17.824C46.108 17.6 45.7506 17.296 45.4946 16.912C45.2386 16.528 45.1106 16.0853 45.1106 15.584C45.1106 14.784 45.4093 14.1653 46.0066 13.728C46.6146 13.28 47.4466 13.056 48.5026 13.056C49.228 13.056 49.9106 13.168 50.5506 13.392V12.784C50.5506 12.304 50.4013 11.9413 50.1026 11.696C49.804 11.4507 49.3666 11.328 48.7906 11.328C48.4386 11.328 48.06 11.3867 47.6546 11.504C47.2493 11.6107 46.78 11.7813 46.2466 12.016L45.4466 10.4C46.108 10.1013 46.7373 9.87733 47.3346 9.728C47.9426 9.57867 48.5506 9.504 49.1586 9.504C50.2786 9.504 51.148 9.776 51.7666 10.32C52.396 10.8533 52.7106 11.6107 52.7106 12.592V18H50.5506V17.408C50.2093 17.664 49.8413 17.8507 49.4466 17.968C49.052 18.0853 48.62 18.144 48.1506 18.144ZM47.1906 15.536C47.1906 15.856 47.3293 16.112 47.6066 16.304C47.884 16.4853 48.252 16.576 48.7106 16.576C49.0733 16.576 49.4093 16.5333 49.7186 16.448C50.028 16.352 50.3053 16.2133 50.5506 16.032V14.816C50.284 14.7093 50.0066 14.6293 49.7186 14.576C49.4306 14.5227 49.1213 14.496 48.7906 14.496C48.2893 14.496 47.8946 14.592 47.6066 14.784C47.3293 14.9653 47.1906 15.216 47.1906 15.536ZM58.3273 18.128C57.3992 18.128 56.6952 17.92 56.2152 17.504C55.7459 17.0773 55.5112 16.4587 55.5112 15.648V11.488H53.7992V9.664H55.5112V7.536L57.7032 7.04V9.664H60.0872V11.488H57.7032V15.2C57.7032 15.584 57.7886 15.8613 57.9592 16.032C58.1299 16.192 58.4286 16.272 58.8552 16.272C59.0686 16.272 59.2606 16.2613 59.4312 16.24C59.6126 16.208 59.8099 16.1547 60.0232 16.08V17.888C59.7992 17.9627 59.5166 18.0213 59.1752 18.064C58.8446 18.1067 58.5619 18.128 58.3273 18.128ZM65.2867 18.16C64.4654 18.16 63.7241 17.9733 63.0627 17.6C62.4014 17.216 61.8787 16.6987 61.4947 16.048C61.1107 15.3867 60.9187 14.6507 60.9187 13.84C60.9187 13.0187 61.1107 12.2827 61.4947 11.632C61.8787 10.9813 62.4014 10.464 63.0627 10.08C63.7241 9.696 64.4654 9.504 65.2867 9.504C65.9481 9.504 66.5774 9.632 67.1747 9.888C67.7827 10.144 68.3054 10.512 68.7428 10.992L67.3987 12.416C67.0894 12.0747 66.7641 11.824 66.4227 11.664C66.0921 11.4933 65.7294 11.408 65.3347 11.408C64.9081 11.408 64.5241 11.5147 64.1827 11.728C63.8521 11.9413 63.5854 12.2293 63.3827 12.592C63.1907 12.9547 63.0947 13.3707 63.0947 13.84C63.0947 14.288 63.1907 14.6987 63.3827 15.072C63.5854 15.4347 63.8627 15.7227 64.2147 15.936C64.5667 16.1387 64.9561 16.24 65.3827 16.24C65.7561 16.24 66.1027 16.1653 66.4227 16.016C66.7534 15.856 67.0681 15.6213 67.3667 15.312L68.6788 16.688C68.2521 17.1467 67.7401 17.5093 67.1427 17.776C66.5454 18.032 65.9267 18.16 65.2867 18.16ZM70.0584 18V6.8L72.2504 6.32V10.352C72.8797 9.78667 73.6584 9.504 74.5864 9.504C75.237 9.504 75.8077 9.648 76.2984 9.936C76.7997 10.2133 77.189 10.6027 77.4664 11.104C77.7437 11.5947 77.8824 12.1707 77.8824 12.832V18H75.6904V13.152C75.6904 12.608 75.5357 12.1813 75.2264 11.872C74.917 11.552 74.4957 11.392 73.9624 11.392C73.589 11.392 73.2584 11.4667 72.9704 11.616C72.6824 11.7547 72.4424 11.9573 72.2504 12.224V18H70.0584Z"
            fill="#171717"
          />
          <path
            d="M79.9268 18V6.8H82.9028L85.9748 12.848L89.0468 6.8H92.0228V18H89.8308V9.76L85.9428 17.2L82.0708 9.728V18H79.9268ZM94.2761 18V6.8H102.884V8.816H96.5961V11.376H100.74V13.328H96.5961V15.984H102.948V18H94.2761Z"
            fill="#057CBE"
          />
          <path
            d="M5.38 5.38C3.252 7.51 2.387 10.574 2.11 13.457M2.11 13.457C1.97149 14.9909 1.9638 16.5338 2.087 18.069C2.15522 19.066 2.58212 20.0046 3.28876 20.7112C3.9954 21.4179 4.93399 21.8448 5.931 21.913C7.263 22.015 8.873 22.05 10.543 21.89M2.11 13.457L10.543 21.89M13.457 2.11C15.127 1.95 16.737 1.985 18.069 2.087C19.066 2.15522 20.0046 2.58212 20.7112 3.28876C21.4179 3.9954 21.8448 4.93399 21.913 5.931C22.0363 7.4662 22.0286 9.00911 21.89 10.543L13.457 2.11ZM13.457 2.11C11.968 2.253 10.431 2.553 9 3.102M21.89 10.542C21.613 13.426 20.748 16.491 18.62 18.619M10.543 21.89C12.032 21.747 13.569 21.447 15 20.898M15.31 8.69L8.69 15.31M8.69 12.473L11.527 15.31M10.582 10.582L13.418 13.418M12.473 8.69L15.31 11.527"
            stroke="#171717"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="104" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div
      class="relative"
      :class="{ 'shake border border-red-600 rounded-md': searchError }"
    >
      <input
        type="text"
        placeholder="Search establishments...."
        class="px-2 py-2 border-b w-64 hidden md:block"
        :class="{ 'border-red-600': searchError,'border-logo-color':!searchError }"
        v-model="this.barName"
        @keyup.enter="SearchBarNameRequest"
      />
      <i
        class="search-icon absolute right-0 top-2/4 transform -translate-y-2/4 mr-2 cursor-pointer py-2 px-2"
        @click="SearchBarNameRequest"
      ></i>
    </div>
    <div
      v-if="!this.token"
      class="justify-center flex justify-between p-8 sm:inline-block"
    >
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
    <div
      v-else
      class="justify-center flex justify-between p-8 sm:inline-block "
    >
      <div
        class="dropdown lg:mr-8 text-start"
        @click="toggleDropdown = !toggleDropdown"
        ref="dropdown"
      >
        <png><img src="../../assets/dropdown.png" /></png>
        <div
          v-if="toggleDropdown"
          class="dropdown-content text-left lg:min-width"
          ref="dropdownContent"
        >
          <router-link
            :to="{
              name: 'Account',
              params: {
                itemId: this.userId,
              },
            }"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-700 mr-4"
          >
            {{ $t("message.account") }}
          </router-link>
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
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  margin-left: -16px;
  margin-top: 4px;
  border-radius: 4px;
}

.active {
  display: block;
}
</style>
<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      token: null,
      isMobile: false,
      userId: null,
      toggleDropdown: false,
      barName: "",
      searchError: false,
    };
  },
  mounted() {
    this.token = JSON.parse(sessionStorage.getItem("token"));
    window.addEventListener("click", this.closeDropdown);
    this.isMobile = this.isMobileTrigger;
    window.addEventListener("resize", this.resize);
    const currentUserID = localStorage.getItem("userId");
    this.userId = currentUserID;
    console.log(this.userId);
  },
  computed: {
    ...mapGetters(["getUserId"]),
  },
  methods: {
    getUserIdentity() {
      return this.userId;
    },
    isToken() {
      if (this.token) {
        return (this.isMobile = true);
      }
    },
    closeSession() {
      if (this.token != null) {
        this.token = null;
        sessionStorage.removeItem("token");
      }
    },
    async SearchBarNameRequest() {
      const nameQuery = this.barName;
      try {
        await this.$store.dispatch("getBarByName", nameQuery);
        this.bar = this.$store.state.bar;
      } catch (error) {
        this.searchError = true;
        console.log(error);
      }
    },
  },
};
</script>

<style>
.search-icon {
  content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gMjEgMyBDIDExLjYyMTA5NCAzIDQgMTAuNjIxMDk0IDQgMjAgQyA0IDI5LjM3ODkwNiAxMS42MjEwOTQgMzcgMjEgMzcgQyAyNC43MTA5MzggMzcgMjguMTQwNjI1IDM1LjgwNDY4OCAzMC45Mzc1IDMzLjc4MTI1IEwgNDQuMDkzNzUgNDYuOTA2MjUgTCA0Ni45MDYyNSA0NC4wOTM3NSBMIDMzLjkwNjI1IDMxLjA2MjUgQyAzNi40NjA5MzggMjguMDg1OTM4IDM4IDI0LjIyMjY1NiAzOCAyMCBDIDM4IDEwLjYyMTA5NCAzMC4zNzg5MDYgMyAyMSAzIFogTSAyMSA1IEMgMjkuMjk2ODc1IDUgMzYgMTEuNzAzMTI1IDM2IDIwIEMgMzYgMjguMjk2ODc1IDI5LjI5Njg3NSAzNSAyMSAzNSBDIDEyLjcwMzEyNSAzNSA2IDI4LjI5Njg3NSA2IDIwIEMgNiAxMS43MDMxMjUgMTIuNzAzMTI1IDUgMjEgNSBaIi8+PC9zdmc+");
  width: 40px;
}
.search-icon:active {
  background-color: #057cbe;
}
</style>
