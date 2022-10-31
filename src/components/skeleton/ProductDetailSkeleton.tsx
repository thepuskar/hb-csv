export const ProductDetailSkeleton = () => {
  return (
    <div className="w-full p-4 bg-white">
      <div className="h-full border-2 border-white rounded-lg overflow-hidden">
        <div className="h-48 bg-gray-500  w-full object-cover object-center relative">
          <div className="bg-white absolute top-2 left-2 animate-pulse h-6 w-1/4 rounded-md"></div>
          <div className="bg-white absolute top-2 right-2 animate-pulse h-6 w-1/4 rounded-md"></div>
        </div>
        <div className="p-6 bg-white">
          <h1 className="w-full mb-4 h-5 animate-pulse bg-gray-500"></h1>
          <p className="leading-relaxed mb-3 w-full h-2 animate-pulse bg-gray-500"></p>
          <p className="leading-relaxed mb-3 w-full h-2 animate-pulse bg-gray-500"></p>
          <p className="leading-relaxed mb-3 w-full h-2 animate-pulse bg-gray-500"></p>
          <p className="leading-relaxed mb-3 w-full h-2 animate-pulse bg-gray-500"></p>
          <p className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></p>
          <div className="flex items-center flex-wrap mb-6">
            <div className="">
              <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1 rounded-md"></span>
              <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1 rounded-md"></span>
            </div>
            <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1 rounded-md"></span>
          </div>
          <p className="leading-relaxed my-3 w-1/2 h-3 animate-pulse bg-gray-500"></p>
          <p className="leading-relaxed mt-3 w-full h-36 animate-pulse bg-gray-500 rounded-lg"></p>
          <p className="leading-relaxed my-3 w-1/2 h-3 animate-pulse bg-gray-500"></p>
        </div>
        <div className="flex items-center p-6 space-x-3 border-t-2 border-t-gray-300">
          <svg
            className="w-14 h-14 leading-relaxed text-gray-500 dark:text-gray-700"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="w-full">
            <div className="h-4 leading-relaxed animate-pulse bg-gray-500 rounded-full dark:bg-gray-700 w-1/2 mb-2"></div>
            <div className="w-full h-3 leading-relaxed animate-pulse bg-gray-500 rounded-full dark:bg-gray-700"></div>
          </div>
        </div>
        <div className="w-full px-6">
          <div className="w-full h-10 animate-pulse bg-gray-500 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
