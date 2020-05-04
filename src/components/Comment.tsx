import React, { useState, useEffect } from 'react';
import { getItemById } from '../services/hackernewsApi';
import { StoryComments } from '../styles/styledComponents';

type Props = {
    commentId: number
}

export const Comment: React.FC<Props> = ({ commentId }) => {
    const [comment, setComment] = useState({text: '', by: ''});

    useEffect(() => {
        getItemById(commentId).then(data => setComment(data));
    }, []);

    const commentText = comment && {__html: comment.text};
    
return comment && comment.by ? (
    <React.Fragment>
        <StoryComments>
            <div dangerouslySetInnerHTML = {commentText}> 
            </div>
            <div style={{paddingTop:'0.2em', paddingBottom:'0.2em', borderBottom:'1px solid black', fontSize:'0.8em'}}>by: {comment.by}</div>
        </StoryComments>
    </React.Fragment>) : 
    <div>Loading comment ...</div>;
};