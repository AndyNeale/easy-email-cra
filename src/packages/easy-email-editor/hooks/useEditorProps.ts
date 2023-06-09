import {
  EditorPropsContext,
  PropsProviderProps,
} from 'packages/easy-email-editor/components/Provider/PropsProvider';
import { useContext } from 'react';

export function useEditorProps<T extends PropsProviderProps>(): T & {
  mergeTagGenerate: NonNullable<PropsProviderProps['mergeTagGenerate']>;
} {
  return useContext(EditorPropsContext) as any;
}
