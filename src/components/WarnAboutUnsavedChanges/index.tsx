/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */

import { Modal } from '@arco-design/web-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useFormState } from 'react-final-form';
import { Prompt } from 'react-router-dom';
import { ConfirmBeforeLeavePage } from 'utils/ConfirmBeforeLeavePage';
import { getIsFormTouched } from 'utils/getIsFormTouched';

interface WarnAboutUnsavedChangesProps {
  dirty?: boolean;
  pageUnload?: boolean;
  onBeforeConfirm?: () => void;
}

export function WarnAboutUnsavedChanges(props: WarnAboutUnsavedChangesProps) {
  const { pageUnload = true } = props;
  const formState = useFormState<any>();
  const callbackRef = useRef<null | ((isOk: boolean) => any)>(null);
  const [visible, setVisible] = useState(false);
  const dirty = getIsFormTouched(formState.touched as any) || props.dirty;
  const openConfirmModal = useCallback(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    ConfirmBeforeLeavePage.register(callback => {
      if (dirty) {
        callbackRef.current = callback;
        props.onBeforeConfirm?.();
        openConfirmModal();
      }
    });

    return () => {
      ConfirmBeforeLeavePage.unregister();
    };
  }, [openConfirmModal, dirty, props]);

  useEffect(() => {
    if (pageUnload) {
      const onCheckUnsaved = (event: Event) => {
        if (dirty) {
          props.onBeforeConfirm?.();

          event.preventDefault();
          (event.returnValue as any) =
            'Changes that you made may not be saved.';
        }
      };

      window.addEventListener('beforeunload', onCheckUnsaved);

      return () => {
        window.removeEventListener('beforeunload', onCheckUnsaved);
      };
    }
  }, [dirty, pageUnload, props]);

  const onCancel = useCallback(() => {
    callbackRef.current?.(false);
    setVisible(false);
  }, []);

  const onOk = useCallback(() => {
    props.onBeforeConfirm?.();
    callbackRef.current?.(true);
  }, []);

  return (
    <>
      <Modal
        title="Discard changes?"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        okText="Discard"
        cancelText="Cancel"
        style={{ zIndex: 10000 }}
      >
        <p>Are you sure you want to discard all unsaved changes?</p>
      </Modal>
      {dirty && <Prompt when message="" />}
    </>
  );
}
