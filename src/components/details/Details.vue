<template>
  <div class="max-w-5xl mx-auto flex mt-8 text-left">
    <img
      :src="this.retrievedInfo.imageUrl"
      class="w-full object-cover rounded-md bar-pics"
    />
    <div class="ml-8 flex flex-col gap-4 w-full">
      <h2 class="text-xl font-semibold">{{ this.retrievedInfo.name }}</h2>
      <p>Location: {{ this.retrievedInfo.location }}</p>
      <p>Capacity: {{ this.retrievedInfo.capacity }}</p>
      <p>{{ this.retrievedInfo.description }}</p>
      <h2 class="text-lg font-medium border-b pb-2">Shows</h2>
      <div v-if="this.retrievedInfo.shows.length > 0">
        <div
          v-for="shows in this.retrievedInfo.shows"
          :key="shows.id"
          class="flex flex-col gap-4 border p-4 rounded-md mb-4"
        >
          <h2 class="text-lg text-black">{{ shows.title }}</h2>
          <h2 class="text-md text-black">Schedule</h2>
          <p class="text-md text-black">
            From <span class="font-medium">{{ shows.startTime }}</span> to
            <span class="font-medium">{{ shows.startTime }}</span>
          </p>
          <p>Maximum capacity: {{ shows.maxCap }}</p>
          <p>Remaining capacity: {{ shows.maxCap - shows.actualCap }}</p>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4 w-24"
            @click="updateActualCapRequest(shows.id)"
          >
            Reserve
          </button>
        </div>
      </div>
      <div v-else>No shows available</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      retrievedInfo: [],
      name: "",
      errorCapacity: false,
    };
  },
  methods: {
    async updateActualCapRequest(updateShowId) {
      const actualCap = this.retrievedInfo.actualCap + 1;
      const showId = updateShowId;
      if (actualCap > this.retrievedInfo.maxCap || !showId) {
        this.errorCapacity = true;
        return false;
      } else {
        const patchOperation = [
          {
            op: "replace",
            path: "/actualCap",
            value: actualCap,
          },
        ];
        try {
          await this.$store.dispatch("UpdateActualCap", {
            patchOperation,
            showId,
          });
          console.log("yuju");
        } catch (error) {
          this.searchError = true;
          console.log(error);
        }
      }
    },
  },

  created() {
    if (window.location.href.indexOf("locations") > -1) {
      const locationSearch = localStorage.getItem("locationSearch");
      const locations = JSON.parse(locationSearch);
      const filterLocation = locations.filter(
        (location) => location.id === parseInt(this.$route.params.itemId)
      );
      this.retrievedInfo = filterLocation[0];
      console.log(this.retrievedInfo.shows.length);
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
      console.log(this.retrievedInfo.shows.length);
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@600&display=swap");

h1 {
  font-family: "Mukta", sans-serif;
}
.bar-pics {
  height: 15rem;
  width: 20rem;
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
