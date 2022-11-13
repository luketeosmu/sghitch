<template lang="">
    <!-- <div class="navbar sticky top-0 z-10 absolute bg-opacity-90" :class="[this.user.type == 'driver' ? 'bg-slate-700':'bg-slate-200']"> -->
    <div class="navbar sticky top-0 z-10 absolute bg-opacity-100 bg-slate-700">
        <div class="navbar-start">
            <!-- <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a @click='home()'>Home</a></li>
                    <li><a @click='profile()'>Profile</a></li>
                    <li><a @click='newFav()'>Favourites</a></li>
                </ul>
            </div> -->
            <div class="dropdown hidden md:block">
                <ul class="menu menu-horizontal p-0 text-white" tabindex="0">
                    <li><a class="btn btn-ghost bg-transparent " @click='home()'>Home</a></li>
                    <li><a class="btn btn-ghost bg-transparent" @click='newFav()'>Edit Favourites</a></li>
                    <li><button @click='newReq()' type="button" class="btn btn-ghost block p-1 md:p-3 rounded-2xl font-semibold text-white hidden md:block" to="newReq">New Request</button></li>
                    
                </ul>
            </div>
            <div class="flex-none md:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
            </div> 
        </div>
        <div class="navbar-center cursor-pointer" @click='home()'>
            <span class="font-bold text-4xl sm:text-5xl font-bebas text-white mt-1">Hitch.</span>
            <div v-if="this.user.type == 'driver'">
                <span class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8 h-8 sm:w-10 sm:h-10 mx-2 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                    
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6 mt-6" id="first">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6 mt-6" id="second">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                    </svg> -->
                </span>
            </div>
            <div v-else>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8 h-8 sm:w-10 sm:h-10 mx-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
            </div>
            
        </div>
        <div class="navbar-end">
            
            <div class="dropdown dropdown-end mr-3 block indicator" >
                <label tabindex="0" class="md:flex btn btn-ghost p-3 rounded-2xl font-semibold px-1 ml-3 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 sm:w-7 sm:h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                        <span class="indicator-item badge badge-sm bg-white text-slate-700 mt-2" v-if="this.getPendingCount() != 0">{{ this.getPendingCount() }}</span> 
                </label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-slate-600 rounded-box w-[300px] sm:w-96 h-[400px] sm:h-[600px]">
                    <!-- to dynamically change -->
                    <span class="text-lg text-white font-light font-roboto">Notifications</span>
                    <hr>
                    <div v-if="this.acceptedOffer == null && this.offers.length == 0" class="text-lg text-gray-200 font-roboto font-bold text-center my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24 mx-auto mb-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                        Your notifications live here<br>
                        <span class="text-sm font-light">Add a new request or make an offer to other users. <br>You will get notified here when there are responses!</span>
                    </div>
                    <li v-if="this.acceptedOffer != null">
                        <label v-if="this.auth.currentUser.displayName == this.acceptedOffer.displayName" class="hover:bg-slate-500 active:bg-slate-500 text-white" :for="this.acceptedOffer.oid + 'accepted'">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            Ride with {{ acceptedOffer.driverName }} is about to commence!
                        </label>
                        <div v-else class="hover:bg-slate-500 active:bg-slate-500 text-white" :for="this.acceptedOffer.oid + 'accepted'">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            Ride with {{ acceptedOffer.displayName }} is about to commence!
                        </div>
                    </li>
                    <li v-if="this.rejectedOffer != null">
                        <label v-if="this.auth.currentUser.displayName == this.rejected.displayName" class="hover:bg-slate-500 active:bg-slate-500 text-white" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            Ride with {{ rejectedOffer.driverName }} is rejected
                            <button @click="removeRejected()">delete</button>
                        </label>
                        <div v-else class="hover:bg-slate-500 active:bg-slate-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            Ride with {{ rejectedOffer.displayName }} is rejected
                            <button @click="removeRejected()">delete</button>
                        </div>
                    </li>
                    <li v-if="this.offers.length != 0 && this.acceptedOffer == null" v-for="offer of this.offers">
                        <label v-if="offer.status == 'pending'" :for="offer.oid" class="hover:bg-slate-500 active:bg-slate-500 text-white"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ offer.displayName }} made an offer of ${{ offer.askingPrice }}</label>
                    </li>
                </ul>
            </div>
            <!-- <button class="btn btn-ghost btn-circle">
            <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span class="badge badge-xs badge-success indicator-item"></span>
            </div>
            </button> -->
            <div class="dropdown dropdown-end mr-3 hidden md:block">
                <label tabindex="0" class="md:flex btn btn-ghost p-3 rounded-2xl font-semibold px-1 ml-3 text-white">
                    <div class="avatar flex">
                        <div class="overflow-hidden w-7 rounded-full ring ring-white ring-offset-base-100">
                            <img :src="item.imageUrl" contain style="width:100%;height:100%;object-fit:cover"/>
                        </div>
                    </div>
                    <!-- My Account &nbsp  -->
                    <!-- <i class="bi bi-caret-down-fill"></i> -->
                </label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-slate-600 rounded-box w-52">
                    <!-- to dynamically change -->
                    <li v-if="this.user.type == 'driver'">
                        <a @click="change()" class="active:bg-slate-300 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>
                            Switch to Hitcher
                        </a>
                    </li> 
                    <li v-else>
                        <a @click="change()" class="active:bg-slate-300 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>Switch to Driver
                        </a>
                    </li> 
                    <li>
                        <a @click="accountSettings()" class="active:bg-slate-300 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Account Settings
                        </a>
                    </li>
                    <hr/>
                    <li>
                        <a @click="logout()" class="active:bg-slate-300 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div v-if="this.acceptedOffer != null">
    <input type="checkbox" :id="this.acceptedOffer.oid + 'accepted'" class="modal-toggle" />
            <label :for="this.acceptedOffer.oid + 'accepted'" class="modal cursor-pointer">
            <label class="modal-box relative w-auto min-w-[400px]  bg-gray-800 text-white font-light text-center" for="">
                <span class="text-2xl">Begin ride?</span>
                <div class="grid grid-cols-2 gap-x-5 mt-5">
                    <label @click="rideStart(acceptedOffer)" type="button" :for="this.acceptedOffer.oid + 'accepted'" class="btn btn-ghost block bg-slate-600 hover:bg-slate-500 px-3 rounded-xl text-white font-semibold flex justify-center items-center text-center">Yes</label>
                    <label type="button" :for="this.acceptedOffer.oid + 'accepted'" class="btn btn-ghost block bg-white hover:bg-slate-100 px-3 rounded-xl text-slate-600 font-semibold flex justify-center items-center text-center">Not Yet</label>
                </div>    
            </label>
            </label>
    </div>
    <div v-for="offer of this.offers">
        <input type="checkbox" :id="offer.oid" class="modal-toggle" />
            <label :for="offer.oid" class="modal cursor-pointer">
            <label class="modal-box relative w-auto min-w-[400px]  bg-gray-800 text-white font-light" for="">
                <div class="inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" class="w-6 h-6 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ offer.displayName }}
                </div>
                <br>
                <div class="inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" class="w-6 h-6 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ setTimeStr(offer.datetime.split("T")[1]) }}
                </div>
                <br>
                <div class="inline-flex" v-if="this.userType == 'driver'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" class="w-6 h-6 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    <span>
                        {{ offer.pax }} persons 
                    </span>
                </div>
                <br v-if="this.userType == 'driver'">
                <div class="inline-flex" v-if="this.userType == 'hitcher'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                    <span>
                        {{ offer.vehicleNo }} 
                    </span>
                </div>
                <br v-if="this.userType == 'hitcher'">
                <div class="inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" class="w-6 h-6 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ${{ offer.askingPrice }}
                </div>
                <br>
                <div class="inline-flex" v-if="this.userType == 'driver'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" class="w-6 h-6 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    {{ offer.startAddress }} 
                    <svg aria-hidden="true" class="mx-2 w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    {{ offer.destAddress }} 
                </div>
                <br v-if="this.userType == 'driver'">

                <div v-if="offer.status == 'accepted'" class="alert alert-success shadow-lg mt-2 h-[20px] flex justify-center items-center text-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Your have accepted the offer!</span>
                    </div>
                </div>
                <div v-if="offer.status == 'rejected'" class="alert alert-success shadow-lg mt-2 h-[20px] flex justify-center items-center text-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>You have rejected the offer!</span>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-x-5 mt-5" v-show="offer.status=='pending'">
                    <!-- <button  @click='offer.status = "accepted", this.acceptedOffer = offer, this.offers = []' type="button" class="btn btn-ghost block bg-slate-600 hover:bg-slate-500 px-3 rounded-xl text-white font-semibold flex justify-center items-center text-center">Accept</button> -->
                    <button  @click='acceptOffer(offer), offer.status = "accepted"' type="button" class="btn btn-ghost block bg-slate-600 hover:bg-slate-500 px-3 rounded-xl text-white font-semibold flex justify-center items-center text-center">Accept</button>
                    <button  @click='offer.status = "rejected"' type="button" class="btn btn-ghost block bg-white hover:bg-slate-100 px-3 rounded-xl text-slate-600 font-semibold flex justify-center items-center text-center">Decline</button>
                </div>
            </label>
        </label>
        <!-- {{ this.offers[0] }} -->
    </div>
