<template>
    <div class="back-img-login relative justify-center flex items-center">
        <Login class="absolute" />
    </div>
</template>
  
<script>
// import Header from "@/components/header/Header.vue";
// @ is an alias to /src
import Login from "@/components/log/Login.vue";
export default {
    components: { Login },
    methods: {},
};
</script>
<style scoped>
.back-img-login {
    background-image: url(../assets/pexels-tim-mossholder-1080884.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}
</style>
  
  