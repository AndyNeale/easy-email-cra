import { merge } from 'lodash';
import { BasicBlock } from 'packages/easy-email-core/components/BasicBlock';
import { BasicType } from 'packages/easy-email-core/constants';
import { IBlockData } from 'packages/easy-email-core/typings';
import { t } from 'packages/easy-email-core/utils';
import { createBlock } from 'packages/easy-email-core/utils/createBlock';

export type ITable = IBlockData<{}, { content: string }>;

export const Table = createBlock<ITable>({
  get name() {
    return t('Table');
  },
  type: BasicType.TABLE,
  create: payload => {
    const defaultData: ITable = {
      type: BasicType.TABLE,
      data: {
        value: {
          content: '',
        },
      },
      attributes: {},
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN],
  render(params) {
    const { data } = params;
    return (
      <BasicBlock params={params} tag="mj-table">
        {data.data.value.content}
      </BasicBlock>
    );
  },
});
