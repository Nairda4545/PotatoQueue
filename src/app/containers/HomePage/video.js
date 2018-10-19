import React from 'react';
import "./styles.css"

/* eslint-disable react/prefer-stateless-function */
export default class Video extends React.PureComponent {
  render() {
    return (
      <div>
      	<iframe className="video" src="https://www.youtube.com/embed/3PfHGxITlDA"></iframe>
      </div>
    );
  }
}
