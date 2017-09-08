import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Questions.styl';

export default class Questions extends Component {
    static propTypes = {
      questions: PropTypes.array.isRequired,
      questionsRequest: PropTypes.func.isRequired
    }

    componentDidMount() {
      this.props.questionsRequest();
    }

    render() {
      const { questions } = this.props;
      return (
        <div className={styles.container}>
          <h1>Questions</h1>
          {questions.map(q =>
            <div key={q.url}>{q.question}</div>
          )}
        </div>
      );
    }
}
