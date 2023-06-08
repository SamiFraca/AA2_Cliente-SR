<template>
  <div class="flex md:flex-row flex-col">
    <SideMenu activeLink="admin" />
    <div class="max-w-5xl flex flex-col mx-auto items-start">
      <div class="flex flex-row justify-between w-full items-center">
        <p
          v-if="!editMode.name"
          @click="enableEditMode('name')"
          class="text-5xl font-semibold mt-8 py-2 edit-icon ml-12"
        >
          {{ this.bar.name }}
        </p>
        <input
          v-else
          ref="nameInput"
          v-model="this.bar.name"
          @blur="disableEditMode('name')"
          @keyup.enter="disableEditMode('name')"
          class="text-5xl font-semibold mt-8 ml-12 h-input-height"
        />
        <button
          type="button"
          class="bg-save-button text-white px-4 rounded-md hover:bg-save-button-hover h-10"
          @click="ModifyBarRequest()"
        >
          Save
        </button>
      </div>

      <div class="flex mt-8 items-start w-full flex-col ml-12">
        <div class="flex flex-col mb-8">
          <div class="flex flex-col md:flex-row md:mt-0">
            <img v-if="bar.imageUrl" :src="bar.imageUrl" class="img-size" />
            <img v-else src="../../assets/logo.png" class="img-size border" />
            <div
              v-if="showFormImage"
              class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-25 transition z-50"
            >
              <UpdateImage @close-event="closeEvent" />
            </div>
            <div class="flex flex-col md:ml-16 items-start md:w-1/2 w-full md:m-0 mt-8">
              <h2 class="font-medium text-lg">{{ $t("message.location") }}</h2>
              <p
                v-if="!editMode.location"
                @click="enableEditMode('location')"
                class="text-lg font-semibold mt-2 py-2 edit-icon flex text-center"
              >
                {{ this.bar.location }}
              </p>
              <input
                v-else
                ref="locationInput"
                v-model="this.bar.location"
                @blur="disableEditMode('location')"
                @keyup.enter="disableEditMode('location')"
                class="text-lg font-semibold mt-2 py-2 h-small-input-height"
              />
              <h2 class="font-medium text-lg">{{ $t("message.capacity") }}</h2>
              <p
                v-if="!editMode.capacity"
                @click="enableEditMode('capacity')"
                class="text-lg font-semibold mt-2 py-2 edit-icon flex"
              >
                {{ this.bar.capacity }}
              </p>
              <input
                v-else
                ref="capacityInput"
                v-model="this.bar.capacity"
                @blur="disableEditMode('capacity')"
                @keyup.enter="disableEditMode('capacity')"
                class="text-lg font-semibold mt-2 py-2 h-small-input-height"
              />
              <h2 class="font-medium text-lg">
                {{ $t("message.description") }}
              </h2>
              <p
                v-if="!editMode.description"
                @click="enableEditMode('description')"
                class="text-lg font-semibold mt-2 py-2 edit-icon flex overflow-hidden whitespace-nowrap"
              >
                {{ this.bar.description }}
              </p>
              <textarea
                v-else
                ref="descriptionInput"
                v-model="this.bar.description"
                @blur="disableEditMode('description')"
                @keyup.enter="disableEditMode('description')"
                class="text-lg font-semibold mt-2 mb-4 py-2 w-9/12 h-small-input-height"
              />
            </div>
          </div>
          <button
            type="button"
            class="text-black px-4 rounded-md hover:bg-blue-500 hover:text-white border-blue-500 border h-10 md:w-48 mb-10 mt-10 transition"
            @click="showFormImage = !showFormImage"
          >
            Update image
          </button>
          <!-- :maxlength="maxCharacters"
          @input="checkCharacterLimit" -->
          <!-- <p>{{ characterCount }} / {{ maxCharacters }} characters</p> -->
          <div
            class="flex flex-row gap-8 items-center text-center border-b border-color-grey pb-4"
          >
            <h2 class="font-medium text-lg">{{ $t("message.shows") }}</h2>
            <button
              class="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-700 h-10 w-36 md:w-32"
              @click="showCreateShowForm = !showCreateShowForm"
            >
              <span v-if="!showCreateShowForm">Create Show</span>
              <span v-else>Cancel</span>
            </button>
          </div>
          <div
            v-if="showCreateShowForm"
            class="mt-8 flex flex-col items-start gap-6"
          >
            <h2 class="text-lg font-medium">Name</h2>
            <input
              type="text"
              placeholder="Name"
              v-model="newShow.title"
              class="border-solid h-10 w-72 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg m-0 m-auto"
            />
            <h2 class="text-lg font-medium">Start Time</h2>
            <input
              type="datetime-local"
              placeholder=""
              v-model="newShow.start"
              class="border-solid h-10 w-72 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg m-0 m-auto"
            />
            <h2 class="text-lg font-medium">End Time</h2>
            <input
              type="datetime-local"
              placeholder=""
              v-model="newShow.end"
              class="border-solid h-10 w-72 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg m-0 m-auto"
            />
            <h2 class="text-lg font-medium">Category</h2>
            <input
              type="text"
              placeholder="Football, volleyball, show.."
              v-model="newShow.sport"
              class="border-solid h-10 w-72 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg m-0 m-auto"
            />
            <h2 class="text-lg font-medium">Maximum Capacity</h2>
            <input
              type="number"
              placeholder="Maximum Capacity of event"
              v-model="newShow.maxCap"
              class="border-solid h-10 w-72 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg m-0 m-auto"
            />
            <button
              class="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-700 h-10 w-36 md:w-1/2"
              @click="CreateShowRequest"
            >
              Create
            </button>
          </div>
        </div>
        <div
          v-if="this.bar.shows != null && bar.shows && bar.shows.length > 0"
          class="mt-4 w-full"
        >
          <div
            v-for="shows in this.bar.shows"
            :key="shows.id"
            class="flex flex-col gap-2 items-start text-start border mb-4 p-4 rounded-md"
          >
            <div class="flex flex-row justify-between w-full">
              <div
                class="flex flex-col text-start items-start"
                :class="{ 'w-1/2': editShowMode }"
              >
                <h2 class="text-xl font-medium text-start">Name</h2>
                <p v-if="!editShowMode || shows.id !== editShowId">
                  {{ shows.title }}
                </p>
                <input
                  type="text"
                  class="border rounded-md h-8 w-full mt-2"
                  v-model="editShow.title"
                  v-else
                  placeholder="Name"
                />
              </div>
              <div class="flex gap-4">
                <button
                  type="button"
                  class="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-700 h-10"
                  @click="toggleEditShowMode(shows.id)"
                >
                  <span v-if="!editShowMode || shows.id !== editShowId"
                    >Modify</span
                  ><span v-else>Cancel</span>
                </button>
                <button
                  type="button"
                  class="bg-red-500 text-white px-4 rounded-md hover:bg-red-700 h-10"
                  @click="deleteShow(shows)"
                >
                  Delete
                </button>
                <div
                  v-if="showDelete"
                  class="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-opacity-25 justify-center bg-gray-100 bg-opacity-25 transition z-50"
                >
                  <DeleteShow
                    @close-event-delete="closeEventDelete"
                    :show="selectedShow"
                    v-if="showDelete"
                  />
                </div>
              </div>
            </div>
            <h2 class="text-xl font-medium">Category</h2>
            <p v-if="!editShowMode || shows.id !== editShowId">
              {{ shows.sport }}
            </p>
            <input
              type="text"
              v-model="editShow.sport"
              class="border rounded-md h-8 w-1/2 mt-2"
              v-else
              placeholder="Category"
            />
            <h2 class="text-xl font-medium">Schedule</h2>
            <p
              class="text-start w-9/12 flex items-center gap-2"
              :class="{ 'mb-4': editShowMode }"
            >
              Start Time:
              <span v-if="!editShowMode || shows.id !== editShowId">
                {{ shows.startTime }}</span
              >
              <input
                v-else
                v-model="editShow.start"
                type="datetime-local"
                class="border rounded-md py-1 w-1/2"
              />
            </p>
            <p class="text-start w-9/12 flex items-center gap-3">
              End Time:
              <span v-if="!editShowMode || shows.id !== editShowId">
                {{ shows.endTime }}</span
              >
              <input
                v-else
                v-model="editShow.end"
                type="datetime-local"
                class="border rounded-md py-1 w-1/2"
              />
            </p>
            <h2 class="text-xl font-medium">Capacity</h2>
            <p class="flex items-center gap-1 text-left">
              <span :class="{ 'w-1/3 md:w-auto': editShowMode }">
                Maximum Capacity:</span
              >
              <span v-if="!editShowMode || shows.id !== editShowId">{{
                shows.maxCap
              }}</span
              ><input
                v-model="editShow.maxCap"
                type="number"
                class="border rounded-md h-8 w-1/2"
                v-else
                placeholder="Number"
              />
            </p>
            <p>Actual Capacity: {{ shows.actualCap }}</p>
            <button
              v-if="editShowMode && shows.id == editShowId"
              type="button"
              class="bg-save-button text-white px-4 rounded-md hover:bg-save-button-hover h-10 w-20 mt-4"
              @click="UpdateShowRequest(shows.id, shows.actualCap)"
            >
              Save
            </button>
          </div>
        </div>
        <div class="mt-4" v-else>No actual shows for this bar</div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import UpdateImage from "./UpdateImage.vue";
