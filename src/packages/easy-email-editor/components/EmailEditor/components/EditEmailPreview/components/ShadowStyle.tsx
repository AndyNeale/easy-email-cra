/* eslint-disable react/no-danger */

import iconfontText from 'packages/easy-email-editor/assets/font/iconfont.scss';
import { useEditorProps } from 'packages/easy-email-editor/hooks/useEditorProps';
import styles from 'packages/easy-email-editor/styles/block-shadowDom-interactive.scss';

export function ShadowStyle() {
  const {
    interactiveStyle: {
      hoverColor = 'rgb(var(--primary-4, #1890ff))',
      selectedColor = 'rgb(var(--primary-6, #1890ff))',
    } = {},
  } = useEditorProps();

  return (
    <>
      <style>{iconfontText}</style>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            * {
              --hover-color: ${hoverColor};
              --selected-color: ${selectedColor};
            }

            :host(*){
              all: initial;
            }

            .shadow-container {
              overflow: overlay !important;
            }
            .shadow-container::-webkit-scrollbar {
              -webkit-appearance: none;
              width: 8px;
            }
            .shadow-container::-webkit-scrollbar-thumb {
              background-color: rgba(0, 0, 0, 0.5);
              box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
              -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
            }


            ${styles}

            `,
        }}
      />
    </>
  );
}
