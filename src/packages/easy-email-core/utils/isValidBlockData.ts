/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */

import { IBlockData } from '../typings';
import { BlockManager } from './BlockManager';

export function isValidBlockData<T>(data: any): data is IBlockData {
  try {
    if (
      data.attributes &&
      data.children &&
      data.data &&
      data.type &&
      BlockManager.getBlockByType(data.type)
    ) {
      return true;
    }
  } catch (error) {}
  return false;
}
