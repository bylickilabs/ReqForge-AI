The security and stability of **ReqForge AI** are important parts of the project’s ongoing development.

This file explains how security related vulnerabilities should be reported responsibly, which types of reports are relevant, and how reported issues are generally handled.

Please do **not** use public GitHub issues for security-related reports if the issue involves a real vulnerability, misconfiguration, or potentially exploitable logic.

---

## Table of Contents

- [Principle](#principle)
- [Supported Versions](#supported-versions)
- [What Qualifies as a Security Issue](#what-qualifies-as-a-security-issue)
- [What Does Not Qualify as a Security Issue](#what-does-not-qualify-as-a-security-issue)
- [How to Report a Security Issue](#how-to-report-a-security-issue)
- [What a Good Report Should Contain](#what-a-good-report-should-contain)
- [Expected Behavior After a Report](#expected-behavior-after-a-report)
- [Responsible Disclosure](#responsible-disclosure)
- [Security Relevant Project Areas](#security-relevant-project-areas)
- [Dependencies and Third Party Components](#dependencies-and-third-party-components)
- [Planned Security Development](#planned-security-development)
- [Note for Contributors](#note-for-contributors)
- [Contact](#contact-1)

---

## Principle

ReqForge AI is currently designed as a modern workbench for structured project preparation. Even though the current version primarily operates in the frontend, security-related considerations can already matter, especially in the following areas:

- input processing
- local persistence
- export functions
- configuration logic
- dependency management
- future API and database preparation

Security reports are taken seriously and will be reviewed in a structured way whenever possible.

---

## Supported Versions

As the project is under active development, the following generally applies:

| Version | Supported |
|---|---|
| Current main development line | Yes |
| Older experimental intermediate states | Limited |
| Unmaintained legacy states | No |

As long as no formal release model exists, the actively maintained main state of the repository is considered the primary supported version.

---

## What Qualifies as a Security Issue

Security-relevant reports include, among other things:

- unintended disclosure of sensitive data
- insecure processing of user input
- potentially exploitable export logic
- harmful or unexpected file generation
- weaknesses in future persistence logic
- insecure default configuration
- behavior with security-relevant impact
- risky third-party dependencies
- XSS-like risks in future dynamic content extensions
- insecure or abusable download mechanisms
- flawed or manipulable local storage logic
- security-relevant build or workflow misconfigurations
- exposure of keys, tokens, or credentials
- incorrect handling of confidential configuration values

---

## What Does Not Qualify as a Security Issue

The following generally do **not** qualify as security issues unless an actual exploit or security impact can be demonstrated:

- pure UI defects
- layout issues
- text or translation errors
- standard functional bugs without security relevance
- general performance issues
- missing features
- design preferences
- conceptual disagreements without a concrete security impact

If unsure, a confidential inquiry may still be appropriate.

---

## How to Report a Security Issue

Please do **not** report real or suspected security issues publicly through GitHub issues if doing so would enable others to understand or exploit the issue directly.

Instead, such reports should be submitted confidentially through an intended contact path, such as:

- a dedicated security contact address if listed in the repository
- a private contact channel of the project maintainer
- GitHub Security Advisories if enabled in the future

If no dedicated security channel exists yet, it should be added to the repository.

---

## What a Good Report Should Contain

A useful security report should contain, where possible:

- a short description of the issue
- the affected file, function, or component
- the conditions under which it occurs
- possible impact
- reproducible steps
- a limited proof of concept if appropriate
- affected version or commit reference
- an assessment of severity
- suggestions for containment if available

Please share only the amount of detail necessary to make the issue understandable without publicly providing misuse instructions.

---

## Expected Behavior After a Report

After a security report, the following is intended where possible:

- verify receipt of the report
- assess relevance and plausibility
- narrow down the impact
- ask follow-up questions if needed
- prepare a fix or mitigation
- document the affected areas
- enable responsible communication after resolution

As the project may not be monitored continuously, response and resolution times may vary depending on complexity and availability.

---

## Responsible Disclosure

Please do not disclose reported vulnerabilities publicly before:

- the issue has been reviewed
- a fix or temporary mitigation has been prepared
- coordinated disclosure has been discussed

Responsible disclosure means giving the project a fair opportunity to assess and address a real issue before public publication.

---

## Security Relevant Project Areas

For ReqForge AI, the following areas are especially security-relevant or expected to become security-relevant:

### Input Processing
Unsafe or unexpected processing of structured user input can create future risks.

### Local Persistence
Project states are stored locally. Changes to storage logic should be reviewed very carefully.

### Export Functions
Downloads and export content must be implemented in a way that avoids unexpected or abusable behavior.

### Configuration Logic
Hardcoded values, unclear environment logic, or future secret handling can create problems.

### Dependencies
Unsafe or outdated third-party libraries can directly affect the security level of the project.

### Workflows and Automation
CI and repository workflows should not expose sensitive data or introduce unnecessary risks.

### Future Database and API Integration
Once persistent backends are introduced, requirements around access control, validation, and secure design increase significantly.

---

## Dependencies and Third Party Components

Please also consider third-party dependencies.

Security-relevant problems may also originate from:

- the React ecosystem
- Vite tooling
- npm dependencies
- build plugins
- GitHub Actions or workflow configuration

If a report primarily concerns a third-party library, reporting it to the respective maintainer may also be appropriate.

---

## Planned Security Development

The following security-related improvements are expected to become relevant in later project stages:

- more structured input validation
- stronger control over export paths
- a cleaner persistence strategy
- avoiding versioning of sensitive configuration
- preparation for secure API communication
- role-based access models
- security-conscious database integration
- more professional disclosure and reporting paths

---

## Note for Contributors

If you work on areas that could be security-relevant, the following applies:

- do not commit sensitive data
- do not hardcode credentials
- do not introduce unsafe shortcuts in export or storage logic
- treat input processing changes with extra care
- coordinate early when uncertain
- do not post security observations publicly without review

Please also read `CONTRIBUTING.md`.

---

## Contact

A confidential contact path should be used for security-related questions.

If the repository does not yet define a dedicated security contact, one should be added, for example in the form of a separate email address for security reports.
