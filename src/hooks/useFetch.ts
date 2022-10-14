import { useQuery } from '@tanstack/react-query';
import { getApi } from 'utils';

export const useFetch = (uniqueKey: string, URL: string) => {
  const queryFnc = async () => {
    return await getApi(URL);
  };
  const { error, isLoading, data, refetch, isError, isSuccess } = useQuery([uniqueKey], queryFnc, {
    retry: false,
  });
  return { error, isLoading, data, refetch, isError, isSuccess };
};
