import { BasicType } from 'packages/easy-email-core/constants';
import { BlockManager } from '../BlockManager';
import { createBlockDataByType } from '../createBlockDataByType';

describe('Test createBlockItem', () => {
  it('should render as expected', () => {
    expect(createBlockDataByType(BasicType.TEXT)).toEqual(
      BlockManager.getBlockByType(BasicType.TEXT)!.create()
    );
  });
});
