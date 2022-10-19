import { useState } from 'react'

import { generalData, newProductAttributeValues } from './tableValue'
import { Table, Slider, UserInfo } from 'components'
import data from './data.json'

export const ProductDetail = () => {
  const [readMore, setReadMore] = useState<boolean>(false)

  return (
    <div className="mt-20 overflow-hidden shadow-lg border-solid transition duration-500 ease-in-out transform hover:shadow-2xl rounded-lg h-90 w-80 md:w-96 cursor-pointer">
      <div className="w-full block h-full">
        <Slider productMedia={data?.productMedia} isHBSelect={data?.isHBSelect} />
        <div className="bg-white w-full p-4">
          <p className="text-gray-900 text-xl font-medium">{data?.name}</p>
          <p className="text-gray-600 font-normal text-md flex flex-col">
            <span className={`${readMore ? '' : 'line-clamp-4'}`}>{data?.description}</span>
            <button
              className="inline-flex text-indigo-500"
              onClick={() => setReadMore((curr) => !curr)}
            >
              {readMore ? ' Show less' : ' Read More'}
            </button>
          </p>
          <div className="flex justify-between align-center flex-wrap py-3">
            <div className="flex flex-wrap justify-starts items-center  text-xs text-white font-medium">
              {data?.categoryName && (
                <span className="m-1 px-2 py-1 rounded bg-gray-200 text-gray-900">
                  {data?.categoryName}
                </span>
              )}
              {data?.brandName && (
                <span className="m-1 px-2 py-1 rounded bg-gray-200 text-gray-900">
                  {data?.brandName}
                </span>
              )}
            </div>
            <div className="flex flex-wrap justify-center items-center text-ls font-medium">
              <span className="text-sm font-semibold">रु </span>&nbsp;
              <span className="text-gray-900">{data?.price?.toLocaleString()}</span>
            </div>
          </div>
          <Table data={generalData(data)} title="General" />
          {data?.productAttributeValues && (
            <Table data={newProductAttributeValues(data)} title="Specifications" />
          )}
          <UserInfo userInfo={data?.creatorInfo} />
          <button className="bg-indigo-500 hover:bg-indigo-700 mt-3 transition duration-500 ease-in-out text-white w-full rounded-lg p-2 text-base font-medium text-center">
            Add to Excel
          </button>
        </div>
      </div>
    </div>
  )
}
