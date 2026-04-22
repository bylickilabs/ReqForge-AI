import React, { useEffect, useMemo, useState } from "react";
import {
  Github,
  Globe,
  Info,
  Languages,
  Sparkles,
  ShieldCheck,
  FolderKanban,
  X,
  ClipboardList,
  Layers3,
  Workflow,
  TerminalSquare,
  Database,
  Users,
  Flag,
  CalendarDays,
  Download,
  Settings2,
  Lightbulb,
  PanelTop,
  ListChecks,
  Gauge,
  FolderOpen,
  CheckSquare,
  Building2,
  BriefcaseBusiness,
  Search,
  Bot,
  FileOutput,
  BadgeCheck,
  Save,
  RefreshCcw,
  FileJson,
  FileText,
  Rocket,
  BookOpen,
  Linkedin,
  Mail,
  ChevronRight,
  Code2,
  Cpu,
  Boxes,
  Wand2,
  LayoutDashboard,
  Upload,
} from "lucide-react";

const APP_NAME = "ReqForge AI";
const APP_TITLE = "AI Requirements to Code Workbench";
const APP_VERSION = "1.0.0";
const APP_AUTHOR = "Thorsten Bylicki";
const APP_COMPANY = "BYLICKILABS";
const APP_GITHUB = "https://github.com/bylickilabs";
const APP_WEBSITE = "https://bylickilabs.com";
const APP_LINKEDIN = "https://www.linkedin.com";
const APP_EMAIL = "mailto:bylicki@mail.de";
const STORAGE_KEY = "reqforge_ai_project_v1";

