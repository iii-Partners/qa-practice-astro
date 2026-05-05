# qa-practice-astro

A viiibin **practice repo**. Bare Astro minimal scaffold + TypeScript (strict)
paired with a [`SPEC.md`](./SPEC.md) describing exactly what the agent should
build.

## Use it

1. Open viiibin → New Project → Import from GitHub
2. Paste: `https://github.com/iii-Partners/qa-practice-astro`
3. Once the workspace loads, ask the agent: **"Read SPEC.md and build it."**
4. Watch the preview update with the implemented feature.

## What you get

- Astro 5 minimal template + TypeScript (strict)
- Dev server bound to 0.0.0.0:3000 (so viiibin's preview proxy finds it —
  Astro's default is 4321, overridden in `astro.config.mjs`)
- A clean `src/pages/index.astro` placeholder — empty `<main />`
- A standard `SPEC.md` with strict, parseable acceptance criteria

## Framework gotcha — `client:*` directives

Astro components render to static HTML by default. If you add an interactive
component (a button with an `onClick`), you need to wrap it in a framework
component (React, Vue, Svelte) and apply a `client:*` directive:

```astro
---
import Counter from '../components/Counter.tsx'
---
<Counter client:load />
```

Without `client:load` (or `client:visible`, `client:idle`, etc.), the
component renders to static HTML with no JavaScript attached, and the SPEC's
`click-then-text` assertion will fail because nothing handles the click.
This is real Astro semantics, not a viiibin bug — the practice tests for
this gotcha intentionally.

The simplest path for SPEC.md: use a small `<script>` block at the bottom of
`index.astro` for the click handler, no React/Vue dependency needed.

## Why "practice"?

Part of viiibin's framework validation matrix
([milestone M57](https://github.com/iii-Partners/viiibin/milestone/103)).

## Local sanity check

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # → dist/
```

## License

MIT — see [LICENSE](./LICENSE).
