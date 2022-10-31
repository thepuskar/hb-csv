import { useState, useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'

import { getApi } from 'utils'
import { IProduct } from 'interface'

export const useGetInfiniteProducts = () => {
  const [products, setProducts] = useState<IProduct[]>()
  const fetchProducts = async ({ pageParam = 1 }) => {
    return await getApi(
      `/api/Product?PageSize=6&CategoryId=eb9c8147-07c0-4951-a962-381cdb400e37&IsHBSelect=false&PageNumber=${pageParam}`
    )
  }
  // const postSearchQuery = async ({ pageParam = 1 }) => { }
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(['projects'], fetchProducts, {
    getNextPageParam: (lastPage: any, pages: any) => {
      const totalRecords = pages[0]?.meta?.totalPages || pages[0]?.totalPages
      if (lastPage?.meta) {
        if (pages?.length === totalRecords) return undefined
        return pages?.length + 1
      }
      if (pages?.length === totalRecords) return undefined
      return pages?.length + 1
    },
  })

  useEffect(() => {
    if (!isFetching) {
      setProducts(data?.pages?.map((result: any) => result?.data?.data).flat())
    }
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, data])

  return { data, isLoading, isFetching, products, fetchNextPage, hasNextPage, isFetchingNextPage }
}
