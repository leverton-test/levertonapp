import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Questions from './Questions';

import { questionsRequest } from '../../sagas/questionsSagas';

import { questtionsSelector } from '../../selectors/questtionsSelectors';


const mapStateToProps = state => ({
  questions: questtionsSelector(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ questionsRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Questions);