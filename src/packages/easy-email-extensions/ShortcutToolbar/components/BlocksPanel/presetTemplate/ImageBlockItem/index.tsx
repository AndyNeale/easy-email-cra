/* eslint-disable react/no-array-index-key */

import {
  AdvancedType,
  IImage,
  RecursivePartial,
} from 'packages/easy-email-core';
import { Stack } from 'packages/easy-email-editor';

import { BlockMaskWrapper } from 'packages/easy-email-extensions/ShortcutToolbar/components/BlockMaskWrapper';
import { Picture } from 'packages/easy-email-extensions/ShortcutToolbar/components/Picture';
import { getImg } from 'packages/easy-email-extensions/ShortcutToolbar/utils/getImg';

const imageList = [
  getImg('IMAGE_39'),
  getImg('IMAGE_40'),
  getImg('IMAGE_41'),
  getImg('IMAGE_42'),
  getImg('IMAGE_43'),
  getImg('IMAGE_44'),
  getImg('IMAGE_45'),
];

export function ImageBlockItem() {
  return (
    <Stack.Item fill>
      <Stack vertical>
        {imageList.map((item, index) => {
          return (
            <BlockMaskWrapper
              key={index}
              type={AdvancedType.IMAGE}
              payload={
                {
                  attributes: {
                    src: item,
                    padding: '0px 0px 0px 0px',
                  },
                } as RecursivePartial<IImage>
              }
            >
              <div style={{ position: 'relative' }}>
                <Picture src={item} />
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
