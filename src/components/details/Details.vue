<template>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img :src="imagen" class="h-64 w-full object-cover rounded-t-lg shadow-lg">
        <div class="p-4">
            <h2 class="text-xl font-semibold">Bar Zayas</h2>
            <p class="text-gray-600">Zaragoza</p>
            <p class="text-gray-600">Capacidad de "50" personas</p>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4">Reservar</button>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4 ml-2">Ver carta</button>
        </div>
    </div>
</template>
  
<script>
export default {
    // props: {
    //   name: String,
    //   location: String,
    //   capacity: String,
    //   barimage: String
    // }
}
</script>
  
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@600&display=swap");

h1 {
    font-family: "Mukta", sans-serif;
}

.rounded-lg {
    border-radius: 1rem;
}

.shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.mt-8 {
    margin-top: 2rem;
}
</style>
  