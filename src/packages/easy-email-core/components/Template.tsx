import { RecursivePartial } from 'packages/easy-email-core/typings';

import { ITemplate } from 'packages/easy-email-core/blocks';

export type TemplateProps = RecursivePartial<ITemplate['data']> &
  RecursivePartial<ITemplate['attributes']> & {
    children: string | React.ReactNode;
    idx?: string | null;
  };

export function Template(props: TemplateProps) {
  return props.children;
}
