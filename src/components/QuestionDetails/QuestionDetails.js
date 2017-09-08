import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from '../shared/Dialog';

import styles from './QuestionDetails.styl';

export default class QuestionDetails extends Component {
  static propTypes = {
    questionId: PropTypes.string,
    onHide: PropTypes.func.isRequired,
  }

  static defaultProps = {
    questionId: null
  }

  render() {
    const { questionId, onHide } = this.props;
    return (
      <Dialog visible={!!questionId} onHide={onHide} >
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Choices</h1>
          </div>
          <div className={styles.choices} />
        </div>
      </Dialog>
    );
  }
}
