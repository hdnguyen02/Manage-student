<template>
    <nav class="fixed inset-x-0 top-0 bg-primarily flex justify-between py-4 text-gray">
        <div class="flex items-center gap-4">
            <img src="https://www.frontendmatter.com/images/logo.svg" class="w-10 h-10">
            <span class="font-bold text-xl text-white">Frontend Matter</span>
            <a class="text-blue-600" href="#">Themes</a>
            <a href="#">Bundles</a>
        </div>

        <ul class="hidden flex-col items-start pl-4 pt-4 gap-4 fixed inset-y-0 right-0 w-60 bg-white 
        md:static md:flex-row md:w-auto md:bg-primarily md:items-center md:pl-0 md:pt-0
        ">
            <p class="md:hidden font-medium">LUMA LEARNING MANAGEMENT SYSTEM TEMPLATE BUNDLE</p>
            <li><a href="#">Introduction</a></li>
            <li><a href="#">Bundle template</a></li>
            <li><a href="#">Pricing</a></li>
        </ul>

        <button @click="handleShowMenu" class="flex items-center md:hidden">
            <img src="../../assets/image/menu.png" class="" alt="">
        </button>

    </nav>
</template> 


<script setup>

function handleShowMenu() {
    // hoạt động 
    
}


</script>
