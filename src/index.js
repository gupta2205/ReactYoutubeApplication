import React from 'react' ;
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'


//New componnet that will produce html 
const API_KEY = 'AIzaSyBFHtMVjjZPYoGINMOtJWp16iAPerHYn80';

const App = () => {
	return (
	<div> 
	<SearchBar />
	</div>
	);
}

// take this component's gernerated html and put it on page (in dom )

ReactDOM.render(<App />, document.querySelector('.container'));