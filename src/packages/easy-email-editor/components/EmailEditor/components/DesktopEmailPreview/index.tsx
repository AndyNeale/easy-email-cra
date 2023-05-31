/* eslint-disable react/no-array-index-key */

import { ActiveTabKeys } from 'packages/easy-email-editor/components/Provider/BlocksProvider';
import { SyncScrollShadowDom } from 'packages/easy-email-editor/components/UI/SyncScrollShadowDom';
import { SYNC_SCROLL_ELEMENT_CLASS_NAME } from 'packages/easy-email-editor/constants';
import { useActiveTab } from 'packages/easy-email-editor/hooks/useActiveTab';
import { useEditorContext } from 'packages/easy-email-editor/hooks/useEditorContext';
import { usePreviewEmail } from 'packages/easy-email-editor/hooks/usePreviewEmail';
import { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { classnames } from 'utils/classnames';

export function DesktopEmailPreview() {
  const { activeTab } = useActiveTab();
  // @ts-ignore
  const { errMsg, reactNode } = usePreviewEmail();

  const { pageData } = useEditorContext();

  const fonts = useMemo(() => {
    return pageData.data.value.fonts || [];
  }, [pageData.data.value.fonts]);

  const isActive = activeTab === ActiveTabKeys.PC;

  if (errMsg) {
    return (
      <div style={{ textAlign: 'center', fontSize: 24, color: 'red' }}>
        {errMsg}
      </div>
    );
  }

  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <SyncScrollShadowDom
        isActive={isActive}
        style={{
          border: 'none',
          height: '100%',
          width: '100%',
        }}
      >
        <>
          <style>
            {`
                .preview-container {
                  overflow: overlay !important;
                }
                *::-webkit-scrollbar {
                  -webkit-appearance: none;
                  width: 0px;
                }
                *::-webkit-scrollbar-thumb {
                  background-color: rgba(0, 0, 0, 0.5);
                  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
                  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
                }
              `}
          </style>
          <div
            className={classnames(
              'preview-container',
              SYNC_SCROLL_ELEMENT_CLASS_NAME
            )}
            style={{
              height: '100%',
              overflow: 'auto',
              margin: 'auto',

              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 40,
              paddingBottom: 140,
              boxSizing: 'border-box',
            }}
          >
            {reactNode}
          </div>
          {createPortal(
            <>
              {/* @ts-ignore */}
              {fonts.map((item, index) => (
                <link
                  key={index}
                  href={item.href}
                  rel="stylesheet"
                  type="text/css"
                />
              ))}
            </>,
            document.body
          )}
        </>
      </SyncScrollShadowDom>
    </div>
  );
}
