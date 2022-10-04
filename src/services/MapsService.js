import axios from "axios";

const MAPS_API_URL = "https://maps.googleapis.com/maps/api/geocode/json";
const API_KEY = "AIzaSyCnf0_2dW7jhXlpL46JqRvrKOFgFQ7tv2k"

class MapsService {
    queryMaps = async (input) => {
        console.log(input)
        try {
            await axios
            // .get(MAPS_API_URL, { params: {"address": input, "key": API_KEY} })
            .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=${API_KEY}`)
            .then((response) => {
                console.log(response.data.results[0].formatted_address)
                return response.data.results[0].formatted_address
            })
            .catch(err => {
                console.log(err)
                return err
            })
        } catch (err) {
            console.log(err)
        }
    }
}
export default new MapsService();