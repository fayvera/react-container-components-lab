// Code MovieReviews Here
import React from 'react'
import { render } from "enzyme"

const Review = ({
    byline,
    critics_pick,
    date_updated,
    display_title,
    headline,
    link,
    mpaa_rating,
    multimedia,
    publication_date,
    summary_short
}) => {
    return (
        <div 
        className="review"
        key={headline}>
            <header>
                <a className="review-link" href={link.url}>{headline}</a>
            </header>
            <br/>
            <span className="author">{byline}</span>
            <blockquote className="summary">{summary_short}</blockquote>
            <br></br>
        </div>
    )
}


const MovieReviews = ({reviews}) => <div className = "review-list">
    {reviews.map(Review)}
</div>

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews