import quotesReducer from '../../reducers/quotes-reducer'
import * as c from './../../actions/ActionTypes'

describe('quotes-reducer', () => {
  let action;
  const defaultState = {
    isLoading: false,
    quotes: [],
    error: null
  };

  const loadingState = {
    isLoading: false,
    quotes: [],
    error: null
  }

  it('should verify that the default state is returned if no action is passed into it', () => {
    expect(quotesReducer(defaultState, { type: null })).toEqual(
      {
        isLoading: false,
        quotes: [],
        error: null
      }
    );
  });

  test('requesting quotes should successfully change isLoadign from false to true', () => {
    action = {
      type: c.REQUEST_QUOTES
    };

    expect(quotesReducer(defaultState, action)).toEqual({
      isLoading: true,
      quotes: [],
      error: null
    });
  });

  it('should verify that getting quotes should change isLoading to false and update quotes', () => {
    const quotes = "a quote";
    action = {
      type: c.GET_QUOTES_SUCCESS,
      quotes
    };
    expect(quotesReducer(loadingState, action)).toEqual({
      isLoading: false,
      quotes: 'a quote',
      error: null
    });
  });

  it('should ferify that failing to get quotes should change isLoading to false and add an error meesage', () => {
    const error ='an error';
    action = {
      type: c.GET_QUOTES_FAILURE,
      error
    };
    expect(quotesReducer(loadingState, action)).toEqual({
      isLoading: false,
      quotes: [],
      error: "an error"
    });
  });
});