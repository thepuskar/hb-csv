import { convertImageType } from 'utils'

import { Breadcrumb } from 'components'
import { NO_IMAGE } from 'constants'
import { IProduct } from 'interface'
import { AiOutlineUser, AiOutlineFieldTime } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

interface IProps {
  data: IProduct[]
}

export const ProductCard = (props: IProps) => {
  return (
    <>
      {props?.data?.map((data: IProduct) => (
        <div
          key={data?.id}
          className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4 h-full flex cursor-pointer "
        >
          <div className="c-card border-2 border-white bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden flex flex-col w-full h-full">
            <div className="relative pb-48 overflow-hidden border-none">
              {data?.isHBSelect && (
                <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-1 rounded-lg z-10 bg-green-500 text-sm font-medium text-white select-none">
                  HB Select
                </span>
              )}
              <img
                className="absolute inset-0 h-full w-full object-cover border-none"
                src={convertImageType(data?.imageUrl || NO_IMAGE)}
                alt=""
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null
                  currentTarget.src = convertImageType(NO_IMAGE)
                }}
              />
            </div>
            <div className="p-3 flex-1">
              <span className="inline-block">
                <Breadcrumb items={[data?.categoryName, data?.brandName]?.filter(Boolean)} />
              </span>
              <h2 className="mt-2 mb-2  font-bold line-clamp-2">{data?.name}</h2>
              <p className="text-sm text-clip line-clamp-2">{data?.description}</p>
              <div className="mt-3 flex items-center">
                <span className="text-sm font-semibold">रु </span>&nbsp;
                <span className="font-bold text-xl">{data?.price?.toLocaleString()}/-</span>
                &nbsp;
              </div>
            </div>
            <div className="px-3 text-xs flex capitalize flex-col ">
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
      ))}
    </>
  )
}
