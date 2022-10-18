import axios from "axios";

// const REGISTER_API_URL = "http://localhost:8080/users";
// const AUTH_API_URL = "http://localhost:8080/users/search";

class UserService {
    // registerUser = async (user) => {
    //     return axios
    //         .post(REGISTER_API_URL, user)
    //         .then((response) => {
    //             localStorage.clear();
    //             sessionStorage.clear();
    //             // localStorage.setItem("tempPass", user.password);
    //             // localStorage.setItem("user", JSON.stringify(response.data));
    //             // localStorage.setItem("notLoggedIn", "")
    //             // don't need to do above, above was created for the sake of RegisterBusiness

    //             // console.log(localStorage.getItem("user"));
    //             // return response.data;
    //         })
    //         .catch((err) => {
    //             // this.signOut();
    //             return "failed";
    //         });
    // };

    // authenticate = async (user) => {
    //     return axios
    //         .post(AUTH_API_URL, user)
    //         .then((response) => {
    //             sessionStorage.setItem("user", JSON.stringify(response.data));
    //             // return response.data;
    //         })
    //         .catch((err) => {
    //             // throw err;
    //             return "failed";
    //         });
    // };

    // signOut() {
    //     // localStorage.clear();
    //     // localStorage.removeItem("notLoggedIn")
    //     // localStorage.removeItem("tempPass")
    //     sessionStorage.removeItem("user");
    // }

    // getCurrentUser() {
    //     return JSON.parse(sessionStorage.getItem("user"));
    // }

    // isLoggedIn() {
    //     // if (localStorage.getItem("user") === null || localStorage.getItem("notLoggedIn") == "") {
    //     if (sessionStorage.getItem("user") === null) {
    //         return false;
    //     }
    //     return true;
    // }

}
export default new UserService();