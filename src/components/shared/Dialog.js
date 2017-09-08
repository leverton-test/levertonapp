import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import styles from './Dialog.styl';

export default class Dialog extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
  }

  static defaultProps = {
    visible: false
  }

  render() {
    const { visible, onHide, children } = this.props;
    return (
      <Modal
        isOpen={visible}
        onRequestClose={onHide}
        // className={styles.modalClass}
        // overlayClassName={styles.overlayClass}
        contentLabel="dialog"
      >
        {children}
      </Modal>
    );
  }
}
