import axios from "axios";
import { API_ROUTES } from "../../../config/api";
import type { PaginatedResponse, Product} from "../../../types";

export const getAllProducts = async (page: number) =>{
    const url = API_ROUTES.BASE_URL + API_ROUTES.PRODUCTS.GET_ALL(page);
    const {data} = await axios.get<PaginatedResponse<Product>>(url);
    return data;
}