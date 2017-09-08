import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './QuestionPreview.styl';

export default class QuestionPreview extends Component {
    static propTypes = {
      question: PropTypes.object.isRequired,
      onClick: PropTypes.func.isRequired,
    }

    render() {
      const { question, onClick } = this.props;
      const date = new Date(question.published_at);
      return (
        <div className={styles.container} onClick={() => onClick(question)}>
          <div className={styles.title}>{question.question}</div>
          <div className={styles.date}>{date.toLocaleDateString()}</div>
        </div>
      );
    }
}
