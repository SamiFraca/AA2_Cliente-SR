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
          >
            Update
          </button>
          <button class="bg-red-500 text-white px-4 rounded-md hover:bg-red-700 py-2">Cancel</button>
        </div>
      </div>
      <br />
    </form>
  </div>
  <!-- <button
          class="bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded flex mx-auto"
          type="submit"
          @click="CreateBarRequest"
        >
          {{ $t("message.create") }}
        </button> -->
</template>
<script>
import axios from "axios";
export default {
  name: "CreateBarPopup",
  data() {
    return {
      Name: "",
      Location: "",
      City: "",
      close: false,
      Address: "",
      Country: "",
      file: null,
    };
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
    async CreateBarRequest() {
      const formData = new FormData();
      const userId = localStorage.getItem("userId");

      if (this.file) {
        formData.append("imageFile", this.file);
      } else {
        formData.append("imageFile", "null");
      }
      // Append the form fields
      const result = [this.Address, this.City, this.Country].join(", ");
      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }
      try {
        await axios.post(
          `https://watchmeapi-test.azurewebsites.net/Bars?name=${this.Name}&location=${result}&capacity=0&description=none&userId=${userId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.Close();
        location.reload();
      } catch (error) {
        console.error(error); // Handle the error
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
