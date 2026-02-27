# FIR Onboarding Guide

Welcome! This guide explains what FIR looks like today, how to contribute safely, and what to learn next.

## 1) Reality check: current state

FIR is at a **seed stage**. There is currently:

- no production application code
- no test suite
- no CI pipeline
- no established architecture

This is intentional. The immediate goal is to set strong foundations.

## 2) Current structure and intent

Current structure is documentation-first:

- `README.md`: quick orientation and initial priorities
- `docs/ONBOARDING.md`: this deeper guide

Intent for near-term evolution:

- `src/` for implementation code
- `tests/` for unit/integration coverage
- `docs/architecture.md` for decision records and system design
- `CONTRIBUTING.md` for contribution standards

## 3) Important principles for early contributors

### Principle A — Optimize for clarity over cleverness

At this stage, predictable code and obvious folder boundaries matter more than abstraction.

### Principle B — Set conventions before scaling features

Agree on these items early:

- supported runtime/toolchain versions
- formatting and linting tools
- minimal test expectations
- branch + PR practices

### Principle C — Leave decision breadcrumbs

Whenever a major decision is made (stack, structure, testing approach), record it in docs so the next contributor understands the rationale.

## 4) Practical “what should I do first?” path

Follow this sequence:

1. **Read all docs in repo root and `docs/`**
2. **Add missing project essentials** (`.gitignore`, language config, formatter/linter config)
3. **Scaffold minimal code and tests** (`src/`, `tests/`)
4. **Implement one tiny end-to-end slice**
5. **Automate checks with CI**
6. **Document run/test/contribution commands**

## 5) Definition of a good early PR in FIR

A strong early PR should be:

- small enough for fast review
- explicit about goals and tradeoffs
- accompanied by docs updates
- validated by at least one reproducible local check

## 6) Suggested learning roadmap for newcomers

If you're joining the project now, learn in this order:

1. **Problem scope** — what FIR is intended to solve
2. **Development workflow** — how to run, test, and lint locally
3. **Code organization** — where responsibilities live
4. **Quality model** — what “done” means for tests and reviews
5. **Delivery model** — how changes are validated and released

---

At this stage, your highest leverage is creating a stable foundation that future contributors can follow without guesswork.
