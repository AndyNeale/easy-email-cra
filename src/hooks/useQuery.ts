import qs from 'qs';
import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export function useQuery<T extends { [key: string]: any }>(): T & {
  patchQuery: (params: T) => string;
} {
  const { push } = useHistory();
  const { search } = useLocation();

  const query = useMemo(() => {
    return qs.parse(search, {
      ignoreQueryPrefix: true,
    }) as any as { [key: string]: any };
  }, [search]);

  const patchQuery = useCallback(
    (params: T) => {
      const newSearch = qs.stringify(
        {
          ...query,
          ...params,
        },
        {
          addQueryPrefix: true,
        }
      );

      push({
        search: newSearch,
      });
      return newSearch;
    },
    [push, query]
  );

  // @ts-ignore
  return { ...query, patchQuery };
}
