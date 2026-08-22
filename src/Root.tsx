import React from 'react';
import { Composition } from 'remotion';
import { AnboShowcase } from './scenes/AnboShowcase';

export const Root: React.FC = () => (
  <Composition
    id="AnboShowcase"
    component={AnboShowcase}
    durationInFrames={300}
    fps={30}
    width={1920}
    height={1080}
    defaultProps={{ topic: 'PHP' }}
  />
);
