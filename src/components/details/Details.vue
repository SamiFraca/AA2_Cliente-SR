<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      :src="imageSrc"
      class="h-64 w-full object-cover rounded-t-lg shadow-lg"
    />
    <div class="p-4">
      <h2 class="text-xl font-semibold">{{ this.retrievedInfo.name }}</h2>
      <p class="text-gray-600">{{ this.retrievedInfo.location }}</p>
      <p class="text-gray-600">Capacity: {{ this.retrievedInfo.capacity }}</p>
      <p class="text-gray-600">{{ this.retrievedInfo.description }}</p>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
      >
        Reserve
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4 ml-2"
      >
        Food
      </button>
    </div>
  </div>
</template>

<script>
// import { tsThisType } from '@babel/types';
// import { filter } from 'minimatch';

export default {
  name: "details",
  computed: {
    imageSrc() {
      const imgArray = JSON.parse(localStorage.getItem("images"));
      const extractImage = imgArray.filter(
        (url) => url.id === parseInt(this.$route.params.imgId)
      );
      const ImageSrc = extractImage[0].src.large;
      return ImageSrc;
    },
  },
  mounted() {
    if (window.location.href.indexOf("locations") > -1) {
      const locationSearch = localStorage.getItem("locationSearch");
      const locations = JSON.parse(locationSearch);
      const filterLocation = locations.filter(
        (location) => location.id === parseInt(this.$route.params.itemId)
      );
      this.retrievedInfo = filterLocation[0];
      console.log(this.retrievedInfo);
    }
    if (window.location.href.indexOf("sports") > -1) {
      const nameSearch = localStorage.getItem("sportSearch");
      const locations = JSON.parse(nameSearch);
      const filterLocation = locations.filter(
        (location) => location.id === parseInt(this.$route.params.itemId)
      );
      this.retrievedInfo = filterLocation[0];
      console.log(this.retrievedInfo);
    }
    if (window.location.href.indexOf("names") > -1) {
      const nameSearch = localStorage.getItem("nameSearch");
      const locations = JSON.parse(nameSearch);
      const filterLocation = locations.filter(
        (location) => location.id === parseInt(this.$route.params.itemId)
      );
      this.retrievedInfo = filterLocation[0];
      console.log(this.retrievedInfo);
    }
    console.log(this.imageSrc);
  },
  data() {
    return {
      retrievedInfo: [],
      name: "",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@600&display=swap");

h1 {
  font-family: "Mukta", sans-serif;
}

.rounded-lg {
  border-radius: 1rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.mt-8 {
  margin-top: 2rem;
}
</style>
