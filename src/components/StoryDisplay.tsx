import React, { useState, useEffect } from 'react';
import { getTopStoriesIds } from '../services/hackernewsApi';
import { Story } from './Story';
import { StoryContainer, Title } from '../styles/styledComponents';

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
        <Title>
            <div style={{textAlign:'center', fontFamily: 'Arial'}}>Hackernews Top Stories!!!</div>
        </Title>
        <StoryContainer>
          <div style={{fontFamily:'Arial'}}>{stories}</div>
        </StoryContainer>
    </>
  )
};