function callAPI() {
    const API_KEY = "AIzaSyCnf0_2dW7jhXlpL46JqRvrKOFgFQ7tv2k"
    const input = "44 gardenia road singapore 578838"
    axios
        // .get(MAPS_API_URL, { params: {"address": input, "key": API_KEY} })
        .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=${API_KEY}`)
        .then((response) => {
            console.log("hello_service")
            console.log(response)
            // return response
        })
        .catch(err => {
            console.log(err)
            // return "failed"
        })
}