import { omit } from 'lodash';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

import { ISection } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';

export type SectionProps = RecursivePartial<ISection['data']> &
  RecursivePartial<ISection['attributes']> & {
    children?: MjmlBlockProps<ISection>['children'];
  };

export function Section(props: SectionProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.SECTION}
    >
      {props.children}
    </MjmlBlock>
  );
}
