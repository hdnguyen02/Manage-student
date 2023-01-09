<template>
    <nav class="fixed inset-x-0 top-0 bg-gray-900 flex justify-between py-4 text-gray-300 px-4">
        <div class="flex items-center gap-4">
            <img src="https://www.frontendmatter.com/images/logo.svg" class="w-10 h-10">
            <span class="font-bold text-xl text-white">Vue School</span>

        </div>

        <ul id='navBar' class="hidden z-50 flex-col items-start pl-4 pt-4 gap-4 fixed inset-y-0 right-0 w-60 
        md:static md:flex md:flex-row md:w-auto md:bg-primarily md:items-center md:pl-0 md:pt-0 md:z-auto
        ">
            <p class="md:hidden font-medium">LUMA LEARNING MANAGEMENT SYSTEM TEMPLATE BUNDLE</p>
            <li><RouterLink to="/login" class="hover:text-white" href="#">log in</RouterLink></li>
            <li><RouterLink to="/join" class="hover:text-white" href="#">Sign up</RouterLink></li>
        </ul>

        <button @click="handleShowMenu" class="flex items-center md:hidden">
            <img src="../../assets/image/menu.png" class="" alt="">
        </button>
        <div @click='handleCloseMenu' id='layer' class="hidden fixed inset-0 bg-layer"></div>
    </nav>
</template> 


<script setup>

import { onMounted, ref } from 'vue'
import {RouterLink} from 'vue-router'


let navBar = ref(null)
let layer = ref(null)

onMounted(() => {
    navBar.value = document.getElementById('navBar')
    layer.value = document.getElementById('layer')
})


const handleShowMenu = function () {
    navBar.value.classList.remove('hidden')
    navBar.value.classList.add('flex')
    layer.value.classList.remove('hidden')
    layer.value.classList.add('block')
}

const handleCloseMenu = function () {
    navBar.value.classList.remove('flex')
    navBar.value.classList.add('hidden')
    layer.value.classList.remove('block')
    layer.value.classList.add('hidden')
}


</script>
