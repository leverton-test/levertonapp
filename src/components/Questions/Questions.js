import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from '../shared/LoadingIndicator';

import QuestionPreview from './QuestionPreview';
import QuestionDetailsContainer from '../QuestionDetails/QuestionDetailsContainer';
import QuestionCreateContainer from '../QuestionCreate/QuestionCreateContainer';

import styles from './Questions.styl';

export default class Questions extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    fetchState: PropTypes.object.isRequired,
    questionsRequest: PropTypes.func.isRequired
  }

  state = {
    openedQuestion: null, isCreating: false
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
    const { questions, fetchState } = this.props;
    const { openedQuestion, isCreating } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Questions</h1>
          <button
            className={styles.add}
            onClick={() => this.setState({ isCreating: true })}
          >
            +
          </button>
        </div>
        <div className={styles.questions}>
          {questions.map(q =>
            <QuestionPreview
              onClick={this.handleQuestionClick}
              question={q}
              key={q.url}
            />
          )}
          <LoadingIndicator
            className={styles.loading}
            visible={fetchState.isFetching}
          />
        </div>
        {openedQuestion &&
          <QuestionDetailsContainer
            questionId={openedQuestion}
            onHide={() => this.setState({ openedQuestion: null })}
          />
        }
        {isCreating &&
          <QuestionCreateContainer onHide={() => this.setState({ isCreating: false })} />
        }
      </div>
    );
  }
}
