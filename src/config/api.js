import settings from "./settings";

let url = settings.api.url
export default {
    LOGIN: url + 'login',
    SIGNUP: url + 'signup',
    ALLPRODUCTS: url + "products",
    ALLCATEGORY: url + "categories"
}