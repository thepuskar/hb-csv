import { generateRandNumArray } from 'utils'
import { ISkeletonProps } from 'interface'

export const ProductCardSkeleton = ({ count = 4 }: ISkeletonProps) => {
  return (
    <>
      {generateRandNumArray(count)?.map((count) => (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4" key={count}>
          <div className="h-full border-2 border-white rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-500  w-full object-cover object-center"></div>
            <div className="p-6 bg-white">
              <h2 className="bg-white animate-pulse h-4 w-1/4 mb-2"></h2>
              <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
              <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-500"></p>
              <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-500"></p>
              <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-500"></p>
              <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-500"></p>
              <div className="flex items-center flex-wrap mb-6">
                <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-16 md:w-32 sm:w-24 inline-flex items-center md:mb-2 lg:mb-0"></a>
                <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
              </div>
              <p className="leading-relaxed my-3 w-1/2 h-3 animate-pulse bg-gray-500"></p>
              <p className="leading-relaxed mt-3 w-full h-3 animate-pulse bg-gray-500"></p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
