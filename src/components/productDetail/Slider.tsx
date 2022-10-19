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
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      {props?.isHBSelect && (
        <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-green-500 text-sm font-medium text-white select-none">
          HB Select
        </span>
      )}
      {props?.productMedia?.length <= 1 ? (
        <MappedImg productMedia={props?.productMedia} />
      ) : (
        <Carousel slideInterval={5000}>
          <MappedImg productMedia={props?.productMedia} />
        </Carousel>
      )}

      <span className="absolute top-0 right-0 inline-flex mt-3 mr-3 px-3 py-2 rounded-lg z-10 bg-indigo-500 text-sm font-medium text-white select-none">
        Add to Excel
      </span>
    </div>
  )
}

interface IProductMediaProps {
  productMedia: IProductMedia[]
}

const MappedImg = (props: IProductMediaProps) => {
  return (
    <>
      {props?.productMedia?.map((img) => (
        <img
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
  )
}
