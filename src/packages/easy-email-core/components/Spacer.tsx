import { omit } from 'lodash';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

import { ISpacer } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';

export type SpacerProps = RecursivePartial<ISpacer['data']> &
  RecursivePartial<ISpacer['attributes']> & {
    children?: MjmlBlockProps<ISpacer>['children'];
  };

export function Spacer(props: SpacerProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.SPACER}
    >
      {props.children}
    </MjmlBlock>
  );
}
