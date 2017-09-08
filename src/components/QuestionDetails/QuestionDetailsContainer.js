import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import QuestionDetails from './QuestionDetails';

import { makeQuestionDetailsSelector } from '../../selectors/questtionsSelectors';

const makeMapStateToProps = () => {
  const questionDetailsSelector = makeQuestionDetailsSelector();
  return (state, props) => ({
    question: questionDetailsSelector(state, props),
  });
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export default connect(makeMapStateToProps, mapDispatchToProps)(QuestionDetails);
