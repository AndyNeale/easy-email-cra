import { useFocusIdx } from 'packages/easy-email-editor';
import { useMemo } from 'react';

import { ColorPickerField } from '../../../components/Form';

export function BorderColor() {
  const { focusIdx } = useFocusIdx();

  return useMemo(() => {
    return (
      <ColorPickerField
        label={t('Color')}
        name={`${focusIdx}.attributes.border-color`}
      />
    );
  }, [focusIdx]);
}
