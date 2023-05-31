import { omit } from 'lodash';
import { IAccordionElement } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

export type AccordionElementProps = RecursivePartial<
  IAccordionElement['data']
> &
  RecursivePartial<IAccordionElement['attributes']> & {
    children?: MjmlBlockProps<IAccordionElement>['children'];
  };

export function AccordionElement(props: AccordionElementProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.ACCORDION_ELEMENT}
    >
      {props.children}
    </MjmlBlock>
  );
}
