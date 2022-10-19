import { useFetch } from 'hooks'

import { ProductCard, ProductCardSkeleton, ProductDetail } from 'components'

export const ProductList = () => {
  const { data, isLoading } = useFetch(
    'GET_HOME_PRODUCT',
    '/api/Product?PageSize=100&CategoryId=&IsHBSelect=false&PageNumber=1',
    true
  )

  return (
    <div className="mt-12 text-gray-900 font-sans p-6 w-full">
      <div className="w-full flex justify-between items-start relative">
        <div className="flex flex-wrap w-2/3 -mx-2 bg-gray-200 rounded shadow-lg">
          {isLoading ? <ProductCardSkeleton count={9} /> : <ProductCard data={data?.data?.data} />}
        </div>
        <div className="w-1/3 h-[90vh] sticky top-20 right-0 p-4 flex justify-center bg-gray-200 rounded shadow-lg">
          <ProductDetail id={data?.data?.data?.[0]?.id} />
        </div>
      </div>
    </div>
  )
}
