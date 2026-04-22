# ReqForge AI

> Moderne AI Workbench für Requirements, Architektur, Aufgabenpakete und technische Vorbereitung  
> Modern AI Workbench for requirements, architecture, work packages, and technical preparation

---

# Inhaltsverzeichnis | Table of Contents

- [Deutsch](#deutsch)
  - [1. Projektübersicht](#1-projektübersicht)
  - [2. Zielsetzung](#2-zielsetzung)
  - [3. Funktionsumfang](#3-funktionsumfang)
  - [4. Technische Grundlage](#4-technische-grundlage)
  - [5. Projektstruktur](#5-projektstruktur)
  - [6. Installation](#6-installation)
  - [7. Entwicklungsstart](#7-entwicklungsstart)
  - [8. Build und Vorschau](#8-build-und-vorschau)
  - [9. Konfiguration](#9-konfiguration)
  - [10. Anwendungskonzept](#10-anwendungskonzept)
  - [11. Generierungslogik](#11-generierungslogik)
  - [12. Exportfunktionen](#12-exportfunktionen)
  - [13. Bilinguale Nutzung](#13-bilinguale-nutzung)
  - [14. Geplante Erweiterungen](#14-geplante-erweiterungen)
  - [15. Repository Hinweise](#15-repository-hinweise)
  - [16. Mitwirken](#16-mitwirken)
  - [17. Lizenz](#17-lizenz)
  - [18. Kontakt](#18-kontakt)
  
- [English](#english)
  - [1. Project Overview](#1-project-overview)
  - [2. Objective](#2-objective)
  - [3. Feature Scope](#3-feature-scope)
  - [4. Technical Foundation](#4-technical-foundation)
  - [5. Project Structure](#5-project-structure)
  - [6. Installation](#6-installation-1)
  - [7. Development Startup](#7-development-startup)
  - [8. Build and Preview](#8-build-and-preview)
  - [9. Configuration](#9-configuration)
  - [10. Application Concept](#10-application-concept)
  - [11. Generation Logic](#11-generation-logic)
  - [12. Export Functions](#12-export-functions)
  - [13. Bilingual Usage](#13-bilingual-usage)
  - [14. Planned Enhancements](#14-planned-enhancements)
  - [15. Repository Notes](#15-repository-notes)
  - [16. Contributing](#16-contributing)
  - [17. License](#17-license)
  - [18. Contact](#18-contact)

---

# Deutsch

## 1. Projektübersicht

**ReqForge AI** ist eine moderne, business-taugliche AI Workbench zur strukturierten Erfassung, Aufbereitung und Weiterverarbeitung von Anforderungen, Projektideen und technischen Zielsetzungen.

Die Anwendung wurde entwickelt, um aus ersten Konzepten, funktionalen Anforderungen und technischen Hinweisen belastbare Entwicklungsgrundlagen für Planung, Architektur, Aufgabenpakete, Dokumentation und Delivery abzuleiten.

ReqForge AI ist kein rein statisches Frontend, sondern eine interaktive Arbeitsoberfläche mit fokussierter Projektlogik für:

- Requirements Engineering
- Produktdefinition
- technische Vorstrukturierung
- Architekturvorbereitung
- Aufgabenpaketbildung
- Ergebnisgenerierung
- Export und Dokumentationsvorbereitung

---

## 2. Zielsetzung

Das zentrale Ziel von ReqForge AI besteht darin, Anforderungen nicht nur zu sammeln, sondern sie in eine verwertbare, strukturierte und professionell nutzbare Projektbasis zu überführen.

Die Anwendung dient dazu:

- Projektideen frühzeitig zu strukturieren
- Business Ziele und technische Zielsetzungen zusammenzuführen
- Projektparameter klar zu definieren
- Anforderungen und Features in eine belastbare Projektlogik zu überführen
- Ergebnisbausteine für Architektur, API, Datenmodell und Aufgabenpakete zu generieren
- exportierbare Inhalte für GitHub, README, Dokumentation und weitere Nutzung bereitzustellen

---

## 3. Funktionsumfang

ReqForge AI umfasst unter anderem folgende Kernfunktionen:

### Eingabebereiche
- strukturierte Erfassung von Projektinformationen
- Erfassung von Business Zielen
- Erfassung technischer Zielsetzungen
- Aufnahme funktionaler und nicht-funktionaler Anforderungen
- Beschreibung von Kernfunktionen
- Aufnahme von Architekturhinweisen
- Aufnahme von API Anforderungen
- Aufnahme von Datenmodell Hinweisen
- Aufnahme von Security und Governance Aspekten
- zusätzliche Notizen und Projektkontext

### Workbench Funktionen
- interaktive Projektlogik
- KPI und Scope Anzeige
- Status und Prioritätsverwaltung
- dynamische Projektzusammenfassung
- Ergebnisgenerierung auf Basis der Eingaben
- lokale Speicherung des Projektstands
- Wiederherstellung gespeicherter Projektstände

### Generierte Inhalte
- Produktübersicht
- Feature Matrix
- Architekturvorschlag
- API Struktur
- Datenmodell Entwurf
- Task Breakdown
- Roadmap Entwurf
- README Grundlage
- Release Vorbereitung
- Risiko und Governance Übersicht

### Exportfunktionen
- JSON Export
- Markdown Export
- lokale Speicherung per localStorage

---

## 4. Technische Grundlage

ReqForge AI basiert auf einem modernen **React Frontend** und wurde als komponentenbasierte, reaktive Benutzeroberfläche entwickelt.

### Verwendete Technologien
- React
- Vite
- JavaScript
- Tailwind CSS
- lucide-react

### Technischer Ansatz
Das React Frontend bildet die technische Grundlage der gesamten Benutzeroberfläche und sorgt dafür, dass:

- Eingaben dynamisch verarbeitet werden
- Projektzustände reaktiv aktualisiert werden
- Generierungsprozesse direkt innerhalb der Oberfläche ausgelöst werden können
- Ergebnisdarstellungen in Echtzeit aktualisiert werden
- die bilinguale Nutzung in Deutsch und Englisch konsistent umgesetzt wird

Dadurch entsteht eine moderne, reaktive Arbeitsumgebung anstelle einer statischen Formularebene.

---

## 5. Projektstruktur

Eine empfohlene Projektstruktur für das Repository:

```text
ReqForge-AI/
├─ public/
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ .gitignore
└─ README.md
```

### Beschreibung der wichtigsten Dateien

#### `src/App.jsx`
Enthält die Hauptlogik der Anwendung, einschließlich:

- Benutzeroberfläche
- State Verwaltung
- Sprachlogik
- Generierungslogik
- Exportfunktionen
- Projektstatus und Workbench Inhalte

#### `src/main.jsx`
Initialisiert die React Anwendung und rendert die Hauptkomponente.

#### `src/index.css`
Bindet Tailwind CSS ein und enthält ergänzende globale Basisregeln.

#### `index.html`
Stellt den Einstiegspunkt der Anwendung für Vite bereit.

#### `vite.config.js`
Enthält die Vite Konfiguration und die Einbindung relevanter Plugins.

#### `package.json`
Definiert Abhängigkeiten, Skripte und Projektdaten.

---

## 6. Installation

### Voraussetzungen
- Node.js
- npm

### Abhängigkeiten installieren

```bash
npm install
```

Falls nötig, manuell:

```bash
npm install react react-dom lucide-react
npm install -D vite @vitejs/plugin-react @tailwindcss/vite tailwindcss
```

---

## 7. Entwicklungsstart

Zum Starten der Entwicklungsumgebung:

```bash
npm run dev
```

Die Anwendung ist danach in der Regel unter einer lokalen Vite Adresse erreichbar, beispielsweise:

```bash
http://localhost:5173
```

---

## 8. Build und Vorschau

### Produktionsbuild erstellen

```bash
npm run build
```

### Vorschau des Builds starten

```bash
npm run preview
```

---

## 9. Konfiguration

Die wichtigsten Anwendungsdaten werden zentral in der Anwendung definiert, zum Beispiel:

- `APP_NAME`
- `APP_TITLE`
- `APP_VERSION`
- `APP_AUTHOR`
- `APP_COMPANY`
- GitHub URL
- Website URL
- LinkedIn URL
- Kontaktadresse
- Storage Key für lokale Speicherung

Diese Werte dienen der zentralen Konfiguration der App Identität und können an das jeweilige Projekt angepasst werden.

---

## 10. Anwendungskonzept

ReqForge AI ist als Workbench aufgebaut. Das bedeutet, dass die Anwendung verschiedene funktionale Bereiche miteinander verbindet:

### Übersicht
Zentrale Projektmetadaten, Statuswerte und KPI Überblick

### Workbench Panels
Strukturierte Darstellung von:
- Produktkontext
- Anforderungsanalyse
- technischer Ableitung
- Delivery Outputs

### Requirement Form
Ein strukturierter Eingabebereich für:
- Projektbasis
- Ziele
- Anforderungen
- technische Hinweise
- Sicherheitsaspekte
- Zusatzinformationen

### Live Projektzusammenfassung
Dynamische Ansicht der wichtigsten Projektinformationen

### Generierte Outputs
Inhaltliche Ableitungen aus den Eingaben

### Exportbereich
Bereitstellung der Export- und Speicherfunktionen

---

## 11. Generierungslogik

Die Generierungsfunktion dient dazu, eingegebene Projektinformationen in verwertbare Ergebnisbausteine zu transformieren.

Dabei werden unter anderem verarbeitet:

- Projektname
- Projekttitel
- Zielgruppe
- Kategorie
- Priorität
- Status
- Beschreibung
- Business Ziel
- technisches Ziel
- Anforderungen
- Features
- Architekturhinweise
- API Hinweise
- Datenmodell Hinweise
- Security Hinweise

Daraus erzeugt die Anwendung unter anderem:

- eine strukturierte Produktübersicht
- eine Feature Matrix
- einen Architekturvorschlag
- eine API Struktur
- einen Datenmodell Entwurf
- einen Task Breakdown
- eine README Grundlage
- eine Release Vorbereitung
- eine Risiko und Governance Übersicht

---

## 12. Exportfunktionen

Die Exportfunktionen dienen dazu, die generierten Inhalte außerhalb der Anwendung weiterverwenden zu können.

### JSON Export
Der JSON Export stellt Projektdaten und generierte Inhalte in strukturierter Maschinenform bereit. Das ist sinnvoll für:

- technische Weiterverarbeitung
- Integrationen
- spätere API Nutzung
- Datensicherung
- Import und Export Strategien

### Markdown Export
Der Markdown Export erzeugt eine nutzbare textbasierte Projektdokumentation, die sich besonders eignet für:

- GitHub README Dateien
- technische Dokumentation
- interne Projektbeschreibungen
- Entwicklungsübergaben

### Lokale Speicherung
Der aktuelle Projektstand kann über `localStorage` im Browser gespeichert und wieder geladen werden.

---

## 13. Bilinguale Nutzung

ReqForge AI unterstützt eine bilinguale Nutzung in:

- Deutsch
- Englisch

Die Sprachumschaltung betrifft:
- Navigation
- Formulare
- Hinweise
- Statustexte
- Ergebnisdarstellungen
- Informationsinhalte
- exportnahe Bereiche

Die bilinguale Unterstützung ist Bestandteil des Frontend Konzepts und dient einer professionellen Nutzung in unterschiedlichen Projektkontexten.

---

## 14. Geplante Erweiterungen

Für kommende Versionen sind unter anderem folgende Erweiterungen vorgesehen:

- Datenbankintegration
- persistente Projektverwaltung
- Versionierung
- Projekt Historien
- Team Workflows
- Benutzerverwaltung
- Rollenmodelle
- PDF Export
- erweiterte Projektlisten
- Such- und Filterfunktionen
- echte AI API Anbindung
- weiterführende Architektur- und Ableitungslogik

---

## 15. Repository Hinweise

Empfohlene Dateien im Repository:

- `README.md`
- `.gitignore`
- `package.json`
- `vite.config.js`
- `index.html`
- `src/App.jsx`
- `src/main.jsx`
- `src/index.css`

### Wichtig
- `package-lock.json` sollte mit in das Repository aufgenommen werden
- `node_modules` sollte **nicht** versioniert werden

---

## 16. Mitwirken

Beiträge zur Weiterentwicklung sind grundsätzlich möglich, abhängig von Projektstatus, Scope und gewünschter Ausrichtung.

Empfohlener Ablauf:
- Issue eröffnen
- Verbesserungsvorschlag beschreiben
- Änderungen strukturiert einreichen
- auf Konsistenz mit Zielsetzung und Architektur achten

---

## 17. Lizenz

Für das Repository kann je nach gewünschter Offenheit eine passende Lizenz gewählt werden, zum Beispiel:

- MIT License
- Apache License 2.0
- proprietäre Lizenz mit eingeschränkter Nutzung

Falls noch keine Lizenzdatei vorhanden ist, sollte diese ergänzt werden.

---

## 18. Kontakt

**Autor:** Thorsten Bylicki  
**Unternehmen / Brand:** BYLICKILABS

GitHub, Website und weitere Projektlinks können hier ergänzt werden.

<br>

---

<br>

# English

## 1. Project Overview

**ReqForge AI** is a modern, business-ready AI workbench for the structured capture, preparation, and transformation of requirements, project ideas, and technical objectives.

The application was built to derive reliable engineering foundations for planning, architecture, work packages, documentation, and delivery from early concepts, functional requirements, and technical notes.

ReqForge AI is not just a static frontend. It is an interactive workspace with focused project logic for:

- requirements engineering
- product definition
- technical pre-structuring
- architecture preparation
- work package derivation
- output generation
- export and documentation preparation

---

## 2. Objective

The central objective of ReqForge AI is not merely to collect requirements, but to transform them into a usable, structured, and professionally applicable project foundation.

The application is designed to:

- structure project ideas at an early stage
- align business goals and technical objectives
- define project parameters clearly
- transform requirements and features into a reliable project logic
- generate result blocks for architecture, APIs, data models, and work packages
- provide exportable content for GitHub, README files, documentation, and further use

---

## 3. Feature Scope

ReqForge AI includes the following core capabilities:

### Input Areas
- structured project information capture
- business goal capture
- technical objective capture
- functional and non-functional requirement capture
- core feature descriptions
- architecture notes
- API requirement notes
- data model notes
- security and governance notes
- additional notes and project context

### Workbench Functions
- interactive project logic
- KPI and scope display
- status and priority handling
- dynamic project summary
- result generation based on inputs
- local project state saving
- restoration of saved project states

### Generated Content
- product overview
- feature matrix
- architecture proposal
- API structure
- data model draft
- task breakdown
- roadmap draft
- README foundation
- release preparation
- risk and governance overview

### Export Functions
- JSON export
- Markdown export
- local persistence via localStorage

---

## 4. Technical Foundation

ReqForge AI is built on a modern **React frontend** and follows a component-based, reactive user interface approach.

### Technologies Used
- React
- Vite
- JavaScript
- Tailwind CSS
- lucide-react

### Technical Approach
The React frontend forms the technical foundation of the entire user interface and ensures that:

- inputs are processed dynamically
- project states update reactively
- generation processes can be triggered directly inside the interface
- output displays are updated in real time
- bilingual usage in German and English is implemented consistently

This creates a modern reactive workspace instead of a static form-based layout.

---

## 5. Project Structure

A recommended repository structure:

```text
ReqForge-AI/
├─ public/
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ .gitignore
└─ README.md
```

### Description of Important Files

#### `src/App.jsx`
Contains the main application logic, including:

- user interface
- state handling
- language logic
- generation logic
- export functions
- project state and workbench content

#### `src/main.jsx`
Initializes the React application and renders the main component.

#### `src/index.css`
Imports Tailwind CSS and may contain additional global base rules.

#### `index.html`
Provides the application entry point for Vite.

#### `vite.config.js`
Contains the Vite configuration and plugin integration.

#### `package.json`
Defines dependencies, scripts, and project metadata.

---

## 6. Installation

### Requirements
- Node.js
- npm

### Install dependencies

```bash
npm install
```

If needed manually:

```bash
npm install react react-dom lucide-react
npm install -D vite @vitejs/plugin-react @tailwindcss/vite tailwindcss
```

---

## 7. Development Startup

Start the development server:

```bash
npm run dev
```

The application will usually be available at a local Vite address such as:

```bash
http://localhost:5173
```

---

## 8. Build and Preview

### Create production build

```bash
npm run build
```

### Start preview

```bash
npm run preview
```

---

## 9. Configuration

The most important application data is defined centrally, for example:

- `APP_NAME`
- `APP_TITLE`
- `APP_VERSION`
- `APP_AUTHOR`
- `APP_COMPANY`
- GitHub URL
- website URL
- LinkedIn URL
- contact address
- local storage key

These values define the application identity and can be adjusted for the project.

---

## 10. Application Concept

ReqForge AI is structured as a workbench, meaning the application combines several functional areas:

### Overview
Central project metadata, status values, and KPI overview

### Workbench Panels
Structured presentation of:
- product context
- requirement analysis
- technical derivation
- delivery outputs

### Requirement Form
A structured input area for:
- project basics
- goals
- requirements
- technical notes
- security aspects
- additional information

### Live Project Summary
Dynamic view of the most important project information

### Generated Outputs
Content derived from the inputs

### Export Area
Access to export and persistence functions

---

## 11. Generation Logic

The generation function is designed to transform entered project information into usable result blocks.

Processed input includes:

- project name
- project title
- audience
- category
- priority
- status
- summary
- business goal
- technical goal
- requirements
- features
- architecture notes
- API notes
- data model notes
- security notes

The application generates, among other things:

- a structured product overview
- a feature matrix
- an architecture proposal
- an API structure
- a data model draft
- a task breakdown
- a README foundation
- release preparation
- a risk and governance overview

---

## 12. Export Functions

The export functions make the generated content usable outside the application.

### JSON Export
The JSON export provides project data and generated results in structured machine-readable form. Useful for:

- technical post-processing
- integrations
- future API use
- backup purposes
- import and export strategies

### Markdown Export
The Markdown export generates usable text-based project documentation, especially suitable for:

- GitHub README files
- technical documentation
- internal project descriptions
- engineering handovers

### Local Persistence
The current project state can be stored and restored using `localStorage` in the browser.

---

## 13. Bilingual Usage

ReqForge AI supports bilingual usage in:

- German
- English

Language switching affects:
- navigation
- forms
- hints
- status texts
- output displays
- information content
- export-related areas

Bilingual support is part of the frontend concept and supports professional usage across different project contexts.

---

## 14. Planned Enhancements

Planned future extensions include:

- database integration
- persistent project management
- versioning
- project history
- team workflows
- user management
- role models
- PDF export
- advanced project lists
- search and filter functions
- real AI API integration
- extended architecture and derivation logic

---

## 15. Repository Notes

Recommended repository files:

- `README.md`
- `.gitignore`
- `package.json`
- `vite.config.js`
- `index.html`
- `src/App.jsx`
- `src/main.jsx`
- `src/index.css`

### Important
- `package-lock.json` should be committed to the repository
- `node_modules` should **not** be versioned

---

## 16. Contributing

Contributions are generally possible depending on project status, scope, and intended direction.

Recommended process:
- open an issue
- describe the improvement proposal
- submit changes in a structured way
- ensure consistency with project objective and architecture

---

## 17. License

A suitable license can be chosen depending on the intended level of openness, for example:

- MIT License
- Apache License 2.0
- proprietary license with restricted use

If no license file exists yet, it should be added.

---

## 18. Contact

**Author:** Thorsten Bylicki  
**Company / Brand:** BYLICKILABS

GitHub, website, and further project links can be added here.
