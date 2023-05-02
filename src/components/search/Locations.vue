<template>
  <div class="ml-6 info-div w-full">
    <div v-for="item in locations" :key="item.id">
      <div class="flex my-5">
        <img
          class="bar-pics"
          :src="
            this.barImages[Math.floor(Math.random() * this.barImages.length)]
          "
        />
        <div class="flex flex-col ml-6 max-w-lg text-left justify-between">
          <h1 class="text-xl">
            <router-link
              :to="{ 
                name: 'details',
                params: {
                  site: 'locations',
                  itemId: item.id,
                  name: item.name,
                  imgId: imgIdGenerator,
                },
              }"
              >{{ item.name }}</router-link
            >
          </h1>
          <p>{{ $t("message.location") }}: {{ item.location }}</p>
          <p>{{ $t("message.capacity") }}: {{ item.capacity }}</p>
          <div
            v-if="!item.shows == 0 || !undefined || !null"
            class="mt-4 flex flex-col"
          >
            <h1>{{ $t("message.events") }}</h1>
            <span class="" v-for="show in item.shows" :key="show.id"
              >{{ show.title }} -> {{ show.startTime }} to
              {{ show.endTime }}</span
            >
          </div>
          <p class="mt-6">{{ item.description }}</p>
        </div>
      </div>
      <div class="half-border"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapGetters } from 'vuex';
import axios from "axios";
export default {
  name: "Locations",
  data() {
    return {
      barImage: null,
      barImages: [],
      locations: [],
    };
  },
  components: {},

  computed: {
    // ...mapGetters(['getLocations'])
    imgIdGenerator() {
      return this.barImages[Math.floor(Math.random() * this.barImages.length)]
        .split("/")
        .pop()
        .split(".")[0]
        .match(/\d+/g)
        .join("");
    },
  },
  mounted() {
    const url = "https://api.pexels.com/v1/search?query=bars&per_page=10";
    const headers = {
      Authorization: "EFTaasXudZUUEnYShrSLly4gWnBbS6AP5HbxNlkmGz5B4G6RXRsr52Yx",
    };
    const storedData = localStorage.getItem("locationSearch");
    if (storedData) {
      this.locations = JSON.parse(storedData);
      console.log(this.locations);
    }
    try {
      axios.get(url, { headers }).then((response) => {
        const photos = response.data.photos;
        console.log(photos);
        this.barImages = photos.map((photo) => photo.src.large);
        localStorage.setItem("images", JSON.stringify(photos));
        this.barImage =
          this.barImages[Math.floor(Math.random() * this.barImages.length)];
      });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    selectedImageId(urlImage) {
      const url = urlImage;
      const numberMatcher = /\d+/g;
      const numbers = url.match(numberMatcher);
      const desiredNumbers = numbers[0];
      return desiredNumbers;
    },
  },
  // beforeUnmount() {
  //   localStorage.removeItem("locationSearch");
  // },
};
</script>
<style>
.bar-pics {
  height: 15rem;
  width: 20rem;
}

.half-border {
  position: relative;
  height: 30px;
}
.info-div {
  overflow-y: auto;
  position: fixed;
  top: 6rem;
  bottom: 12rem;
}
.half-border::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(-50%);
  height: 1px;
  width: 100%;
  background-color: rgb(156, 151, 151);
}
</style>
