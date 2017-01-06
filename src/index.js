import React from 'react' ;
import ReactDOM from 'react-dom';


//New componnet that will produce html 


const App = () => {
	return <div> Hello React JS! </div>;
}

// take this component's gernerated html and put it on page (in dom )

ReactDOM.render(<App/>, document.querySelector('.container'));