<template>
  <div class="flex flex-col md:flex-row">
    <SideMenu activeLink="reports" />
    <div class="flex flex-col w-full">
      <div
        class="flex w-full justify-center md:justify-end items-center md: md:mt-16 mb-16 md:mb-0 md:pr-16"
      >
        <select
          v-model="selectedFilter"
          class="md:mr-8 border px-2 py-2 rounded-md border-blue-500"
        >
          <option value="0" selected="selected">Select an option</option>
          <option value="AName">Name A-Z</option>
          <option value="ZName">Name Z-A</option>
          <option value="HighestMaxCap">Highest maximum capacity</option>
          <option value="LowestMaxCap">Lowest maximum capacity</option>
          <option value="HighestActualCap">Highest actual capacity</option>
          <option value="LowestActualCap">Lowest actual capacity</option>
        </select>
      </div>
      <div class="mx-auto md:ml-16 max-w-5xl w-full">
        <h1 class="align-start text-left mb-4 w-1/2">
          This chart portrayes a general view for the maximum bar capacity of
          all the actual shows combined for that specific establishment and compares with
          the quantity of people who have booked for a show.
        </h1>
        <canvas class="chart-canvas" ref="chartCanvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Chart from "chart.js/auto";
import SideMenu from "@/components/profile/SideMenu.vue";

export default {
  data() {
    return {
      bars: null,
      selectedFilter: "0",
    };
  },
  components: { SideMenu },
  methods: {},
  async created() {
    const route = useRoute();
    const userId = route.params.itemId;
    try {
      await this.$store.dispatch("getBars", userId);
      this.bars = this.$store.state.bars;

      const getCapacities = this.bars.map((item) =>
        item.shows.map((show) => show)
      );
      var MaxCap = [];
      var actualCap = [];
      getCapacities.forEach((element) => {
        const maxCapSum = element
          .map((item) => item.maxCap)
          .reduce((a, b) => a + b, 0);
        MaxCap.push(maxCapSum);

        const actualCapSum = element
          .map((item) => item.actualCap)
          .reduce((a, b) => a + b, 0);
        actualCap.push(actualCapSum);
      });
      const data = getCapacities.map((element, index) => {
        return {
          value1: MaxCap[index],
          value2: actualCap[index],
        };
      });

      const labels = this.bars.map((item) => item.name);

      const values1 = data.map((item) => item.value1);
      const values2 = data.map((item) => item.value2);

      if (this.selectedFilter === "AName") {
        this.bars.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.selectedFilter === "ZName") {
        this.bars.sort((a, b) => b.name.localeCompare(a.name));
      } else if (this.selectedFilter === "HighestMaxCap") {
        this.bars.sort((a, b) => a.maxCap - b.maxCap);
      } else if (this.selectedFilter === "LowestMaxCap") {
        this.bars.sort((a, b) => b.maxCap - a.maxCap);
      } else if (this.selectedFilter === "LowestActualCap") {
        this.bars.sort((a, b) => a.actualCap - b.actualCap);
      } else if (this.selectedFilter === "HighestActualCap") {
        this.bars.sort((a, b) => b.actualCap - a.actualCap);
      }

      const ctx = this.$refs.chartCanvas.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Maximum Capacity",
              data: values1,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
            {
              label: "Actual Capacity",
              data: values2,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style></style>
