/* eslint-disable import/no-extraneous-dependencies */
/* eslint consistent-return: "off" */
/* eslint react-hooks/exhaustive-deps: "off" */
/* eslint @typescript-eslint/no-shadow: "off" */

import greenTheme from '@arco-themes/react-easy-email-theme-green/css/arco.css';
import purpleTheme from '@arco-themes/react-easy-email-theme-purple/css/arco.css';
import blueTheme from '@arco-themes/react-easy-email-theme/css/arco.css';
/* eslint-disable react/jsx-wrap-multilines */
import { Button, Message, PageHeader, Select } from '@arco-design/web-react';
import { IconMoonFill, IconSunFill } from '@arco-design/web-react/icon';
import { AutoSaveAndRestoreEmail } from 'components/AutoSaveAndRestoreEmail';
import { Stack } from 'components/Stack';
import { Loading } from 'components/loading';
import { FormApi } from 'final-form';
import { useAppSelector } from 'hooks/useAppSelector';
import { useLoading } from 'hooks/useLoading';
import { useQuery } from 'hooks/useQuery';
import { Liquid } from 'liquidjs';
import { cloneDeep, isEqual, set } from 'lodash';
import mjml from 'mjml-browser';
import { AdvancedType, IBlockData, JsonToMjml } from 'packages/easy-email-core';
import {
  BlockAvatarWrapper,
  EmailEditor,
  EmailEditorProvider,
  EmailEditorProviderProps,
  IEmailTemplate,
} from 'packages/easy-email-editor';
import {
  BlockMarketManager,
  ExtensionProps,
  StandardLayout,
} from 'packages/easy-email-extensions';
import localesData from 'packages/easy-email-localization/locales.json';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import services from 'services';
import template from 'store/template';
import { copy } from 'utils/clipboard';
import { pushEvent } from 'utils/pushEvent';
import { UserStorage } from 'utils/user-storage';

// Register external blocks
import './components/CustomBlocks';

import { CustomBlocksType } from './components/CustomBlocks/constants';
import { useCollection } from './components/useCollection';
import { useEmailModal } from './components/useEmailModal';
import { useMergeTagsModal } from './components/useMergeTagsModal';
import { testMergeTags } from './testMergeTags';

console.log(localesData);

const defaultCategories: ExtensionProps['categories'] = [
  {
    label: 'Content',
    active: true,
    blocks: [
      {
        type: AdvancedType.TEXT,
      },
      {
        type: AdvancedType.IMAGE,
        payload: { attributes: { padding: '0px 0px 0px 0px' } },
      },
      {
        type: AdvancedType.BUTTON,
      },
      {
        type: AdvancedType.SOCIAL,
      },
      {
        type: AdvancedType.DIVIDER,
      },
      {
        type: AdvancedType.SPACER,
      },
      {
        type: AdvancedType.HERO,
      },
      {
        type: AdvancedType.WRAPPER,
      },
    ],
  },
  {
    label: 'Layout',
    active: true,
    displayType: 'column',
    blocks: [
      {
        title: '2 columns',
        payload: [
          ['50%', '50%'],
          ['33%', '67%'],
          ['67%', '33%'],
          ['25%', '75%'],
          ['75%', '25%'],
        ],
      },
      {
        title: '3 columns',
        payload: [
          ['33.33%', '33.33%', '33.33%'],
          ['25%', '25%', '50%'],
          ['50%', '25%', '25%'],
        ],
      },
      {
        title: '4 columns',
        payload: [['25%', '25%', '25%', '25%']],
      },
    ],
  },
  {
    label: 'Custom',
    active: true,
    displayType: 'custom',
    blocks: [
      <BlockAvatarWrapper type={CustomBlocksType.PRODUCT_RECOMMENDATION}>
        <div
          style={{
            position: 'relative',
            border: '1px solid #ccc',
            marginBottom: 20,
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <img
            src="http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841389/ctbjtig27parugrztdhk.png"
            style={{
              maxWidth: '100%',
            }}
            alt=""
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
            }}
          />
        </div>
      </BlockAvatarWrapper>,
    ],
  },
];

const imageCompression = import('browser-image-compression');

const fontList = [
  'Arial',
  'Tahoma',
  'Verdana',
  'Times New Roman',
  'Courier New',
  'Georgia',
  'Lato',
  'Montserrat',
  '黑体',
  '仿宋',
  '楷体',
  '标楷体',
  '华文仿宋',
  '华文楷体',
  '宋体',
  '微软雅黑',
].map(item => ({ value: item, label: item }));

