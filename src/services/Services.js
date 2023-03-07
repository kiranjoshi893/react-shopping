import axios, { Axios } from "axios";
import api from '../config/api'

const headersApplicationJson = {
  "Content-Type": "application/json",
};

export const loginService = (params) => {
  console.log(params, 'loginService1')
  return axios.post(api.LOGIN, params, {
    headers: headersApplicationJson
  })
}
export const getAllProductServices = (params) => {
  console.log(params, 'dsfgh::::')
  return axios.get(api.ALLPRODUCTS, params, {
    headers:headersApplicationJson
  })
}
export const getAllCategoriesService = (params) => {
  return axios.get(api.ALLCATEGORY, params, {
    headers: headersApplicationJson
  })
}
export const filterByCategoryProducts = (params) => {
  console.log(params, 'filterByCategoryProducts')
  return axios.get(api.ALLPRODUCTS + params, {
    headers: headersApplicationJson
  })
}