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
    return <div className="flex min-h-[50vh] items-center justify-center">
      <p className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-4 text-lg text-[var(--danger)] shadow-[var(--shadow)]">Error al cargar los productos. Por favor, intenta nuevamente más tarde.</p>
    </div>
  }

  return (
    <div className="page-enter">
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">Coleccion destacada</p>
        <h2 className="font-display text-5xl leading-[1.05] text-[var(--text)]">Nuestros Productos</h2>
        <p className="mt-2 max-w-2xl text-[var(--text-muted)]">Explora una seleccion curada con un diseno pensado para una experiencia rapida, clara y elegante.</p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>


      {(hasNextPage && !isFetchingNextPage) && (
        <div className="flex justify-center mt-12">
          <button
            className="cursor-pointer rounded-xl border border-[var(--primary)] bg-[var(--primary)] px-5 py-3 font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-strong)]"
            onClick={() => fetchNextPage()}
          >Cargar más elementos</button>
        </div>
      )
      }

      {
        !hasNextPage && (
          <p
          className="mt-6 flex justify-center text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]"
          >No hay más productos</p>
        )
      }


    </div>
  )
}