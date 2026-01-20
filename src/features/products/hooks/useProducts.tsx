import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/ProductsService";

export const useProducts = () =>{
    return useInfiniteQuery({
        queryKey: ['products'],
        queryFn: ({pageParam }) => getAllProducts(pageParam),
        getNextPageParam : (lastPage) => (lastPage.next),
        initialPageParam: 1
    });
}