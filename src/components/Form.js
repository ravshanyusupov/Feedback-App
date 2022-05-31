import React, { useState, useEffect } from 'react';
import StyledDiv from "../UI/StyledDiv";
import Button from '../UI/Button'
import Rating from '../components/Rating'

function Form(props) {
    const [text, setText] = React.useState('')
    const [disabled, setDisabled] = React.useState(true)
    const [message, setMessage] = React.useState('')
    const [rating, setRating] = useState(10)

    const handler = (e) =>{
        setText(e.target.value)
        if (text === '') {
            setDisabled(true)
            setMessage('Text must be at least 10 characters')
        }else if (text !== '' && text.trim().length < 10 )  {
            setDisabled(true)
            setMessage('Text must be at least 10 characters')
        }else {
            setDisabled(false)
            setMessage(null)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedback = {
            text,
            rating,
        };
        if (props.edit.edit){
            props.update(props.edit.item.id, newFeedback)
            setText('')
            setRating(10)
            setDisabled(true)
        }else {
            props.addFeedback(newFeedback)
            setText('')
            setRating(10)
            setDisabled(true)
        }
    }

    useEffect(() =>{
        if (props.edit.edit){
            setDisabled(false)
            setText(props.edit.item.text)
            setRating(props.edit.item.rating)
        }
    }, [props.edit.edit])

    return (
        <StyledDiv>
            <form onSubmit={handleSubmit}>
            <h3>How would you rate your service with us?</h3><br/>
            <Rating setSelect={setRating} select={rating} />
            <div className="input-group">
                <input
                    type="text"
                    placeholder='Write a review'
                    onChange={handler}
                    value={text}
                />
                <Button
                    disabled={disabled}
                    className={`btn ${'btn-primary'}`}
                >Send</Button>
            </div>
            {message &&
                <div className='message'>
                    {message}
                </div>
            }
            </form>
        </StyledDiv>
    );
}

export default Form;