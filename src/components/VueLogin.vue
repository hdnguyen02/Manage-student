<template>
   <div class='bg-blue-50 w-full h-screen'>
      <div class='w-full max-w-sm absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white'>
         <form class='shadow-md rounded p-8 pt-6'>
            <div class='mb-4'>
               <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
               <input type="email" name="username" id="username" placeholder="username"
                  class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-2xl">
            </div>
            <div class='mb-4'>
               <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Password</label>
               <input type="password" name="username" id="username" placeholder="***********"
                  class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-2xl">
               <p class='text-sm text-red-500'>password with at least 6 characters</p>
            </div>
            <div>
               <button type='submit' class="bg-blue-600 text-white font-bold py-2 rounded-md w-full">Sign up</button>
            </div>
         </form>
      </div>
   </div>

</template>