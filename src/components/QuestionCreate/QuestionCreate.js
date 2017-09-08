import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { replaceAtIndex } from '../../common/utils';

import Dialog from '../shared/Dialog';

import styles from './QuestionCreate.styl';

export default class QuestionCreate extends Component {
  static propTypes = {
    createState: PropTypes.object.isRequired,
    onHide: PropTypes.func.isRequired,
    createRequest: PropTypes.func.isRequired,
  }

  state = {
    question: '',
    choices: [
      '', ''
    ]
  }

  componentWillReceiveProps({ createState: newCreateState }) {
    const { onHide, createState } = this.props;
    console.log(createState, newCreateState);
    if (!createState.isCreated && newCreateState.isCreated) {
      console.log(111);
      onHide();
    }
  }

  handleCreateClick = () => {
    const { createRequest, createState } = this.props;
    const { question, choices } = this.state;

    const validChoices = choices.filter(c => c.length);

    if (!createState.isFetching && question && validChoices.length) {
      createRequest(question, validChoices);
    }
  }

  handleQuestionChange = ({ target }) => {
    this.setState({ question: target.value });
  }

  handleAnswerChange = ({ target }, index) => {
    this.setState(({ choices }) => ({
      choices: replaceAtIndex(choices, index, target.value)
    }));
  }

  handleAddAnswerClick = () => {
    this.setState(({ choices }) => ({ choices: [...choices, '']}));
  }

  render() {
    const { createState, onHide } = this.props;
    const { question, choices } = this.state;
    return (
      <Dialog visible onHide={onHide} >
        <div className={styles.container}>
          <button className={styles.hide} onClick={onHide}>✕</button>
          <div className={styles.header}>
            <h1 className={styles.title}>Create Question</h1>
          </div>
          <div className={styles.subheader}>
            <h2 className={styles.question}>Question:</h2>
            <input
              className={styles.input}
              placeholder="Ask your question..."
              type="text"
              value={question}
              onChange={this.handleQuestionChange}
            />
          </div>
          <div className={styles.choices}>
            <div className={styles.choicesheader}>
              <h2 className={styles.question}>Choices</h2>
              <button className={styles.add} onClick={this.handleAddAnswerClick}>
                +
              </button>
            </div>
            <div className={styles.list}>
              {choices.map((choice, index) =>
                <input
                  key={index}
                  className={cn(styles.input, styles.choice)}
                  placeholder="Answer..."
                  type="text"
                  value={choice}
                  onChange={evt => this.handleAnswerChange(evt, index)}
                />
              )}
            </div>
            <div className={styles.actions}>
              <button className={styles.button} onClick={this.handleCreateClick}>
                {createState.isFetching ? 'Creating...' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}
