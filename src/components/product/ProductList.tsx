import { useState, useEffect } from 'react'
import { useFetch } from 'hooks'

import { ProductCard, ProductCardSkeleton, ProductDetail } from 'components'

export const ProductList = () => {
  const [productId, setProductId] = useState<string>('')
  const { data, isLoading } = useFetch(
    'GET_HOME_PRODUCT',
    '/api/Product?PageSize=100&CategoryId=eb9c8147-07c0-4951-a962-381cdb400e37&IsHBSelect=false&PageNumber=1',
    true
  )

  useEffect(() => {
    setProductId(data?.data?.data?.[0]?.id)
  }, [isLoading, data?.data?.data])

  return (
    <div className="mt-12 text-gray-900 font-sans p-6 w-full">
      <div className="w-full flex justify-between items-start relative">
        <div className="flex flex-wrap w-2/3 -mx-2 bg-gray-200 rounded shadow-lg">
          {isLoading ? (
            <ProductCardSkeleton count={9} />
          ) : (
            <ProductCard setProductId={setProductId} data={data?.data?.data} />
          )}
        </div>
        <div className="w-1/3 h-[90vh] sticky top-20 right-0 p-4 flex justify-center bg-gray-200 rounded shadow-lg">
          <ProductDetail id={productId} />
        </div>
      </div>
    </div>
  )
}
