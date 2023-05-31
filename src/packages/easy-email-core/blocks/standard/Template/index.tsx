/* eslint-disable react/jsx-no-useless-fragment */

import { merge } from 'lodash';
import { BlockRenderer } from 'packages/easy-email-core/components/BlockRenderer';
import { BasicType } from 'packages/easy-email-core/constants';
import { IBlockData } from 'packages/easy-email-core/typings';
import { t } from 'packages/easy-email-core/utils';
import { createBlock } from 'packages/easy-email-core/utils/createBlock';

export type ITemplate = IBlockData<
  {},
  {
    idx?: string | null;
  }
>;

export const Template = createBlock<ITemplate>({
  get name() {
    return t('Template');
  },
  type: BasicType.TEMPLATE,
  create: payload => {
    const defaultData: ITemplate = {
      type: BasicType.TEMPLATE,
      data: {
        value: {
          idx: '',
        },
      },
      attributes: {},
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [],
  render(params) {
    const { data } = params;
    return (
      <>
        {`
          ${data.children.map(child => (
            <BlockRenderer {...params} data={child} />
          ))}
        `}
      </>
    );
  },
});
