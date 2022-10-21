import { IProduct } from 'interface'

export function dataExists(arr: IProduct[], id: string) {
  return arr.some(function (el) {
    return el?.id === id
  })
}