import DeleteShow from "@/components/profile/DeleteShow.vue";
import SideMenu from "@/components/profile/SideMenu.vue";
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
      currentField: null,
      showFileInput: false,
      showText: false,
      showButton: false,
      showFormImage: false,
      maxCharacters: 150,
      characterCount: 0,
      showCreateShowForm: false,
      newShow: {
        title: "",
        start: null,
        end: null,
        sport: "",
        maxCap: 0,
        actualCap: 0,
        barId: 0,
      },
      editShow: {
        title: "",
        start: null,
        end: null,
        sport: "",
        maxCap: 0,
        barId: 0,
      },
      selectedShow: null,
      showDelete: false,
      editShowMode: false,
      editShowId: null,
    };
  },
  components: { UpdateImage, DeleteShow, SideMenu },
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
      } catch (error) {
        console.log(error);
      }
    },
    toggleEditShowMode(showId) {
      console.log(showId);
      this.editShowMode = !this.editShowMode;
      this.editShowId = showId;
    },
    closeEventDelete(value) {
      this.showDelete = value;
    },
    deleteShow(show) {
      this.selectedShow = show;
      this.showDelete = !this.showDelete;
    },
    handleButtonClick() {
      const inputElement = this.$el.querySelector('input[type="file"]');
      inputElement.click();
    },
    async ModifyBarRequest() {
      const patchOperations = [];
      console.log(this.barId);

      if (this.bar.name !== "") {
        patchOperations.push({
          op: "replace",
          path: "/name",
          value: this.bar.name,
        });
      }

      if (this.bar.location !== "") {
        patchOperations.push({
          op: "replace",
          path: "/location",
          value: this.bar.location,
        });
      }

      if (this.bar.description !== "") {
        patchOperations.push({
          op: "replace",
          path: "/description",
          value: this.bar.description,
        });
      }
      patchOperations.push({
        op: "replace",
        path: "/capacity",
        value: this.bar.capacity,
      });
      console.log(patchOperations);
      this.$store
        .dispatch("ModifyBar", {
          patchOperations,
          barId: this.barId,
        })
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async CreateShowRequest() {
      const formData = new FormData();
      formData.append("title", this.newShow.title);
      formData.append("start", this.newShow.start);
      formData.append("end", this.newShow.end);
      formData.append("maxCap", this.newShow.maxCap);
      formData.append("sport", this.newShow.sport);
      formData.append("actualCap", this.newShow.actualCap);
      formData.append("barId", this.barId);
      // Convert FormData to array
      const formDataArray = Array.from(formData);
      // // Log the contents
      console.log(formDataArray);
      this.$store
        .dispatch("CreateShow", formData)
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async UpdateShowRequest(showId, actualCapacity) {
      const updateShowId = showId;
      const updatedActualCapacity = actualCapacity;
      const formData = new FormData();
      formData.append("title", this.editShow.title);
      formData.append("start", this.editShow.start);
      formData.append("end", this.editShow.end);
      formData.append("maxCap", this.editShow.maxCap);
      formData.append("barId", this.barId);
      formData.append("sport", this.editShow.sport);
      formData.append("id", showId);
      formData.append("actualCap", updatedActualCapacity);
      // formData.append("actualCap", this.newShow);
      console.log(updatedActualCapacity);
      // const formDataArray = Array.from(formData);
      console.log(JSON.stringify(formData));
      this.$store
        .dispatch("UpdateShow", {
          formData,
          id: updateShowId,
        })
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
