import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/ProductsService";

export const useProducts = () =>{
    return useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts,
    });
}