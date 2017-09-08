import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuestionPreview from './QuestionPreview';
import QuestionDetailsContainer from '../QuestionDetails/QuestionDetailsContainer';

import styles from './Questions.styl';

export default class Questions extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    questionsRequest: PropTypes.func.isRequired
  }

  state = {
    openedQuestion: null
  }

  componentDidMount() {
    this.props.questionsRequest();
  }

  handleQuestionClick = (question) => {
    this.setState({
      openedQuestion: question.url
    });
  }

  render() {
    const { questions } = this.props;
    const { openedQuestion } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Questions</h1>
        </div>
        <div className={styles.questions}>
          {questions.map(q =>
            <QuestionPreview
              onClick={this.handleQuestionClick}
              question={q}
              key={q.url}
            />
          )}
        </div>
        <QuestionDetailsContainer
          questionId={openedQuestion}
          onHide={() => this.setState({ openedQuestion: null })}
        />
      </div>
    );
  }
}
