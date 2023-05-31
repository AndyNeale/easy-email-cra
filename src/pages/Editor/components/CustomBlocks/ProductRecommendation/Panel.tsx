import { Stack } from 'components/Stack';
import { useFocusIdx } from 'packages/easy-email-editor';
import {
  AttributesPanelWrapper,
  ColorPickerField,
  NumberField,
  TextField,
} from 'packages/easy-email-extensions';

export function Panel() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper style={{ padding: '20px' }}>
      <Stack vertical>
        <NumberField
          label="Quantity"
          inline
          max={6}
          name={`${focusIdx}.data.value.quantity`}
        />
        <TextField
          label="Title"
          name={`${focusIdx}.data.value.title`}
          inline
          // @ts-ignore
          alignment="center"
        />
        <TextField
          label="Button text"
          name={`${focusIdx}.data.value.buttonText`}
          inline
          // @ts-ignore
          alignment="center"
        />
        <ColorPickerField
          label="Background color"
          name={`${focusIdx}.attributes.background-color`}
          inline
          // @ts-ignore
          alignment="center"
        />
        <ColorPickerField
          label="Title color"
          name={`${focusIdx}.attributes.title-color`}
          inline
          // @ts-ignore
          alignment="center"
        />
        <ColorPickerField
          label="Product name color"
          name={`${focusIdx}.attributes.product-name-color`}
          inline
          // @ts-ignore
          alignment="center"
        />
        <ColorPickerField
          label="Product price color"
          name={`${focusIdx}.attributes.product-price-color`}
          inline
          // @ts-ignore
          alignment="center"
        />
        <ColorPickerField
          label="Button color"
          name={`${focusIdx}.attributes.button-color`}
          inline
          // @ts-ignore
          alignment="center"
        />
        <ColorPickerField
          label="Button text color"
          name={`${focusIdx}.attributes.button-text-color`}
          inline
          // @ts-ignore
          alignment="center"
        />
      </Stack>
    </AttributesPanelWrapper>
  );
}
