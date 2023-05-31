import { merge } from 'lodash';
import { BasicBlock } from 'packages/easy-email-core/components/BasicBlock';
import { BasicType } from 'packages/easy-email-core/constants';
import { IBlockData } from 'packages/easy-email-core/typings';
import { t } from 'packages/easy-email-core/utils';
import { createBlock } from 'packages/easy-email-core/utils/createBlock';

export type IRaw = IBlockData<{}, { content: string }>;

export const Raw = createBlock<IRaw>({
  get name() {
    return t('Raw');
  },
  type: BasicType.RAW,
  create: payload => {
    const defaultData: IRaw = {
      type: BasicType.RAW,
      data: {
        value: {
          content: '<% if (user) { %>',
        },
      },
      attributes: {},
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [
    BasicType.PAGE,
    BasicType.WRAPPER,
    BasicType.SECTION,
    BasicType.GROUP,
    BasicType.COLUMN,
    BasicType.HERO,
  ],
  render(params) {
    return (
      <BasicBlock params={params} tag="mj-raw">
        {params.data.data.value.content}
      </BasicBlock>
    );
  },
});
