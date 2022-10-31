import { useState, useRef, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useOnClickOutside, useDebounce } from 'usehooks-ts'

import { useSearchStore } from 'store'
import { useFetch } from 'hooks'
import { SearchSuggestion } from 'components'
import { SearchIcon, ChevronDown } from 'assets'

interface ICategory {
  id?: string
  name?: string
  image?: string
  count?: number
  isHBSelect?: boolean
  parentCategory?: string
  categories?: ICategory[]
}

export interface ISearchQuery {
  searchValue: string
}

export function SearchBar() {
  const ref = useRef(null)
  const suggestionRef = useRef(null)
  const [showDropDown, setShowDropDown] = useState(false)
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<ICategory>()

  const { searchParam, addSearchParam } = useSearchStore()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ISearchQuery>()

  const debouncedValue = useDebounce<string>(watch()?.searchValue, 300)

  const { data, isLoading } = useFetch('GET_ALL_CATEGORY', '/api/AppData/GetAllCategory', true)

  useOnClickOutside(ref, () => {
    setShowDropDown(false)
  })

  useOnClickOutside(suggestionRef, () => {
    setShowSuggestion(false)
  })

  const onSubmitQuery: SubmitHandler<ISearchQuery> = (data) => {
    addSearchParam({
      ...searchParam,
      searchValue: data?.searchValue,
      isSearchApplied: true,
      category: selectedCategory?.id || '',
    })
    setShowSuggestion(false)
  }

  const selectCategoryHandler = (category?: ICategory) => {
    if (category) setSelectedCategory(category)
    if (!category) setSelectedCategory({})
    setShowDropDown(false)
  }

  useEffect(() => {
    if (debouncedValue?.length > 3 && showSuggestion) return setShowSuggestion(true)

    return () => {
      setShowSuggestion(false)
    }
  }, [debouncedValue])
  return (
    <form
      className="w-full border-solid border-color-red-500 "
      onSubmit={handleSubmit(onSubmitQuery)}
    >
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
            <div className="floatbox scrollbar z-10 w-60 h-96 overflow-y-auto bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
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
        <div className="relative w-full" ref={suggestionRef}>
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search for anythings..."
            autoComplete="off"
            onFocus={() => setShowSuggestion(true)}
            {...register('searchValue', { required: selectedCategory ? false : true })}
          />
          <button
            onClick={() => handleSubmit(onSubmitQuery)}
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-indigo-500 rounded-r-lg border border-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <SearchIcon className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </button>
          {showSuggestion && debouncedValue?.length > 3 && (
            <SearchSuggestion
              searchText={debouncedValue}
              setValue={setValue}
              handleSubmit={handleSubmit}
              onSubmitQuery={onSubmitQuery}
            />
          )}
        </div>
      </div>
    </form>
  )
}
