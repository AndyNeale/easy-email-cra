import { omit } from 'lodash';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

import { IPage } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';

export type PageProps = RecursivePartial<IPage['data']> &
  RecursivePartial<IPage['attributes']> & {
    children?: MjmlBlockProps<IPage>['children'];
  };

export function Page(props: PageProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.PAGE}
    >
      {props.children}
    </MjmlBlock>
  );
}
