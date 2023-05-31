import { BlocksContext } from 'packages/easy-email-editor/components/Provider/BlocksProvider';
import { useContext } from 'react';

export function useFocusIdx() {
  const { focusIdx, setFocusIdx } = useContext(BlocksContext);
  return {
    focusIdx,
    setFocusIdx,
  };
}
