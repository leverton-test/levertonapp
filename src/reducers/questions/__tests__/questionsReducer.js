import { questionsActionTypes } from '../../../sagas/actionTypes';
import questionsReducer from '../questionsReducer';

describe('questionsReducer()', () => {
  it('should return empty array on app startup', () => {
    const result = questionsReducer(undefined, {});
    expect(result).toEqual([]);
  });

  const iniitial = [
    {
      question: 'Drink',
      url: '/test/1',
      choices: [{
        choice: 'Coffee',
        url: '/questions/9/choices/66',
        votes: 97
      }, {
        choice: 'Tea',
        url: '/questions/9/choices/33',
        votes: 95
      }],
    },
    {
      question: 'other Q',
      url: '/test/2',
      choices: [],
    }
  ];

  it('should update choice collection after vote', () => {
    const result = questionsReducer(iniitial, {
      type: questionsActionTypes.VOTE_COMPLETE,
      payload: {
        choice: 'Coffee',
        url: '/questions/9/choices/66',
        votes: 98
      },
      meta: { questionUrl: '/test/1' }
    });

    expect(result).toEqual([
      {
        question: 'Drink',
        url: '/test/1',
        choices: [{
          choice: 'Coffee',
          url: '/questions/9/choices/66',
          votes: 98
        }, {
          choice: 'Tea',
          url: '/questions/9/choices/33',
          votes: 95
        }],
      },
      {
        question: 'other Q',
        url: '/test/2',
        choices: [],
      }
    ]);
  });

  it('should add new choice at the beginning of the list', () => {
    const newQuestion = {
      question: 'new question',
      url: '/test/100',
      choices: ['1', '2'],
    };

    const result = questionsReducer(iniitial, {
      type: questionsActionTypes.CREATE_COMPLETE,
      payload: newQuestion
    });
    expect(result).toEqual([newQuestion, ...iniitial]);
  });
});
