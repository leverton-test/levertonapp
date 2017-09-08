import React from 'react';
import cn from 'classnames';

import styles from './LoadingIndicator.styl';

const LoadingIndicator = ({ visible, className }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className={cn(styles.indicator, className)}>
      Loading...
    </div>
  );
};


export default LoadingIndicator;
