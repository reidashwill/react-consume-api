import React, {useState, useEffect} from 'react';
import {useSpring, animated as a} from 'react-spring';

function QuotesList(){
  const [apiCall, setApiCall] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [flipped, set] = useState(false)
  const {transform, opacity} = useSpring ({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: {mass: 5, tension: 500, friction: 80}
  })  
  
  useEffect(()=>{
    fetch('https://boiling-brook-46170.herokuapp.com/quotes/', {
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
      
      <h1 className='title'> Famous quotes from history</h1>
      {isLoading && <p>Quotes are being loaded</p>}
      <div className = 'flexContainer'>
        <a.div onClick ={() => set(state => !state)} className='c front' style={{ opacity, tansform: transform.interpolate(t => `${t} rotateX(180deg)`) }}><img href='https://cdn.cnn.com/cnnnext/dam/assets/200110111717-10-mlk-jr-destinations-photos.jpg'></img></a.div>
      </div>
      {apiCall.map((c, index) => (
        <div key={index} onClick ={() => set(state => !state)}>
          <a.div className='c back' style={{ opacity: opacity.interpolate(o => 1 - o), transform }}><span className='content'>{c.content}</span><br/><span className='author'>- {c.author}.</span> </a.div>
            {/* <p className='content'>""</p>
            <p className='author'>- .</p> */}
            
          </div>
           ))}
           
           
               
      
    
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