# ANBO2019 Video Engine

Remotion is the render engine; this project layer provides the visual system above it.

## Layers

- `animations/`: reusable motion primitives.
- `scenes/`: composable video scenes.
- `TechIcon.tsx`: resolves common technology icons from the existing Devicon collection.
- `ai/`: provider-agnostic visual generation strategy.
- `assets/`: repository media and generated media.

## Design goal

A topic should be convertible into a sequence of scenes rather than a static slide deck. Scenes can combine real screenshots, technology logos, code, diagrams, generated visuals, camera movement, particles, transitions, voice and sound effects.

The local asset library is always preferred before generating new artwork.
