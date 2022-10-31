import { convertImageType } from 'utils'
import { useStore } from 'store'

import { NO_IMAGE } from 'constants'
import { IProduct } from 'interface'
import { MdLocationOn } from 'react-icons/md'

interface IProps {
  data: IProduct[] | undefined
  setProductId: (id: string) => void
}

export const ProductCard = (props: IProps) => {
  const { addProduct, products } = useStore()

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
      {props?.data?.map((data: IProduct) => (
        <div
          className="relative mx-auto w-full cursor-pointer"
          key={data?.id}
          onClick={() => props?.setProductId(data?.id)}
        >
          <div className="relative inline-block duration-300 ease-in-out transition-transform transform w-full">
            <div className="shadow p-4 rounded-lg bg-white">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-32">
                <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                  <div className="absolute inset-0 bg-black">
                    {' '}
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
                </div>

                {data?.isHBSelect ? (
                  <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-green-500 text-sm font-medium text-white select-none">
                    HB Select
                  </span>
                ) : null}
                <span
                  onClick={() => addProduct(data)}
                  className="cursor-pointer absolute top-0 right-0 inline-flex mt-2 mr-2 px-3 py-1 rounded-lg z-10 bg-indigo-500 text-sm font-medium text-white select-none"
                >
                  Add to Excel
                </span>
              </div>

              <div className="mt-4">
                <h2
                  className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                  title="New York"
                >
                  {data?.name}
                </h2>
                <p
                  className="mt-2 text-sm text-gray-800 line-clamp-1"
                  title="New York, NY 10004, United States"
                >
                  {data?.description}
                </p>
              </div>

              <div className="mt-2 flex items-center text-sm text-gray-600 ">
                <MdLocationOn className="far fa-clock fa-fw mr-2 text-gray-900" />
                <span className="font-semibold overflow-hidden truncate w-full">
                  {data?.location?.locationDescription}
                </span>
              </div>

              <div className="grid grid-cols-2 mt-2">
                <div className="flex items-center">
                  <p className="ml-2 text-gray-800 line-clamp-1">
                    {data?.creatorInfo?.createdByName}
                  </p>
                </div>

                <div className="flex justify-end">
                  <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                    <span className="text-sm uppercase">रु </span>
                    <span className="text-lg">{data?.price?.toLocaleString()}/-</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
