/* eslint-disable react/no-unused-prop-types */

import { useFocusIdx } from 'packages/easy-email-editor';
import { ColorPickerField } from '../../../components/Form';

export function Color({
  title = t('Color'),
}: {
  title?: string;
  inline?: boolean;
}) {
  const { focusIdx } = useFocusIdx();

  return (
    <ColorPickerField label={title} name={`${focusIdx}.attributes.color`} />
  );
}
