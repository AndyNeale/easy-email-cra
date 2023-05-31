import { Button, Tooltip } from '@arco-design/web-react';
import { IconFont, useFocusIdx } from 'packages/easy-email-editor';
import { TextAreaField } from 'packages/easy-email-extensions/components/Form';
import { useState } from 'react';
import { HtmlEditor } from '../../UI/HtmlEditor';
import { AttributesPanelWrapper } from '../../attributes';

export function Raw() {
  const { focusIdx } = useFocusIdx();
  const [visible, setVisible] = useState(false);
  return (
    <AttributesPanelWrapper
      style={{ padding: 20 }}
      extra={
        <Tooltip content={t('Html mode')}>
          <Button
            onClick={() => setVisible(true)}
            icon={<IconFont iconName="icon-html" />}
          />
        </Tooltip>
      }
    >
      <TextAreaField
        label=""
        name={`${focusIdx}.data.value.content`}
        rows={5}
      />
      <HtmlEditor visible={visible} setVisible={setVisible} />
    </AttributesPanelWrapper>
  );
}