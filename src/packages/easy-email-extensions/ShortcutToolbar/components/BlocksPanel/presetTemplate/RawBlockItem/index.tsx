/* eslint-disable react/no-array-index-key */

import { BasicType } from 'packages/easy-email-core';
import { Stack } from 'packages/easy-email-editor';

import { BlockMaskWrapper } from 'packages/easy-email-extensions/ShortcutToolbar/components/BlockMaskWrapper';

const list = [
  {
    payload: {
      type: BasicType.RAW,
      data: {
        value: {
          content: '<% if (user) { %>',
        },
      },
    },
  },
  {
    payload: {
      type: BasicType.RAW,
      data: {
        value: {
          content: '<% } %>',
        },
      },
    },
  },
];

export function RawBlockItem() {
  return (
    <Stack.Item fill>
      <Stack vertical>
        {list.map((item, index) => {
          return (
            <BlockMaskWrapper
              key={index}
              type={BasicType.RAW}
              payload={item.payload}
            >
              <div style={{ width: '100%', paddingLeft: 20 }}>
                {item.payload.data.value.content}
              </div>
            </BlockMaskWrapper>
          );
        })}
      </Stack>
    </Stack.Item>
  );
}
