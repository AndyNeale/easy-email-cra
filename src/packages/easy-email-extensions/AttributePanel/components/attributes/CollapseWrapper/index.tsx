import { Collapse, Space } from '@arco-design/web-react';
import { isAdvancedBlock } from 'packages/easy-email-core';
import { useBlock, useEditorProps } from 'packages/easy-email-editor';
import React, { useCallback, useEffect, useState } from 'react';
import { Condition } from '../Condition';
import { Iteration } from '../Iteration';

export interface CollapseWrapperProps {
  defaultActiveKey: string[];
  children: React.ReactNode | React.ReactElement;
}

export const CollapseWrapper: React.FC<CollapseWrapperProps> = props => {
  const { enabledLogic } = useEditorProps();
  const [activeKeys, setActiveKeys] = useState<string[]>(
    props.defaultActiveKey
  );

  const { focusBlock } = useBlock();
  const value = focusBlock?.data.value;

  const isAdvancedBlockType = isAdvancedBlock(focusBlock?.type);

  const iterationEnabled =
    isAdvancedBlockType &&
    Boolean(value?.iteration && value?.iteration?.enabled);

  const conditionEnabled =
    isAdvancedBlockType &&
    Boolean(value?.condition && value?.condition?.enabled);

  const onChange = useCallback((key: string, keys: string[]) => {
    setActiveKeys(keys);
  }, []);

  useEffect(() => {
    if (!isAdvancedBlockType) return;

    if (iterationEnabled) {
      setActiveKeys(keys => [...keys, 'Iteration']);
    } else {
      setActiveKeys(keys => keys.filter(k => k !== 'Iteration'));
    }
  }, [iterationEnabled, isAdvancedBlockType]);

  useEffect(() => {
    if (!isAdvancedBlockType) return;

    if (conditionEnabled) {
      setActiveKeys(keys => [...keys, 'Condition']);
    } else {
      setActiveKeys(keys => keys.filter(k => k !== 'Condition'));
    }
  }, [conditionEnabled, isAdvancedBlockType]);

  return (
    <Space size="large" direction="vertical" style={{ width: '100%' }}>
      <Collapse onChange={onChange} activeKey={activeKeys}>
        {props.children}
        {enabledLogic && (
          <>
            <Iteration />
            <Condition />
          </>
        )}
      </Collapse>
      <div />
      <div />
      <div />
    </Space>
  );
};
