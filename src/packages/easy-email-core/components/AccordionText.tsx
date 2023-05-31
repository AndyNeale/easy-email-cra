import { omit } from 'lodash';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

import { IAccordionText } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';

export type AccordionTextProps = RecursivePartial<IAccordionText['data']> &
  RecursivePartial<IAccordionText['attributes']> & {
    children?: MjmlBlockProps<IAccordionText>['children'];
  };

export function AccordionText(props: AccordionTextProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.ACCORDION_TEXT}
    >
      {props.children}
    </MjmlBlock>
  );
}
