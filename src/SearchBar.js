import React, { Component } from 'react';
import Youtube from 'react-youtube';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input name="searchQuery" onChange={this.props.handleChange}/>
        <button onClick={this.props.handleSubmit}>Search</button>
      </div>
    );
  }
}

export default SearchBar;