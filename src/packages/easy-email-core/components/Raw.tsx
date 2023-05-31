import { omit } from 'lodash';
import { IRaw } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

export type RawProps = RecursivePartial<IRaw['data']> &
  RecursivePartial<IRaw['attributes']> & {
    children?: MjmlBlockProps<IRaw>['children'];
  };

export function Raw(props: RawProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.RAW}
    >
      {props.children}
    </MjmlBlock>
  );
}