export default function Editor() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState<'blue' | 'green' | 'purple'>('blue');
  const dispatch = useDispatch();
  const history = useHistory();
  const templateData = useAppSelector('template');
  const [locale, setLocale] = useState('zh-Hans');
  const { collectionCategory } = useCollection();

  const { width } = useWindowSize();

  const smallScene = width < 1400;

  const { openModal, modal } = useEmailModal();
  const { id, userId } = useQuery();
  const loading = useLoading(template.loadings.fetchById);
  const {
    modal: mergeTagsModal,
    openModal: openMergeTagsModal,
    mergeTags,
    setMergeTags,
  } = useMergeTagsModal(testMergeTags);

  const isSubmitting = useLoading([
    template.loadings.create,
    template.loadings.updateById,
  ]);

  useEffect(() => {
    if (collectionCategory) {
      BlockMarketManager.addCategories([collectionCategory]);
      return () => {
        BlockMarketManager.removeCategories([collectionCategory]);
      };
    }
  }, [collectionCategory]);

  useEffect(() => {
    if (id) {
      if (!userId) {
        UserStorage.getAccount().then(account => {
          dispatch(
            template.actions.fetchById({ id: +id, userId: account.user_id })
          );
        });
      } else {
        dispatch(template.actions.fetchById({ id: +id, userId: +userId }));
      }
    } else {
      dispatch(template.actions.fetchDefaultTemplate(undefined));
    }

    return () => {
      dispatch(template.actions.set(null));
    };
  }, [dispatch, id, userId]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.body.removeAttribute('arco-theme');
    }
  }, [isDarkMode]);

  const onUploadImage = async (blob: Blob) => {
    const compressionFile = await (
      await imageCompression
    ).default(blob as File, {
      maxWidthOrHeight: 1440,
    });
    return services.common.uploadByQiniu(compressionFile);
  };

  // @ts-ignore
  const onChangeTheme = useCallback(t => {
    setTheme(t);
  }, []);

  const onChangeMergeTag = useCallback((path: string, val: any) => {
    // @ts-ignore
    setMergeTags(old => {
      const newObj = cloneDeep(old);
      set(newObj, path, val);
      return newObj;
    });
  }, []);

  const onExportHtml = (values: IEmailTemplate) => {
    pushEvent({ event: 'HtmlExport' });
    const html = mjml(
      JsonToMjml({
        data: values.content,
        mode: 'production',
        context: values.content,
        dataSource: mergeTags,
      }),
      {
        beautify: true,
        validationLevel: 'soft',
      }
    ).html;

    copy(html);
    Message.success('Copied to pasteboard!');
  };

  const onExportMJML = (values: IEmailTemplate) => {
    const html = JsonToMjml({
      data: values.content,
      mode: 'production',
      context: values.content,
      dataSource: mergeTags,
    });

    copy(html);
    pushEvent({ event: 'MJMLExport', payload: { values, mergeTags } });
    Message.success('Copied to pasteboard!');
  };

  const initialValues: IEmailTemplate | null = useMemo(() => {
    if (!templateData) return null;
    const sourceData = cloneDeep(templateData.content) as IBlockData;
    return {
      ...templateData,
      content: sourceData, // replace standard block
    };
  }, [templateData]);

  const onSubmit = useCallback(
    async (
      values: IEmailTemplate,
      form: FormApi<IEmailTemplate, Partial<IEmailTemplate>>
    ) => {
      pushEvent({ event: 'EmailSave' });
      if (id) {
        const isChanged = !(
          isEqual(initialValues?.content, values.content) &&
          isEqual(initialValues?.subTitle, values?.subTitle) &&
          isEqual(initialValues?.subject, values?.subject)
        );

        if (!isChanged) {
          Message.success('Updated success!');
          form.restart(values);
          return;
        }
        dispatch(
          template.actions.updateById({
            id: +id,
            template: values,
            success() {
              Message.success('Updated success!');
              form.restart(values);
            },
          })
        );
      } else {
        dispatch(
          template.actions.create({
            template: values,
            success(id, newTemplate) {
              Message.success('Saved success!');
              form.restart(newTemplate);
              history.replace(`/editor?id=${id}`);
            },
          })
        );
      }
    },
    [dispatch, history, id, initialValues]
  );

  const onBeforePreview: EmailEditorProviderProps['onBeforePreview'] =
    // @ts-ignore
    useCallback((html: string, mergeTags) => {
      const engine = new Liquid();
      const tpl = engine.parse(html);
      return engine.renderSync(tpl, mergeTags);
    }, []);

  const themeStyleText = useMemo(() => {
    if (theme === 'green') return greenTheme;
    if (theme === 'purple') return purpleTheme;
    return blueTheme;
  }, [theme]);

  if (!templateData && loading) {
    return (
      <Loading loading={loading}>
        <div style={{ height: '100vh' }} />
      </Loading>
    );
  }

  if (!initialValues) return null;

  return (
    <div>
      <style>{themeStyleText}</style>
      <EmailEditorProvider
        key={id}
        height="calc(100vh - 68px)"
        data={initialValues}
        // interactiveStyle={{
        //   hoverColor: '#78A349',
        //   selectedColor: '#1890ff',
        // }}
        // onAddCollection={addCollection}
        // onRemoveCollection={({ id }) => removeCollection(id)}
        onUploadImage={onUploadImage}
        fontList={fontList}
        onSubmit={onSubmit}
        onChangeMergeTag={onChangeMergeTag}
        autoComplete
        enabledLogic
        // enabledMergeTagsBadge
        dashed={false}
        mergeTags={mergeTags}
        mergeTagGenerate={tag => `{{${tag}}}`}
        onBeforePreview={onBeforePreview}
        socialIcons={[]}
        // @ts-ignore
        locale={localesData[locale]}
      >
        {({ values }, { submit }) => {
          return (
            <>
              <PageHeader
                style={{ background: 'var(--color-bg-2)' }}
                backIcon
                title="Edit"
                onBack={() => history.push('/')}
                extra={
                  <Stack alignment="center">
                    <Button
                      onClick={() => setIsDarkMode(v => !v)}
                      shape="circle"
                      type="text"
                      icon={isDarkMode ? <IconMoonFill /> : <IconSunFill />}
                    />

                    <Select onChange={onChangeTheme} value={theme}>
                      <Select.Option value="blue">Blue</Select.Option>
                      <Select.Option value="green">Green</Select.Option>
                      <Select.Option value="purple">Purple</Select.Option>
                    </Select>
                    <Select onChange={setLocale} value={locale}>
                      <Select.Option value="en">English</Select.Option>
                      <Select.Option value="zh-Hans">中文简体</Select.Option>
                      <Select.Option value="ja">Japanese</Select.Option>
                      <Select.Option value="it">Italian</Select.Option>
                    </Select>

                    <Button onClick={openMergeTagsModal}>
                      Update mergeTags
                    </Button>

                    <Button onClick={() => onExportMJML(values)}>
                      Export MJML
                    </Button>

                    <Button onClick={() => onExportHtml(values)}>
                      Export html
                    </Button>

                    <Button onClick={() => openModal(values, mergeTags)}>
                      Send test email
                    </Button>
                    <Button
                      loading={isSubmitting}
                      type="primary"
                      onClick={() => submit()}
                    >
                      Save
                    </Button>
                    <a
                      href="https://www.buymeacoffee.com/easyemail?utm_source=webside&utm_medium=button&utm_content=donate"
                      target="_blank"
                      onClick={ev => {
                        ev.preventDefault();
                        pushEvent({ event: 'Donate' });
                        window.open(
                          'https://www.buymeacoffee.com/easyemail?utm_source=webside&utm_medium=button&utm_content=donate',
                          '_blank'
                        );
                      }}
                      rel="noreferrer"
                    >
                      <img
                        style={{
                          marginTop: -16,
                          position: 'relative',
                          top: 11,
                          height: 32,
                        }}
                        src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
                        alt="Buy Me A Coffee"
                      />
                    </a>
                  </Stack>
                }
              />
              <StandardLayout
                compact={!smallScene}
                categories={defaultCategories}
              >
                <EmailEditor />
              </StandardLayout>
              <AutoSaveAndRestoreEmail />
            </>
          );
        }}
      </EmailEditorProvider>
      {modal}
      {mergeTagsModal}
      <style>{`#bmc-wbtn {display:none !important;}`}</style>
    </div>
  );
}

/*
function replaceStandardBlockToAdvancedBlock(blockData: IBlockData) {
  const map = {
    [BasicType.TEXT]: AdvancedType.TEXT,
    [BasicType.BUTTON]: AdvancedType.BUTTON,
    [BasicType.IMAGE]: AdvancedType.IMAGE,
    [BasicType.DIVIDER]: AdvancedType.DIVIDER,
    [BasicType.SPACER]: AdvancedType.SPACER,
    [BasicType.SOCIAL]: AdvancedType.SOCIAL,
    [BasicType.ACCORDION]: AdvancedType.ACCORDION,
    [BasicType.CAROUSEL]: AdvancedType.CAROUSEL,
    [BasicType.NAVBAR]: AdvancedType.NAVBAR,
    [BasicType.WRAPPER]: AdvancedType.WRAPPER,
    [BasicType.SECTION]: AdvancedType.SECTION,
    [BasicType.GROUP]: AdvancedType.GROUP,
    [BasicType.COLUMN]: AdvancedType.COLUMN,
  };

  if (map[blockData.type]) {
    blockData.type = map[blockData.type];
  }
  blockData.children.forEach(replaceStandardBlockToAdvancedBlock);
  return blockData;
}
*/
