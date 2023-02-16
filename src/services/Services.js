import axios, { Axios } from "axios";
import api from '../config/api'

const headersApplicationJson = {
  "Content-Type": "application/json",
};
export const getAllProductServices = (params) => {
  console.log(params, 'dsfgh::::')
  return axios.get(api.ALLPRODUCTS, params, {
    headers:headersApplicationJson
  })
}