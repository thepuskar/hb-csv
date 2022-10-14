import { useFetch } from 'hooks';
import { ListSkeleton } from 'components';

interface ISearchSuggestion {
  searchText: string;
}

interface ISearchSuggestionData {
  disabled: boolean;
  id: string;
  selected: boolean;
  text: string;
  type: any;
}

export const SearchSuggestion = ({ searchText }: ISearchSuggestion) => {
  const { data, isLoading } = useFetch(
    'GET_SEARCH_SUGGESTION',
    `api/Product/Autocomplete?searchText=${searchText}`,
    !!searchText,
    searchText
  );

  return (
    <>
      <div className="floatbox w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {isLoading ? (
          <ListSkeleton count={5} />
        ) : (
          <>
            {data?.data?.data?.results?.map((list: ISearchSuggestionData) => (
              <p
                key={list?.id}
                className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                {list?.text}
              </p>
            ))}
          </>
        )}
      </div>
    </>
  );
};
