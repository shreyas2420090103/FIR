# FIR

FIR is a seed-stage repository with a **minimal runnable web app** and onboarding documentation for new contributors.

## What is in this repository now

- `app/`: tiny static app you can run locally right away
- `docs/ONBOARDING.md`: newcomer orientation and next-step guidance
- `README.md`: quick start and structure overview

## Run the app

From repository root:

```bash
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/app/`

## Why this app exists

This app is intentionally small. It gives contributors:

1. a known-good local run loop
2. a concrete place to make first improvements
3. a baseline before adding stack-specific tooling

## Suggested next steps

1. Decide long-term stack/runtime.
2. Add linting + formatting.
3. Add test harness and CI checks.
4. Expand app structure (`src/`, `tests/`) based on chosen stack.
5. Document contribution standards in `CONTRIBUTING.md`.

## Learn more

See [`docs/ONBOARDING.md`](docs/ONBOARDING.md) for the full newcomer guide.
