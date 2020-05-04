import React, { useState, useEffect } from 'react';
import { getItemById } from '../services/hackernewsApi';
import { CommentsDisplay } from './CommentsDisplay';

type Props = {
    id: number
}

export const Story: React.FC<Props> = ({ id }) => {
    const [story, setStory] = useState({kids: [], text: '', title: '', url: '', by: ''});

    useEffect(() => {
        getItemById(id)
        .then(data => setStory(data))
    }, []);

return story && story.by ? (
    <>
        <div style={{fontSize:'1.3em', marginTop:'1em'}}> 
            <a href={story.url} style={{textDecoration:'none'}}> { story.title } </a>
        </div>
        {story.text && <div style={{fontSize:'1em', marginTop:'1em', padding:'0.5em'}}>{story.text}</div>}
        <div style={{margin:'0.5em'}}>by: {story.by} </div>

        {story.kids ? <CommentsDisplay comments = {story.kids} /> : 'There are no comments yet!' }
    </>) : 
    <div>Loading story ...</div>;
};
