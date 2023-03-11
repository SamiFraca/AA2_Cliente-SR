<template>
    <div class="bg-white w-login-width h-login-height relative rounded-lg flex justify-center items-center">
        <form @submit.prevent="submitForm">
            <div class="flex flex-col my-12 justify-center">
                <input v-model="Username" type="text" placeholder="Username" required
                    class="border-solid h-16 w-96 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg" />
                <input v-model="Password" type="password" placeholder="Password" required
                    class="border-solid h-16 w-96 px-4 border-gray-300 border-solid border-2 px-4 rounded-lg mt-8" />
                <br>
            </div>
            <button class="bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded" type="submit"
                :disabled="!formValid" :class="{ 'disabled': !formValid }">
                Register
            </button>
        </form>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: "Header",
    data() {
        return {
            Username: '',
            Password: ''
        }
    },
    components: {},
    methods: {
    },
    computed: {
        formValid() {
            return this.Username && this.Password
        }
    }
};
</script>