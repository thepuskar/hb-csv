import { useState, useEffect } from 'react'
import { useStore } from 'store'
import { flattenObj } from 'utils'

import { CsvDownloadProps } from 'interface'

export const useDataToConvert = () => {
  const { products } = useStore()

  const [dataToConvert, setDataToConvert] = useState<CsvDownloadProps>({
    data: products,
    filename: 'hb_csv',
    delimiter: ',',
  })

  useEffect(() => {
    const data = products?.map((product) => {
      return {
        Status: 'Active',
        'Ad ID': product?.ad_Id,
        Rating: product?.creatorInfo?.totalRating || '0',
        Brand: product?.brandName || 'N/A',
        Price: product?.price || 'N/A',
        'Seller Name':
          product?.creatorInfo?.createdByName || product?.creatorInfo?.createdBy || 'N/A',
        Contact: product?.creatorInfo?.createdBy || 'N/A',
        Address: product?.location?.locationDescription || 'N/A',
        'Product URL': `https://hamrobazaar.com/product/${
          product?.brandName || product?.categoryName
        }/${product?.id}`,
        ...product.productAttributeValues?.map((data) => {
          return {
            [data?.attributeName]: data?.value || 'N/A',
          }
        }),
      }
    })
    const dynamicData = data?.map((item) => flattenObj(item))

    setDataToConvert((curr) => ({ ...curr, data: dynamicData }))
  }, [products])

  return { dataToConvert }
}
