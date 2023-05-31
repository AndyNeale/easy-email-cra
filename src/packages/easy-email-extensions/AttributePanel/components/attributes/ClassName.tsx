import { useFocusIdx } from 'packages/easy-email-editor';
import { useMemo } from 'react';
import { TextField } from '../../../components/Form';

export function ClassName() {
  const { focusIdx } = useFocusIdx();

  return useMemo(() => {
    return (
      <TextField
        label={t('Class name')}
        name={`${focusIdx}.attributes.css-class`}
      />
    );
  }, [focusIdx]);
}
