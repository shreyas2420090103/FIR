# FIR Onboarding Guide

This guide is for newcomers joining the FIR repository at its current early stage.

## 1) Repository overview

The repository is intentionally minimal right now. There is no application logic yet, which means:

- no domain model yet
- no API or UI implementation yet
- no test harness yet
- no build/deploy pipeline yet

Think of this as a **project seed** rather than an existing application.

## 2) General structure (today)

Today the practical structure is:

- repository root files (currently minimal)
- Git history/branch metadata
- onboarding docs you are reading now

As code is added, the expected direction is:

- `src/` for application code
- `tests/` for unit/integration tests
- `docs/` for architecture and process documentation

## 3) Important things to know before contributing

### A. Establish conventions early

Before adding large features, agree on:

- language/runtime version policy
- formatting/linting rules
- test strategy and coverage expectations
- branching and PR conventions

### B. Keep the first implementation simple

When creating the initial feature set:

- favor readability over abstraction
- keep module boundaries obvious
- avoid overengineering until real constraints appear

### C. Document decisions as you go

As soon as you pick tooling or architecture, write it down in `docs/architecture.md`.

A short record of why decisions were made is invaluable for future onboarding.

## 4) Recommended “learn next” sequence

If you are a newcomer deciding what to learn first, follow this order:

1. **Project purpose and scope**
   - What problem FIR solves and what it does not solve.
2. **Local development workflow**
   - How to run the app (once created), run tests, and lint.
3. **Code layout and module ownership**
   - Which folders own which responsibilities.
4. **Testing strategy**
   - What is unit tested vs integration tested.
5. **Release/deployment workflow**
   - How code moves from branch to production.

## 5) Suggested immediate next tasks

1. Add `.gitignore` and language-specific tooling configuration.
2. Add `CONTRIBUTING.md` with coding/PR standards.
3. Add a minimal `src/` and `tests/` skeleton.
4. Add CI that at least runs lint + test.
5. Add `docs/architecture.md` with an initial system sketch.

## 6) Definition of “good first contribution” in this repo

A high-quality early contribution should:

- be small and easy to review
- include documentation updates
- include or enable tests
- avoid introducing unnecessary complexity

---

If you are the next person building FIR, your biggest leverage is creating a clear, repeatable development foundation.
