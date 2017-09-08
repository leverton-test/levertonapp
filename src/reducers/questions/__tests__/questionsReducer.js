import { questionsActionTypes } from '../../../sagas/actionTypes';
import questionsReducer from '../questionsReducer';

describe('questionsReducer()', () => {
  it('should return empty array on app startup', () => {
    const result = questionsReducer(undefined, {});
    expect(result).toEqual([]);
  });

  it('should update choice collection after vote', () => {
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
});
