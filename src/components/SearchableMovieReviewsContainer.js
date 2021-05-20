import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{
    state  ={
        reviews: [],
        searchTerm: ''
    }
    

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(response => this.setState({
            reviews: response.results
        }))
    }

    handleInputSearch = (event) => {
        this.setState({ searchTerm: event.target.value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search Movie Reviews: </label>
                    <input type="text" onChange={this.handleInputSearch}></input>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}