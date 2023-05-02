<template>
  <nav class="h-24 align-center flex justify-center align-center justify-between mx-4 sticky">
    <div class="justify-center flex items-center">
      <img src="../../assets/logo.png" style="height:4rem;" class="logo" @click="this.$router.push('/')" />
    </div>
    <div class="justify-center flex justify-between p-8 hidden sm:inline-block">
      <router-link to="/login" class="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
        {{ $t("message.logIn") }}</router-link>
      <!-- <button class="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"> -->
      <router-link to="/sign" class="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">{{ $t("message.signIn") }}
        </router-link>
    </div>
    <div class="self-center mr-8 sm:hidden">
      <png><img src="../../assets/dropdown.png"></png>
    </div>
  </nav>
</template>
<style>
.logo {
  cursor: pointer
}
</style>
<script>
export default {
};
</script>

<style></style>