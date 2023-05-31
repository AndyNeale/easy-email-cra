import { omit } from 'lodash';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

import { IWrapper } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';

export type WrapperProps = RecursivePartial<IWrapper['data']> &
  RecursivePartial<IWrapper['attributes']> & {
    children?: MjmlBlockProps<IWrapper>['children'];
  };

export function Wrapper(props: WrapperProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.WRAPPER}
    >
      {props.children}
    </MjmlBlock>
  );
}
