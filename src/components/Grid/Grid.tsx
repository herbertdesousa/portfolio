import React, { CSSProperties } from 'react';

import classNames from 'classnames';
import styleTail from './Grid.module.css';

interface GridProps {
  className?: string;
  style?: CSSProperties;
}

const Grid: React.FC<GridProps> = ({ className, children, style }) => {
  const rootClassName = classNames(styleTail.root, className);

  return (
    <div className={rootClassName} style={style}>
      {children}
    </div>
  );
};

export default Grid;
