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
    choice: null
  }

  handleVoteClick = () => {
    if (this.state.choice !== null) {
      const { voteRequest, question } = this.props;
      voteRequest(question, this.state.choice);
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
          <div className={styles.header}>
            <h1 className={styles.title}>Choices</h1>
          </div>
          <div className={styles.subheader}>
            <h2 className={styles.question}>
              {question.question}
            </h2>
          </div>
          <div className={styles.choices}>
            {question.choices.map(choice =>
              <Choice
                key={choice.url}
                choice={choice}
                selectred={choice === this.state.choice}
                fraction={choice.votes / question.total}
                onClick={() => this.setState({ choice })}
              />
            )}
          </div>
          <div className={styles.actions}>
            <button className={styles.button} onClick={this.handleVoteClick}>
              Save
            </button>
          </div>
        </div>
      </Dialog>
    );
  }
}
