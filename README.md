# FIR

FIR is currently a **bootstrap repository**: it has Git history and onboarding docs, but no application source code yet.

This README is the fast path for new contributors.

## Current repository shape

Today, the repository intentionally contains only foundational documentation:

- `README.md` (this file)
- `docs/ONBOARDING.md` (deeper contributor onboarding)

No `src/`, `tests/`, or CI workflow has been introduced yet.

## What this means for newcomers

- You are not inheriting a legacy architecture yet.
- Your early contributions will define project conventions.
- Documentation and guardrails should come before large feature work.

## Recommended first contributions (in order)

1. **Pick the implementation stack**
   - Language/runtime and version policy.
2. **Create a minimal runnable slice**
   - A tiny feature proving local run + test loop.
3. **Establish quality guardrails**
   - Formatter, linter, and baseline test command.
4. **Add CI for the baseline checks**
   - Run formatting/lint/tests on each PR.
5. **Document contribution workflow**
   - Add `CONTRIBUTING.md` and architecture notes.

## Suggested target layout

```text
FIR/
├── README.md
├── CONTRIBUTING.md
├── docs/
│   ├── ONBOARDING.md
│   └── architecture.md
├── src/
├── tests/
└── <tooling and CI config>
```

## Next read

Continue with the full onboarding guide: **[`docs/ONBOARDING.md`](docs/ONBOARDING.md)**.
