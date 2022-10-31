import { generateRandNumArray } from 'utils'
import { ISkeletonProps } from 'interface'

export const ProductCardSkeleton = ({ count = 4 }: ISkeletonProps) => {
  return (
    <>
      {generateRandNumArray(count)?.map((count) => (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4" key={count}>
          <div className="h-full border-2 border-white rounded-lg overflow-hidden">
            <div className="h-32 bg-gray-500 w-full"></div>
            <div className="p-2 bg-white">
              <h1 className="w-full mb-3 h-5 animate-pulse bg-gray-500"></h1>
              <p className="leading-relaxed mt-3 w-full h-3 animate-pulse bg-gray-500"></p>
              <p className="leading-relaxed my-3 w-1/2 h-3 animate-pulse bg-gray-500"></p>
              <p className="leading-relaxed my-3 w-full h-3 animate-pulse bg-gray-500"></p>
              <div className="grid grid-cols-2 mt-2">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="rounded-full animate-pulse leading-relaxed w-6 h-6 md:w-8 md:h-8 bg-gray-500"></div>
                  </div>
                  <p className="ml-2 leading-relaxed w-full h-3 animate-pulse bg-gray-500"></p>
                </div>

                <div className="flex justify-end items-center">
                  <p className="leading-relaxed w-1/3 h-3 animate-pulse bg-gray-500"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
