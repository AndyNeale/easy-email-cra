import { omit } from 'lodash';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

import { IColumn } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';

export type ColumnProps = RecursivePartial<IColumn['data']> &
  RecursivePartial<IColumn['attributes']> & {
    children?: MjmlBlockProps<IColumn>['children'];
  };

export function Column(props: ColumnProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.COLUMN}
    >
      {props.children}
    </MjmlBlock>
  );
}
