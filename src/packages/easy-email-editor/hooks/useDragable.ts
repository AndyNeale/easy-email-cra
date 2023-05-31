import { BlocksContext } from 'packages/easy-email-editor/components/Provider/BlocksProvider';
import { useContext } from 'react';

export function useDraggable() {
  const { dragEnabled, setDragEnabled } = useContext(BlocksContext);
  return {
    dragEnabled,
    setDragEnabled,
  };
}
