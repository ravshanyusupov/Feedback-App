import React from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa'
import StyledDiv from "../UI/StyledDiv";

function FeedbackItem({item, remove, getItem}) {
    return (
        <StyledDiv back={true}>
            <div className="num-display">{item.rating}</div>
            <button
                onClick={() => remove(item.id)}
                className='close'>
                <FaTimes color='purple'/>
            </button><br/>
            <button
                onClick={() => getItem(item)}
                className='edit'>
                <FaEdit color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
        </StyledDiv>
    );
}

export default FeedbackItem;