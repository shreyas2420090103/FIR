# FIR Onboarding Guide

Welcome to FIR. This repository now includes a minimal runnable app so new contributors can validate changes immediately.

## 1) Current structure

```text
FIR/
├── app/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── docs/
│   └── ONBOARDING.md
└── README.md
```

## 2) First local run

From the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/app/`.

## 3) What to know before editing

- The app is intentionally framework-free HTML/CSS/JS.
- Keep changes readable and beginner-friendly.
- Prefer small PRs with clear behavior changes.

## 4) Good first contributions

1. Improve layout/accessibility in `app/index.html` and `app/styles.css`.
2. Add small interactive behavior in `app/app.js`.
3. Introduce quality guardrails (formatter/linter).
4. Add basic automated checks.

## 5) Learning roadmap

1. Understand current app flow (`index.html` -> `app.js`).
2. Add one small feature and verify manually.
3. Propose/implement project tooling (lint/tests/CI).
4. Help define long-term architecture once stack is chosen.

The current priority is to establish a stable contributor workflow while keeping complexity low.
