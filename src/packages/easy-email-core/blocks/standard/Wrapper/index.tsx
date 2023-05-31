import { merge } from 'lodash';
import { BasicBlock } from 'packages/easy-email-core/components/BasicBlock';
import { BasicType } from 'packages/easy-email-core/constants';
import { IBlockData } from 'packages/easy-email-core/typings';
import { t } from 'packages/easy-email-core/utils';
import { createBlock } from 'packages/easy-email-core/utils/createBlock';
import { CSSProperties } from 'react';

export type IWrapper = IBlockData<
  {
    'background-color'?: string;
    border?: string;
    'border-radius'?: string;
    'full-width'?: string;
    direction?: 'ltr' | 'rtl';
    padding?: string;
    'text-align'?: CSSProperties['textAlign'];
  },
  {}
>;

export const Wrapper = createBlock<IWrapper>({
  get name() {
    return t('Wrapper');
  },
  type: BasicType.WRAPPER,
  create: payload => {
    const defaultData: IWrapper = {
      type: BasicType.WRAPPER,
      data: {
        value: {},
      },
      attributes: {
        padding: '20px 0px 20px 0px',
        border: 'none',
        direction: 'ltr',
        'text-align': 'center',
      },
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.PAGE],
  render(params) {
    return <BasicBlock params={params} tag="mj-wrapper" />;
  },
});
