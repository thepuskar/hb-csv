import { Carousel } from 'flowbite-react'

import { useStore } from 'store'
import { convertImageType, dataExists } from 'utils'
import { IProduct } from 'interface'
import { NO_IMAGE } from 'constants'

interface IProps {
  data: IProduct
}

export const Slider = (props: IProps) => {
  const { addProduct, products } = useStore()
  return (
    <div className="h-40 sm:h-56 xl:h-64 2xl:h-80">
      {props?.data?.isHBSelect && (
        <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-green-500 text-sm font-medium text-white select-none">
          HB Select
        </span>
      )}
      {props?.data?.productMedia?.length > 1 ? (
        <Carousel slideInterval={5000}>
          {props?.data?.productMedia?.map((img) => (
            <img
              className="w-full h-full object-cover"
              key={img?.id}
              src={convertImageType(img?.locationKey || NO_IMAGE)}
              alt="..."
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = convertImageType(NO_IMAGE)
              }}
            />
          ))}
        </Carousel>
      ) : (
        <>
          {props?.data?.productMedia?.map((img) => (
            <img
              className="w-full h-full object-cover"
              key={img?.id}
              src={convertImageType(img?.locationKey || NO_IMAGE)}
              alt="..."
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = convertImageType(NO_IMAGE)
              }}
            />
          ))}
        </>
      )}
      {!dataExists(products, props?.data?.id) && (
        <span
          onClick={() => addProduct(props?.data)}
          className="absolute top-0 right-0 inline-flex mt-3 mr-3 px-3 py-2 rounded-lg z-10 bg-indigo-500 text-sm font-medium text-white select-none"
        >
          Add to Excel
        </span>
      )}
    </div>
  )
}


