import { omit } from 'lodash';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

import { IGroup } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';

export type GroupProps = RecursivePartial<IGroup['data']> &
  RecursivePartial<IGroup['attributes']> & {
    children?: MjmlBlockProps<IGroup>['children'];
  };

export function Group(props: GroupProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.GROUP}
    >
      {props.children}
    </MjmlBlock>
  );
}
