import { merge } from 'lodash';
import { BasicBlock } from 'packages/easy-email-core/components/BasicBlock';
import { BasicType } from 'packages/easy-email-core/constants';
import { IBlock, IBlockData } from 'packages/easy-email-core/typings';
import { t } from 'packages/easy-email-core/utils';
import { createBlock } from 'packages/easy-email-core/utils/createBlock';

export type ISpacer = IBlockData<{
  'container-background-color'?: string;
  height?: string;
  padding?: string;
}>;

export const Spacer: IBlock<ISpacer> = createBlock({
  get name() {
    return t('Spacer');
  },
  type: BasicType.SPACER,
  create: payload => {
    const defaultData: ISpacer = {
      type: BasicType.SPACER,
      data: {
        value: {},
      },
      attributes: {
        height: '20px',
      },
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN, BasicType.HERO],
  render(params) {
    return <BasicBlock params={params} tag="mj-spacer" />;
  },
});
