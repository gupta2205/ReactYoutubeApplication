import React, {Component} from 'react' ;
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetails from './components/video_detail'


//New componnet that will produce html 
const API_KEY = 'AIzaSyBFHtMVjjZPYoGINMOtJWp16iAPerHYn80';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: []
		}

		YTSearch({key: API_KEY, term: 'ReactJS'}, (videos) => {
				// this.setState({videos});
				this.setState({videos: videos });
			});
	}


	render() {
		return (
			<div> 
				<SearchBar />
				<VideoDetails video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
			);
	}
}

// take this component's gernerated html and put it on page (in dom )

ReactDOM.render(<App />, document.querySelector('.container'));