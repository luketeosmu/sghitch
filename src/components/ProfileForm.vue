<template lang="">
    <div>
        <div class="p-16">
            <div class="p-8 bg-white shadow mt-24">
            <div class="grid grid-cols-1 md:grid-cols-1">
                <!-- <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                    <div>
                        <p class="font-bold text-gray-700 text-xl">22</p>
                        <p class="text-gray-400">Friends</p>
                    </div>
                    <div>
                        <p class="font-bold text-gray-700 text-xl">10</p>
                        <p class="text-gray-400">Photos</p>
                    </div>
                    <div>
                        <p class="font-bold text-gray-700 text-xl">89</p>
                        <p class="text-gray-400">Comments</p>
                    </div>
                </div> -->
                <div class="relative">
                    <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-32 flex items-center justify-center text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <!-- <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                    <button class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        Connect
                    </button>
                    <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        Message
                    </button>
                </div> -->
            </div>

            <div class="mt-20 text-center border-b pb-12">
                <h1 class="text-4xl font-medium text-gray-700 mb-4">Jessica Jones </h1>
                <div class="rating rating-md rating-half">
                    <input type="radio" name="rating-10" class="rating-hidden" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                </div>
                <p class="mt-2 text-gray-500">4.5 stars </p>
                <h1 class="mt-8 text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, rem nulla. Nostrum maiores adipisci minus ex ratione quos dolor reiciendis blanditiis. Sed laboriosam voluptatum ullam velit, inventore consequuntur quis facilis!</h1>
            </div>

            <div class="mt-8 flex flex-col justify-center">
                <p class="text-black-600 text-center font-light text-3xl font-extrabold mb-8"> Review </p>
                <div class="grid grid-cols-2">
                    <div class="row-span-2 col-span-1"> 
                        <p class="text-black-600 text-end font-light mr-10 text-4xl font-bold mb-4"> 4.5 </p>
                    </div>
                    <div class="row-span-1 col-span-1"> 
                        <div class="rating rating-md rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-1" checked/>
                            <input type="radio" name="rating-10" class="bg-yellow-500 mask mask-star-2 mask-half-2" />
                        </div>
                    </div>
                    <div class="row-span-1 col-span-1"> 
                        <p class="text-black-600 text-start font-light text-xl ml-2"> from 20 people </p>
                    </div>
                </div>
            </div>

            <div class="mt-6 flex flex-col justify-center">
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        <!-- head -->
                        <thead>
                        <!-- <tr>
                            <th colspan="5"></th>
                        </tr> -->
                        </thead>
                        <tbody>
                        <!-- row 1 -->
                        <tr class="hover">
                            <th></th>
                            <th></th>
                            <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Soerdiman</div>
                                    <div class="rating rating-sm">
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked/>
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                                <div class="whitespace-normal">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus reprehenderit, non nostrum ducimus placeat consequatur atque dolor ullam ab cumque fugit suscipit eum natus aliquid voluptatum laboriosam voluptate debitis veritatis?
                                </div>
                            </div>
                           
                            </td>
                        </tr>
                        <!-- row 2 -->
                        <tr class="hover">
                            <th></th>
                            <th></th>
                            <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Soerdiman</div>
                                    <div class="rating rating-sm">
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked/>
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                                <div class="whitespace-normal">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus reprehenderit, non nostrum ducimus placeat consequatur atque dolor ullam ab cumque fugit suscipit eum natus aliquid voluptatum laboriosam voluptate debitis veritatis?
                                </div>
                            </div>
                           
                            </td>
                        </tr>
                        <!-- row 3 -->
                        <tr class="hover">
                            <th></th>
                            <th></th>
                            <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Soerdiman</div>
                                    <div class="rating rating-sm">
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked/>
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                                <div class="whitespace-normal">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus reprehenderit, non nostrum ducimus placeat consequatur atque dolor ullam ab cumque fugit suscipit eum natus aliquid voluptatum laboriosam voluptate debitis veritatis?
                                </div>
                            </div>
                           
                            </td>
                        </tr>
                        <!-- row 4 -->
                        <tr class="hover">
                            <th></th>
                            <th></th>
                            <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Soerdiman</div>
                                    <div class="rating rating-sm">
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked/>
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                                <div class="whitespace-normal">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus reprehenderit, non nostrum ducimus placeat consequatur atque dolor ullam ab cumque fugit suscipit eum natus aliquid voluptatum laboriosam voluptate debitis veritatis?
                                </div>
                            </div>
                           
                            </td>
                        </tr>
                        </tbody>
                        <!-- foot -->
                        <tfoot>
                        <!-- <tr>
                            <th colspan="5"></th>
                        </tr> -->
                        </tfoot>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "ProfileForm"
}
</script>
<style lang="">
    
</style>