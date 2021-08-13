import React from 'react';

export const Form = ({ name, email, comment, onNameFormChange, onEmailFormChange, onCommentFormChange, onFormSubmit})=> {
    
    const handleNameChange = (event) =>{
        onNameFormChange(event.target.value)
    }

    const handleEmailChange = (event) =>{
        onEmailFormChange(event.target.value)
    }

    const handleCommentChange = (event) =>{
        onCommentFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <br/>
                <label class='form-label'>Your name*</label>
                <br/>
                <input class='form-control' type='text' value={ name } onChange={handleNameChange} required></input>
                <br/>
                <label class='form-label'>Your email*</label>
                <br/>
                <input class='form-control' type='text' value={ email } onChange={handleEmailChange} required></input>
                <br/>
                <label class='form-label'>Your comment*</label>
                <br/>
                <textarea class='form-control' cols='80' rows='6' value={ comment } onChange={handleCommentChange} required></textarea>
                <br/>
                <input type='submit' class='btn btn-info'></input>
                <br/>
                <br/>
            </form>
        </>
    )
}