import axios from 'axios';
axios.defaults.headers.common["x-csrf-token"]= "abcdef";
export const api = axios.create({
    baseURL: "https://foodgroup.herokuapp.com"
});
export const url = {
    food_menu: {
        url:"/api/menu",
        method:"GET",
        params:{}
    },
    today_special:{
        url:"/api/today-special",
        method: "GET",
        params:{}
    }
}