const translations = {
  de: {
    appBadge: "Business AI Workbench",
    switchLanguage: "Sprache wechseln",

    navOverview: "Übersicht",
    navWorkbench: "Workbench",
    navRequirements: "Anforderungen",
    navProjects: "Projektlogik",
    navOutputs: "Ergebnisse",
    navExport: "Export",
    navInfo: "Informationen",

    githubButton: "GitHub",
    websiteButton: "Website",
    linkedinButton: "LinkedIn",
    mailButton: "Kontakt",
    infoButton: "Infos",

    heroKicker: "Von Anforderungen zu verwertbaren Entwicklungsgrundlagen",
    heroTitle: "Eine moderne AI Workbench für Requirements, Architektur, Aufgabenpakete und technische Vorbereitung",
    heroText: "ReqForge AI wurde als funktionsfähige Workbench entwickelt, um Anforderungen nicht nur zu erfassen, sondern daraus konkrete Ergebnisbausteine, Projektstrukturen und exportierbare Inhalte abzuleiten.",
    heroPrimary: "Jetzt generieren",
    heroSecondary: "Mehr Informationen",

    panelTitle: "Zentrale Anwendungskonfiguration",
    panelSubtitle: "Technische und organisatorische Kerndaten",
    labelName: "App Name",
    labelTitle: "App Titel",
    labelVersion: "Version",
    labelAuthor: "Autor",
    labelCompany: "Unternehmen",

    stat1Title: "Strukturierte Requirement Erfassung",
    stat1Text: "Funktionen, Ziele, Zielgruppen, Rollen, Risiken und Scope werden zentral und nachvollziehbar abgebildet.",
    stat2Title: "Echte Ergebnisgenerierung",
    stat2Text: "Die Workbench erzeugt aus Eingaben konkrete Ergebnisblöcke, Projektinhalte und exportierbare Texte.",
    stat3Title: "Business und Delivery Fokus",
    stat3Text: "Die Oberfläche ist darauf ausgerichtet, Ergebnisse für Planung, Entwicklung, Abstimmung und Dokumentation nutzbar zu machen.",

    workbenchTitle: "AI Workbench Panels",
    workbenchSubtitle: "Die zentrale Arbeitsoberfläche bündelt Produktkontext, technische Analyse, Priorisierung und operative Projektvorbereitung.",

    wb1Title: "Produktkontext",
    wb1Text: "Geschäftsziel, Zielgruppe, Marktposition, Nutzenversprechen und Anwendungsrahmen strukturiert erfassen.",
    wb2Title: "Anforderungsanalyse",
    wb2Text: "Requirements, Abhängigkeiten, Risiken, Prioritäten und Umsetzungslogik transparent einordnen.",
    wb3Title: "Technische Ableitung",
    wb3Text: "Architekturblöcke, Module, API Grundlagen, Datenmodellansätze und Entwicklungsstruktur vorbereiten.",
    wb4Title: "Delivery Outputs",
    wb4Text: "Roadmaps, Arbeitspakete, Projektsektionen, Dokumentationsgrundlagen und Exportobjekte ableiten.",

    formTitle: "Requirement Form",
    formSubtitle: "Erfasse Projektkontext, Anforderungen, Prioritäten und technische Eckdaten in einer strukturierten Eingabemaske.",
    projectName: "Projektname",
    projectTitle: "Projekttitel",
    projectVersion: "Projektversion",
    projectOwner: "Projektverantwortlich",
    projectAudience: "Zielgruppe",
    projectCategory: "Kategorie",
    projectPriority: "Priorität",
    projectStatus: "Status",
    projectDeadline: "Zieltermin",
    projectSummary: "Kurzbeschreibung",
    businessGoal: "Business Ziel",
    technicalGoal: "Technisches Ziel",
    requirementsInput: "Anforderungen",
    featuresInput: "Kernfunktionen",
    architectureInput: "Architekturansatz",
    apiInput: "API Anforderungen",
    dataModelInput: "Datenmodell Hinweise",
    securityInput: "Security und Governance",
    notesInput: "Zusätzliche Hinweise",

    placeholderProjectName: "z. B. ReqForge Workspace",
    placeholderProjectTitle: "z. B. Business AI Workbench für Produktdefinition",
    placeholderProjectVersion: "z. B. 1.0.0",
    placeholderProjectOwner: "z. B. Thorsten Bylicki",
    placeholderProjectAudience: "z. B. Produktteams, Entwickler, Entscheider",
    placeholderSummary: "Beschreibe kurz, welchen geschäftlichen und technischen Zweck die Anwendung erfüllen soll.",
    placeholderBusinessGoal: "Beschreibe das Ziel aus Business Perspektive, zum Beispiel Effizienz, Qualität, Standardisierung oder Skalierung.",
    placeholderTechnicalGoal: "Beschreibe das Ziel aus technischer Sicht, zum Beispiel Architektur, Modularität, API Struktur oder Automatisierung.",
    placeholderRequirements: "Liste funktionale und nicht funktionale Anforderungen auf, inklusive Rollen, Rechte, Prozesse und Validierungen.",
    placeholderFeatures: "Beschreibe die wichtigsten Funktionen, Panels, Prozesse und Nutzeraktionen.",
    placeholderArchitecture: "Beschreibe den bevorzugten Architekturansatz, zum Beispiel Frontend, Backend, Datenbank, Queue, Services oder lokale Persistenz.",
    placeholderApi: "Beschreibe gewünschte API Bereiche, Endpunkte, Integrationen oder Schnittstellen.",
    placeholderDataModel: "Beschreibe Entitäten, Beziehungen, Statuswerte, Audit Felder oder technische Modellierungswünsche.",
    placeholderSecurity: "Beschreibe Anforderungen zu Sicherheit, Rollen, Logging, Validierung, Datenschutz und Governance.",
    placeholderNotes: "Ergänze weitere Hinweise, Einschränkungen, Priorisierungen oder strategische Überlegungen.",

    sectionTitle: "Projektsektionen",
    sectionSubtitle: "Die Anwendung bereitet Projekte in klar getrennten Sektionen für Planung, Umsetzung und Kommunikation auf.",

    outputTitle: "Generierte Output Cards",
    outputSubtitle: "Diese Karten werden aus deinen Eingaben inhaltlich befüllt und sind nicht mehr nur statische Platzhalter.",
    outputProductOverview: "Produktübersicht",
    outputFeatureMatrix: "Feature Matrix",
    outputArchitecture: "Architektur Vorschlag",
    outputApi: "API Struktur",
    outputDataModel: "Datenmodell Entwurf",
    outputTaskBreakdown: "Task Breakdown",
    outputRoadmap: "Roadmap Entwurf",
    outputDocumentation: "README Grundlage",
    outputRelease: "Release Vorbereitung",
    outputRisk: "Risiko und Governance Übersicht",

    exportTitle: "Export Vorbereitung",
    exportSubtitle: "Die Workbench kann erzeugte Inhalte speichern und exportieren.",
    export1Title: "JSON Export",
    export1Text: "Exportiert Projektdaten und generierte Ergebnisse in einer strukturierten JSON Datei.",
    export2Title: "Markdown Export",
    export2Text: "Exportiert eine verwendbare README beziehungsweise Projektdokumentation als Markdown.",
    export3Title: "Projekt speichern",
    export3Text: "Speichert den aktuellen Projektstand lokal im Browser über localStorage.",
    export4Title: "Projekt laden",
    export4Text: "Lädt den zuletzt gespeicherten Projektstand wieder in die Workbench.",

    infoModalTitle: "Informationen zur Anwendung",
    infoModalText1: "ReqForge AI ist eine funktionsfähige AI Workbench für die strukturierte Erfassung, Bewertung und technische Aufbereitung von Produktanforderungen.",
    infoModalText2: "Die Anwendung verarbeitet Eingaben in konkrete Ergebnisbausteine wie Produktübersicht, Architekturvorschlag, API Struktur, Task Breakdown, README Basis und weitere Delivery Inhalte.",
    infoModalText3: "Zusätzlich unterstützt die Workbench das lokale Speichern des Projektstands sowie den Export in JSON und Markdown.",
    infoModalText4: "Die Oberfläche ist bilingual in Deutsch und Englisch nutzbar und auf business-taugliche Projektvorbereitung ausgerichtet.",
    infoModalText5: "Die aktuelle Version arbeitet bereits funktional im Frontend und kann später um echte AI APIs, PDF Export und Team Workflows erweitert werden.",
    infoClose: "Schließen",

    footerText: "Modernes Business Interface für AI gestützte Requirement Analyse, technische Vorstrukturierung und exportierbare Projektvorbereitung.",
    ctaTitle: "Bereit für echte Projektarbeit",
    ctaText: "Diese Version erzeugt bereits konkrete Ergebnisse, speichert Projekte lokal und exportiert verwertbare Inhalte.",
    ctaButton: "Auf GitHub ansehen",

    categoryPlatform: "Plattform",
    categorySecurity: "Security",
    categoryAutomation: "Automatisierung",
    categorySaaS: "SaaS",
    categoryInternalTool: "Internes Tool",
    categoryDesktop: "Desktop Anwendung",

    priorityLow: "Niedrig",
    priorityMedium: "Mittel",
    priorityHigh: "Hoch",
    priorityCritical: "Kritisch",

    statusDraft: "Entwurf",
    statusPlanning: "In Planung",
    statusActive: "Aktiv",
    statusReview: "In Prüfung",
    statusReady: "Bereit",

    sectionOverview: "Übersicht",
    sectionRequirements: "Requirements",
    sectionArchitecture: "Architektur",
    sectionTasks: "Aufgaben",
    sectionOutputs: "Ergebnisse",
    sectionExport: "Export",

    projectHealth: "Projektstatus",
    projectReadiness: "Readiness",
    projectConfidence: "Confidence",
    projectScope: "Scope",

    generatedTitle: "Generierte Ergebnisbausteine",
    generatedText: "Diese Bereiche werden aus deinen aktuellen Eingaben abgeleitet.",

    exportHint: "JSON und Markdown Export sind in dieser Version funktionsfähig. Lokales Speichern und Laden ebenfalls.",

    actionGenerate: "Ergebnisse generieren",
    actionSave: "Projekt speichern",
    actionLoad: "Projekt laden",
    actionReset: "Zurücksetzen",
    actionExportJson: "JSON exportieren",
    actionExportMarkdown: "Markdown exportieren",

    successGenerated: "Ergebnisse wurden aktualisiert",
    successSaved: "Projekt wurde lokal gespeichert",
    successLoaded: "Projekt wurde geladen",
    successReset: "Projekt wurde zurückgesetzt",
    successExportJson: "JSON Export wurde erstellt",
    successExportMarkdown: "Markdown Export wurde erstellt",
    errorNoSavedProject: "Kein gespeichertes Projekt gefunden",

    generatedProductOverview: "Generierte Produktübersicht",
    generatedFeatures: "Generierte Feature Matrix",
    generatedArchitecture: "Generierter Architekturvorschlag",
    generatedApi: "Generierte API Struktur",
    generatedDataModel: "Generierter Datenmodell Entwurf",
    generatedTasks: "Generierter Task Breakdown",
    generatedReadme: "Generierte README Grundlage",

    liveSummary: "Live Projektzusammenfassung",
    liveSummaryText: "Dynamische Ansicht der wichtigsten Projektdaten und generierten Inhalte.",

    kpiRequirements: "Anforderungsdichte",
    kpiFeatures: "Feature Umfang",
    kpiReadiness: "Readiness",
    kpiScope: "Scope",

    noOutputYet: "Noch keine generierten Inhalte vorhanden. Nutze den Button zum Generieren.",
  },

  en: {
    appBadge: "Business AI Workbench",
    switchLanguage: "Switch language",

    navOverview: "Overview",
    navWorkbench: "Workbench",
    navRequirements: "Requirements",
    navProjects: "Project Logic",
    navOutputs: "Outputs",
    navExport: "Export",
    navInfo: "Information",

    githubButton: "GitHub",
    websiteButton: "Website",
    linkedinButton: "LinkedIn",
    mailButton: "Contact",
    infoButton: "Info",

    heroKicker: "From requirements to practical engineering foundations",
    heroTitle: "A modern AI workbench for requirements, architecture, work packages, and technical preparation",
    heroText: "ReqForge AI was built as a functional workbench that not only captures requirements, but also derives concrete output assets, project structure, and exportable content from them.",
    heroPrimary: "Generate now",
    heroSecondary: "More information",

    panelTitle: "Central application configuration",
    panelSubtitle: "Technical and organizational core data",
    labelName: "App name",
    labelTitle: "App title",
    labelVersion: "Version",
    labelAuthor: "Author",
    labelCompany: "Company",

    stat1Title: "Structured requirement capture",
    stat1Text: "Functions, goals, audiences, roles, risks, and scope are represented centrally and transparently.",
    stat2Title: "Real output generation",
    stat2Text: "The workbench creates concrete output blocks, project content, and exportable text from your inputs.",
    stat3Title: "Business and delivery focus",
    stat3Text: "The interface is designed to make outputs useful for planning, engineering, alignment, and documentation.",

    workbenchTitle: "AI Workbench Panels",
    workbenchSubtitle: "The central workspace combines product context, technical analysis, prioritization, and operational preparation.",

    wb1Title: "Product context",
    wb1Text: "Capture business goals, audience, market positioning, value proposition, and usage scope in a structured way.",
    wb2Title: "Requirement analysis",
    wb2Text: "Classify requirements, dependencies, risks, priorities, and implementation logic transparently.",
    wb3Title: "Technical derivation",
    wb3Text: "Prepare architecture blocks, modules, API foundations, data model concepts, and engineering structure.",
    wb4Title: "Delivery outputs",
    wb4Text: "Derive roadmaps, work packages, project sections, documentation foundations, and export objects.",

    formTitle: "Requirement Form",
    formSubtitle: "Capture project context, requirements, priorities, and technical parameters in a structured input form.",
    projectName: "Project name",
    projectTitle: "Project title",
    projectVersion: "Project version",
    projectOwner: "Project owner",
    projectAudience: "Audience",
    projectCategory: "Category",
    projectPriority: "Priority",
    projectStatus: "Status",
    projectDeadline: "Target date",
    projectSummary: "Summary",
    businessGoal: "Business goal",
    technicalGoal: "Technical goal",
    requirementsInput: "Requirements",
    featuresInput: "Core features",
    architectureInput: "Architecture approach",
    apiInput: "API requirements",
    dataModelInput: "Data model notes",
    securityInput: "Security and governance",
    notesInput: "Additional notes",

    placeholderProjectName: "e.g. ReqForge Workspace",
    placeholderProjectTitle: "e.g. Business AI workbench for product definition",
    placeholderProjectVersion: "e.g. 1.0.0",
    placeholderProjectOwner: "e.g. Thorsten Bylicki",
    placeholderProjectAudience: "e.g. product teams, developers, decision makers",
    placeholderSummary: "Briefly describe the business and technical purpose the application is intended to fulfill.",
    placeholderBusinessGoal: "Describe the business goal, for example efficiency, quality, standardization, or scalability.",
    placeholderTechnicalGoal: "Describe the technical goal, for example architecture, modularity, API structure, or automation.",
    placeholderRequirements: "List functional and non functional requirements, including roles, permissions, processes, and validations.",
    placeholderFeatures: "Describe the most important features, panels, processes, and user actions.",
    placeholderArchitecture: "Describe the preferred architecture approach, for example frontend, backend, database, queue, services, or local persistence.",
    placeholderApi: "Describe desired API areas, endpoints, integrations, or interfaces.",
    placeholderDataModel: "Describe entities, relationships, status values, audit fields, or technical modeling preferences.",
    placeholderSecurity: "Describe security, role, logging, validation, privacy, and governance requirements.",
    placeholderNotes: "Add further notes, constraints, prioritization details, or strategic considerations.",

    sectionTitle: "Project sections",
    sectionSubtitle: "The application prepares projects in clearly separated sections for planning, implementation, and communication.",

    outputTitle: "Generated Output Cards",
    outputSubtitle: "These cards are filled with content from your inputs and are no longer static placeholders.",
    outputProductOverview: "Product overview",
    outputFeatureMatrix: "Feature matrix",
    outputArchitecture: "Architecture proposal",
    outputApi: "API structure",
    outputDataModel: "Data model draft",
    outputTaskBreakdown: "Task breakdown",
    outputRoadmap: "Roadmap draft",
    outputDocumentation: "README foundation",
    outputRelease: "Release preparation",
    outputRisk: "Risk and governance overview",

    exportTitle: "Export preparation",
    exportSubtitle: "The workbench can save and export generated content.",
    export1Title: "JSON export",
    export1Text: "Exports project data and generated results in a structured JSON file.",
    export2Title: "Markdown export",
    export2Text: "Exports a usable README or project documentation as Markdown.",
    export3Title: "Save project",
    export3Text: "Saves the current project state locally in the browser via localStorage.",
    export4Title: "Load project",
    export4Text: "Loads the most recently saved project state back into the workbench.",

    infoModalTitle: "Application information",
    infoModalText1: "ReqForge AI is a functional AI workbench for the structured capture, evaluation, and technical preparation of product requirements.",
    infoModalText2: "The application transforms inputs into concrete result blocks such as product overview, architecture proposal, API structure, task breakdown, README base, and additional delivery content.",
    infoModalText3: "The workbench also supports local project saving as well as JSON and Markdown export.",
    infoModalText4: "The interface is bilingual in German and English and is designed for business-ready project preparation.",
    infoModalText5: "The current version already works functionally in the frontend and can later be extended with real AI APIs, PDF export, and team workflows.",
    infoClose: "Close",

    footerText: "Modern business interface for AI-supported requirement analysis, technical pre-structuring, and exportable project preparation.",
    ctaTitle: "Ready for real project work",
    ctaText: "This version already generates concrete outputs, stores projects locally, and exports usable content.",
    ctaButton: "View on GitHub",

    categoryPlatform: "Platform",
    categorySecurity: "Security",
    categoryAutomation: "Automation",
    categorySaaS: "SaaS",
    categoryInternalTool: "Internal tool",
    categoryDesktop: "Desktop application",

    priorityLow: "Low",
    priorityMedium: "Medium",
    priorityHigh: "High",
    priorityCritical: "Critical",

    statusDraft: "Draft",
    statusPlanning: "Planning",
    statusActive: "Active",
    statusReview: "In review",
    statusReady: "Ready",

    sectionOverview: "Overview",
    sectionRequirements: "Requirements",
    sectionArchitecture: "Architecture",
    sectionTasks: "Tasks",
    sectionOutputs: "Outputs",
    sectionExport: "Export",

    projectHealth: "Project health",
    projectReadiness: "Readiness",
    projectConfidence: "Confidence",
    projectScope: "Scope",

    generatedTitle: "Generated result assets",
    generatedText: "These sections are derived from your current inputs.",

    exportHint: "JSON and Markdown export are functional in this version. Local save and load are as well.",

    actionGenerate: "Generate outputs",
    actionSave: "Save project",
    actionLoad: "Load project",
    actionReset: "Reset",
    actionExportJson: "Export JSON",
    actionExportMarkdown: "Export Markdown",

    successGenerated: "Outputs have been updated",
    successSaved: "Project has been saved locally",
    successLoaded: "Project has been loaded",
    successReset: "Project has been reset",
    successExportJson: "JSON export has been created",
    successExportMarkdown: "Markdown export has been created",
    errorNoSavedProject: "No saved project found",

    generatedProductOverview: "Generated product overview",
    generatedFeatures: "Generated feature matrix",
    generatedArchitecture: "Generated architecture proposal",
    generatedApi: "Generated API structure",
    generatedDataModel: "Generated data model draft",
    generatedTasks: "Generated task breakdown",
    generatedReadme: "Generated README foundation",

    liveSummary: "Live project summary",
    liveSummaryText: "Dynamic view of the most important project data and generated content.",

    kpiRequirements: "Requirement density",
    kpiFeatures: "Feature scope",
    kpiReadiness: "Readiness",
    kpiScope: "Scope",

    noOutputYet: "No generated content yet. Use the button to generate outputs.",
  },
};

