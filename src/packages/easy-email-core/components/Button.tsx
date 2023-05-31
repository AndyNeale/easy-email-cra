import { omit } from 'lodash';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

import { IButton } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';

export type ButtonProps = RecursivePartial<IButton['data']> &
  RecursivePartial<IButton['attributes']> & {
    children?: MjmlBlockProps<IButton>['children'];
  };

export function Button(props: ButtonProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.BUTTON}
    >
      {props.children}
    </MjmlBlock>
  );
}
