import { useFocusIdx } from 'packages/easy-email-editor';

import { Collapse, Grid, Space } from '@arco-design/web-react';
import { TextAreaField } from '../../../../components/Form';
import { AttributesPanelWrapper } from '../../attributes/AttributesPanelWrapper';
import { BackgroundColor } from '../../attributes/BackgroundColor';
import { Color } from '../../attributes/Color';
import { FontFamily } from '../../attributes/FontFamily';
import { FontSize } from '../../attributes/FontSize';
import { FontWeight } from '../../attributes/FontWeight';
import { LineHeight } from '../../attributes/LineHeight';
import { Padding } from '../../attributes/Padding';

export function AccordionText() {
  const { focusIdx } = useFocusIdx();

  return (
    <AttributesPanelWrapper>
      <Collapse defaultActiveKey={['0', '1', '2']}>
        <Collapse.Item name="0" header={t('Setting')}>
          <Space direction="vertical">
            <TextAreaField
              label={t('Content')}
              name={`${focusIdx}.data.value.content`}
              autoSize={{ minRows: 5 }}
            />
            <Grid.Row>
              <Grid.Col span={11}>
                <Color />
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
                <FontWeight />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col span={11}>
                <FontFamily />
              </Grid.Col>
              <Grid.Col offset={1} span={11}>
                <BackgroundColor />
              </Grid.Col>
            </Grid.Row>

            <Padding title={t('Padding')} attributeName="padding" />
          </Space>
        </Collapse.Item>
      </Collapse>
    </AttributesPanelWrapper>
  );
}
