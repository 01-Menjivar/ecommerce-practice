import axios from "axios";
import { API_ROUTES } from "../../../config/api";
import type { Product } from "../../../types";

export const getProductById = async (id: number) => {
    const url = API_ROUTES.BASE_URL + API_ROUTES.PRODUCTS.GET_BY_ID(id);
    const {data} = await axios.get<Product>(url);
    return data;
}