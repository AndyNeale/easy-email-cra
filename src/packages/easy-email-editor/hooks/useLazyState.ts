/* eslint-disable react-hooks/exhaustive-deps */

import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

export function useLazyState<T>(state: T, debounceTime: number) {
  const [lazyState, setLazyState] = useState<T>(state);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setDebounceLazyState: React.Dispatch<React.SetStateAction<T>> =
    useCallback(
      debounce(s => {
        setLazyState(s);
      }, debounceTime),
      []
    );

  useEffect(() => {
    setDebounceLazyState(state);
  }, [setDebounceLazyState, state]);

  return lazyState;
}
