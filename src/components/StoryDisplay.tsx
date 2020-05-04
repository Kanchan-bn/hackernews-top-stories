import React, { useState, useEffect } from 'react';
import { getTopStoriesIds } from '../services/hackernewsApi';
import { Story } from './Story';

export const StoryDisplay = () => {
    const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoriesIds().then(data => {
      setStoryIds(data)
    });
  }, []);
  const stories = storyIds && storyIds.map(storyId => <Story id={storyId} key={storyId} /> );
    
  return (
    <>
        <div style={{fontFamily:'Sans-serif', textAlign:'center', fontSize:'1.8em', margin:'1em'}}>Hackernews Top Stories!!!</div>
        <div style={{margin:'1.5em', fontFamily:'Sans-serif'}}>{stories}</div>
    </>
  )
};