export interface ISkeletonProps {
  count: number
}


export interface IProduct {
  id: string
  name: string
  description: string
  price: number
  categoryId: string
  brandCategoryId: string
  brandName: string
  categoryName: string
  location: {
    locationLatitude: number
    locationLongitude: number
    locationDescription: string
  }
  condition: number
  imageUrl: string
  negotiable: boolean
  delivery: boolean
  locationRadius: boolean
  createdById: string
  expiryDate: Date
  createdOn: Date
  createdTime: string
  modifiedOn: Date
  displayOrder: number
  isSaved: boolean
  status: number
  isHBSelect: boolean
  deal: {
    quantity: number
    offer: number
    dealId: string
    dealName: string
    deal_ProductId: string
    expiryDate: Date
  }
  creatorInfo: {
    createdByName: string
    creatorImg: string
    createdBy: string
    createdById: string
    creatorAdCount: number
    averageRate: number
    hidePhoneNumber: boolean
    totalRating: number
  }
  productAttributeValues: [
    {
      attributeId: string
      attributeName: string
      value: string
    }
  ]
  productMedia: [
    {
      id: string
      mediaType: number
      locationKey: string
      mediaExt: string
      oldLocationKey: boolean
      mediaSize: number
    }
  ]
}
