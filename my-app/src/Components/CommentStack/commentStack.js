import React from 'react';

export const CommentStack = ({ listOfComments })=> {
    return(
        <>
        <table class="table table-striped">
            <thead>
            </thead>
            <tbody>
            {listOfComments.map(comment => {
                let email = comment.email;
                let date = comment.date;
                return(
                    <tr class='table-success' key={comment.id}>
                        <td>
                            {date}
                            <br></br>
                            By <a href={email} class='ps-1'>{comment.username}</a>
                        </td>
                        <td>{comment.content}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        </>
    )
}