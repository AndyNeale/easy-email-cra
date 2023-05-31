import { omit } from 'lodash';
import { INavbar } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

export type NavbarProps = RecursivePartial<INavbar['data']> &
  RecursivePartial<INavbar['attributes']> & {
    children?: MjmlBlockProps<INavbar>['children'];
  };

export function Navbar(props: NavbarProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.NAVBAR}
    >
      {props.children}
    </MjmlBlock>
  );
}
