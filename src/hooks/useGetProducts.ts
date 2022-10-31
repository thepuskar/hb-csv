import { useState, useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'

import { useSearchStore } from 'store'
import { getApi, postApi, searchProductPayload } from 'utils'
import { IProduct } from 'interface'

export const useGetInfiniteProducts = () => {
  const [products, setProducts] = useState<IProduct[]>()
  const [payload, setPayload] = useState<any>()
  const { searchParam } = useSearchStore()

  const fetchProducts = async ({ pageParam = 1 }) => {
    return await getApi(`/api/Product?PageSize=6&PageNumber=${pageParam}`)
  }

  useEffect(() => {
    if (searchParam?.isSearchApplied) {
      const pack = searchProductPayload(searchParam)
      setPayload(pack)
    }
  }, [searchParam])

  // const postSearchQuery = async ({ pageParam = 1 }) => { }
  const postData = async ({ pageParam = 1 }) => {
    const parsePayload = JSON.parse(payload)
    const jdata = JSON.stringify({
      ...parsePayload,
      pageNumber: pageParam,
    })

    const res = await postApi('/api/Search/Products', jdata)
    return res
  }

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching, isFetchingNextPage } =
    useInfiniteQuery(
      [searchParam?.isSearchApplied ? 'products' : payload, payload],
      searchParam?.isSearchApplied ? postData : fetchProducts,
      {
        getNextPageParam: (lastPage: any, pages: any) => {
          const totalRecords = pages[0]?.meta?.totalPages || pages[0]?.totalPages
          if (lastPage?.meta) {
            if (pages?.length === totalRecords) return undefined
            return pages?.length + 1
          }
          if (pages?.length === totalRecords) return undefined
          return pages?.length + 1
        },
      }
    )

  useEffect(() => {
    if (!isFetching) {
      setProducts(data?.pages?.map((result: any) => result?.data?.data).flat())
    }
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, data])

  return { data, isLoading, isFetching, products, fetchNextPage, hasNextPage, isFetchingNextPage }
}
