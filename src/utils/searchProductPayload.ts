import { ISearchProducyPayload } from 'interface'

export const searchProductPayload = (data: ISearchProducyPayload) => {
  const PAGE_SIZE = 6

  const payload = {
    pageNumber: data?.pageNumber || 1,
    pageSize: data?.pageSize || PAGE_SIZE,
    latitude: data?.latitude || 0,
    longitude: data?.longitude || 0,
    deviceId: 'chrome-20013fea6bcc820c',
    deviceSource: 'web',
    isHBSelect: false,
    searchParams: {
      searchValue: data?.searchValue || '',
      searchBy: '',
      searchByDistance: 0,
    },
    filterParams: {
      condition: 0,
      priceFrom: 0,
      priceTo: 0,
      isPriceNegotiable: null,
      category: data?.category || '',
      brand: '',
      categoryIds: '',
      brandIds: '',
      advanceFilter: '',
    },
    sortParam: 0,
  }
  const searchPayload = JSON.stringify({
    ...payload,
  })

  return searchPayload
}