const getCategories = (t) => [
  t.categoryPlatform,
  t.categorySecurity,
  t.categoryAutomation,
  t.categorySaaS,
  t.categoryInternalTool,
  t.categoryDesktop,
];

const getPriorities = (t) => [
  t.priorityLow,
  t.priorityMedium,
  t.priorityHigh,
  t.priorityCritical,
];

const getStatuses = (t) => [
  t.statusDraft,
  t.statusPlanning,
  t.statusActive,
  t.statusReview,
  t.statusReady,
];

const getWorkbenchPanels = (t) => [
  { icon: BriefcaseBusiness, title: t.wb1Title, text: t.wb1Text },
  { icon: Search, title: t.wb2Title, text: t.wb2Text },
  { icon: Cpu, title: t.wb3Title, text: t.wb3Text },
  { icon: FileOutput, title: t.wb4Title, text: t.wb4Text },
];

function createInitialForm(t) {
  return {
    projectName: "ReqForge Workspace",
    projectTitle:
      t === translations.de
        ? "Business AI Workbench für Requirements und Delivery Vorbereitung"
        : "Business AI workbench for requirements and delivery preparation",
    projectVersion: "1.0.0",
    projectOwner: APP_AUTHOR,
    projectAudience:
      t === translations.de
        ? "Produktteams, Entwickler, Architekten, Entscheider"
        : "Product teams, developers, architects, decision makers",
    projectCategory: getCategories(t)[0],
    projectPriority: getPriorities(t)[2],
    projectStatus: getStatuses(t)[1],
    projectDeadline: "2026-06-30",
    projectSummary:
      t === translations.de
        ? "Eine moderne Workbench für die strukturierte Erfassung, Analyse und technische Vorbereitung von Anforderungen."
        : "A modern workbench for the structured capture, analysis, and technical preparation of requirements.",
    businessGoal:
      t === translations.de
        ? "Anforderungen schneller aufnehmen, sauber strukturieren und als belastbare Projektgrundlage für Planung und Umsetzung nutzbar machen."
        : "Capture requirements faster, structure them clearly, and turn them into reliable project foundations for planning and implementation.",
    technicalGoal:
      t === translations.de
        ? "Eine modulare Oberfläche mit Requirement Management, Projektsektionen, Ergebnisbausteinen und Export Vorbereitung bereitstellen."
        : "Provide a modular interface with requirement management, project sections, output assets, and export preparation.",
    requirementsInput:
      t === translations.de
        ? "Bilinguale Oberfläche, Requirement Form, Priorisierung, Projektstatus, Projektsektionen, Output Generierung, JSON Export, Markdown Export"
        : "Bilingual interface, requirement form, prioritization, project status, project sections, output generation, JSON export, markdown export",
    featuresInput:
      t === translations.de
        ? "Dashboard, Workbench Panels, Formulare, Ergebnisse, Projektstruktur, Export Übersicht, lokale Speicherung"
        : "Dashboard, workbench panels, forms, outputs, project structure, export overview, local persistence",
    architectureInput:
      t === translations.de
        ? "React SingleFile Oberfläche mit modularen UI Blöcken, zentraler Sprachlogik, wiederverwendbaren Komponenten und Frontend Generierungslogik."
        : "React single-file interface with modular UI blocks, central language logic, reusable components, and frontend generation logic.",
    apiInput:
      t === translations.de
        ? "Vorbereitung für spätere Projekt APIs, Export Services, Benutzerverwaltung und Analyse Services."
        : "Preparation for future project APIs, export services, user management, and analysis services.",
    dataModelInput:
      t === translations.de
        ? "Projekt, Requirement, Feature, Section, Output, Export Artifact, Status und Priorität."
        : "Project, requirement, feature, section, output, export artifact, status, and priority.",
    securityInput:
      t === translations.de
        ? "Rollenmodell, Validierung, Logging, Governance, Export Kontrolle und nachvollziehbare Datenstruktur."
        : "Role model, validation, logging, governance, export control, and traceable data structure.",
    notesInput:
      t === translations.de
        ? "Im nächsten Ausbauschritt sollen echte AI APIs, PDF Export und Team Workflows ergänzt werden."
        : "In the next expansion stage, real AI APIs, PDF export, and team workflows should be added.",
  };
}

