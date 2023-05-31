/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */

import { isUndefined } from 'lodash';
import { BlockType, getChildIdx } from 'packages/easy-email-core';
import { useBlock } from 'packages/easy-email-editor/hooks/useBlock';
import { useDataTransfer } from 'packages/easy-email-editor/hooks/useDataTransfer';
import { useHoverIdx } from 'packages/easy-email-editor/hooks/useHoverIdx';
import React, { useCallback, useEffect, useRef } from 'react';

export type BlockAvatarWrapperProps = {
  children?: React.ReactNode;
  type: BlockType | string;
  payload?: any;
  action?: 'add' | 'move';
  hideIcon?: boolean;
  idx?: string;
};

export const BlockAvatarWrapper: React.FC<BlockAvatarWrapperProps> = props => {
  const { type, children, payload, action = 'add', idx } = props;
  const { addBlock, moveBlock, values } = useBlock();
  const { setIsDragging, setHoverIdx } = useHoverIdx();
  const { setDataTransfer, dataTransfer } = useDataTransfer();
  const ref = useRef<HTMLDivElement>(null);

  const onDragStart = useCallback(
    (ev: React.DragEvent) => {
      if (action === 'add') {
        setDataTransfer({
          type,
          action,
          payload,
        });
      } else {
        setDataTransfer({
          type,
          action,
          sourceIdx: idx,
        });
      }

      setIsDragging(true);
    },
    [action, idx, payload, setDataTransfer, setIsDragging, type]
  );

  const onDragEnd = useCallback(() => {
    setIsDragging(false);
    setHoverIdx('');
    if (!dataTransfer) return;
    if (action === 'add' && !isUndefined(dataTransfer.parentIdx)) {
      addBlock({
        type,
        parentIdx: dataTransfer.parentIdx,
        positionIndex: dataTransfer.positionIndex,
        payload,
      });
    } else if (
      idx &&
      !isUndefined(dataTransfer.sourceIdx) &&
      !isUndefined(dataTransfer.parentIdx) &&
      !isUndefined(dataTransfer.positionIndex)
    ) {
      moveBlock(
        dataTransfer.sourceIdx,
        getChildIdx(dataTransfer.parentIdx, dataTransfer.positionIndex)
      );
    }
  }, [
    action,
    addBlock,
    idx,
    moveBlock,
    dataTransfer,
    payload,
    setHoverIdx,
    setIsDragging,
    type,
  ]);

  useEffect(() => {
    const ele = ref.current;
    if (!ele) return;

    ele.addEventListener('dragend', onDragEnd);
    return () => {
      ele.removeEventListener('dragend', onDragEnd);
    };
  }, [onDragEnd]);

  return (
    <div
      style={{ cursor: 'grab' }}
      ref={ref}
      onMouseDown={() => {
        window.getSelection()?.removeAllRanges();
      }}
      data-type={type}
      onDragStart={onDragStart}
      draggable
    >
      {children}
    </div>
  );
};
