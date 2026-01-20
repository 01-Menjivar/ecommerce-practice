export const API_ROUTES = {
    BASE_URL: "http://localhost:3001",
    PRODUCTS: {
        GET_ALL: (page: number) => `/products?_page=${page}&_per_page=12`,
        GET_BY_ID: (id: number) => `/products/${id}`,
    }

}