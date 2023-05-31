import { Collapse, Grid, Space } from '@arco-design/web-react';
import { AttributesPanelWrapper } from 'packages/easy-email-extensions/AttributePanel/components/attributes/AttributesPanelWrapper';
import { Border } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Border';
import { Padding } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Padding';
import { VerticalAlign } from 'packages/easy-email-extensions/AttributePanel/components/attributes/VerticalAlign';
import { Width } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Width';
import { BackgroundColor } from '../../attributes';
import { ClassName } from '../../attributes/ClassName';
import { CollapseWrapper } from '../../attributes/CollapseWrapper';

export function Column() {
  return (
    <AttributesPanelWrapper>
      <CollapseWrapper defaultActiveKey={['0', '1', '2']}>
        <Collapse.Item name="0" header={t('Dimension')}>
          <Space direction="vertical">
            <Grid.Row>
              <Grid.Col span={11}>
                <Width />
              </Grid.Col>
              <Grid.Col offset={1} span={11}>
                <VerticalAlign />
              </Grid.Col>
            </Grid.Row>

            <Padding />
          </Space>
        </Collapse.Item>
        <Collapse.Item name="1" header={t('Background')}>
          <BackgroundColor />
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
