import React, {useState, useEffect} from 'react';
// import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

function QuotesList(){
  const [apiCall, setApiCall] = useState([])
  // const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // constloadMoreQuote = () => {
  //   setPage(page+1);
  // }

  useEffect(()=>{
    fetch('https://boiling-brook-46170.herokuapp.com/quotes/5', {
      method: "GET" })
      .then(res => res.json())
      .then(response => {
        setApiCall(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  })
    
  return (
    <div>
      <h1>Quotes Api is loading.</h1>
      {isLoading && <p>Quotes are being loaded</p>}

      {apiCall.author}
    
    </div>
  );

}
export default QuotesList;
  




































  // const mapStateToProps = state => {
//   return {
//     quotes: state.quotes,
//     quote: state.quote,
//     isLoading: state.isLoading,
//     error: state.error
//   }
// }

// export default connect(mapStateToProps)(QuotesList);