function createEmptyOutputs() {
  return {
    productOverview: "",
    featureMatrix: "",
    architecture: "",
    apiStructure: "",
    dataModel: "",
    taskBreakdown: "",
    roadmap: "",
    readme: "",
    releasePrep: "",
    riskGovernance: "",
  };
}

function splitToBullets(value) {
  return value
    .split(/[\n,]/g)
    .map((item) => item.trim())
    .filter(Boolean);
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function InfoModal({ open, onClose, t }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-3">
              <Info className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{t.infoModalTitle}</h3>
              <p className="text-sm text-neutral-400">
                {APP_NAME} • {APP_TITLE} • v{APP_VERSION}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-2xl border border-white/10 bg-white/5 p-2 text-neutral-300 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 px-6 py-6">
          <p className="leading-7 text-neutral-300">{t.infoModalText1}</p>
          <p className="leading-7 text-neutral-300">{t.infoModalText2}</p>
          <p className="leading-7 text-neutral-300">{t.infoModalText3}</p>
          <p className="leading-7 text-neutral-300">{t.infoModalText4}</p>
          <p className="leading-7 text-neutral-300">{t.infoModalText5}</p>
        </div>

        <div className="border-t border-white/10 px-6 py-5">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            {t.infoClose}
          </button>
        </div>
      </div>
    </div>
  );
}

