import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard"
import ProductsSkeleton from "./ProductsSkeleton";


export default function Products() {

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useProducts();

  const products = data?.pages?.flatMap((p) => p.data)

  if (isLoading) {
    return <ProductsSkeleton />
  }

  if (isError) {
    return <div className="flex justify-center items-center h-screen">
      <p className="text-red-600 dark:text-red-400 text-lg">Error al cargar los productos. Por favor, intenta nuevamente más tarde.</p>
    </div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-primary font-bold mb-8 text-gray-800 dark:text-white">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>


      {(hasNextPage && !isFetchingNextPage) && (
        <div className="flex justify-center mt-12">
          <button
            className="text-white flex cursor-pointer p-4 bg-gray-700 rounded-md"
            onClick={() => fetchNextPage()}
          >Cargar más elementos</button>
        </div>
      )
      }

      {
        !hasNextPage && (
          <p
          className="text-white flex justify-center mt-6 font-semibold"
          >No hay más productos</p>
        )
      }


    </div>
  )
}