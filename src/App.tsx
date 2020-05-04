import React from 'react';
import { StoryDisplay } from './components/StoryDisplay';
import { Global } from './styles/styledComponents';

export const App = () => {
  return (
    <>
      <Global />
      <StoryDisplay />
    </>
  )
};
