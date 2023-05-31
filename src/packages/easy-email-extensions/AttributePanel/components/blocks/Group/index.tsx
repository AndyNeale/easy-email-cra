import { Collapse, Grid } from '@arco-design/web-react';
import { AttributesPanelWrapper } from 'packages/easy-email-extensions/AttributePanel/components/attributes/AttributesPanelWrapper';
import { BackgroundColor } from 'packages/easy-email-extensions/AttributePanel/components/attributes/BackgroundColor';
import { VerticalAlign } from 'packages/easy-email-extensions/AttributePanel/components/attributes/VerticalAlign';
import { Width } from 'packages/easy-email-extensions/AttributePanel/components/attributes/Width';
import { ClassName } from '../../attributes/ClassName';
import { CollapseWrapper } from '../../attributes/CollapseWrapper';

export function Group() {
  return (
    <AttributesPanelWrapper>
      <CollapseWrapper defaultActiveKey={['0', '1', '2']}>
        <Collapse.Item name="0" header={t('Dimension')}>
          <Grid.Row>
            <Grid.Col span={11}>
              <Width />
            </Grid.Col>
            <Grid.Col offset={1} span={11}>
              <VerticalAlign />
            </Grid.Col>
          </Grid.Row>
        </Collapse.Item>
        <Collapse.Item name="1" header={t('Background')}>
          <Grid.Row>
            <Grid.Col span={11}>
              <BackgroundColor />
            </Grid.Col>
            <Grid.Col offset={1} span={11} />
          </Grid.Row>
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
