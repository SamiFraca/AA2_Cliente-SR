<template>
  <div class="ml-6">
    <div class="flex justify-between mt-8">
      <h1 class="text-2xl text-left">
        Results found for {{ this.searchquery }}
      </h1>
      <select
        v-model="selectedFilter"
        class="mr-8 border px-2 py-2 rounded-md border-blue-500"
      >
        <option value="0" selected="selected">Select an option</option>
        <option value="AName">Name A-Z</option>
        <option value="ZName">Name Z-A</option>
        <option value="LowCapacity">Low Capacity</option>
        <option value="HighCapacity">High Capacity</option>
      </select>
    </div>
    <div v-for="item in filteredItems" :key="item.id">
      <div class="flex my-5 md:flex-row flex-col rounded-md shadow-sm mb-6 bg-white">
        <img class="bar-pics" :src="item.imageUrl" />
        <div class="flex flex-col ml-6 max-w-lg text-left justify-between mt-8 md:mt-0">
          <h1 class="text-xl">
            <router-link
              :to="{
                name: 'details',
                params: {
                  site: 'sports',
                  itemId: item.id,
                  name: item.name,
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
              >{{ show.title }}, {{ show.sport }} ->
              <span class="font-bold">{{ show.startTime }}</span> to
              <span class="font-bold"> {{ show.endTime }}</span>
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
import { useRoute } from "vue-router";
export default {
  name: "Sports",
  data() {
    return {
      sports: [],
      searchquery: "",
      selectedFilter: "0",
    };
  },
  components: {},
  computed: {
    filteredItems() {
      const filtered = [...this.sports];
      console.log(filtered);
      if (this.selectedFilter == "0") {
        return this.sports;
      }
      if (this.selectedFilter !== "0") {
        if (this.selectedFilter === "AName") {
          return filtered.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (this.selectedFilter === "ZName") {
          return filtered.sort((a, b) => b.name.localeCompare(a.name));
        }
        if (this.selectedFilter === "LowCapacity") {
          return filtered.sort((a, b) => a.capacity - b.capacity);
        }
        if (this.selectedFilter === "HighCapacity") {
          return filtered.sort((a, b) => b.capacity - a.capacity);
        }
      }
      return this.items;
    },
  },
  mounted() {
    const route = useRoute();
    this.searchquery = route.params.searchquery;
    const storedData = localStorage.getItem("sportSearch");
    if (storedData) {
      this.sports = JSON.parse(storedData);
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
