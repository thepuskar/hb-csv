import { Carousel } from 'flowbite-react'

import { convertImageType } from 'utils'
import { IProductMedia } from 'interface'

interface IProps {
  productMedia: IProductMedia[]
  isHBSelect: boolean
}

export const Slider = (props: IProps) => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      {!props?.isHBSelect && (
        <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-green-500 text-sm font-medium text-white select-none">
          HB Select
        </span>
      )}
      <Carousel slideInterval={5000}>
        {props?.productMedia?.map((img) => (
          <img key={img?.id} src={convertImageType(img?.locationKey)} alt="..." />
        ))}
      </Carousel>
      <span className="absolute top-0 right-0 inline-flex mt-3 mr-3 px-3 py-2 rounded-lg z-10 bg-indigo-500 text-sm font-medium text-white select-none">
        Add to Excel
      </span>
    </div>
  )
}
