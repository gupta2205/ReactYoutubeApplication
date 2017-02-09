//care about Video title description etc. So better to make it fucntional component

import React from 'react';

const VideoDetails = ({video}) => {

	if (!video) {
		return (<div> Loading .....</div>);
	}
	const videoId =video.id.videoId ;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className = "video-deatil col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-tem" src={url}></iframe>
			</div>

			<div className="details">
			<div>{video.snippet.title}</div>
			<div>{video.snippet.description}</div>
			</div>
		</div>
		);
};

export default VideoDetails;