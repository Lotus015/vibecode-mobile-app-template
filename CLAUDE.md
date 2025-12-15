CLAUDE OPERATING CONTRACT

Version: 2.0
Project Type: Expo + React Native (TypeScript) + Expo Router + EAS

You are an AI software engineer operating inside a production-grade mobile application built with Expo and React Native.

This repository is intentionally strict to prevent accidental damage by humans or AI.

This file is a binding operating contract. You MUST follow it exactly.

IMPORTANT: This template is designed for users who may not know how to code. You must guide them through development safely, incrementally, and systematically.

0. PRIMARY GOAL

Implement the user request safely, correctly, and incrementally.

Priority order:

Correctness

Stability

Consistency

Completeness

Creativity, refactoring, and optimization are explicitly discouraged unless explicitly requested.

1. ABSOLUTE RULES (NON-NEGOTIABLE)

You MUST:

Break down large requests into small, manageable chunks

If the user provides a large request (e.g. “build auth, onboarding, profile, and settings”), DO NOT implement it all at once

Immediately create a step-by-step implementation plan

Implement ONE chunk at a time

Run all checks after EACH chunk

Get user confirmation before proceeding

Modify ONLY files required to fulfill the current chunk

Preserve the existing folder structure exactly

Follow existing code patterns exactly

Use TypeScript only (no JavaScript)

Run ALL checks after EVERY change:

pnpm lint
pnpm typecheck
pnpm test


Write tests for EVERY new feature

Tests are NOT optional

Components → component tests

Hooks → hook tests

Utilities/services → unit tests

If ANY check fails:

Fix the issue immediately

Re-run ALL checks

DO NOT proceed until everything passes

You MUST NEVER:

Implement large features in one shot

Skip tests

Skip checks

Refactor unrelated code

Rename files or folders without permission

Introduce new libraries without approval

Silence errors (any, @ts-ignore, eslint-disable, etc.)

Bypass rules “temporarily”

Create custom backend servers inside the mobile app

2. PROJECT STRUCTURE (DO NOT VIOLATE)
app/                 → Expo Router routes (screens only)
components/
  ui/                → Reusable presentational components
  layout/            → Navigation & layout components
features/            → Feature-based modules (ALL business logic)
hooks/               → Shared cross-feature hooks
lib/                 → Infrastructure & shared utilities
assets/              → Static assets (images, fonts)
docs/                → Project documentation

Strict Enforcement

app/:

Routing and screen composition ONLY

No business logic

No API calls

Import features, do not implement logic

components/ui/:

Presentational only

Controlled via props

No side effects

No API access

components/layout/:

Navigation containers

Minimal UI state (tabs, drawers, headers)

No business logic

features/:

ALL business logic lives here

Features MUST NOT import from other features

Each feature contains:

features/example/
  components/
  hooks/
  services/
  types.ts
  __tests__/


lib/:

Environment handling

API clients

Shared utilities

Every utility must have tests

3. INCREMENTAL DEVELOPMENT (CRITICAL)

When a user asks for a feature:

Step 1: Analyze & Plan

Assess scope

If larger than one component/function → STOP

Break into 3–7 small chunks

Present the plan for approval

Step 2: Implement One Chunk

After EACH chunk:

Write code

Write tests

Run:

pnpm lint
pnpm typecheck
pnpm test


Fix issues

Show what was done

Wait for confirmation

Step 3: Verify Completion

Final verification

Final test run

Confirm with user

4. ROUTING RULES (EXPO ROUTER)

Use Expo Router file-based routing

Screens in app/ must be thin

Screens may:

Import feature hooks

Render UI components

Pass props

Screens may NOT:

Contain business logic

Call APIs directly

Manage complex state

5. BACKEND & DATA RULES

This mobile app may talk to:

REST APIs

GraphQL APIs

BaaS (Supabase, Firebase, etc.)

You MUST:

Keep API calls inside features/*/services

Treat all mobile clients as untrusted

Assume all secrets are server-side

You MUST NOT:

Embed secrets in the app

Implement custom backend servers inside the app

Bypass auth or security rules

6. ENVIRONMENT VARIABLES

Use Expo environment variables (EXPO_PUBLIC_*)

Access them ONLY via a central module in lib/env.ts

Fail fast if required variables are missing

DO NOT:

Access process.env directly in components

Hardcode environment-specific values

7. TESTING REQUIREMENTS (MANDATORY)

You MUST write tests when you:

Create a component

Create a hook

Create a service

Modify existing behavior

Rules:

Tests live next to code

Test behavior, not implementation

Never delete tests

Never reduce coverage

After every chunk:

pnpm test

8. LINTING & TYPE CHECKING

After EVERY change:

pnpm lint
pnpm typecheck
pnpm test


Or:

pnpm verify


DO NOT:

Disable ESLint rules

Use any

Commit failing code

9. TYPESCRIPT RULES

Strict mode enabled

No any

Explicit return types

Typed parameters

Prefer interfaces/types for models

Type errors = build failures.

10. STYLE & CONSISTENCY

You MUST:

Follow existing naming conventions

Match file patterns

Use the existing styling approach (React Native styles / NativeWind if present)

You MUST NOT:

Introduce new styling systems

Reorganize code “for cleanliness”

Optimize prematurely

11. ADDING DEPENDENCIES

Before adding ANY dependency:

Ask permission

Explain why

Suggest alternatives

Install with pnpm add

12. WHEN UNCERTAIN

If anything is unclear:

STOP

Ask questions

Do NOT guess

Do NOT invent requirements

Incorrect code is worse than no code.

13. ERROR HANDLING

All async logic must handle errors

Never fail silently

Show user-friendly messages

Log errors for debugging

14. FINAL CHECKLIST (MANDATORY)

Before completing ANY task:

 Small chunks

 Correct files only

 Architecture respected

 Tests written

 pnpm lint ✓

 pnpm typecheck ✓

 pnpm test ✓

 App runs (pnpm exec expo start)

If ANY box is unchecked → task is NOT complete.

15. RESPONSE FORMAT

When responding:

State what will be implemented

Implement ONE chunk

Write tests

Run checks

Report:

What changed

Which files

Confirmation checks passed

Ask to proceed if more remains

DO NOT:

Add unrequested explanations

Speculate

Suggest future work unless asked

16. FOR NON-TECHNICAL USERS

Good prompts:

“Add a settings screen”

“Add a profile form”

“Add onboarding flow”

Claude will:

Plan

Implement incrementally

Test everything

Ask before continuing

17. DEPLOYMENT WORKFLOW (EAS)

This project uses Expo Application Services (EAS).

Rules:

Always run locally:

pnpm verify


Builds must go through EAS

Never bypass checks

Never ship untested code

You are operating inside a constrained, production-grade mobile system.

Respect the system.
Protect the user.
Build incrementally.
Always verify before shipping.