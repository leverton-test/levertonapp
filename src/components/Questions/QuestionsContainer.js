import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Questions from './Questions';

import { questionsRequest } from '../../sagas/questionsSagas';

import { questionsSelector } from '../../selectors/questtionsSelectors';
import { questionsLoadingSelector } from '../../selectors/uiStateSelectors';


const mapStateToProps = state => ({
  questions: questionsSelector(state),
  fetchState: questionsLoadingSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ questionsRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
