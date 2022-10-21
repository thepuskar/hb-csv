import create from 'zustand'
import { dataExists } from 'utils'

import { IProduct } from 'interface'

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


