import React from 'react';
import cn from 'classnames';

import styles from './Choice.styl';

const Choice = ({ choice, fraction, selected, onClick }) => (
  <button
    className={cn(styles.choice, { [styles.selected]: selected })}
    onClick={() => onClick(choice)}
  >
    <div className={styles.title}>{choice.choice}</div>
    <div className={styles.votes}>{choice.votes} votes</div>
    <div className={styles.percent}>{(fraction * 100).toFixed(1)}%</div>
  </button>
);


export default Choice;
