import * as c from './../actions/ActionTypes'

let initialState = {
  isLoading: false,
  quotes: [],
  quote: [],
  error: null
}
export default (state = initialState, action) => {
  switch (action.type) { 
    case c.REQUEST_QUOTES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_QUOTES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        quotes: action.quotes
      });
    case c.REQUEST_QUOTE:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_QUOTE_SUCCESS:
    return Object.assign({}, state, {
      isLoading: false,
      quote: action.quote
    });
    case c.GET_QUOTES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};