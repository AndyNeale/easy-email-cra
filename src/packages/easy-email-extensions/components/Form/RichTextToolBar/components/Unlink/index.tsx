import { PopoverProps, Tooltip } from '@arco-design/web-react';
import { EMAIL_BLOCK_CLASS_NAME } from 'packages/easy-email-core';
import { IconFont } from 'packages/easy-email-editor';
import { useCallback, useMemo } from 'react';
import { ToolItem } from '../ToolItem';

export interface LinkParams {
  link: string;
  blank: boolean;
  underline: boolean;
  linkNode: HTMLAnchorElement | null;
}

export interface LinkProps extends PopoverProps {
  currentRange: Range | null | undefined;
  onChange: () => void;
}

function getAnchorElement(node: Node | null): HTMLAnchorElement | null {
  if (!node) return null;
  if (node instanceof HTMLAnchorElement) {
    return node;
  }
  if (
    node instanceof Element &&
    node.classList.contains(EMAIL_BLOCK_CLASS_NAME)
  )
    return null;

  return getAnchorElement(node.parentNode);
}

function getLinkNode(
  currentRange: Range | null | undefined
): HTMLAnchorElement | null {
  let linkNode: HTMLAnchorElement | null = null;
  if (!currentRange) return null;
  linkNode = getAnchorElement(currentRange.commonAncestorContainer);
  return linkNode;
}

export function Unlink(props: LinkProps) {
  const { onChange } = props;
  const linkNode = useMemo(() => {
    return getLinkNode(props.currentRange);
  }, [props.currentRange]);

  const onUnlink = useCallback(() => {
    if (linkNode?.parentNode) {
      linkNode?.replaceWith(...linkNode.childNodes);
      onChange();
    }
  }, [linkNode, onChange]);

  return (
    <Tooltip color="#fff" position="tl" content={t('Unlink')}>
      <ToolItem
        title={t('Unlink')}
        icon={<IconFont iconName="icon-unlink" />}
        onClick={onUnlink}
      />
    </Tooltip>
  );
}
