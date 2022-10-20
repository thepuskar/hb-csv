import { useState } from 'react'
import { isEmpty } from 'lodash'

import { useFetch } from 'hooks'
import { generalData, newProductAttributeValues } from './tableValue'
import { Table, Slider, UserInfo, ProductDetailSkeleton } from 'components'

interface IProps {
  id: string
}

export const ProductDetail = (props: IProps) => {
  const [readMore, setReadMore] = useState<boolean>(false)

  const { data, isLoading } = useFetch(
    'GET_HOME_PRODUCT',
    `https://api.hamrobazaar.com/api/Product/${props?.id}`,
    !!props?.id,
    props?.id
  )

  return (
    <div className="shadow-lg scrollbar overflow-scroll border-solid transition duration-500 ease-in-out transform hover:shadow-2xl rounded-lg h-90 w-full cursor-pointer">
      {isLoading ? (
        <ProductDetailSkeleton />
      ) : (
        <div className="w-full block h-full ">
          <Slider
            productMedia={data?.data?.data?.productMedia}
            isHBSelect={data?.data?.data?.isHBSelect}
          />
          <div className="bg-white w-full p-4">
            <p className="text-gray-900 text-xl font-medium">{data?.data?.data?.name}</p>
            <p className="text-gray-600 font-normal text-md flex flex-col">
              <span>
                {data?.data?.data?.description?.length > 200
                  ? data?.data?.data?.description?.slice(0, readMore ? -1 : 200) + ' ...'
                  : data?.data?.data?.description}
              </span>
              {data?.data?.data?.description?.length > 200 && (
                <button
                  className="inline-flex text-indigo-500"
                  onClick={() => setReadMore((curr) => !curr)}
                >
                  {readMore ? ' Show less' : ' Read More'}
                </button>
              )}
            </p>
            <div className="flex justify-between align-center flex-wrap py-3">
              <div className="flex flex-wrap justify-starts items-center  text-xs text-white font-medium">
                {!isEmpty(data?.data?.data?.categoryName) && (
                  <span className="m-1 px-2 py-1 rounded bg-gray-200 text-gray-900">
                    {data?.data?.data?.categoryName}
                  </span>
                )}
                {!isEmpty(data?.data?.data?.brandName) && (
                  <span className="m-1 px-2 py-1 rounded bg-gray-200 text-gray-900">
                    {data?.data?.data?.brandName}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap justify-center items-center text-ls font-medium">
                <span className="text-sm font-semibold">रु </span>&nbsp;
                <span className="text-gray-900">{data?.data?.data?.price?.toLocaleString()}</span>
              </div>
            </div>
            {!isEmpty(data?.data?.data?.productMedia) && (
              <Table data={generalData(data?.data?.data)} title="General" />
            )}
            {!isEmpty(data?.data?.data?.productAttributeValues) && (
              <Table data={newProductAttributeValues(data?.data?.data)} title="Specifications" />
            )}
            <UserInfo userInfo={data?.data?.data?.creatorInfo} />
            <button className="bg-indigo-500 hover:bg-indigo-700 mt-3 transition duration-500 ease-in-out text-white w-full rounded-lg p-2 text-base font-medium text-center">
              Add to Excel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
