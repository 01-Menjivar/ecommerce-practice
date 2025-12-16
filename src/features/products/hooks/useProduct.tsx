import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/ProductDetailService";


export default function useProduct(id : number ) {
return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
})
}
