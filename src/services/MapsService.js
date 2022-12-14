import axios from "axios";

const MAPS_API_URL = "https://maps.googleapis.com/maps/api/geocode/json";
const API_KEY = "AIzaSyCnf0_2dW7jhXlpL46JqRvrKOFgFQ7tv2k"

class MapsService {
    queryMaps = async (input) => {
        try {
            return axios
            // .get(MAPS_API_URL, { params: {"address": input, "key": API_KEY} })
            .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=${API_KEY}`)
            .then((response) => {
                // console.log(response.data.results[0].plus_code.global_code)
                // localStorage.setItem(response.data.results[0])
                if(response == null){
                    return "failed"
                }
                return response
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