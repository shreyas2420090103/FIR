# FIR

Welcome to **FIR**. This repository is currently a minimal starter repository intended to be shaped into a real project.

## Current status

At the moment, this codebase only contains Git metadata and placeholder files. There is no production code yet.

That is normal for a bootstrapping phase: you can use this repository as the foundation for your architecture, development workflow, and team conventions.

## What a newcomer should know first

1. **You are looking at a scaffold, not a mature app.**
   - There is no `src/` folder, test suite, CI workflow, or framework wiring yet.
2. **Early decisions will define team velocity.**
   - The first files you add (project layout, linting, testing, docs) become the template for future work.
3. **Documentation-first onboarding is recommended.**
   - Set expectations now to make future contributors productive quickly.

## Suggested baseline structure

If you are starting from scratch, this structure works well for many stacks:

```text
FIR/
├── README.md
├── docs/
│   ├── ONBOARDING.md
│   └── architecture.md
├── src/
├── tests/
├── .editorconfig
├── .gitignore
├── CONTRIBUTING.md
└── <language/tooling config files>
```

## Suggested first milestones

1. **Decide stack** (language/framework/runtime).
2. **Create a tiny vertical slice** (a single runnable feature).
3. **Add quality guardrails** (formatter, linter, tests).
4. **Automate checks in CI**.
5. **Document how to run, test, and contribute**.

## Onboarding guide

For a more detailed newcomer walkthrough, see [`docs/ONBOARDING.md`](docs/ONBOARDING.md).
