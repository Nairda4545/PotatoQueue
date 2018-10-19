import React from 'react';
import "./styles.css"

/* eslint-disable react/prefer-stateless-function */
export default class Queue extends React.PureComponent {
	potato = () => {
		const videoQueue = [
			{
				'name': 'PotatoMan',
				'videoId': '3PfHGxITlDA'
			},
			{
				'name': 'Nairda',
				'videoId': '3PfHGxITlDA'
			},
			{
				'name': 'Adrian',
				'videoId': '3PfHGxITlDA'
			},
			{
				'name': 'Paul',
				'videoId': '3PfHGxITlDA'
			},
		];
		return videoQueue.map(video => 
			<div>{video.name}</div>
		)
	}

  render() {
    return (
      <div>
      	{this.potato()}
      </div>
    );
  }
}
