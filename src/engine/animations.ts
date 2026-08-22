import { Easing, interpolate, spring } from 'remotion';

export const fade = (frame: number, start: number, duration = 18) =>
  interpolate(frame, [start, start + duration], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });

export const slideUp = (frame: number, start: number, distance = 70, duration = 22) =>
  interpolate(frame, [start, start + duration], [distance, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });

export const pop = (frame: number, fps: number, start: number) =>
  spring({ frame: Math.max(0, frame - start), fps, config: { damping: 12, stiffness: 140, mass: 0.7 } });

export const drift = (frame: number, amount = 18, speed = 0.025) => Math.sin(frame * speed) * amount;
