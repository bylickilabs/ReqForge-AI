Thank you for your interest in **ReqForge AI** and in contributing to the project.

This file explains how contributions should be prepared, submitted, and reviewed so that the ongoing development of the project remains traceable, consistent, and professional.

ReqForge AI is designed as a modern AI workbench for requirements, architecture, work packages, and technical preparation. Contributions should therefore align with both the functional goals and the structural direction of the project.

---

## Table of Contents

- [Project Understanding](#project-understanding)
- [Purpose of Contribution](#purpose-of-contribution)
- [Contribution Principles](#contribution-principles)
- [Types of Contributions](#types-of-contributions)
- [Before You Contribute](#before-you-contribute)
- [Development Environment Setup](#development-environment-setup)
- [Branching Strategy](#branching-strategy)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Requirements for Code Changes](#requirements-for-code-changes)
- [Requirements for Documentation Changes](#requirements-for-documentation-changes)
- [UI and UX Guidelines](#ui-and-ux-guidelines)
- [Internationalization and Bilingual Content](#internationalization-and-bilingual-content)
- [Security Related Changes](#security-related-changes)
- [Testing and Validation](#testing-and-validation)
- [Review Process](#review-process)
- [Contributions That Are Not Desired](#contributions-that-are-not-desired)
- [License and Rights](#license-and-rights)
- [Contact and Questions](#contact-and-questions)

---

## Project Understanding

ReqForge AI is a structured workbench for the capture, preparation, and further processing of:

- requirements
- project ideas
- business goals
- technical objectives
- architecture notes
- API concepts
- data model notes
- documentation foundations
- export paths

Contributions should respect this understanding and should not push the project in a direction that conflicts with its intended scope.

---

## Purpose of Contribution

Contributions to ReqForge AI should help improve the project in areas such as:

- technical stability
- functional clarity
- UI and UX quality
- code structure and maintainability
- documentation quality
- export capability
- internationalization
- future scalability
- traceability of project logic

---

## Contribution Principles

Every contribution should follow these principles:

- clarity over complexity
- structure over quick fixes
- traceability over unnecessary abstraction
- maintainability over short-term convenience
- consistency with the existing project logic
- professional documentation of relevant changes
- respect for the project vision, architecture, and style

---

## Types of Contributions

Possible contribution areas include:

### Code Contributions
- new features
- bug fixes
- refactoring
- performance improvements
- export functions
- local persistence
- UI and UX improvements
- internationalization

### Documentation Contributions
- README extensions
- architecture documentation
- changelog maintenance
- feature documentation
- setup instructions
- branching and workflow documentation

### Structural Contributions
- repository hygiene
- workflow files
- GitHub configuration
- issue and pull request templates
- testing and quality structures

---

## Before You Contribute

Before opening a contribution, please check:

- does the change fit the purpose of ReqForge AI
- is there already an issue for it
- is there a similar change or discussion already
- is it a bug fix, feature, refactor, or documentation change
- is the change small enough for a clean review
- have you considered effects on documentation, internationalization, or export logic

For larger changes, opening an issue or short concept proposal first is strongly recommended.

---

## Development Environment Setup

### Requirements

- Node.js
- npm
- Git
- a current browser
- an editor or IDE with React and JavaScript support

### Setup

```bash
npm install
npm run dev
```

### Validate production build

```bash
npm run build
```

A contribution should only be submitted if the application runs locally and the build completes successfully.

---

## Branching Strategy

Please do **not** work directly on the main branch.

Recommended branch prefixes:

- `feature/...`
- `fix/...`
- `docs/...`
- `refactor/...`
- `test/...`
- `chore/...`

### Examples

- `feature/database-support`
- `feature/export-improvements`
- `fix/language-switch`
- `docs/readme-update`
- `refactor/output-logic`

Branch names should clearly describe the work being done.

---

## Commit Guidelines

Commits should be:

- clearly named
- focused on one concern
- not unnecessarily mixed
- understandable from both technical and project perspectives

### Recommended commit style

- `feat: add markdown export improvements`
- `fix: resolve language switch state issue`
- `docs: expand architecture documentation`
- `refactor: improve output generation structure`
- `chore: clean up repository configuration`

### Please avoid

- `update`
- `test`
- `stuff changed`
- `fixes`
- `new commit`

---

## Pull Request Guidelines

A pull request should include:

- a clear description of the change
- the purpose and benefit of the change
- the affected areas
- screenshots for UI changes when appropriate
- references to issues or discussions
- notes on documentation or translation impact if applicable

### A good pull request explains

- what changed
- why it changed
- which areas are affected
- what should be reviewed
- whether follow-up work is expected

---

## Requirements for Code Changes

Code contributions should meet the following expectations:

- clean structure
- understandable naming
- no unnecessary complexity
- no duplicated or redundant logic
- no unused variables or components
- no mixed responsibilities
- consistent styling with the existing project

### Additional expectations

- changes to core logic should remain as small and reviewable as possible
- new logic should be documentable
- new functionality should fit the existing structure
- disruptive shifts in interaction design should be avoided without strong reason

---

## Requirements for Documentation Changes

Documentation contributions are explicitly welcome and should be:

- clearly written
- functionally correct
- aligned with the project
- consistent in style and terminology
- properly maintained for bilingual content when relevant

Documentation is especially important for changes to:

- architecture
- export functions
- project logic
- security behavior
- configuration
- workflows

---

## UI and UX Guidelines

Since ReqForge AI is positioned as a modern and business-ready workbench, UI contributions should aim for:

- clear structure
- good readability
- consistent spacing
- consistent colors and states
- understandable navigation
- no visual overload
- functional focus over decorative effects
- a professional and modern overall impression

UI changes should improve how the application works, not just how it looks.

---

## Internationalization and Bilingual Content

ReqForge AI supports both German and English.

Therefore:

- new user-facing text should ideally be added in both languages
- existing language logic should not be broken
- terminology should remain consistent across languages
- UI text, hints, and status messages should remain understandable and consistent

Single-language changes in bilingual user-facing areas should be avoided where possible.

---

## Security Related Changes

If a contribution affects security-sensitive areas, extra care is required.

This includes, among other things:

- local persistence
- export functions
- file downloads
- input processing
- future database or API preparation
- configuration logic
- handling of sensitive data

Please also read `SECURITY.md` for such changes.

---

## Testing and Validation

Before submitting a pull request, please check at minimum:

- does the application start correctly locally
- does `npm run build` succeed
- do language switching and core interactions still work
- do generation, export, and storage behave as intended
- were UI changes reviewed in relevant views
- were German and English content both considered where needed

If something was not tested, this should be stated openly.

---

## Review Process

Each contribution may be reviewed for:

- functional fit
- technical quality
- maintainability
- style and structure
- consistency with the project vision
- documentation quality
- security and stability

A contribution may be:

- accepted
- returned with requested changes
- postponed
- or rejected

Not every technically valid change is automatically suitable for the project direction.

---

## Contributions That Are Not Desired

Please avoid contributions that:

- have no clear relation to the project
- make the architecture unnecessarily complex
- introduce cosmetic changes without value
- break existing logic without justification
- add unclear or hard-to-maintain solutions
- increase security risk
- ignore documentation or language consistency
- integrate external logic without reflection

---

## License and Rights

By submitting a contribution, you confirm that:

- you have the right to submit it
- you are not violating third-party rights
- your contribution may be used under the license applicable to the repository

If the project later adopts a specific open source or proprietary license, its conditions will apply.

---

## Contact and Questions

For larger proposals, structural changes, or uncertainties, prior alignment is recommended through:

- GitHub Issues
- pull request discussions
- project-specific contact channels
