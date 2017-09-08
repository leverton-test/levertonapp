import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from '../shared/Dialog';

import Choice from './Choice';

import styles from './QuestionDetails.styl';

export default class QuestionDetails extends Component {
  static propTypes = {
    question: PropTypes.object,
    onHide: PropTypes.func.isRequired,
    voteRequest: PropTypes.func.isRequired,
  }

  static defaultProps = {
    question: null
  }

  state = {
    choiceUrl: null
  }

  handleVoteClick = () => {
    if (this.state.choiceUrl !== null) {
      const { voteRequest, question } = this.props;
      voteRequest(question.url, this.state.choiceUrl);
    }
  }

  render() {
    const { question, onHide } = this.props;
    if (!question) {
      return null;
    }
    return (
      <Dialog visible onHide={onHide} >
        <div className={styles.container}>
          <button className={styles.hide} onClick={onHide}>✕</button>
          <div className={styles.header}>
            <h1 className={styles.title}>Choices</h1>
          </div>
          <div className={styles.subheader}>
            <h2 className={styles.question}>
              Question: {question.question}
            </h2>
          </div>
          <div className={styles.choices}>
            <div className={styles.list}>
              {question.choices.map(choice =>
                <Choice
                  key={choice.url}
                  choice={choice}
                  selected={choice.url === this.state.choiceUrl}
                  fraction={question.total ? choice.votes / question.total : 0}
                  onClick={() => this.setState({ choiceUrl: choice.url })}
                />
              )}
            </div>
            <div className={styles.actions}>
              <button className={styles.button} onClick={this.handleVoteClick}>
                Save
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}
