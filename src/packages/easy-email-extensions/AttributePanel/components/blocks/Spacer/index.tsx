import { Collapse, Grid, Space } from '@arco-design/web-react';
import { AttributesPanelWrapper } from 'packages/easy-email-extensions/AttributePanel/components/attributes/AttributesPanelWrapper';
import { ContainerBackgroundColor } from 'packages/easy-email-extensions/AttributePanel/components/attributes/ContainerBackgroundColor';
import { Height } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Height';
import { Padding } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Padding';
import { ClassName } from '../../attributes/ClassName';
import { CollapseWrapper } from '../../attributes/CollapseWrapper';

export function Spacer() {
  return (
    <AttributesPanelWrapper>
      <CollapseWrapper defaultActiveKey={['-1', '0', '1', '2', '3']}>
        <Collapse.Item name="1" header={t('Dimension')}>
          <Space direction="vertical">
            <Height />
            <Padding />
          </Space>
        </Collapse.Item>

        <Collapse.Item name="2" header={t('Background')}>
          <ContainerBackgroundColor title={t('Background color')} />
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
