export type Product ={
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
    image: string;
    stock: number;
    rating: number;
}

export type CartItem = {
    product: Product;
    quantity: number;
}