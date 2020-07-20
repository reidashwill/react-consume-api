import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions/index';
import { makeApiCall2 } from '../actions/index'

class QuotesList extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
    dispatch(makeApiCall2());
  }

  render() {
    const { error, isLoading, quotes, quote } = this.props;
    console.log(quotes)
    if (error) {
      return <React.Fragment>ERROR: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>SINGLE QUOTE TEST</h1>
        
          <p>{quote.author}</p>
          <p>{quote.content}</p>
          
          <h1>Quotes</h1>
          <ul>
            {quotes.map((quote,index) =>
               <li key={index}>
                <h3>{quote.author}</h3>
                <p>{quote.content}</p>
              </li>
            )}  
          </ul>
        </React.Fragment>
      );
    }
  }
  

}

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    quote: state.quote,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(QuotesList);