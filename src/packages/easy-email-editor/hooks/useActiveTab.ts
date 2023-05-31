import { BlocksContext } from 'packages/easy-email-editor/components/Provider/BlocksProvider';
import { useContext } from 'react';

export function useActiveTab() {
  const { activeTab, setActiveTab } = useContext(BlocksContext);
  return {
    activeTab,
    setActiveTab,
  };
}
