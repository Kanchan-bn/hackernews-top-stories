import React from 'react';
import { StoryDisplay } from './components/StoryDisplay';
import { Global } from './components/styled/styledComponents';

export const App = () => {
  return (
    <>
      <Global />
      <StoryDisplay />
    </>
  )
};