function FieldLabel({ children }) {
  return (
    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
      {children}
    </label>
  );
}

function TextInput({ label, value, onChange, placeholder }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-white/20 focus:bg-black/30"
      />
    </div>
  );
}

function SelectInput({ label, value, onChange, options }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <select
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-white/20 focus:bg-black/30"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-neutral-950 text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaInput({ label, value, onChange, placeholder, rows = 5 }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-neutral-500 focus:border-white/20 focus:bg-black/30"
      />
    </div>
  );
}

function MetricCard({ icon: Icon, title, value, subtext }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl backdrop-blur-xl">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-white/10 p-3">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">{title}</p>
          <p className="mt-2 text-2xl font-bold text-white">{value}</p>
          <p className="mt-2 text-sm leading-6 text-neutral-400">{subtext}</p>
        </div>
      </div>
    </div>
  );
}

function PanelCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/20 p-5 transition hover:bg-white/[0.04]">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-white/10 p-3">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-white">{title}</h4>
          <p className="mt-2 text-sm leading-7 text-neutral-400">{text}</p>
        </div>
      </div>
    </div>
  );
}

function OutputBlock({ icon: Icon, title, content, emptyText }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-white/10 p-3">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-base font-semibold text-white">{title}</h4>
          <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-neutral-300">
            {content || emptyText}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-white transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function generateOutputs(form, t) {
  const requirements = splitToBullets(form.requirementsInput);
  const features = splitToBullets(form.featuresInput);
  const architectureHints = splitToBullets(form.architectureInput);
  const apiHints = splitToBullets(form.apiInput);
  const dataHints = splitToBullets(form.dataModelInput);
  const securityHints = splitToBullets(form.securityInput);

  const productOverview =
`${form.projectName} ist als ${form.projectCategory} mit Fokus auf ${form.projectAudience} positioniert.

Zielbild:
${form.projectSummary}

Business Ziel:
${form.businessGoal}

Technisches Ziel:
${form.technicalGoal}

Projektstatus:
${form.projectStatus} • Priorität: ${form.projectPriority} • Zieltermin: ${form.projectDeadline}`;

  const featureMatrix =
features.length
  ? features.map((item, index) => `${index + 1}. ${item}`).join("\n")
  : t.noOutputYet;

  const architecture =
`${t.outputArchitecture}

Empfohlener Architekturansatz:
• Frontend Layer für strukturierte Eingaben und Ergebnisdarstellung
• Service Layer für Generierung, Export und Projektlogik
• Persistenz Layer für lokalen Speicher und spätere API Anbindung
• Output Layer für JSON, Markdown und weitere Delivery Artefakte

Technische Hinweise:
${architectureHints.length ? architectureHints.map((item) => `• ${item}`).join("\n") : "• Keine zusätzlichen Architekturhinweise erfasst"}`;

  const apiStructure =
`${t.outputApi}

Empfohlene Bereiche:
• /project/save
• /project/load
• /generate/overview
• /generate/architecture
• /generate/tasks
• /export/json
• /export/markdown

API Anforderungen:
${apiHints.length ? apiHints.map((item) => `• ${item}`).join("\n") : "• Keine spezifischen API Anforderungen erfasst"}`;

  const dataModel =
`${t.outputDataModel}

Mögliche Kernentitäten:
• Project
• Requirement
• Feature
• Output
• ExportArtifact
• Status
• Priority

Datenmodell Hinweise:
${dataHints.length ? dataHints.map((item) => `• ${item}`).join("\n") : "• Keine zusätzlichen Datenmodell Hinweise erfasst"}`;

  const taskBreakdown =
`${t.outputTaskBreakdown}

1. Projektdefinition und Zielbild schärfen
2. Anforderungen validieren und priorisieren
3. Feature Scope in Arbeitspakete überführen
4. Architektur und Schnittstellen strukturieren
5. Ergebnisartefakte generieren
6. Export und Dokumentation vorbereiten
7. Review und Delivery Vorbereitung durchführen

Erfasste Requirements:
${requirements.length ? requirements.map((item) => `• ${item}`).join("\n") : "• Keine Requirements erfasst"}`;

  const roadmap =
`${t.outputRoadmap}

Phase 1
• Requirement Intake
• Scope Definition
• Business Alignment

Phase 2
• Architektur Vorbereitung
• Datenmodell und API Struktur
• Task Breakdown

Phase 3
• Implementierung
• Testing
• Dokumentation
• Delivery und Release Vorbereitung`;

  const readme =
`# ${form.projectName}

## ${form.projectTitle}

## Overview
${form.projectSummary}

## Business Goal
${form.businessGoal}

## Technical Goal
${form.technicalGoal}

## Audience
${form.projectAudience}

## Core Features
${features.length ? features.map((item) => `- ${item}`).join("\n") : "- No features captured"}

## Requirements
${requirements.length ? requirements.map((item) => `- ${item}`).join("\n") : "- No requirements captured"}

## Architecture Notes
${architectureHints.length ? architectureHints.map((item) => `- ${item}`).join("\n") : "- No architecture notes captured"}

## API Notes
${apiHints.length ? apiHints.map((item) => `- ${item}`).join("\n") : "- No API notes captured"}

## Data Model Notes
${dataHints.length ? dataHints.map((item) => `- ${item}`).join("\n") : "- No data model notes captured"}

## Security And Governance
${securityHints.length ? securityHints.map((item) => `- ${item}`).join("\n") : "- No security notes captured"}

## Status
${form.projectStatus}

## Priority
${form.projectPriority}

## Deadline
${form.projectDeadline}`;

  const releasePrep =
`${t.outputRelease}

Freigaberelevante Punkte:
• Scope final prüfen
• Requirements gegen Features abgleichen
• Architekturgrundlage validieren
• README und Projektdokumentation erzeugen
• Export Artefakte bereitstellen
• Projektstatus auf Delivery readiness prüfen`;

  const riskGovernance =
`${t.outputRisk}

Risikofelder:
${securityHints.length ? securityHints.map((item) => `• ${item}`).join("\n") : "• Keine expliziten Governance Hinweise erfasst"}

Governance Empfehlung:
• Eingabedaten validieren
• Projektstatus nachvollziehbar speichern
• Exporte versionierbar halten
• Rollen und Zuständigkeiten dokumentieren`;

  return {
    productOverview,
    featureMatrix,
    architecture,
    apiStructure,
    dataModel,
    taskBreakdown,
    roadmap,
    readme,
    releasePrep,
    riskGovernance,
  };
}

function buildMarkdownExport(form, outputs) {
  return `# ${form.projectName}

## ${form.projectTitle}

### Project Metadata
- Version: ${form.projectVersion}
- Owner: ${form.projectOwner}
- Category: ${form.projectCategory}
- Priority: ${form.projectPriority}
- Status: ${form.projectStatus}
- Deadline: ${form.projectDeadline}
- Audience: ${form.projectAudience}

### Product Overview
${outputs.productOverview}

### Feature Matrix
${outputs.featureMatrix}

### Architecture Proposal
${outputs.architecture}

### API Structure
${outputs.apiStructure}

### Data Model Draft
${outputs.dataModel}

### Task Breakdown
${outputs.taskBreakdown}

### Roadmap
${outputs.roadmap}

### Release Preparation
${outputs.releasePrep}

### Risk And Governance
${outputs.riskGovernance}

### README Foundation
${outputs.readme}
`;
}

export default function App() {
  const [lang, setLang] = useState("de");
  const [infoOpen, setInfoOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState(createInitialForm(translations.de));
  const [outputs, setOutputs] = useState(createEmptyOutputs());

  const t = useMemo(() => translations[lang], [lang]);
  const categories = useMemo(() => getCategories(t), [t]);
  const priorities = useMemo(() => getPriorities(t), [t]);
  const statuses = useMemo(() => getStatuses(t), [t]);
  const workbenchPanels = useMemo(() => getWorkbenchPanels(t), [t]);

  const completionScore = useMemo(() => {
    const values = Object.values(form);
    const filled = values.filter((value) => String(value).trim().length > 0).length;
    return Math.round((filled / values.length) * 100);
  }, [form]);

  const requirementCount = useMemo(() => splitToBullets(form.requirementsInput).length, [form.requirementsInput]);
  const featureCount = useMemo(() => splitToBullets(form.featuresInput).length, [form.featuresInput]);

  const projectScope = useMemo(() => {
    if (requirementCount >= 10 && featureCount >= 8) return "MVP+";
    if (requirementCount >= 6) return "MVP";
    return "Draft";
  }, [requirementCount, featureCount]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (message) setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  const updateField = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleLanguageSwitch = () => {
    const newLang = lang === "de" ? "en" : "de";
    const nextT = translations[newLang];
    setLang(newLang);

    setForm((prev) => ({
      ...prev,
      projectCategory: getCategories(nextT)[0],
      projectPriority: getPriorities(nextT)[2],
      projectStatus: getStatuses(nextT)[1],
    }));
  };

  const handleGenerate = () => {
    const generated = generateOutputs(form, t);
    setOutputs(generated);
    setMessage(t.successGenerated);
  };

  const handleSave = () => {
    const payload = {
      lang,
      form,
      outputs,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setMessage(t.successSaved);
  };

  const handleLoad = () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      setMessage(t.errorNoSavedProject);
      return;
    }

    const parsed = JSON.parse(raw);
    if (parsed.lang) setLang(parsed.lang);
    if (parsed.form) setForm(parsed.form);
    if (parsed.outputs) setOutputs(parsed.outputs);
    setMessage(translations[parsed.lang || lang].successLoaded);
  };

  const handleReset = () => {
    setForm(createInitialForm(t));
    setOutputs(createEmptyOutputs());
    setMessage(t.successReset);
  };

  const handleExportJson = () => {
    const exportPayload = {
      app: {
        name: APP_NAME,
        title: APP_TITLE,
        version: APP_VERSION,
        author: APP_AUTHOR,
        company: APP_COMPANY,
      },
      lang,
      form,
      outputs,
      exportedAt: new Date().toISOString(),
    };

    downloadFile(
      `${form.projectName.replace(/\s+/g, "_").toLowerCase()}_project.json`,
      JSON.stringify(exportPayload, null, 2),
      "application/json"
    );
    setMessage(t.successExportJson);
  };

  const handleExportMarkdown = () => {
    const markdown = buildMarkdownExport(form, outputs);
    downloadFile(
      `${form.projectName.replace(/\s+/g, "_").toLowerCase()}_README.md`,
      markdown,
      "text/markdown"
    );
    setMessage(t.successExportMarkdown);
  };

  const metrics = [
    {
      icon: ClipboardList,
      title: t.kpiRequirements,
      value: String(requirementCount),
      subtext:
        lang === "de"
          ? "Erfasste Kernanforderungen auf Basis der aktuellen Eingaben."
          : "Captured core requirements based on the current inputs.",
    },
    {
      icon: CheckSquare,
      title: t.kpiFeatures,
      value: String(featureCount),
      subtext:
        lang === "de"
          ? "Erfasste Kernfunktionen für die aktuelle Lösung."
          : "Captured core features for the current solution.",
    },
    {
      icon: Gauge,
      title: t.kpiReadiness,
      value: `${completionScore}%`,
      subtext:
        lang === "de"
          ? "Abgeleitet aus dem Füllstand der Projektparameter."
          : "Derived from the completion level of the project parameters.",
    },
    {
      icon: BadgeCheck,
      title: t.kpiScope,
      value: projectScope,
      subtext:
        lang === "de"
          ? "Einstufung des aktuellen Projektumfangs."
          : "Classification of the current project scope.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute left-[35%] top-[20%] h-[320px] w-[320px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <InfoModal open={infoOpen} onClose={() => setInfoOpen(false)} t={t} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <header className="mb-10 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <div className="flex flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                <Sparkles className="h-7 w-7 text-white" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                    {APP_NAME}
                  </h1>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300">
                    {t.appBadge}
                  </span>
                </div>
                <p className="mt-1 text-sm text-neutral-400">{APP_TITLE}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleLanguageSwitch}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-neutral-200 transition hover:bg-white/10 hover:text-white"
              >
                <Languages className="h-4 w-4" />
                {lang === "de" ? "EN" : "DE"}
              </button>

              <a
                href={APP_GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-neutral-200 transition hover:bg-white/10 hover:text-white"
              >
                <Github className="h-4 w-4" />
                {t.githubButton}
              </a>

              <a
                href={APP_WEBSITE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-neutral-200 transition hover:bg-white/10 hover:text-white"
              >
                <Globe className="h-4 w-4" />
                {t.websiteButton}
              </a>

              <a
                href={APP_LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-neutral-200 transition hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                {t.linkedinButton}
              </a>

              <a
                href={APP_EMAIL}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-neutral-200 transition hover:bg-white/10 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {t.mailButton}
              </a>

              <button
                onClick={() => setInfoOpen(true)}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                <Info className="h-4 w-4" />
                {t.infoButton}
              </button>
            </div>
          </div>
        </header>

        {message ? (
          <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-neutral-200">
            {message}
          </div>
        ) : null}

        <section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.02] p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-neutral-300">
              <ShieldCheck className="h-4 w-4" />
              {t.heroKicker}
            </div>

            <h2 className="max-w-6xl text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl xl:text-4xl">
              {t.heroTitle}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300 md:text-lg">
              {t.heroText}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={handleGenerate}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                <Wand2 className="h-4 w-4" />
                {t.actionGenerate}
              </button>

              <button
                onClick={() => setInfoOpen(true)}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <BookOpen className="h-4 w-4" />
                {t.heroSecondary}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                t.navOverview,
                t.navWorkbench,
                t.navRequirements,
                t.navProjects,
                t.navOutputs,
                t.navExport,
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  {t.stat1Title}
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{t.stat1Text}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  {t.stat2Title}
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{t.stat2Text}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  {t.stat3Title}
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{t.stat3Text}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3">
                <FolderKanban className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{t.panelTitle}</h3>
                <p className="text-sm text-neutral-400">{t.panelSubtitle}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">{t.labelName}</p>
                <p className="mt-2 text-sm font-medium text-white">{APP_NAME}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">{t.labelTitle}</p>
                <p className="mt-2 text-sm font-medium text-white">{APP_TITLE}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">{t.labelVersion}</p>
                  <p className="mt-2 text-sm font-medium text-white">{APP_VERSION}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">{t.labelAuthor}</p>
                  <p className="mt-2 text-sm font-medium text-white">{APP_AUTHOR}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">{t.labelCompany}</p>
                <p className="mt-2 text-sm font-medium text-white">{APP_COMPANY}</p>
              </div>

              <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-white/10 p-2">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                  <div className="w-full">
                    <p className="text-sm font-semibold text-white">{t.projectHealth}</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-400">{t.footerText}</p>

                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-neutral-500">
                        <span>{t.projectReadiness}</span>
                        <span>{completionScore}%</span>
                      </div>
                      <ProgressBar value={completionScore} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">{t.projectPriority}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{form.projectPriority}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">{t.projectStatus}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{form.projectStatus}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item, index) => (
            <MetricCard
              key={`${item.title}-${index}`}
              icon={item.icon}
              title={item.title}
              value={item.value}
              subtext={item.subtext}
            />
          ))}
        </section>
		
        <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleGenerate}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              <Wand2 className="h-4 w-4" />
              {t.actionGenerate}
            </button>

            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Save className="h-4 w-4" />
              {t.actionSave}
            </button>

            <button
              onClick={handleLoad}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Upload className="h-4 w-4" />
              {t.actionLoad}
            </button>

            <button
              onClick={handleExportJson}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <FileJson className="h-4 w-4" />
              {t.actionExportJson}
            </button>

            <button
              onClick={handleExportMarkdown}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <FileText className="h-4 w-4" />
              {t.actionExportMarkdown}
            </button>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-500/20"
            >
              <RefreshCcw className="h-4 w-4" />
              {t.actionReset}
            </button>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
              {t.navWorkbench}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {t.workbenchTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-400">
              {t.workbenchSubtitle}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workbenchPanels.map((panel, index) => (
              <PanelCard
                key={`${panel.title}-${index}`}
                icon={panel.icon}
                title={panel.title}
                text={panel.text}
              />
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                {t.navRequirements}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {t.formTitle}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-400">
                {t.formSubtitle}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label={t.projectName}
                value={form.projectName}
                onChange={(e) => updateField("projectName", e.target.value)}
                placeholder={t.placeholderProjectName}
              />

              <TextInput
                label={t.projectTitle}
                value={form.projectTitle}
                onChange={(e) => updateField("projectTitle", e.target.value)}
                placeholder={t.placeholderProjectTitle}
              />

              <TextInput
                label={t.projectVersion}
                value={form.projectVersion}
                onChange={(e) => updateField("projectVersion", e.target.value)}
                placeholder={t.placeholderProjectVersion}
              />

              <TextInput
                label={t.projectOwner}
                value={form.projectOwner}
                onChange={(e) => updateField("projectOwner", e.target.value)}
                placeholder={t.placeholderProjectOwner}
              />

              <TextInput
                label={t.projectAudience}
                value={form.projectAudience}
                onChange={(e) => updateField("projectAudience", e.target.value)}
                placeholder={t.placeholderProjectAudience}
              />

              <SelectInput
                label={t.projectCategory}
                value={form.projectCategory}
                onChange={(e) => updateField("projectCategory", e.target.value)}
                options={categories}
              />

              <SelectInput
                label={t.projectPriority}
                value={form.projectPriority}
                onChange={(e) => updateField("projectPriority", e.target.value)}
                options={priorities}
              />

              <SelectInput
                label={t.projectStatus}
                value={form.projectStatus}
                onChange={(e) => updateField("projectStatus", e.target.value)}
                options={statuses}
              />

              <div className="md:col-span-2">
                <FieldLabel>{t.projectDeadline}</FieldLabel>
                <input
                  type="date"
                  value={form.projectDeadline}
                  onChange={(e) => updateField("projectDeadline", e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-white/20 focus:bg-black/30"
                />
              </div>

              <div className="md:col-span-2">
                <TextAreaInput
                  label={t.projectSummary}
                  value={form.projectSummary}
                  onChange={(e) => updateField("projectSummary", e.target.value)}
                  placeholder={t.placeholderSummary}
                  rows={4}
                />
              </div>

              <div className="md:col-span-2">
                <TextAreaInput
                  label={t.businessGoal}
                  value={form.businessGoal}
                  onChange={(e) => updateField("businessGoal", e.target.value)}
                  placeholder={t.placeholderBusinessGoal}
                  rows={4}
                />
              </div>

              <div className="md:col-span-2">
                <TextAreaInput
                  label={t.technicalGoal}
                  value={form.technicalGoal}
                  onChange={(e) => updateField("technicalGoal", e.target.value)}
                  placeholder={t.placeholderTechnicalGoal}
                  rows={4}
                />
              </div>

              <div className="md:col-span-2">
                <TextAreaInput
                  label={t.requirementsInput}
                  value={form.requirementsInput}
                  onChange={(e) => updateField("requirementsInput", e.target.value)}
                  placeholder={t.placeholderRequirements}
                  rows={5}
                />
              </div>

              <div className="md:col-span-2">
                <TextAreaInput
                  label={t.featuresInput}
                  value={form.featuresInput}
                  onChange={(e) => updateField("featuresInput", e.target.value)}
                  placeholder={t.placeholderFeatures}
                  rows={5}
                />
              </div>

              <div className="md:col-span-2">
                <TextAreaInput
                  label={t.architectureInput}
                  value={form.architectureInput}
                  onChange={(e) => updateField("architectureInput", e.target.value)}
                  placeholder={t.placeholderArchitecture}
                  rows={5}
                />
              </div>

              <div className="md:col-span-2">
                <TextAreaInput
                  label={t.apiInput}
                  value={form.apiInput}
                  onChange={(e) => updateField("apiInput", e.target.value)}
                  placeholder={t.placeholderApi}
                  rows={4}
                />
              </div>

              <div className="md:col-span-2">
                <TextAreaInput
                  label={t.dataModelInput}
                  value={form.dataModelInput}
                  onChange={(e) => updateField("dataModelInput", e.target.value)}
                  placeholder={t.placeholderDataModel}
                  rows={4}
                />
              </div>

              <div className="md:col-span-2">
                <TextAreaInput
                  label={t.securityInput}
                  value={form.securityInput}
                  onChange={(e) => updateField("securityInput", e.target.value)}
                  placeholder={t.placeholderSecurity}
                  rows={4}
                />
              </div>

              <div className="md:col-span-2">
                <TextAreaInput
                  label={t.notesInput}
                  value={form.notesInput}
                  onChange={(e) => updateField("notesInput", e.target.value)}
                  placeholder={t.placeholderNotes}
                  rows={4}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-3">
                  <PanelTop className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t.liveSummary}</h3>
                  <p className="text-sm text-neutral-400">{t.liveSummaryText}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {form.projectName || APP_NAME}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-neutral-400">
                        {form.projectSummary}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {t.projectAudience}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-neutral-400">
                        {form.projectAudience}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-white/10 p-3">
                        <Flag className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white">
                          {t.projectPriority}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-neutral-400">
                          {form.projectPriority}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-white/10 p-3">
                        <CalendarDays className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white">
                          {t.projectDeadline}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-neutral-400">
                          {form.projectDeadline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {lang === "de" ? "Verarbeitungsstatus" : "Processing status"}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-neutral-400">
                        {lang === "de"
                          ? `Aktuell wurden ${requirementCount} Kernanforderungen und ${featureCount} Kernfunktionen erfasst. Der Scope wird derzeit als ${projectScope} eingestuft.`
                          : `A total of ${requirementCount} core requirements and ${featureCount} core features have been captured so far. The scope is currently classified as ${projectScope}.`}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    [t.projectCategory, form.projectCategory],
                    [t.projectStatus, form.projectStatus],
                    [t.projectVersion, form.projectVersion],
                    [t.projectOwner, form.projectOwner],
                  ].map(([label, value]) => (
                    <div
                      key={`${label}-${value}`}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                    >
                      <span className="text-sm text-neutral-400">{label}</span>
                      <span className="text-sm font-medium text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
              {t.navOutputs}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {t.outputTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-400">
              {t.outputSubtitle}
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            <OutputBlock
              icon={FileText}
              title={t.generatedProductOverview}
              content={outputs.productOverview}
              emptyText={t.noOutputYet}
            />

            <OutputBlock
              icon={CheckSquare}
              title={t.generatedFeatures}
              content={outputs.featureMatrix}
              emptyText={t.noOutputYet}
            />

            <OutputBlock
              icon={Workflow}
              title={t.generatedArchitecture}
              content={outputs.architecture}
              emptyText={t.noOutputYet}
            />

            <OutputBlock
              icon={TerminalSquare}
              title={t.generatedApi}
              content={outputs.apiStructure}
              emptyText={t.noOutputYet}
            />

            <OutputBlock
              icon={Database}
              title={t.generatedDataModel}
              content={outputs.dataModel}
              emptyText={t.noOutputYet}
            />

            <OutputBlock
              icon={ListChecks}
              title={t.generatedTasks}
              content={outputs.taskBreakdown}
              emptyText={t.noOutputYet}
            />

            <OutputBlock
              icon={BookOpen}
              title={t.generatedReadme}
              content={outputs.readme}
              emptyText={t.noOutputYet}
            />

            <OutputBlock
              icon={ShieldCheck}
              title={t.outputRisk}
              content={outputs.riskGovernance}
              emptyText={t.noOutputYet}
            />

            <OutputBlock
              icon={Rocket}
              title={t.outputRelease}
              content={outputs.releasePrep}
              emptyText={t.noOutputYet}
            />

            <OutputBlock
              icon={CalendarDays}
              title={t.outputRoadmap}
              content={outputs.roadmap}
              emptyText={t.noOutputYet}
            />
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
              {t.navExport}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {t.exportTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-400">
              {t.exportSubtitle}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <PanelCard icon={FileJson} title={t.export1Title} text={t.export1Text} />
            <PanelCard icon={FileText} title={t.export2Title} text={t.export2Text} />
            <PanelCard icon={Save} title={t.export3Title} text={t.export3Text} />
            <PanelCard icon={Upload} title={t.export4Title} text={t.export4Text} />
          </div>

          <div className="mt-6 rounded-3xl border border-dashed border-white/10 bg-black/20 p-5">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white/10 p-3">
                <Download className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white">
                  {lang === "de" ? "Export Status" : "Export status"}
                </h4>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  {t.exportHint}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.03] p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                {t.navInfo}
              </p>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
                {t.ctaTitle}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-300">
                {t.ctaText}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <button
                onClick={() => setInfoOpen(true)}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Info className="h-4 w-4" />
                {t.infoButton}
              </button>

              <a
                href={APP_GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                <Github className="h-4 w-4" />
                {t.ctaButton}
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-6 border-t border-white/10 px-1 py-6">
          <div className="flex flex-col gap-3 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {APP_AUTHOR} / {APP_COMPANY}
            </p>
            <p>
              {APP_NAME} • {APP_TITLE} • v{APP_VERSION}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}