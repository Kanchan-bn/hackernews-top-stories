import React, { useState, useEffect } from 'react';
import { getItemById } from '../services/hackernewsApi';

type Props = {
    commentId: number
}

export const Comment: React.FC<Props> = ({ commentId }) => {
    const [comment, setComment] = useState({text: '', by: ''});

    useEffect(() => {
        getItemById(commentId).then(data => setComment(data));
    }, []);

    const commentText = {__html: comment.text};
    
return comment && comment.by ? (
    <React.Fragment>
        <div style={{borderBottom:'1px solid black', display:'block', padding:'0.5em', fontFamily:'Serif-sans'}} >
            <div style={{fontSize:'1em', fontFamily:'Sans-serif', color:''}} dangerouslySetInnerHTML = {commentText}> 
            
            </div>
            <div style={{fontStyle:'italics', paddingTop:'0.2em'}}>by: {comment.by}</div>
        </div>
    </React.Fragment>) : 
    <div>Loading comment ...</div>;
};