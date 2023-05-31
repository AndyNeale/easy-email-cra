/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import { Tooltip } from '@arco-design/web-react';
import { classnames } from 'packages/easy-email-extensions/utils/classnames';

export const ToolItem: React.FC<{
  title?: string;
  icon: React.ReactNode;
  onClick?: React.MouseEventHandler<any>;
  trigger?: string;
  style?: React.CSSProperties;
  isActive?: boolean;
}> = props => {
  if (!props.title) {
    return (
      <button
        tabIndex={-1}
        className="easy-email-extensions-emailToolItem"
        title={props.title}
        onClick={props.onClick}
        style={props.style}
      >
        {props.icon}
      </button>
    );
  }
  return (
    <Tooltip mini position="bottom" content={props.title}>
      <button
        tabIndex={-1}
        className={classnames(
          'easy-email-extensions-emailToolItem',
          props.isActive && 'easy-email-extensions-emailToolItem-active'
        )}
        title={props.title}
        onClick={props.onClick}
        style={props.style}
      >
        {props.icon}
      </button>
    </Tooltip>
  );
};
