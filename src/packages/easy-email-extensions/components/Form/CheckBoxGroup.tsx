/* eslint-disable react/no-array-index-key */

import { merge } from 'lodash';

import {
  CheckboxGroupProps as ArcoCheckboxGroupProps,
  Checkbox,
} from '@arco-design/web-react';
import { Stack } from 'packages/easy-email-editor';

export interface CheckboxGroupProps extends ArcoCheckboxGroupProps<any> {
  options: Array<{ value: string; label: React.ReactNode }>;
  onChange?: (e: any[]) => void;
  value?: ArcoCheckboxGroupProps<any>['value'];
  style?: Partial<React.CSSProperties>;
  checkboxStyle?: Partial<React.CSSProperties>;
  vertical?: boolean;
}

export function CheckBoxGroup(props: CheckboxGroupProps) {
  const { vertical = false, ...rest } = props;
  return (
    <Checkbox.Group
      style={merge({ width: '100%' }, rest.style)}
      value={rest.value}
      onChange={rest.onChange}
    >
      <Stack vertical={vertical} spacing="extraTight">
        {rest.options.map((item, index) => (
          <Checkbox style={rest.checkboxStyle} key={index} value={item.value}>
            {item.label}
          </Checkbox>
        ))}
      </Stack>
    </Checkbox.Group>
  );
}
