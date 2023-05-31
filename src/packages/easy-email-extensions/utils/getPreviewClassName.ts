import {
  getNodeIdxClassName,
  getNodeTypeClassName,
} from 'packages/easy-email-core';
import { classnames } from 'packages/easy-email-extensions/AttributePanel/utils/classnames';

export function getPreviewClassName(idx: string | null, type: string) {
  return classnames(
    'email-block',
    idx && getNodeIdxClassName(idx),
    getNodeTypeClassName(type)
  );
}
