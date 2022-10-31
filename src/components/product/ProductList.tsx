import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { isEmpty } from 'lodash'

import { useGetInfiniteProducts } from 'hooks'

import { ProductCard, ProductCardSkeleton, NoProduct, ProductDetail } from 'components'

export const ProductList = () => {
  const [productId, setProductId] = useState<string>('')

  const { products, fetchNextPage, hasNextPage, isLoading } = useGetInfiniteProducts()

  useEffect(() => {
    if (!isLoading) if (!isEmpty(products)) setProductId(products![0]?.id)
  }, [isLoading, products])

  return (
    <div className="mt-12 text-gray-900 font-sans p-6 w-full">
      <div className="w-full flex justify-between items-start relative">
        <div className="flex sticky top-[4.5em] flex-wrap w-2/3 -mx-2 bg-gray-200 rounded shadow-lg">
          {isLoading ? (
            <ProductCardSkeleton count={6} />
          ) : !isEmpty(products) ? (
            <InfiniteScroll
              loadMore={() => fetchNextPage()}
              hasMore={hasNextPage}
              loader={
                <div
                  key={0}
                  className="flex sticky top-[4.5em] flex-wrap w-full -mx-2 bg-gray-200 rounded shadow-lg"
                >
                  <ProductCardSkeleton count={3} />
                </div>
              }
              useWindow={true}
            >
              <ProductCard setProductId={setProductId} data={products} />
            </InfiniteScroll>
          ) : (
            <NoProduct />
          )}
        </div>
        <div className="w-1/3 h-[90vh] sticky top-[4.5em] right-0 p-4 flex justify-center bg-gray-200 rounded shadow-lg">
          <ProductDetail id={productId} />
        </div>
      </div>
    </div>
  )
}
