<template>
  <div class="ml-6">
    <div v-for="item in sports" :key="item.id">
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
                  site: 'sports',
                  itemId: item.id,
                  name: item.name,
                  imgId: imgIdGenerator,
                },
              }"
              >{{ item.name }}</router-link
            >
          </h1>
          <p>{{ $t("message.location") }} {{ item.location }}</p>
          <p>{{ $t("message.capacity") }} {{ item.capacity }}</p>
          <span></span>
          <div
            v-if="!item.shows == 0 || !undefined || !null"
            class="mt-4 flex flex-col"
          >
            <h1>{{ $t("message.events") }}</h1>
            <span class="" v-for="show in item.shows" :key="show.id"
              >{{ show.title }}, {{ show.sport }} -> {{ show.startTime }} to
              {{ show.endTime }}
            </span>
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
  computed: {
    imgIdGenerator() {
      return this.barImages[Math.floor(Math.random() * this.barImages.length)]
        .split("/")
        .pop()
        .split(".")[0]
        .match(/\d+/g)
        .join("");
    },
  },
  data() {
    return {
      barImages: [],
      sports: [],
      barImage: null,
    };
  },
  components: {},
  mounted() {
    const url = "https://api.pexels.com/v1/search?query=bars&per_page=10";
    const headers = {
      Authorization: "EFTaasXudZUUEnYShrSLly4gWnBbS6AP5HbxNlkmGz5B4G6RXRsr52Yx",
    };
    const storedData = localStorage.getItem("sportSearch");
    if (storedData) {
      this.sports = JSON.parse(storedData);
      console.log(this.sports);
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
