import { BasicType, getParentByIdx } from 'packages/easy-email-core';
import { useBlock, useFocusIdx } from 'packages/easy-email-editor';
import { InputWithUnitProps } from 'packages/easy-email-extensions/components/Form/InputWithUnit';
import { useCallback } from 'react';
import { UseFieldConfig } from 'react-final-form';
import { InputWithUnitField } from '../../../components/Form';

export function Width({
  inline = false,
  unitOptions,
  config,
}: {
  inline?: boolean;
  unitOptions?: InputWithUnitProps['unitOptions'];
  config?: UseFieldConfig<any>;
}) {
  const { focusIdx } = useFocusIdx();
  const { focusBlock, values } = useBlock();
  const parentType = getParentByIdx(values, focusIdx)?.type;

  const validate = useCallback(
    (val: string): string | undefined => {
      if (
        focusBlock?.type === BasicType.COLUMN &&
        parentType === BasicType.GROUP
      ) {
        return /(\d)*%/.test(val)
          ? undefined
          : t(
              'Column inside a group must have a width in percentage, not in pixel'
            );
      }
      return undefined;
    },
    [focusBlock?.type, parentType]
  );

  return (
    <InputWithUnitField
      validate={validate}
      label={t('Width')}
      inline={inline}
      name={`${focusIdx}.attributes.width`}
      unitOptions={unitOptions}
      config={config}
    />
  );
}
