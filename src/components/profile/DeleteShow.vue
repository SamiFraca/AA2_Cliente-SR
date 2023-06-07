<template>
  <div
    class="bg-white w-full h-full sm:w-width-delete sm:h-48 relative rounded-lg flex justify-center items-center flex-col"
  >
    <span
      class="cancel-icon flex self-end mr-8 cursor-pointer"
      @click="Close"
    ></span>

    <form @submit.prevent="deleteBar">
      <div class="flex flex-col justify-center">
        <h1 class="text-center">
          Are you sure you want to delete
          <span class="underline">{{ this.show.title }}</span> show?
        </h1>
        <br />
      </div>
      <div class="flex gap-4">
        <button
          class="bg-red-700 hover:bg-red-900 text-white font-bold px-4 py-2 rounded flex mx-auto"
          type="submit"
          @click="DeleteShowRequest"
        >
          {{ $t("message.delete") }}
        </button>
        <button
          class="bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded flex mx-auto"
          type="submit"
          @click="Close"
        >
          {{ $t("message.cancel") }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "CreateBarPopup",
  data() {
    return {};
  },
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  mounted() {},
  methods: {
    Close() {
      this.close = false;
      const closeValue = this.close;
      console.log(this.close);
      this.$emit("close-event-delete", closeValue);
    },
    async DeleteShowRequest() {
        const showId = this.show.id;
        console.log(showId)
      try {
        if (showId) {
          await this.$store.dispatch("deleteShow", showId);
          location.reload();
        } else {
          console.log(`Show with ID ${showId} not found.`);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.cancel-icon {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gNy43MTg3NSA2LjI4MTI1IEwgNi4yODEyNSA3LjcxODc1IEwgMjMuNTYyNSAyNSBMIDYuMjgxMjUgNDIuMjgxMjUgTCA3LjcxODc1IDQzLjcxODc1IEwgMjUgMjYuNDM3NSBMIDQyLjI4MTI1IDQzLjcxODc1IEwgNDMuNzE4NzUgNDIuMjgxMjUgTCAyNi40Mzc1IDI1IEwgNDMuNzE4NzUgNy43MTg3NSBMIDQyLjI4MTI1IDYuMjgxMjUgTCAyNSAyMy41NjI1IFoiLz48L3N2Zz4=");
  content: "";
  display: inline-block;
  background-size: 40px 25px;
  width: 40px;
  background-repeat: no-repeat;
  height: 40px;
}
</style>
