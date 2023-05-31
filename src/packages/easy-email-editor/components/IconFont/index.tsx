/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { classnames } from 'utils/classnames';

export function IconFont(props: {
  iconName: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onClickCapture?: React.MouseEventHandler<HTMLDivElement>;
  size?: number;
  style?: React.CSSProperties;
  title?: string;
}) {
  return (
    <div
      title={props.title}
      onClick={props.onClick}
      onClickCapture={props.onClickCapture}
      style={{
        cursor: 'pointer',
        pointerEvents: 'auto',
        color: 'inherit',
        ...(props.style as any),
        fontSize: props.size || props.style?.fontSize,
      }}
      className={classnames('iconfont', props.iconName)}
    />
  );
}
