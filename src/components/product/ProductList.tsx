import { ProductCard, ProductCardSkeleton } from 'components'

export const ProductList = () => {
  return (
    <div className="antialiased mt-10 text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-stretch -mx-4">
          <ProductCard />
        </div>
      </div>
    </div>
  )
}
