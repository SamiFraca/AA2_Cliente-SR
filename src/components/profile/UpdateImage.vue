<template>
  <div
    class="bg-white w-full h-full sm:h-auto sm:w-auto relative rounded-lg flex justify-center items-center flex-col"
  >
    <span
      class="cancel-icon flex self-end mr-8 mt-4 cursor-pointer"
      @click="Close"
    ></span>

    <form @submit.prevent="create">
      <div class="mt-4 flex flex-col">
        <h3 class="mb-8">Upload a new image for your bar</h3>
        <input
          type="file"
          ref="fileInput"
          class="px-4"
          accept=".jpg, .jpeg, .png"
          @change="handleFileChange"
        />
        <div class="mt-8 flex gap-4 justify-center">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            @click="updateImageRequest"
          >
            Update
          </button>
          <button
            class="bg-red-500 text-white px-4 rounded-md hover:bg-red-700 py-2"
            @click="Close"
          >
            Cancel
          </button>
        </div>
      </div>
      <br />
    </form>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  name: "CreateBarPopup",
  data() {
    return {
      close: false,
      file: null,
      barId:null
    };
  },
  created(){
    const route = useRoute();
    const barId = route.params.barId;
    this.barId = barId;
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
    },
    Close() {
      this.close = false;
      const closeValue = this.close;
      console.log(this.close);
      this.$emit("close-event", closeValue);
    },
    async updateImageRequest() {
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        await this.$store.dispatch("UpdateImage", {
          formData,
          barId: this.barId,
        });
        this.Close()
        location.reload()
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
