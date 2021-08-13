import React, {useState, useEffect} from 'react';
import { CommentStack } from '../Components/CommentStack/commentStack';
import { Form } from '../Components/Form/form';

export const CommentPage = ()=> {

    const [comments, setComment] = useState([])
    const [addName, setAddName] = useState('')
    const [addEmail, setAddEmail] = useState('')
    const [addComment, setAddComment] = useState('')

    useEffect(()=> {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setComment(data))
    },[])

    const handleNameFormChange = (name) => {
        setAddName(name)
    }

    const handleEmailFormChange = (email) => {
        setAddEmail(email)
    }

    const handleCommentFormChange = (comment) => {
        setAddComment(comment)
    }

    const handleFormSubmit = () => {
        fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({
                name: addName,
                email: addEmail,
                content: addComment
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
          .then(message => {
            console.log(message)
            setAddName('')
            setAddEmail('')
            setAddComment('')
            getLatestComments()
          })
    }

    const getLatestComments = () => {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setComment(data))
    }

    return(
        <>
        <div class='container'>
            <h1>Comments</h1>
            <CommentStack listOfComments={comments}/>
            <h1 class='pt-3'>Leave a comment</h1>
            <Form name={addName} email={addEmail} comment={addComment} onNameFormChange={handleNameFormChange}
                onEmailFormChange={handleEmailFormChange} onCommentFormChange={handleCommentFormChange}
                onFormSubmit={handleFormSubmit}/>
        </div>
        </>
    )
}