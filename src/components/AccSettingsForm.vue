<template>
    <div>
        <div class="font-mono bg-yellow-50">
            <div class="container mx-auto">
                <div class="inputs w-full max-w-2xl p-6 mx-auto">
                    <h2 class="text-2xl text-gray-900">Personal Info: </h2>
                    <form class="mt-6 border-t border-gray-400 pt-4">
                        <div class='flex flex-wrap -mx-3 mb-6'>
                            <div class="w-full">
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>email address </label>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' required>
                            </div>
                            <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                </div>
                            </div>
                        
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Current Password</label>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='password' placeholder="Enter password to make changes" required>
                            </div>

                            <div class="flex justify-end">
                                    <button class="appearance-none shadow btn-warning bg-yellow-300 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3 mb-6" type="submit">Save changes</button>
                            </div>
                            </div>
                            
                            <div class="personal w-full border-t border-gray-400 pt-4">
                                <h2 class="text-2xl text-gray-900">Change Password: </h2>
                                <div class='w-full md:w-full px-3 mt-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Current Password</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='password'  required>
                                    <span @click='' class="flex justify-end text-sm mt-2 hover:text-yellow-500 cursor-pointer">Forgot your password? </span>
                                </div>
                                <div class='w-full md:w-full px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>New Password</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='password'  required>
                                </div>
                                <div class='w-full md:w-full px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Confirm Password</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='password'  required>
                                </div>
                            
                                <div class="flex justify-end">
                                    <button class="appearance-none shadow btn-warning bg-yellow-300 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">Confirm</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AccSettingsForm"
  }
  </script>
  
  <style>
  
  </style>