/* eslint-disable react/prop-types */

import { classnames } from 'utils/classnames';

import './index.scss';

export interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  title?: string;
  noBorder?: boolean;
  onClick?: React.DOMAttributes<HTMLButtonElement>['onClick'];
}
export const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      onClick={props.onClick}
      className={classnames(
        'easy-email-editor-button',
        props.noBorder && 'easy-email-editor-noBorder'
      )}
      title={props.title}
      disabled={props.disabled}
      type="button"
    >
      {props.children}
    </button>
  );
};
