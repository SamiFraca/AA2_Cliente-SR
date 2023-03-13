<template>
    <footer class="footer bg-gray-100 py-6 h-48 fixed">
        <div class="container mx-auto flex flex-wrap justify-between">
            <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4">
                <h5 class="text-lg font-bold mb-2">About Us</h5>
                <ul class="text-sm list-none leading-normal">
                    <li><a class="text-gray-600 hover:text-black" href="#">Our Story</a></li>
                    <li><a class="text-gray-600 hover:text-black" href="#">Our Team</a></li>
                    <li><a class="text-gray-600 hover:text-black" href="#">Careers</a></li>
                </ul>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4">
                <h5 class="text-lg font-bold mb-2">Contact Us</h5>
                <ul class="text-sm list-none leading-normal">
                    <li><a class="text-gray-600 hover:text-black" href="#">Support</a></li>
                    <li><a class="text-gray-600 hover:text-black" href="#">Sales</a></li>
                    <li><a class="text-gray-600 hover:text-black" href="#">Feedback</a></li>
                </ul>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4">
                <h5 class="text-lg font-bold mb-2">Link 3</h5>
                <ul class="text-sm list-none leading-normal">
                    <li><a class="text-gray-600 hover:text-black" href="#">Link 3.1</a></li>
                    <li><a class="text-gray-600 hover:text-black" href="#">Link 3.2</a></li>
                    <li><a class="text-gray-600 hover:text-black" href="#">Link 3.3</a></li>
                </ul>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4">
                <h5 class="text-lg font-bold mb-2">Link 4</h5>
                <ul class="text-sm list-none leading-normal">
                    <li><a class="text-gray-600 hover:text-black" href="#">Link 4.1</a></li>
                    <li><a class="text-gray-600 hover:text-black" href="#">Link 4.2</a></li>
                    <li><a class="text-gray-600 hover:text-black" href="#">Link 4.3</a></li>
                </ul>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4">
                <h5 class="text-lg font-bold mb-2">Follow Us</h5>
                <ul class="text-sm list-none leading-normal">
                    <li><a class="text-gray-600 hover:text-black" href="#">Facebook</a></li>
                    <li><a class="text-gray-600 hover:text-black" href="#">Twitter</a></li>
                    <li><a class="text-gray-600 hover:text-black" href="#">Instagram</a></li>
                </ul>
            </div>
        </div>

    </footer>
</template>
<style>
.logo {
    cursor: pointer
}

.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #f5f5f5;
}

.footer h5 {
    margin-top: 15px;
    margin-bottom: 10px;
    font-weight: bold;
}

.footer ul li {
    margin-bottom: 10px;
}

.footer ul li a {
    color: #555;
}

.footer ul li a:hover {
    color: #000;
}
</style>
<script>
export default {
};
</script>
