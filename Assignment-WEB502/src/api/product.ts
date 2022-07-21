import Product from "../model/product";
import instance from "./instance";

export const createProduct = (product: Product) => {
    const url = "/products"
    return instance.post(url, product)
}

export const getProducts = () => {
    const url = "/products"
    return instance.get(url)
}