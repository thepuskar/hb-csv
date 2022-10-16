import { useState } from 'react'
import { useFetch } from 'hooks'
import { convertImageType } from 'utils'

import { Breadcrumb, ProductCardSkeleton } from 'components'
import { IProduct } from 'interface'
import { AiOutlineUser, AiOutlineFieldTime } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

export const ProductCard = () => {
  const [selectedProduct, setSelectedProduct] = useState({})
  const { data, isLoading } = useFetch(
    'GET_HOME_PRODUCT',
    '/api/Product?PageSize=100&CategoryId=&IsHBSelect=false&PageNumber=1',
    true
  )

  console.log('selectedProduct', selectedProduct)

  return (
    <>
      {isLoading ? (
        <ProductCardSkeleton count={4} />
      ) : (
        data?.data?.data?.map((data: IProduct) => (
          <div
            key={data?.id}
            onClick={() => setSelectedProduct((curr) => ({ ...curr, data }))}
            className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 h-full flex cursor-pointer"
          >
            <div className="c-card bg-gray-200 shadow-md hover:shadow-xl rounded-lg overflow-hidden flex flex-col">
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={convertImageType(data?.imageUrl)}
                  alt=""
                />
              </div>
              <div className="p-4 flex-1">
                <span className="inline-block">
                  <Breadcrumb items={[data?.categoryName, data?.brandName]?.filter(Boolean)} />
                </span>
                <h2 className="mt-2 mb-2  font-bold">Purus Ullamcorper Inceptos Nibh</h2>
                <p className="text-sm text-clip line-clamp-2">{data?.description}</p>
                <div className="mt-3 flex items-center">
                  <span className="text-sm font-semibold">रु </span>&nbsp;
                  <span className="font-bold text-xl">{data?.price?.toLocaleString()}/-</span>
                  &nbsp;
                </div>
              </div>
              <div className="px-4 text-xs flex capitalize flex-col ">
                <span className="flex items-center font-semibold text-sm  overflow-hidden truncate w-full  mb-1">
                  <AiOutlineUser className="far fa-address-card fa-fw text-gray-900 mr-2" />
                  {data?.creatorInfo?.createdByName}
                </span>
                <span className="flex items-center">
                  <AiOutlineFieldTime className="far fa-clock fa-fw mr-2 text-gray-900" />
                  {data?.createdTime}
                </span>
              </div>
              <div className="p-4 flex items-center text-sm text-gray-600 ">
                <MdLocationOn className="far fa-clock fa-fw mr-2 text-gray-900" />
                <span className="font-semibold overflow-hidden truncate w-full">
                  {data?.location?.locationDescription}
                </span>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  )
}
