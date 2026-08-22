export type SoundEvent = 'click' | 'impact' | 'whoosh' | 'notification' | 'terminal' | 'error';

const sounds: Record<SoundEvent, string> = {
  click: 'assets/sonidos/mouse-click-sound.mp3',
  impact: 'assets/sonidos/ding-sound-effect.mp3',
  whoosh: 'assets/sonidos/whoosh.mp3',
  notification: 'assets/sonidos/notification.mp3',
  terminal: 'assets/sonidos/terminal.mp3',
  error: 'assets/sonidos/error.mp3'
};

export const soundPath = (event: SoundEvent) => sounds[event];
