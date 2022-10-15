import { ProductCard } from 'components'

export const ProductList = () => {
  return (
    <div className="antialiased  text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <ProductCard />
        </div>
      </div>
    </div>
  )
}
