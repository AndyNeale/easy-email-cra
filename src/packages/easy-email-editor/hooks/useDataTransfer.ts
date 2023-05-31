import { debounce } from 'lodash';
import { HoverIdxContext } from 'packages/easy-email-editor/components/Provider/HoverIdxProvider';
import { useCallback, useContext, useMemo } from 'react';

export function useDataTransfer() {
  const { dataTransfer, setDataTransfer } = useContext(HoverIdxContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setDataTransferDebounce = useCallback(debounce(setDataTransfer), [
    setDataTransfer,
  ]);

  return useMemo(
    () => ({
      dataTransfer,
      setDataTransfer: setDataTransferDebounce,
    }),
    [dataTransfer, setDataTransferDebounce]
  );
}
