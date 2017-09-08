import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import QuestionCreate from './QuestionCreate';

import { questionCreatingSelector } from '../../selectors/uiStateSelectors';

import { createRequest } from '../../sagas/questionsSagas';

const mapStateToProps = state => ({
  createState: questionCreatingSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCreate);
