import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from '../shared/Dialog';

import Choice from './Choice';

import styles from './QuestionDetails.styl';

export default class QuestionDetails extends Component {
  static propTypes = {
    question: PropTypes.object,
    onHide: PropTypes.func.isRequired,
  }

  static defaultProps = {
    question: null
  }

  handleChoiceClick = (choice) => {
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
          <div className={styles.choices}>
            {question.choices.map(choice =>
              <Choice
                key={choice.url}
                choice={choice}
                onClick={this.handleChoiceClick}
              />
            )}
          </div>
        </div>
      </Dialog>
    );
  }
}
