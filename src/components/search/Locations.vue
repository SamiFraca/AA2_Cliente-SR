<template>
  <div class="ml-6 info-div w-full">
    <div v-for="item in locations" :key="item.id">
      <div class="flex my-5">
        <img
          class="bar-pics"
          :src="barImages[Math.floor(Math.random() * barImages.length)]"
        />
        <div class="flex flex-col ml-6 max-w-lg text-left justify-between">
          <h1 class="text-xl">{{ item.name }}</h1>
          <p>Location: {{ item.location }}</p>
          <p>Capacity: {{ item.capacity }}</p>
          <div
            v-if="!item.shows == 0 || !undefined || !null"
            class="mt-4 flex flex-col"
          >
            <h1>Shows:</h1>
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
        console.log(this.barImages);
      });
    } catch (error) {
      console.log(error);
    }
  },
  beforeUnmount() {
    localStorage.removeItem("locationSearch");
  },
};
</script>
