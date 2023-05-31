/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getShadowRoot } from 'packages/easy-email-editor';
import { SelectionRangeContext } from 'packages/easy-email-extensions/AttributePanel/components/provider/SelectionRangeProvider';
import { useCallback, useContext } from 'react';

export function useSelectionRange() {
  const { selectionRange, setSelectionRange } = useContext(
    SelectionRangeContext
  );

  const restoreRange = useCallback((range: Range) => {
    const selection = (getShadowRoot() as any).getSelection();
    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.setStart(range.startContainer, range.startOffset);
    newRange.setEnd(range.endContainer, range.endOffset);

    selection.addRange(newRange);
  }, []);

  const setRangeByElement = useCallback(
    (element: ChildNode) => {
      const selection = (getShadowRoot() as any).getSelection();

      selection.removeAllRanges();
      const newRange = document.createRange();
      newRange.selectNode(element);
      setSelectionRange(newRange);
      selection.addRange(newRange);
    },
    [setSelectionRange]
  );

  return {
    selectionRange,
    setSelectionRange,
    restoreRange,
    setRangeByElement,
  };
}
