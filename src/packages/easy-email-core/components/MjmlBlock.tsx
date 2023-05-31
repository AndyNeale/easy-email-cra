import { set } from 'lodash';
import { IBlockData, RecursivePartial } from 'packages/easy-email-core/typings';
import { BlockManager } from 'packages/easy-email-core/utils';
import { useEmailRenderContext } from 'packages/easy-email-core/utils/JsonToMjml';
import React, { useMemo } from 'react';

export interface MjmlBlockProps<T extends IBlockData> {
  idx?: string | null;
  type: T['type'];
  value?: RecursivePartial<T['data']['value']>;
  attributes?: RecursivePartial<T['attributes']>;
  children?: React.ReactNode;
}

export default function MjmlBlock<T extends IBlockData>({
  idx,
  value,
  type,
  attributes,
  children,
}: MjmlBlockProps<T>) {
  const { mode } = useEmailRenderContext();
  const block = BlockManager.getBlockByType(type);

  if (!block) {
    throw new Error(`Can no find ${type}`);
  }

  const mergeValue = useMemo((): undefined | {} => {
    if (typeof children === 'string') {
      if (!value) {
        return {
          content: children,
        };
      }
      set(value, 'content', children);
      return value;
    }

    return value;
  }, [children, value]);

  return (
    <>
      {block.render({
        idx,
        mode,
        data: {
          type: block.type,
          data: {
            value: mergeValue,
          },
          attributes,
          children: [],
        },
        children,
      })}
    </>
  );
}
