import { omit } from 'lodash';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

import { ITable } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';

export type TableProps = RecursivePartial<ITable['data']> &
  RecursivePartial<ITable['attributes']> & {
    children?: MjmlBlockProps<ITable>['children'];
  };

export function Table(props: TableProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.TABLE}
    >
      {props.children}
    </MjmlBlock>
  );
}
