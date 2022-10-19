import { Carousel } from 'flowbite-react'
import { Table } from './Table'
export const ProductDetail = () => {
  return (
    <div className=" overflow-hidden shadow-lg border-solid transition duration-500 ease-in-out transform hover:shadow-2xl rounded-lg h-90 w-80 md:w-96 cursor-pointer">
      <div className="w-full block h-full">
        {/* <!-- Carousel wrapper --> */}
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={5000}>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
          </Carousel>
        </div>
        <div className="bg-white w-full p-4">
          <p className="text-indigo-500 text-2xl font-medium">Should You Get Online Education?</p>
          <p className="text-gray-800 text-sm font-medium mb-2">
            A comprehensive guide about online education.
          </p>
          <p className="text-gray-600 font-light text-md">
            It is difficult to believe that we have become so used to having instant access to
            information at...
            <button className="inline-flex text-indigo-500">Read More</button>
          </p>
          <div className="flex flex-wrap justify-starts items-center py-3 text-xs text-white font-medium">
            <span className="m-1 px-2 py-1 rounded bg-indigo-500">#online</span>
            <span className="m-1 px-2 py-1 rounded bg-indigo-500">#internet</span>
            <span className="m-1 px-2 py-1 rounded bg-indigo-500">#education</span>
          </div>
          <Table />
          <Table />

          {/* User Detail  */}
          <div className="flex sticky bottom-0 items-center py-3 mt-3 border-t-2">
            <img
              className="w-10 h-10 object-cover rounded-full"
              alt="User avatar"
              src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
            />

            <div className="pl-3">
              <div className="font-medium">Jean Marc</div>
              <div className="flex items-center text-gray-600 text-sm">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Rating star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >
                  73 reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
