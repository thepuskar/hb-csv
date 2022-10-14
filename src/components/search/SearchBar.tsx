import { useState, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useFetch } from 'hooks';

interface ICategory {
  id: string;
  name: string;
  image: string;
  count: number;
  isHBSelect: boolean;
  parentCategory: string;
  categories: ICategory[];
}

export function SearchBar() {
  const ref = useRef(null);
  const [showDropDown, setShowDropDown] = useState(false);

  const { data, isLoading } = useFetch('GET_ALL_CATEGORY', '/api/AppData/GetAllCategory');
  console.log('data', data);
  useOnClickOutside(ref, () => {
    setShowDropDown(false);
  });

  return (
    <form>
      <div className="flex w-full">
        <div className="relative w-44" ref={ref}>
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Your Email
          </label>
          <button
            onClick={() => setShowDropDown((curr) => !curr)}
            data-dropdown-toggle="dropdown"
            className="w-full flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
            type="button"
          >
            All categories{' '}
            <svg
              aria-hidden="true"
              className="ml-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {showDropDown && (
            <div
              className="scrollbar z-10 w-60 h-96 overflow-y-auto bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              style={{
                position: 'absolute',
                inset: '0px auto auto 0px',
                margin: '0px',
                transform: 'translate(0px, 44px)',
              }}
            >
              {!isLoading && (
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      All categories
                    </button>
                  </li>
                  {data?.data?.data?.map((category: ICategory) => (
                    <li key={category?.id}>
                      <button
                        type="button"
                        className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {category?.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search for anythings..."
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
