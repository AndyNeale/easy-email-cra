import { debounce } from 'lodash';
import { HoverIdxContext } from 'packages/easy-email-editor/components/Provider/HoverIdxProvider';
import { useCallback, useContext } from 'react';

export function useHoverIdx() {
  const {
    hoverIdx,
    setHoverIdx,
    setIsDragging,
    isDragging,
    setDirection,
    direction,
  } = useContext(HoverIdxContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setHoverIdxDebounce = useCallback(debounce(setHoverIdx), [setHoverIdx]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setDirectionDebounce = useCallback(debounce(setDirection), [
    setDirection,
  ]);

  return {
    hoverIdx,
    setHoverIdx: setHoverIdxDebounce,
    isDragging,
    setIsDragging,
    direction,
    setDirection: setDirectionDebounce,
  };
}
