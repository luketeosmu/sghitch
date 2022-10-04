<template lang="">
    <div>
        <a href="#" class="card relative p-6 mx-5 mb-5 w-72 h-44 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-red-200">
            <ul class="text-lg font-bold mb-3">
                <li>Time: {{ time }}</li>
                <li>Pax: {{ pax }} persons</li>
                <li class="font-normal text-sm">Hitcher: {{ hitcher }}</li>
            </ul>
            <div class="inline-flex items-center mb-5">
                <button href="#" class= " py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            From: {{ from }}
                </button>
                <svg aria-hidden="true" class="mx-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <button href="#" class= " py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        To: {{ to }}
                </button>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    name: "Request",
    data() {
        return {
            hitcher: "Luke Teo",
            time: "08:00",
            pax: 2,
            from: "730308",
            to: "529498"
        }
    }
}
</script>
<style lang="">
    
</style>