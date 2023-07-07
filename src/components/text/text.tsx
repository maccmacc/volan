import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './text.module.scss';

type TextType = 'xs' | 'sm' | 'base' | 'm' | 'lg' | 'xl' | 'xxl' | 'size3xl' | 'size4xl';
type ColorType = 'primary' | 'secondary' | 'tertiary' | string;

interface Props {
  content: string;
  size?: TextType;
  weight?: number;
  color?: ColorType;
  className?: string;
  onClick?: () => void;
}
const Text: FC<Props> = ({ content, size = 'base', weight = 400, color = 'primary', onClick, className }) => {
  return (
    <span
      className={classNames(styles[size], className)}
      style={{ color: `var(--text-color-${color})`, fontWeight: weight }}
      onClick={onClick}
    >
      {content}
    </span>
  );
};

export default Text;
