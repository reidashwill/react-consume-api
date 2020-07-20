import * as c from './ActionTypes';

export const requestQuotes = () => ({
  type: c.REQUEST_QUOTES
});

export const getQuotesSuccess = (quotes) => ({
  type: c.GET_QUOTES_SUCCESS,
  quotes
});

export const getQuotesFailure = (error) => ({
  type: c.GET_QUOTES_FAILURE,
  error
});

export const getQuoteSuccess = (quote) => ({
  type: c.GET_QUOTE_SUCCESS,
  quote
})

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestQuotes);
    return fetch('https://boiling-brook-46170.herokuapp.com/quotes')
      .then(response => response.json())
      // console.log(response)
      .then(
        (partyTrick) => {
          dispatch(getQuotesSuccess(partyTrick));


        })
      .catch((error) => {
        dispatch(getQuotesFailure(error));
      });
  }
}

const randoGenerator = () => {
  return Math.random() * (47 - 1) + 1;
}

export const makeApiCall2 = () => {
  return dispatch => {
    dispatch(requestQuotes);
    return fetch(`https://boiling-brook-46170.herokuapp.com/quotes/${randoGenerator()}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse)
          dispatch(getQuoteSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getQuotesFailure(error));
      });
  }
}