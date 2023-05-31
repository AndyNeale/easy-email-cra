import { omit } from 'lodash';
import { ISocial } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

export type SocialProps = RecursivePartial<ISocial['data']> &
  RecursivePartial<ISocial['attributes']> & {
    children?: MjmlBlockProps<ISocial>['children'];
  };

export function Social(props: SocialProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.SOCIAL}
    >
      {props.children}
    </MjmlBlock>
  );
}
