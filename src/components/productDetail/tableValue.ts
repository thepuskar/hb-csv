import { renameKeys } from 'utils'
import { IProductAttributeValues } from 'interface'

export const generalData = (data: any) => [
  {
    id: '1',
    label: 'AD ID',
    value: data?.ad_Id,
  },
  {
    id: '2',
    label: 'Location',
    value: data?.location?.locationDescription,
  },
  {
    id: '3',
    label: 'Delivery',
    value: `${data?.delivery ? 'Available' : 'Not Available'}`,
  },
  {
    id: '4',
    label: 'Negotiable',
    value: `${data?.negotiable ? 'Negotiable' : 'Not Negotiable'}`,
  },
  {
    id: '5',
    label: 'Ads Expiry',
    value: data?.expiryDate?.slice(0, 10),
  },
  {
    id: '6',
    label: 'Ads Posted',
    value: data?.createdTime,
  },
]

export const newProductAttributeValues = (data: any) => {
  const keysMap = {
    attributeId: 'id',
    attributeName: 'label',
  }
  return data?.productAttributeValues?.map((item: IProductAttributeValues) =>
    renameKeys(keysMap, item)
  )
}
