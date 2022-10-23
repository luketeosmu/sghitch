<template>
    <div>
        <div class="backdrop-blur-[4px]">
            <div class="container mx-auto ">
                <div class="inputs w-full max-w-2xl p-6 mx-auto  bg-white bg-opacity-5 rounded-lg">
                    <h1 style="text-shadow: 0.05em 0 black, 0 0.05em black, -0.05em 0 black, 0 -0.05em black;" class="text-3xl text-slate-200">Personal Info: </h1>
                    <form class="mt-6 border-t border-gray-400 pt-4">
                        <div class='flex flex-wrap -mx-3 mb-6'>
                            <div class="w-full">
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label style="text-shadow: 0.07em 0 black, 0 0.07em black, -0.05em 0 black, 0 -0.05em black;" class='text-slate-200 text-xl mb-2' for='grid-text-1'>Email Address </label>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' required>
                            </div>
                            <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label style="text-shadow: 0.07em 0 black, 0 0.07em black, -0.05em 0 black, 0 -0.05em black;" class='text-slate-200 text-xl mb-2' >First Name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label style="text-shadow: 0.07em 0 black, 0 0.07em black, -0.05em 0 black, 0 -0.05em black;" class='text-slate-200 text-xl mb-2' >Last Name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                </div>
                            </div>
                        
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label style="text-shadow: 0.07em 0 black, 0 0.07em black, -0.05em 0 black, 0 -0.05em black;" class='text-slate-200 text-xl mb-2' for='grid-text-1'>Current Password</label>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='password' placeholder="Enter password to make changes" required>
                            </div>

                            <div class="flex justify-end">
                                    <button class="appearance-none btn-ghost bg-slate-700 bg-opacity-50 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3 mb-6" type="submit">Save changes</button>
                            </div>
                            </div>
                            
                            <div class="personal w-full border-t border-gray-400 pt-4">
                                <h1 style="text-shadow: 0.05em 0 black, 0 0.05em black, -0.05em 0 black, 0 -0.05em black;" class="text-3xl text-slate-200">Change Password: </h1>
                                <div class='w-full md:w-full px-3 mt-6'>
                                    <label style="text-shadow: 0.07em 0 black, 0 0.07em black, -0.05em 0 black, 0 -0.05em black;" class='text-slate-200 text-xl mb-2'>Current Password</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='password'  required>
                                    <span @click='' class="flex justify-end text-sm mt-2 text-slate-200 hover:text-slate-200 cursor-pointer">Forgot your password? </span>
                                </div>
                                <div class='w-full md:w-full px-3 mb-6'>
                                    <label style="text-shadow: 0.07em 0 black, 0 0.07em black, -0.05em 0 black, 0 -0.05em black;" class='text-slate-200 text-xl mb-2'>New Password</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='password'  required>
                                </div>
                                <div class='w-full md:w-full px-3 mb-6'>
                                    <label style="text-shadow: 0.07em 0 black, 0 0.07em black, -0.05em 0 black, 0 -0.05em black;" class='text-slate-200 text-xl mb-2'>Confirm Password</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='password'  required>
                                </div>
                            
                                <div class="flex justify-end">
                                    <button class="appearance-none btn-ghost bg-slate-700 bg-opacity-50 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">Confirm</button>
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