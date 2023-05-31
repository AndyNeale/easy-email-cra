import styles from '../../Stack.module.scss';
import { classNames } from '../../utils/css';

export interface ItemProps {
  /** Elements to display inside item */
  children?: React.ReactNode;
  /** Fill the remaining horizontal space in the stack with the item  */
  fill?: boolean;
  /**
   * @default false
   */
}

export function Item({ children, fill }: ItemProps) {
  const className = classNames(styles.Item, fill && styles['Item-fill']);

  return <div className={className}>{children}</div>;
}
