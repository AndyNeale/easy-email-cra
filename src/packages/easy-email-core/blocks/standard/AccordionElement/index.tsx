import { merge } from 'lodash';
import { BasicBlock } from 'packages/easy-email-core/components/BasicBlock';
import { BasicType } from 'packages/easy-email-core/constants';
import { IBlockData } from 'packages/easy-email-core/typings';
import { t } from 'packages/easy-email-core/utils';
import { createBlock } from 'packages/easy-email-core/utils/createBlock';

export type IAccordionElement = IBlockData<
  {
    'icon-width': string;
    'icon-height': string;
    'container-background-color'?: string;
    border?: string;
    'inner-padding'?: string;
    'font-family'?: string;
    'icon-align'?: 'middle' | 'top' | 'bottom';
    'icon-position': 'left' | 'right';
    'icon-unwrapped-alt'?: string;
    'icon-unwrapped-url'?: string;
    'icon-wrapped-alt'?: string;
    'icon-wrapped-url'?: string;
  },
  {}
>;

export const AccordionElement = createBlock<IAccordionElement>({
  get name() {
    return t('Accordion element');
  },
  type: BasicType.ACCORDION_ELEMENT,
  create: payload => {
    const defaultData: IAccordionElement = {
      type: BasicType.ACCORDION_ELEMENT,
      data: {
        value: {},
      },
      attributes: {
        'icon-align': 'middle',
        'icon-height': '32px',
        'icon-width': '32px',

        'icon-position': 'right',
      },
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.ACCORDION],
  render(params) {
    return <BasicBlock params={params} tag="mj-accordion-element" />;
  },
});
