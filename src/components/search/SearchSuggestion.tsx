import { UseFormSetValue, UseFormHandleSubmit, SubmitHandler } from 'react-hook-form'
import { useFetch } from 'hooks'
import { ListSkeleton, ISearchQuery } from 'components'

interface ISearchSuggestion {
  searchText: string
  setValue: UseFormSetValue<ISearchQuery>
  handleSubmit: UseFormHandleSubmit<ISearchQuery>
  onSubmitQuery: SubmitHandler<ISearchQuery>
}

interface ISearchSuggestionData {
  disabled: boolean
  id: string
  selected: boolean
  text: string
  type: any
}

export const SearchSuggestion = ({
  searchText,
  setValue,
  handleSubmit,
  onSubmitQuery,
}: ISearchSuggestion) => {
  const { data, isLoading } = useFetch(
    'GET_SEARCH_SUGGESTION',
    `api/Product/Autocomplete?searchText=${searchText}`,
    !!searchText,
    searchText
  )
  console.log('data?.data?.data?.results?.length > 0', data?.data?.data?.results)
  return (
    <>
      {isLoading ? (
        <div className="floatbox  py-2 w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <ListSkeleton count={5} />
        </div>
      ) : data?.data?.data?.results?.length === 0 ? null : (
        <div className="floatbox  py-2 w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {data?.data?.data?.results?.map((list: ISearchSuggestionData) => (
            <p
              key={list?.id}
              onClick={() => {
                setValue('searchValue', list?.text)
                handleSubmit(onSubmitQuery)()
              }}
              className="block py-2 px-4 w-full cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white "
            >
              {list?.text}
            </p>
          ))}
        </div>
      )}
    </>
  )
}
