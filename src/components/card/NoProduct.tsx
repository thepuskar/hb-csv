import { ImFilesEmpty } from 'react-icons/im'

export const NoProduct = () => {
  return (
    <div className="container flex flex-wrap justify-between items-center mx-auto bg-white rounded-md dark:bg-slate-500 h-[85vh]">
      <div className="text-center dark:border-slate-100 rounded-md w-full p-20 flex justify-center flex-col items-center">
        <ImFilesEmpty className="bx bxs-contact h-12 w-12 bx-lg mb-5 dark:text-white" />
        <p className="text-xl mb-2 uppercase font-bold dark:text-white">Product Not Found</p>
        <span className="text-m text-slate-400 block mb-10 dark:text-slate-50">
          Please try to refresh the page.
        </span>
        <button
          onClick={() => window.location.reload()}
          className="bg-indigo-400 rounded px-5 py-2 text-white hover:bg-indigo-600"
        >
          Refresh Page
        </button>
      </div>
    </div>
  )
}
