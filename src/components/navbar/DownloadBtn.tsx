import { CSVLink } from 'react-csv'
import { omit } from 'lodash'
import { useStore } from 'store'
import { IProduct } from 'interface'
import { flattenObj } from 'utils'

export const DownloadSheet = () => {
  const staticHeaders = [
    { label: 'Status', key: 'status', id: 'a1' },
    { label: 'AD ID', key: 'ad_id', id: 'ab2' },
    { label: 'Rating', key: 'rating', id: 'ac3' },
    { label: 'Brand', key: 'brand', id: 'a2' },
    { label: 'Seller Name', key: 'seller_name', id: 'a3' },
    { label: 'Contact', key: 'contact', id: 'a4' },
    { label: 'Address', key: 'address', id: 'a5' },
    { label: 'Product URL', key: 'product_url', id: 'a6' },
  ]

  const { products } = useStore()

  const dynamicHeaders = products
    ?.map((product) =>
      product.productAttributeValues?.map((item: any) => ({
        label: item?.attributeName?.replace(/\s+/g, '_').toLowerCase(),
        key: item?.attributeName,
        id: item?.attributeId,
      }))
    )
    .flat()

  const mergedHeaders = [...staticHeaders, ...dynamicHeaders]

  const headers = [...new Map(mergedHeaders.map((item) => [item?.id, item])).values()]?.map(
    (data) => {
      return { label: data?.label, key: data?.key }
    }
  )

  const data = products?.map((product) => {
    return {
      status: 'Active',
      ad_id: product?.ad_Id,
      rating: product?.creatorInfo?.totalRating || '0',
      brand: product?.brandName || 'N/A',
      price: product?.price || 'N/A',
      seller_name: product?.creatorInfo?.createdByName || product?.creatorInfo?.createdBy || 'N/A',
      contact: product?.creatorInfo?.createdBy || 'N/A',
      address: product?.location?.locationDescription || 'N/A',
      product_url: `https://hamrobazaar.com/product/${
        product?.brandName || product?.categoryName
      }/${product?.id}`,
      ...product.productAttributeValues?.map((data) => {
        return {
          [data?.attributeName?.replace(/\s+/g, '_').toLowerCase()]: data?.value,
        }
      }),
    }
  })

  const dynamicData = data?.map((item) => flattenObj(item))

  console.log('hd', headers)

  return (
    <button
      type="button"
      className="bg-indigo-500 hover:bg-indigo-700 transition duration-500 ease-in-out text-white rounded-lg py-2 px-4 text-base font-medium text-center"
    >
      <CSVLink data={dynamicData} headers={headers}>
        Download excel
      </CSVLink>
    </button>
  )
}
