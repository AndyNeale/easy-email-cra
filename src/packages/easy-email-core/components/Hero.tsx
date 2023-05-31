import { omit } from 'lodash';
import { IHero } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

export type HeroProps = RecursivePartial<IHero['data']> &
  RecursivePartial<IHero['attributes']> & {
    children?: MjmlBlockProps<IHero>['children'];
  };

export function Hero(props: HeroProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.HERO}
    >
      {props.children}
    </MjmlBlock>
  );
}
