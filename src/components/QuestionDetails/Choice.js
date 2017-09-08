import React from 'react';
import cn from 'classnames';

import styles from './Choice.styl';

const Choice = ({ choice, fraction, selected, onClick }) => (
  <button
    className={cn(styles.choice, { [styles.selected]: selected })}
    onClick={() => onClick(choice)}
  >
    {choice.choice} %{(fraction * 100).toFixed(1)}
  </button>
);


export default Choice;
