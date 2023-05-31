import { PreviewEmailContext } from 'packages/easy-email-editor/components/Provider/PreviewEmailProvider';
import { useContext } from 'react';

export function usePreviewEmail() {
  return useContext(PreviewEmailContext);
}
