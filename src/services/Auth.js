import { async } from "@firebase/util"
import { useDispatch } from "react-redux"
import { AllCategories, AllCategoriesError, AllProductError, AllProductList, AllProductWait, LoginAction1, LoginError } from "../action/Action"
import { Store } from "../store/Store"
import { getAllCategoriesService, getAllProductServices, loginService } from "./Services"

export const login = async (params) => {
    const dispatch = Store.dispatch
    const login = (data) => dispatch(LoginAction1(data))
    const loginError = (data) => dispatch(LoginError(data))
    loginService(params).then(res => {
        console.log(res, 'loginService')
        login(res)
        loginError(res.message)
    })
}
export const getAllProduct = async () => {
    const dispatch = Store.dispatch
    const storeProduct = (data) => dispatch((AllProductList(data)))
    const storeProductError = (data) => dispatch((AllProductError(data)))
    const storeProductWait = (data) => dispatch((AllProductWait(data)))
    storeProductWait(true)
    await getAllProductServices().then(res => {
        console.log(res.data, 'res::::::::')
        storeProduct(res.data)
        storeProductWait(false)
    }).catch((error) => {
        storeProductError(error.message)
    })
}
export const getAllCategories = async () => {
    const dispatch = Store.dispatch
    const allCategoriesError = (data) => dispatch(AllCategoriesError(data))
    const allCategories = (data) => dispatch(AllCategories(data))
    await getAllCategoriesService().then(res => {
        console.log(res, 'getAllCategoriesService')
        allCategories(res.data)
    })
}