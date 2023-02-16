import { useDispatch } from "react-redux"
import { AllProductError, AllProductList, AllProductWait } from "../action/Action"
import { Store } from "../store/Store"
import { getAllProductServices } from "./Services"

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