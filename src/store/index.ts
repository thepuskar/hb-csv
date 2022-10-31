import create from 'zustand'
import { dataExists } from 'utils'

import { IProduct, ISearchParam } from 'interface'

interface ProductState {
  products: IProduct[]
  addProduct: (data: IProduct) => void
}

export const useStore = create<ProductState>((set) => ({
  products: [],
  addProduct: (data: IProduct) => {
    set((state) => ({
      products: dataExists(state?.products, data?.id)
        ? state?.products
        : [...state?.products, data],
    }))
  },
}))

export const useSearchStore = create<any>(
  (
    set: (
      arg0: (state: { searchParams: ISearchParam }) => {
        searchParam: {
          isSearchApplied: boolean
          longitude: number
          latitude: number
          category?: string | undefined
          searchValue: string
        }
      }
    ) => any
  ) => ({
    searchParam: {
      isSearchApplied: false,
      longitude: 0,
      latitude: 0,
      searchValue: '',
    },
    addSearchParam: (data: ISearchParam) =>
      set((state: { searchParams: ISearchParam }) => ({
        searchParam: { ...state?.searchParams, ...data },
      })),
  })
)

