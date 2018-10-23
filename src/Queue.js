import React, { Component } from 'react';
import Youtube from 'react-youtube';

class Queue extends Component {
  renderQueue = () => {
    const stack = [
      {
        "name": "Potaotman",
        "vidId": "_OY9OYaMxog"
      },
      {
        "name": "Nairda",
        "vidId": "_OY9OYaMxog"
      },
      {
        "name": "Adrian",
        "vidId": "_OY9OYaMxog"
      }
    ];
    return stack.map(stackitem => (
        <div>
          <h3>{stackitem.name}</h3>
          <img src={`https://img.youtube.com/vi/${stackitem.vidId}/1.jpg`} alt=":<"/>
        </div>
      ));
  }

  render() {
    return (
      <div>
        {this.renderQueue()}
      </div>
    );
  }
}

export default Queue;