import { omit } from 'lodash';
import { IAccordionTitle } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

export type AccordionTitleProps = RecursivePartial<IAccordionTitle['data']> &
  RecursivePartial<IAccordionTitle['attributes']> & {
    children?: MjmlBlockProps<IAccordionTitle>['children'];
  };

export function AccordionTitle(props: AccordionTitleProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.ACCORDION_TITLE}
    >
      {props.children}
    </MjmlBlock>
  );
}
