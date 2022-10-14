import { useQuery } from '@tanstack/react-query';
import { getApi } from 'utils';



export const useFetch = (
  uniqueKey: string,
  URL: string,
  enabled: boolean = false,
  queryKey: string = ''
) => {
  const queryFnc = async () => {
    return await getApi(URL);
  };
  const { error, isLoading, data, refetch, isError, isSuccess } = useQuery(
    [uniqueKey, queryKey],
    queryFnc,
    {
      retry: false,
      enabled,
    }
  );
  return { error, isLoading, data, refetch, isError, isSuccess };
};
