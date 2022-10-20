import { Carousel } from 'flowbite-react'

import { convertImageType } from 'utils'
import { IProductMedia } from 'interface'
import { NO_IMAGE } from 'constants'

interface IProps {
  productMedia: IProductMedia[]
  isHBSelect: boolean
}


export const Slider = (props: IProps) => {
  return (
    <div className="h-40 sm:h-56 xl:h-64 2xl:h-80">
      {props?.isHBSelect && (
        <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-green-500 text-sm font-medium text-white select-none">
          HB Select
        </span>
      )}
      {props?.productMedia?.length > 1 ? (
        <Carousel slideInterval={5000}>
          {props?.productMedia?.map((img) => (
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
          {props?.productMedia?.map((img) => (
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
      <span className="absolute top-0 right-0 inline-flex mt-3 mr-3 px-3 py-2 rounded-lg z-10 bg-indigo-500 text-sm font-medium text-white select-none">
        Add to Excel
      </span>
    </div>
  )
}


