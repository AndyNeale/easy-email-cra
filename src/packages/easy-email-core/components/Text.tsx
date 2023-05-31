import { omit } from 'lodash';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

import { IText } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';

export type TextProps = RecursivePartial<IText['data']> &
  RecursivePartial<IText['attributes']> & {
    children?: MjmlBlockProps<IText>['children'];
  };

export function Text(props: TextProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.TEXT}
    >
      {props.children}
    </MjmlBlock>
  );
}
