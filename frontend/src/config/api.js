import settings from "./settings";

let url = settings.api.url
export default {
    LOGIN: url + 'auth/login',
    ALLPRODUCTS: url + "products",
    ALLCATEGORY: url + "categories"
}