import { useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useOnClickOutside } from 'usehooks-ts';

import { useFetch } from 'hooks';

import { SearchIcon, ChevronDown } from 'assets';

interface ICategory {
  id?: string;
  name?: string;
  image?: string;
  count?: number;
  isHBSelect?: boolean;
  parentCategory?: string;
  categories?: ICategory[];
}

interface ISearchQuery {
  searchValue: string;
}

export function SearchBar() {
  const ref = useRef(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchQuery>();

  const { data, isLoading } = useFetch('GET_ALL_CATEGORY', '/api/AppData/GetAllCategory');

  useOnClickOutside(ref, () => {
    setShowDropDown(false);
  });

  const onSubmitQuery: SubmitHandler<ISearchQuery> = (data) => {
    console.log(data);
  };

  const selectCategoryHandler = (category?: ICategory) => {
    if (category) setSelectedCategory(category);
    if (!category) setSelectedCategory({});
    setShowDropDown(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitQuery)}>
      <div className="flex w-full">
        <div className="relative min-w-fit" ref={ref}>
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
            {selectedCategory && selectedCategory?.name ? selectedCategory?.name : 'All categories'}{' '}
            <ChevronDown className="ml-1 w-4 h-4" />
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
                      onClick={() => selectCategoryHandler()}
                      type="button"
                      className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      All categories
                    </button>
                  </li>
                  {data?.data?.data?.map((category: ICategory) => (
                    <li key={category?.id}>
                      <button
                        onClick={() => selectCategoryHandler(category)}
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
            autoComplete="off"
            {...register('searchValue', { required: selectedCategory ? false : true })}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <SearchIcon className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
