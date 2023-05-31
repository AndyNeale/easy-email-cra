import { useFocusIdx } from 'packages/easy-email-editor';
import { useFontFamily } from 'packages/easy-email-extensions/hooks/useFontFamily';
import { useMemo } from 'react';
import { AutoCompleteField } from '../../../components/Form';

export function FontFamily({ name }: { name?: string }) {
  const { focusIdx } = useFocusIdx();
  const { fontList } = useFontFamily();

  return useMemo(() => {
    return (
      <AutoCompleteField
        style={{ minWidth: 100, flex: 1 }}
        showSearch
        label={t('Font family')}
        name={name || `${focusIdx}.attributes.font-family`}
        options={fontList}
      />
    );
  }, [focusIdx, fontList, name]);
}
