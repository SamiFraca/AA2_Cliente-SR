<template>
  <div class="max-w-5xl flex flex-col mx-auto items-start">
    <p
      v-if="!editMode.name"
      @click="enableEditMode('name')"
      class="text-5xl font-semibold mt-8 py-2 edit-icon"
    >
      {{ this.bar.name }}
    </p>
    <input
      v-else
      ref="nameInput"
      v-model="this.bar.name"
      @blur="disableEditMode('name')"
      @keyup.enter="disableEditMode('name')"
      class="text-5xl font-semibold mt-8"
    />
    <div class="flex flex-row mt-8 items-start w-full">
      <div class="flex flex-col mb-8">
        <img v-if="bar.imageUrl" :src="bar.imageUrl" class="img-size" />
        <img v-else src="../../assets/logo.png" class="img-size border" />
        <button
          type="button"
          class="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-700 h-10 w-1/2 mt-8"
          @click="showFormImage = !showFormImage"
        >
          Update image
        </button>
        <div
          v-if="showFormImage"
          class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-25 transition z-50"
        >
          <UpdateImage @close-event="closeEvent" />
        </div>
      </div>
      <div class="flex flex-col ml-8 items-start w-1/2">
        <h2 class="font-medium text-lg">{{ $t("message.location") }}</h2>
        <p
          v-if="!editMode.location"
          @click="enableEditMode('location')"
          class="text-lg font-semibold mt-2 py-2 edit-icon"
        >
          {{ this.bar.location }}
        </p>
        <input
          v-else
          ref="locationInput"
          v-model="this.bar.location"
          @blur="disableEditMode('location')"
          @keyup.enter="disableEditMode('location')"
          class="text-lg font-semibold mt-2 py-2"
        />
        <h2 class="font-medium text-lg">{{ $t("message.capacity") }}</h2>
        <p
          v-if="!editMode.capacity"
          @click="enableEditMode('capacity')"
          class="text-lg font-semibold mt-2 py-2 edit-icon"
        >
          {{ this.bar.capacity }}
        </p>
        <input
          v-else
          ref="capacityInput"
          v-model="this.bar.capacity"
          @blur="disableEditMode('capacity')"
          @keyup.enter="disableEditMode('capacity')"
          class="text-lg font-semibold mt-2 py-2"
        />
        <h2 class="font-medium text-lg">{{ $t("message.capacity") }}</h2>
        <p
          v-if="!editMode.description"
          @click="enableEditMode('description')"
          class="text-lg font-semibold mt-2 py-2 edit-icon"
        >
          {{ this.bar.description }}
        </p>
        <textarea
          v-else
          ref="descriptionInput"
          v-model="this.bar.description"
          @blur="disableEditMode('description')"
          @keyup.enter="disableEditMode('description')"
          class="text-lg font-semibold mt-2 py-2 w-9/12"

        />
        <!-- :maxlength="maxCharacters"
          @input="checkCharacterLimit" -->
        <!-- <p>{{ characterCount }} / {{ maxCharacters }} characters</p> -->
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import UpdateImage from "./UpdateImage.vue";
export default {
  data() {
    return {
      barId: null,
      bar: "",
      editMode: {
        name: false,
        location: false,
        capacity: false,
        description: false,
      },
      defaultName: "",
      currentField: null,
      showFileInput: false,
      showText: false,
      showButton: false,
      showFormImage: false,
      maxCharacters: 150,
      characterCount: 0,
    };
  },
  components: { UpdateImage },
  created() {
    const route = useRoute();
    const barId = route.params.barId;
    this.barId = barId;
    this.getBarRequest();
  },
  methods: {
    async getBarRequest() {
      try {
        await this.$store.dispatch("getBar", this.barId);
        this.bar = this.$store.state.bar;
        this.defaultName = this.$store.state.bar.name;
      } catch (error) {
        console.log(error);
      }
    },
    handleButtonClick() {
      // Trigger the input file selection when the button is clicked
      const inputElement = this.$el.querySelector('input[type="file"]');
      inputElement.click();
    },
    async ModifyBarRequest() {
      this.$store
        .dispatch("ModifyBar", this.barId)
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    enableEditMode(field) {
      this.editMode[field] = true;
      this.error = false;
      this.$nextTick(() => {
        this.$refs[`${field}Input`].focus();
      });
    },
    disableEditMode(field) {
      if (this.editMode[field] === "") {
        console.log(this.editMode[field]);
        this.error = true;
        this.$refs[`${field}Input`].focus();
      } else {
        console.log(this.editMode[field]);
        this.editMode[field] = false;
        this.error = false;
      }
    },
    closeEvent(value) {
      this.showFormImage = value;
    },
    // checkCharacterLimit() {
    //   this.characterCount = this.text.length;
    //   console.log(this.text.length)
    //   if (this.characterCount > this.maxCharacters) {
    //     this.text = this.text.substring(0, this.maxCharacters);
    //   }
    // },
  },
};
</script>
<style>
.edit-icon::after {
  content: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1lZGl0IiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMSA0SDRhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTciLz48cGF0aCBkPSJNMTguNSAyLjVhMi4xMjEgMi4xMjEgMCAwIDEgMyAzTDEyIDE1bC00IDEgMS00IDkuNS05LjV6Ii8+PC9zdmc+");
  margin-left: 1rem;
  cursor: pointer;
}
.file-input {
  top: 0;
  position: absolute;
}
.file-input:hover {
  opacity: 0.75;
  background-color: grey;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: block;
}
.center {
  top: -50%;
}
</style>
