import { CSVLink } from 'react-csv'
import { useStore } from 'store'
import { IProduct } from 'interface'

export const DownloadSheet = () => {
  const headers = [
    { label: 'Status', key: 'status' },
    { label: 'Type', key: 'type' },
    { label: 'AD ID', key: 'ad_id' },
    { label: 'Rating', key: 'rating' },
    { label: 'Brand', key: 'brand' },
    { label: 'Make Year', key: 'make_year' },
    { label: 'Engine (CC)', key: 'engine' },
    { label: 'Fuel', key: 'fuel' },
    { label: 'KM Run', key: 'Km_run' },
    { label: 'Mileage', key: 'mileage' },
    { label: 'Color', key: 'color' },
    { label: 'Price', key: 'price' },
    { label: 'Seller Name', key: 'seller_name' },
    { label: 'Contact', key: 'contact' },
    { label: 'Address', key: 'address' },
    { label: 'Product URL', key: 'product_url' },
  ]

  const { products } = useStore()

  const newData = (products: IProduct[]) =>
    products.map((product: any) => ({
      status: 'Active',
      type:
        product?.productAttributeValues?.attributeName === '14807a42-b7bb-4f36-8c63-ff61a98a4db0' &&
        product?.productAttributeValues?.value,
      ad_id: product?.ad_Id,
      rating: product?.creatorInfo?.totalRating || '',
      brand: product?.brandName || '',
      make_year:
        (product?.productAttributeValues?.attributeId === '1ecdf626-0c20-4a24-99e7-612f2861532f' &&
          product?.productAttributeValues?.value) ||
        '',
      engine:
        (product?.productAttributeValues?.attributeId === 'ef65d0c6-b2ed-4959-9031-c164f0392446' &&
          product?.productAttributeValues?.value) ||
        '',
      Km_run:
        (product?.productAttributeValues?.attributeId === 'b27c3527-0c19-4b90-93a8-f8b8334c6618' &&
          product?.productAttributeValues?.value) ||
        '',
      mileage:
        (product?.productAttributeValues?.attributeId === 'f4809f86-3c89-4b96-abe4-bb5b9922851b' &&
          product?.productAttributeValues?.value) ||
        '',
      color:
        (product?.productAttributeValues?.attributeId === 'c357cf58-7099-4f7e-b393-420f68898c87' &&
          product?.productAttributeValues?.value) ||
        '',
      price: product?.price || '',
      seller_name: product?.creatorInfo?.createdByName || product?.creatorInfo?.createdBy || '',
      contact: product?.creatorInfo?.createdBy || '',
      address: product?.location?.locationDescription || '',
      product_url: `https://hamrobazaar.com/product/${
        product?.brandName || product?.categoryName
      }/${product?.id}`,
    }))

  return (
    <button
      type="button"
      className="bg-indigo-500 hover:bg-indigo-700 transition duration-500 ease-in-out text-white rounded-lg py-2 px-4 text-base font-medium text-center"
    >
      <CSVLink data={newData(products)} headers={headers}>
        Download excel
      </CSVLink>
    </button>
  )
}
