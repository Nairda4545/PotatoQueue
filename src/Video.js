import React, { Component } from 'react';
import Youtube from 'react-youtube';

class Video extends Component {
  render() {
    const vidId = "_OY9OYaMxog";
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
        controls: 0
      }
    }
    return (
      <Youtube
        videoId={vidId}
        opts={opts}
      />
    );
  }
}

export default Video;