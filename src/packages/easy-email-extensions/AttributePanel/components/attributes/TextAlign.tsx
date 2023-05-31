import { Stack, useFocusIdx } from 'packages/easy-email-editor';
import { useMemo } from 'react';
import { RadioGroupField } from '../../../components/Form';

const options = [
  {
    value: 'left',
    get label() {
      return t('Left');
    },
  },
  {
    value: 'center',
    get label() {
      return t('Center');
    },
  },
  {
    value: 'right',
    get label() {
      return t('Right');
    },
  },
];

export function TextAlign({ name }: { name?: string }) {
  const { focusIdx } = useFocusIdx();

  return useMemo(() => {
    return (
      <Stack>
        <RadioGroupField
          label={t('Text align')}
          name={name || `${focusIdx}.attributes.text-align`}
          options={options}
        />
      </Stack>
    );
  }, [focusIdx, name]);
}
