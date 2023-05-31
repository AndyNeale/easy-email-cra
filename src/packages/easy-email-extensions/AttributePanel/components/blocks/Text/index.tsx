import { Align } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Align';
import { Color } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Color';
import { ContainerBackgroundColor } from 'packages/easy-email-extensions/AttributePanel/components/attributes/ContainerBackgroundColor';
import { FontFamily } from 'packages/easy-email-extensions/AttributePanel/components/attributes/FontFamily';
import { FontSize } from 'packages/easy-email-extensions/AttributePanel/components/attributes/FontSize';
import { FontStyle } from 'packages/easy-email-extensions/AttributePanel/components/attributes/FontStyle';
import { FontWeight } from 'packages/easy-email-extensions/AttributePanel/components/attributes/FontWeight';
import { Height } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Height';
import { LetterSpacing } from 'packages/easy-email-extensions/AttributePanel/components/attributes/LetterSpacing';
import { LineHeight } from 'packages/easy-email-extensions/AttributePanel/components/attributes/LineHeight';
import { Padding } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Padding';
import { TextDecoration } from 'packages/easy-email-extensions/AttributePanel/components/attributes/TextDecoration';
import { useState } from 'react';

import { Button, Collapse, Grid, Space, Tooltip } from '@arco-design/web-react';
import { IconFont } from 'packages/easy-email-editor';
import { AttributesPanelWrapper } from 'packages/easy-email-extensions/AttributePanel/components/attributes/AttributesPanelWrapper';
import { HtmlEditor } from '../../UI/HtmlEditor';
import { ClassName } from '../../attributes/ClassName';
import { CollapseWrapper } from '../../attributes/CollapseWrapper';

export function Text() {
  const [visible, setVisible] = useState(false);

  return (
    <AttributesPanelWrapper
      extra={
        <Tooltip content={t('Html mode')}>
          <Button
            onClick={() => setVisible(true)}
            icon={<IconFont iconName="icon-html" />}
          />
        </Tooltip>
      }
    >
      <CollapseWrapper defaultActiveKey={['0', '1', '2']}>
        <Collapse.Item name="0" header={t('Dimension')}>
          <Space direction="vertical">
            <Height />
            <Padding showResetAll />
          </Space>
        </Collapse.Item>
        <Collapse.Item name="1" header={t('Color')}>
          <Grid.Row>
            <Grid.Col span={11}>
              <Color />
            </Grid.Col>
            <Grid.Col offset={1} span={11}>
              <ContainerBackgroundColor title={t('Background color')} />
            </Grid.Col>
          </Grid.Row>
        </Collapse.Item>
        <Collapse.Item name="2" header={t('Typography')}>
          <Space direction="vertical">
            <Grid.Row>
              <Grid.Col span={11}>
                <FontFamily />
              </Grid.Col>
              <Grid.Col offset={1} span={11}>
                <FontSize />
              </Grid.Col>
            </Grid.Row>

            <Grid.Row>
              <Grid.Col span={11}>
                <LineHeight />
              </Grid.Col>
              <Grid.Col offset={1} span={11}>
                <LetterSpacing />
              </Grid.Col>
            </Grid.Row>

            <Grid.Row>
              <Grid.Col span={11}>
                <TextDecoration />
              </Grid.Col>
              <Grid.Col offset={1} span={11}>
                <FontWeight />
              </Grid.Col>
            </Grid.Row>

            <Align />

            <FontStyle />

            <Grid.Row>
              <Grid.Col span={11} />
              <Grid.Col offset={1} span={11} />
            </Grid.Row>
          </Space>
        </Collapse.Item>
        <Collapse.Item name="4" header={t('Extra')}>
          <Grid.Col span={24}>
            <ClassName />
          </Grid.Col>
        </Collapse.Item>
      </CollapseWrapper>
      <HtmlEditor visible={visible} setVisible={setVisible} />
    </AttributesPanelWrapper>
  );
}
