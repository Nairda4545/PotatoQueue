import React, { Component } from 'react';
import Youtube from 'react-youtube';

class SearchResults extends Component {
	renderCard = () => {
		if(this.props.searchResults.length > 0){
			return(
				this.props.searchResults.map(video => (
					<li>
						<h5>{video.snippet.title}</h5>
				        <img alt="Thumbnail" />
				        <br/>
				        <span>User</span>
				   	</li>
			   ))
		    )
		}else{
			return(
				<div>Search Something</div>
			);
		}
	}

  render() {
    return (
      <ul>
        {this.renderCard()}
      </ul>
    );
  }
}

export default SearchResults;