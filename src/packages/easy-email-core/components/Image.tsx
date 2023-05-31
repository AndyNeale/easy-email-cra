import { omit } from 'lodash';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

import { IImage } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';

export type ImageProps = RecursivePartial<IImage['data']> &
  RecursivePartial<IImage['attributes']> & {
    children?: MjmlBlockProps<IImage>['children'];
  };

export function Image(props: ImageProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.IMAGE}
    >
      {props.children}
    </MjmlBlock>
  );
}
