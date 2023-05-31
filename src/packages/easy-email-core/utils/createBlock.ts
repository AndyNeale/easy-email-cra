import { IBlock, IBlockData } from 'packages/easy-email-core/typings';

export function createBlock<T extends IBlockData>(block: IBlock<T>): IBlock<T> {
  return block;
}
