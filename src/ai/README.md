# ANBO2019 AI Visual Layer

This layer is intentionally provider-agnostic. The engine should request an image only when the asset library cannot explain a concept well enough.

Pipeline:

1. Analyze the script/scene.
2. Search local assets first.
3. If no suitable visual exists, create an image-generation request.
4. Save generated assets under `assets/generated/<project>/`.
5. Reuse generated assets across scenes instead of regenerating them.
6. Keep prompts and generation metadata beside generated assets when practical.

The renderer must remain usable without an AI provider. AI is an enhancement, not a hard dependency.
