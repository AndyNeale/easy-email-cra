/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-continue */

import { Collapse, Grid, Space, Switch } from '@arco-design/web-react';
import { BasicType, BlockManager } from 'packages/easy-email-core';
import { Stack, useBlock } from 'packages/easy-email-editor';
import { AttributesPanelWrapper } from 'packages/easy-email-extensions/AttributePanel/components/attributes/AttributesPanelWrapper';
import { Background } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Background';
import { Border } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Border';
import { Padding } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Padding';
import { useCallback } from 'react';
import { ClassName } from '../../attributes/ClassName';
import { CollapseWrapper } from '../../attributes/CollapseWrapper';

export function Section() {
  const { focusBlock, setFocusBlock } = useBlock();

  const noWrap = focusBlock?.data.value.noWrap;

  const onChange = useCallback(
    (checked: any) => {
      if (!focusBlock) return;
      focusBlock.data.value.noWrap = checked;
      if (checked) {
        const children = [...focusBlock.children];
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (!child) continue;
          if (child.type === BasicType.GROUP) {
            children.splice(i, 1, ...child.children);
          }
        }
        focusBlock.children = [
          BlockManager.getBlockByType(BasicType.GROUP)!.create({
            children,
          }),
        ];
      } else if (
        focusBlock.children.length === 1 &&
        focusBlock.children[0].type === BasicType.GROUP
      ) {
        focusBlock.children = focusBlock.children[0]?.children || [];
      }
      setFocusBlock({ ...focusBlock });
    },
    [focusBlock, setFocusBlock]
  );

  return (
    <AttributesPanelWrapper style={{ padding: 0 }}>
      <CollapseWrapper defaultActiveKey={['0', '1', '2']}>
        <Collapse.Item name="0" header={t('Dimension')}>
          <Space direction="vertical">
            <Grid.Row>
              <Grid.Col span={12}>
                <label style={{ width: '100%', display: 'flex' }}>
                  <div style={{ flex: 1 }}>{t('Group')}</div>
                </label>
                <Switch
                  checked={noWrap}
                  checkedText={t('True')}
                  uncheckedText={t('False')}
                  onChange={onChange}
                />
              </Grid.Col>
              <Grid.Col span={12} />
            </Grid.Row>

            <Padding />
          </Space>
        </Collapse.Item>
        <Collapse.Item name="1" header={t('Background')}>
          <Stack vertical spacing="tight">
            <Background />
          </Stack>
        </Collapse.Item>
        <Collapse.Item name="2" header={t('Border')}>
          <Border />
        </Collapse.Item>
        <Collapse.Item name="4" header={t('Extra')}>
          <Grid.Col span={24}>
            <ClassName />
          </Grid.Col>
        </Collapse.Item>
      </CollapseWrapper>
    </AttributesPanelWrapper>
  );
}
