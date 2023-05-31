/* eslint-disable react/no-array-index-key */

import { AdvancedType } from 'packages/easy-email-core';
import { Stack } from 'packages/easy-email-editor';

import { BlockMaskWrapper } from 'packages/easy-email-extensions/ShortcutToolbar/components/BlockMaskWrapper';
import { Picture } from 'packages/easy-email-extensions/ShortcutToolbar/components/Picture';
import { getImg } from 'packages/easy-email-extensions/ShortcutToolbar/utils/getImg';

const list = [
  {
    thumbnail: getImg('IMAGE_14'),
    payload: {
      type: AdvancedType.CAROUSEL,
      data: {
        value: {
          images: [
            {
              src: getImg('IMAGE_15'),
              target: '_blank',
            },
            {
              src: getImg('IMAGE_16'),
              target: '_blank',
            },
            {
              src: getImg('IMAGE_17'),
              target: '_blank',
            },
          ],
        },
      },
      attributes: {
        align: 'center',
        'left-icon': getImg('IMAGE_18'),
        'right-icon': getImg('IMAGE_19'),
        'icon-width': '44px',
        thumbnails: 'visible',
      },
      children: [],
    },
  },
];

export function CarouselBlockItem() {
  return (
    <Stack.Item fill>
      <Stack vertical>
        {list.map((item, index) => {
          return (
            <BlockMaskWrapper
              key={index}
              type={AdvancedType.CAROUSEL}
              payload={item.payload}
            >
              <div style={{ position: 'relative' }}>
                <Picture src={item.thumbnail} />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                  }}
                />
              </div>
            </BlockMaskWrapper>
          );
        })}
      </Stack>
    </Stack.Item>
  );
}
