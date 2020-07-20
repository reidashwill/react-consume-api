import * as actions from '../../actions';
import * as c from './../../actions/ActionTypes';

describe('quote reducer actions', () => {
  it('requestQuotes should create REQUEST_QUOTES action', () => {
    expect(actions.requestQuotes()).toEqual({
      type: c.REQUEST_QUOTES
    });
  });

  it('getQuotesSuccess should create GET_QUOTES_SUCCESS action', () => {
    const quotes = "A quote";
    expect(actions.getQuotesSuccess(quotes)).toEqual({
      type: c.GET_QUOTES_SUCCESS,
      quotes
    });
  });

  it('getQuotesFailure should create GET_QUOTES_FAILURE action', () => {
    const error = "An error";
    expect(actions.getQuotesFailure(error)).toEqual({
      type: c.GET_QUOTES_FAILURE,
      error
    });
  });
});