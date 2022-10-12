<template lang="">
   <Nav />

   <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />

   <h3 class="text-center font-bold text-3xl font-sans pb-5 text-red"> Account Setting </h3>

   <div class="flex flex-col h-screen my-auto items-center bgimg bg-cover">
   <div class="card bg-yellow-50 flex items-center border-2 py-10 px-10 rounded-2xl mt-2 mb-4 border-gray-500">
    <form class="w-full max-w-lg">
        <div class="md:flex md:items-center mb-8">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Name: 
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe">
          </div>
        </div>
        <div class="md:flex md:items-center mb-8">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-email">
              Email: 
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="text" value="JaneDoe@gmail.com">
          </div>
        </div>
        <div class="md:flex md:items-center mb-8">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Current Password:
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************">
          </div>
        </div>
        <div class="md:flex md:items-center mb-8">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              New Password:
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************">
          </div>
        </div>
        <div class="md:flex md:items-center mb-8">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Confirm New Password:
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************">
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button class="shadow btn-warning bg-yellow-300 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded mr-8" type="button">
              Edit
            </button>
            <button class="shadow btn-warning bg-yellow-300 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
              Update
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
    
</template>

<script>


import Nav from "../components/Nav.vue"

export default {
    name: "Profile",
    props: {},
    components: {
        Nav,
    }
}
</script>

<style lang="">

    
</style>