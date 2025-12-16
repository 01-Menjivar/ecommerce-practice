export const API_ROUTES = {
    BASE_URL: "http://localhost:3001",
    PRODUCTS: {
        GET_ALL: "/products",
        GET_BY_ID: (id: number) => `/products/${id}`,
    }

}