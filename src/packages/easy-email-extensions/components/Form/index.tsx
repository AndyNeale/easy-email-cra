import {
  Input as ArcoInput,
  CheckboxGroupProps,
  InputNumber,
  InputNumberProps,
  Slider,
  SliderProps,
  Switch,
  SwitchProps,
  TextAreaProps,
  TreeSelect,
  TreeSelectProps,
} from '@arco-design/web-react';
import { InputSearchProps } from '@arco-design/web-react/es/Input';
import { AutoComplete, AutoCompleteProps } from './AutoComplete';
import { CheckBoxGroup } from './CheckBoxGroup';
import { ColorPickerField } from './ColorPickerField';
import { EditGridTab, EditGridTabProps } from './EditGridTab';
import { EditTab, EditTabProps } from './EditTab';
import { ImageUploader, ImageUploaderProps } from './ImageUploader';
import { InlineText, InlineTextProps } from './InlineTextField';
import { Input, InputProps } from './Input';
import { InputWithUnit, InputWithUnitProps } from './InputWithUnit';
import { RadioGroup, RadioGroupProps } from './RadioGroup';
import { Select, SelectProps } from './Select';
import { UploadFieldProps, UploadField as Uploader } from './UploadField';
import enhancer from './enhancer';

export { ColorPickerField };
export { enhancer };

export const TextField = enhancer<InputProps>(Input, value => value);

export const InputWithUnitField = enhancer<InputWithUnitProps>(
  InputWithUnit,
  value => value
);

export const SearchField = enhancer<InputSearchProps>(
  ArcoInput.Search,
  val => val
);

export const TextAreaField = enhancer<TextAreaProps>(
  ArcoInput.TextArea,
  val => val
);

export const NumberField = enhancer<InputNumberProps>(InputNumber, e => e);

export const SliderField = enhancer<SliderProps>(Slider, e => e);

export const UploadField = enhancer<UploadFieldProps>(Uploader, val => val);

export const ImageUploaderField = enhancer<ImageUploaderProps>(
  ImageUploader,
  url => url
);

export const SelectField = enhancer<SelectProps>(Select, e => e);

export const TreeSelectField = enhancer<TreeSelectProps>(TreeSelect, e => e);

export const AutoCompleteField = enhancer<AutoCompleteProps>(
  AutoComplete,
  e => e
);

export const RadioGroupField = enhancer<RadioGroupProps>(
  RadioGroup,
  value => value
);

export const SwitchField = enhancer<SwitchProps>(Switch, e => e);

export const CheckboxField = enhancer<CheckboxGroupProps<any>>(
  CheckBoxGroup,
  e => e
);

export const EditTabField = enhancer<EditTabProps>(EditTab, (e: any[]) => e);
export const EditGridTabField = enhancer<EditGridTabProps>(
  EditGridTab,
  (e: any[]) => e
);

export const InlineTextField = enhancer<InlineTextProps>(
  InlineText,
  value => value
);
