import create from 'zustand'
import { IProduct } from 'interface'

interface TodoState {
  products: IProduct[]
  addProduct: (data: IProduct) => void
}

export const useStore = create<TodoState>((set) => ({
  products: [],
  addProduct: (data: IProduct) => {
    set((state) => ({
      products: [...state.products, data],
    }))
  },
}))
