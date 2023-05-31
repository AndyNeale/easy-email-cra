/* eslint-disable @typescript-eslint/no-shadow */

import { isArray, mergeWith } from 'lodash';
import { IBlockData, RecursivePartial } from 'packages/easy-email-core/typings';

export function mergeBlock<T extends IBlockData>(
  a: T,
  b?: RecursivePartial<T>
): T {
  return mergeWith(a, b, (a, b) => (isArray(b) ? b : undefined));
}
