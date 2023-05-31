import { unescape } from 'lodash';
import { IBlockData } from 'packages/easy-email-core/typings';
import { renderToStaticMarkup } from 'react-dom/server';

export function parseReactBlockToBlockData<T extends IBlockData = IBlockData>(
  node: React.ReactElement
) {
  return JSON.parse(unescape(renderToStaticMarkup(node))) as T;
}