</template>
<script>
import Request from "../components/Request.vue"
import { getAuth, signOut } from 'firebase/auth'
import { getDatabase, ref, child, get, update, onValue, set, remove } from 'firebase/database';
export default {
    name: "Nav", 
    components: {
        Request,
    },
    props: {
        userType: String,
    },
    data() {
        return {
            auth: null,
            dbRef: null,
            user: {
                type: ""
            },
            item:{
                imageUrl: null
            },
            acceptedOffer: null,
            rejectedOffer: null,
            driverOffers: [],
            hitcherOffers: [],
            offers: [
                // {   
                //     status: "pending",
                //     // centerStart: {
                //     //     lat: "1.360540",
                //     //     lng: "103.957380"
                //     // },
                //     // centerDest: {
                //     //     lat: "1.431630",
                //     //     lng: "103.785590",
                //     // },
                //     startAddress: "Tampines St 45 529498",
                //     datetime: "2022-11-12T12:40",
                //     // startNeighborhood: "Tampines",
                //     pax: "3",
                //     // available: "1",
                //     destAddress: "Woodlands Ave 1 730308",
                //     // destNeighborhood: "Woodlands",
                //     uid: "12345",
                //     displayName: "luke",
                //     // carplateNo: "SFY16C",
                //     askingPrice: "10.00"
                // },
                // {
                //     status: "pending",
                //     centerStart: {
                //             lat: "1.360540",
                //             lng: "103.957380"
                //         },
                //         centerDest: {
                //             lat: "1.431630",
                //             lng: "103.785590",
                //         },
                //         s_address: "Geylang Prostitution",
                //         datetime: "2022-11-12T12:40",
                //         startNeighborhood: "Tampines",
                //         pax: "3",
                //         available: "1",
                //         d_address: "Woodlands Ave 1 730308",
                //         destNeighborhood: "Woodlands",
                //         uid: "12345",
                //         user: "john",
                //         carplateNo: "SFY16C",
                //         askingPrice: "10.00"
                // },
                // {
                //     status: "pending",
                //     centerStart: {
                //             lat: "1.360540",
                //             lng: "103.957380"
                //         },
                //         centerDest: {
                //             lat: "1.431630",
                //             lng: "103.785590",
                //         },
                //         s_address: "Singapore sports hub swimming complex",
                //         datetime: "2022-11-12T12:40",
                //         startNeighborhood: "Tampines",
                //         pax: "3",
                //         available: "1",
                //         d_address: "Woodlands Ave 1 730308",
                //         destNeighborhood: "Woodlands",
                //         uid: "12345",
                //         user: "lyegend",
                //         carplateNo: "SFY16C",
                //         askingPrice: "10.00"
                // },
            ]
        }
    },
    mounted(){
        this.auth = getAuth();
        const auth = getAuth()
        this.item.imageUrl = auth.currentUser.photoURL
        this.dbRef = ref(getDatabase())
        get(child(this.dbRef, `userTypes/${this.auth.currentUser.uid}`)).then((snapshot) => {
            if (snapshot.exists()){
                if(snapshot.val().type == "hitcher"){
                    this.user.type = "hitcher"
                } else {
                    this.user.type = "driver"
                }
                if(this.user.type == "driver"){
                    const db = getDatabase();
                    const dbRef = ref(db, '/driverOffers/' + this.auth.currentUser.uid);
                    console.log("im a driver")
                    this.driverOffers = []
                    this.hitcherOffers = []
                    onValue(dbRef, (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        const childKey = childSnapshot.key; //offerId
                        const childData = childSnapshot.val(); //offerAttributes
                        childData["oid"] = childKey
                        childData["driverName"] = this.auth.currentUser.displayName
                        console.log("DRIOVERRRRR")
                        console.log(childData)

                        //push into offers array
                        // childData["status"] = "pending"
                        this.offers.push(childData)
                        // this.driverOffers.push(childData)
                        // this.offers.push(childData)
                        // console.log("offers: " + this.offers)
                    });
                }, {
                    onlyOnce: true
                });
                // this.offers = temp
                } else if(this.user.type == "hitcher"){
                    console.log("im a hitcher")
                    this.driverOffers = []
                    this.hitcherOffers = []
                    const db = getDatabase();
                    const dbRef = ref(db, '/hitcherOffers/' + this.auth.currentUser.uid);
                    onValue(dbRef, (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        const childKey = childSnapshot.key; //offerId
                        const childData = childSnapshot.val(); //offerAttributes
                        childData["oid"] = childKey
                        // childData["driverName"] = this.auth.currentUser.displayName
                        // childData["hitcherName"] = this.auth.currentUser.displayName
                        //push into offers array\
                        console.log("HITCVHERRRR")
                        console.log(childData)
                        this.offers.push(childData)
                        // this.hitcherOffers.push(childData)
                    });
                    }, {
                    onlyOnce: true
                    });
                }
            } else {
                alert("Application encountered a severe issue. Please login again.")
                this.logout()
            }
        }).catch((error) => {
            console.error(error)
            this.logout()
        })
        // if(this.user.type == "driver") {
        //     setInterval(this.displayFirst(), 1000)
        //     setInterval(this.displaySecond(), 2000)
        // }
        const dbRef = ref(getDatabase());
        get(child(dbRef, `userInfo/${auth.currentUser.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
            this.acceptedOffer = snapshot.val().acceptedOffer
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
            console.error(error);
        });
        get(child(dbRef, `userInfo/${auth.currentUser.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
            this.rejectedOffer = snapshot.val().rejectedOffer
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
            console.error(error);
        });
    },
    methods: {
        removeRejected() {
            const db = getDatabase();
            const auth = getAuth()
            set(ref(db, 'userInfo/' + auth.currentUser.uid + '/rejectedOffer'), null);
            this.rejectedOffer = null
        },
        rideStart(offer) {
            // this.acceptedOffer = null
            const db = getDatabase();
            const auth = getAuth()
            set(ref(db, 'userInfo/' + auth.currentUser.uid + '/acceptedOffer'), null);
            //remove requesters accepted offer too using offer.uid? idk need test
            console.log(offer.uid)
            set(ref(db, 'userInfo/' + offer.requesterId + '/acceptedOffer'), null);
            remove(ref(db, 'driverOffers/' + auth.currentUser.uid)).catch((error)=> {
                console.log(error)
            })
            remove(ref(db, 'hitcherOffers/' + offer.requesterId)).catch((error)=> {
                console.log(error)
            })
            remove(ref(db, 'driverOffers/' + offer.requesterId)).catch((error)=> {
                console.log(error)
            })
            remove(ref(db, 'hitcherOffers/' + auth.currentUser.uid)).catch((error)=> {
                console.log(error)
            })
        },
        setTimeStr(time) {
            let hours = ""
            let minutes = ""
            hours = time.split(":")[0]
            minutes = time.split(":")[1]
            let ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            let timeStr = hours + ':' + minutes + ampm
            return timeStr
        },
        acceptOffer(offer) {
            const db = getDatabase();
            const auth = getAuth()
            offer.status = "accepted"
            offer["type"] ="accepter"
            set(ref(db, 'userInfo/' + auth.currentUser.uid + '/acceptedOffer'), offer);
            // this.acceptedOffer = offer
            let request = null
            const dbRef = ref(getDatabase());
            // console.log("HIIIIIIIIIIIIIIIII")
            offer.type = "offerer"
            set(ref(db, 'userInfo/' + offer.uid + '/acceptedOffer'), offer);
            // get(child(dbRef, `driverReqs/${offer.rid}`)).then((snapshot) => {
            //     if (snapshot.exists()) {
            //         request = snapshot.val()
            //         // console.log("REQUEST" + request.uid)
                    
            //     // console.log(snapshot.val());
            //     } else {
            //     // console.log("No data available");
            //     alert("No data available!")
            //     }
            // }).catch((error) => {
            //     console.error(error);
            // });
            // Should delete all other offers from db too
            // console.log(this.acceptedOffer)
            // console.log(offer.oid)
        },
        declineOffer(offer) {
            remove(ref(db, 'driverOffers/' + auth.currentUser.uid + '/' + offer.oid)).catch((error)=> {
                console.log(error)
            })
            remove(ref(db, 'hitcherOffers/' + offer.requesterId + '/' + offer.oid)).catch((error)=> {
                console.log(error)
            })
            set(ref(db, 'userInfo/' + offer.uid + '/rejectedOffer'), offer);
        },
        getPendingCount() {
            let count = 0
            if(this.acceptedOffer != null) {
                return 1
            }
            for(let offer of this.offers) {
                if(offer.status == "pending") {
                    count += 1
                }
            }
            return count
        },
        newReq() {
            this.$router.push('/newReq')
        },
        home() {
            this.$router.push('/')
        },
        profile() {
            this.$router.push('/profile')
        },
        newFav() {
            this.$router.push('/newFav')
        },
        logout(){
            signOut(this.auth).then(() => {
                this.$router.push('/login')
            })
        },
        viewChats(){
            this.$router.push('/chat')
        },
        change() {
            const db = getDatabase()
            if(this.user.type == "driver"){
                this.user.type = "hitcher"
                update(ref(db, 'userTypes/' + this.auth.currentUser.uid), {
                    type: this.user.type
                })
            } else {
                this.user.type = "driver"
                update(ref(db, 'userTypes/' + this.auth.currentUser.uid), {
                    type: this.user.type
                })
            }
            location.reload()
        },
        accountSettings(){
            this.$router.push('/accountsettings')
        }
    },
}
</script>
<style lang="">
    
</style>