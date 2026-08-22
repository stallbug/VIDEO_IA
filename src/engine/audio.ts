export type SoundEvent = 'click' | 'impact';

const sounds: Record<SoundEvent, string> = {
  click: 'assets/sonidos/mouse-click-sound.mp3',
  impact: 'assets/sonidos/ding-sound-effect.mp3'
};

export const soundPath = (event: SoundEvent) => sounds[event];
