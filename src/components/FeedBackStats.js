import React from 'react';

function FeedBackStats(props) {
    let average = props.FeedbackData.reduce((acc, current) =>{
        return acc + current.rating
    }, 0) / props.FeedbackData.length;
    average = average.toFixed(1);
    return (
        <div className='feedback-stats'>
                <h4>{props.FeedbackData.length} reviews</h4>
                <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
}

export default FeedBackStats;