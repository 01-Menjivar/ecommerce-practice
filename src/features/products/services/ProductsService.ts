import axios from "axios";
import { API_ROUTES } from "../../../config/api";
import type { Product } from "../../../types";

export const getAllProducts = async () =>{
    const url = API_ROUTES.BASE_URL + API_ROUTES.PRODUCTS.GET_ALL;
    const {data} = await axios.get<Product[]>(url);
    return data;
}