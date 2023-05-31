import { omit } from 'lodash';
import { ICarousel } from 'packages/easy-email-core/blocks';
import MjmlBlock, {
  MjmlBlockProps,
} from 'packages/easy-email-core/components/MjmlBlock';
import { BasicType } from 'packages/easy-email-core/constants';
import { RecursivePartial } from 'packages/easy-email-core/typings';

export type CarouselProps = RecursivePartial<ICarousel['data']> &
  RecursivePartial<ICarousel['attributes']> & {
    children?: MjmlBlockProps<ICarousel>['children'];
  };

export function Carousel(props: CarouselProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.CAROUSEL}
    >
      {props.children}
    </MjmlBlock>
  );
}
