/* eslint-disable consistent-return */

import { DATA_RENDER_COUNT } from 'packages/easy-email-editor/constants';
import { useEditorContext } from 'packages/easy-email-editor/hooks/useEditorContext';
import { useFocusIdx } from 'packages/easy-email-editor/hooks/useFocusIdx';
import { useRefState } from 'packages/easy-email-editor/hooks/useRefState';
import {
  getBlockNodeByIdx,
  getShadowRoot,
} from 'packages/easy-email-editor/utils';
import React, { useEffect, useMemo, useState } from 'react';

export const FocusBlockLayoutContext = React.createContext<{
  focusBlockNode: HTMLElement | null;
}>({
  focusBlockNode: null,
});

export const FocusBlockLayoutProvider: React.FC<{
  children?: React.ReactNode;
}> = props => {
  const [focusBlockNode, setFocusBlockNode] = useState<HTMLElement | null>(
    null
  );
  const { initialized } = useEditorContext();
  const { focusIdx } = useFocusIdx();
  const focusIdxRef = useRefState(focusIdx);

  const root = useMemo(() => {
    return initialized
      ? getShadowRoot()?.querySelector(`[${DATA_RENDER_COUNT}]`)
      : null;
  }, [initialized]);

  useEffect(() => {
    if (!root) return;
    let lastCount: any = '0';
    const ms = new MutationObserver(() => {
      const currentCount = root.getAttribute(DATA_RENDER_COUNT);
      if (lastCount !== currentCount) {
        lastCount = currentCount;

        const ele = getBlockNodeByIdx(focusIdxRef.current);
        if (ele) {
          setFocusBlockNode(ele);
        }
      }
    });
    ms.observe(root, {
      attributeFilter: [DATA_RENDER_COUNT],
    });

    return () => {
      ms.disconnect();
    };
  }, [focusIdxRef, root]);

  useEffect(() => {
    if (!root) return;
    if (focusIdx) {
      root.setAttribute(DATA_RENDER_COUNT, (+new Date()).toString());
    }
  }, [focusIdx, root]);

  const value = useMemo(() => {
    return {
      focusBlockNode,
    };
  }, [focusBlockNode]);

  return (
    <FocusBlockLayoutContext.Provider value={value}>
      {props.children}
    </FocusBlockLayoutContext.Provider>
  );
};
