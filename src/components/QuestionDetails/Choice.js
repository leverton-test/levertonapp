import React from 'react';

import styles from './Choice.styl';

const Choice = ({ choice, onClick }) => (
  <button className={styles.choice} onClick={() => onClick(choice)} >
    {choice.choice}
  </button>
);


export default Choice;
