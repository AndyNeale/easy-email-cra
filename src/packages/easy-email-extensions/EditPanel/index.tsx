import { Layout, Tabs } from '@arco-design/web-react';
import { useEditorProps } from 'packages/easy-email-editor';

import { BlockLayer } from 'packages/easy-email-extensions/BlockLayer';
import { FullHeightOverlayScrollbars } from 'packages/easy-email-extensions/components/FullHeightOverlayScrollbars';
import { useExtensionProps } from 'packages/easy-email-extensions/components/Providers/ExtensionProvider';
import { Blocks } from './Blocks';

import { ConfigurationDrawer } from './ConfigurationDrawer';
import styles from './index.module.scss';

const TabPane = Tabs.TabPane;

export function EditPanel({ showSourceCode }: { showSourceCode: boolean }) {
  const { height } = useEditorProps();
  const { compact = true } = useExtensionProps();

  return (
    <Layout.Sider
      className={styles.blocksPanel}
      style={{ paddingRight: 0, minWidth: 360 }}
      // collapsed={collapsed}
      collapsible
      trigger={null}
      breakpoint="xl"
      collapsedWidth={60}
      width={360}
    >
      <Tabs
        defaultActiveTab="2"
        style={{ width: '100%', padding: 0 }}
        renderTabHeader={(_, DefaultHeader) => (
          <div className={styles.largeTabsHeader}>
            <DefaultHeader />
          </div>
        )}
      >
        <TabPane key="2" title={t('Block')}>
          <FullHeightOverlayScrollbars height={`calc(${height} - 60px)`}>
            <Blocks />
          </FullHeightOverlayScrollbars>
        </TabPane>

        <TabPane key="1" title={t('Layer')}>
          <FullHeightOverlayScrollbars height={`calc(${height} - 60px)`}>
            <div style={{ padding: 20 }}>
              <BlockLayer />
            </div>
          </FullHeightOverlayScrollbars>
        </TabPane>
      </Tabs>
      {!compact && (
        <ConfigurationDrawer
          height={height}
          showSourceCode={showSourceCode}
          compact={Boolean(compact)}
        />
      )}
    </Layout.Sider>
  );
}
