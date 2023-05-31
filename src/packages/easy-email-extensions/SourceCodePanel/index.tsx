/* eslint-disable chai-friendly/no-unused-expressions */
/* eslint-disable no-eval */

import { Collapse, Input, Message } from '@arco-design/web-react';
import { cloneDeep } from 'lodash';
import {
  BasicType,
  BlockManager,
  IBlockData,
  JsonToMjml,
  getPageIdx,
  getParentByIdx,
} from 'packages/easy-email-core';
import {
  useBlock,
  useEditorContext,
  useEditorProps,
  useFocusIdx,
} from 'packages/easy-email-editor';
import { MjmlToJson } from 'packages/easy-email-extensions/utils/MjmlToJson';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

export function SourceCodePanel() {
  const { setValueByIdx, focusBlock, values } = useBlock();
  const { focusIdx } = useFocusIdx();

  const [mjmlText, setMjmlText] = useState('');
  const { pageData } = useEditorContext();
  const { mergeTags } = useEditorProps();

  const code = useMemo(() => {
    if (!focusBlock) return '';
    return JSON.stringify(focusBlock, null, 2) || '';
  }, [focusBlock]);

  const onChangeCode = useCallback(
    (event: React.FocusEvent<HTMLTextAreaElement>) => {
      try {
        const parseValue = JSON.parse(
          JSON.stringify(eval(`(${event.target.value})`))
        ) as IBlockData;

        const block = BlockManager.getBlockByType(parseValue.type);
        if (!block) {
          throw new Error(t('Invalid content'));
        }
        if (
          !parseValue.data ||
          !parseValue.data.value ||
          !parseValue.attributes ||
          !Array.isArray(parseValue.children)
        ) {
          throw new Error(t('Invalid content'));
        }
        setValueByIdx(focusIdx, parseValue);
      } catch (error: any) {
        Message.error(error?.message || error);
      }
    },
    [focusIdx, setValueByIdx]
  );

  const onMjmlChange = useCallback(
    (event: React.FocusEvent<HTMLTextAreaElement>) => {
      try {
        const parseValue = MjmlToJson(event.target.value);
        if (parseValue.type !== BasicType.PAGE) {
          const parentBlock = getParentByIdx(values, focusIdx)!;
          const parseBlock = BlockManager.getBlockByType(parseValue.type);

          if (!parseBlock?.validParentType.includes(parentBlock?.type)) {
            throw new Error(t('Invalid content'));
          }
        } else if (focusIdx !== getPageIdx()) {
          throw new Error(t('Invalid content'));
        }

        setValueByIdx(focusIdx, parseValue);
      } catch (error) {
        Message.error(t('Invalid content'));
      }
    },
    [focusIdx, setValueByIdx, values]
  );

  const onChangeMjmlText = useCallback((value: string) => {
    setMjmlText(value);
  }, []);

  useEffect(() => {
    focusBlock &&
      setMjmlText(
        JsonToMjml({
          idx: focusIdx,
          data: focusBlock,
          context: pageData,
          mode: 'production',
          dataSource: cloneDeep(mergeTags),
        })
      );
  }, [focusBlock, focusIdx, pageData, mergeTags]);

  if (!focusBlock) return null;

  return (
    <Collapse>
      <Collapse.Item
        name="json"
        header={t('Json source')}
        contentStyle={{ padding: '8px 13px' }}
      >
        <Input.TextArea
          key={code}
          defaultValue={code}
          autoSize={{ maxRows: 25 }}
          onBlur={onChangeCode}
        />
      </Collapse.Item>
      <Collapse.Item
        name="mjml"
        header={t('MJML source')}
        contentStyle={{ padding: '8px 13px' }}
      >
        <Input.TextArea
          key={code}
          value={mjmlText}
          autoSize={{ maxRows: 25 }}
          onChange={onChangeMjmlText}
          onBlur={onMjmlChange}
        />
      </Collapse.Item>
    </Collapse>
  );
}
