# Droidex Development Guide

## Development Flow

Idee
↓

Existierende Domain suchen

↓

Implementieren

↓

Muster erkennen

↓

Extrahieren

↓

Refactoring

↓

ARCHITECTURE aktualisieren
(Grundprinzip)

↓

LAB_NOTES ergänzen
(Erkenntnis)

↓

SNAP aktualisieren
(aktueller Stand)

↓

CHANGELOG ergänzen
(Historie)

↓

Release

---

## Development Order

Neue Funktionen entstehen immer in derselben Reihenfolge.

DATA

↓

RULES

↓

FACTS

↓

STATE

↓

UI

↓

COMPANION

Nie andersherum.

---

## Domain Ownership

Jede Information besitzt genau einen Besitzer.

DATA
speichert Wissen.

RULES
treffen Entscheidungen.

FACTS
berechnen Zustände.

STATE
verbindet FACTS mit React.

UI
stellt Informationen dar.

COMPANION
interpretiert Zustände.

---

## Design Principles

Komponenten rendern.

Hooks verbinden.

Facts berechnen.

Rules entscheiden.

Data speichert Wissen.

---

## Refactoring Rules

Vor jeder neuen Datei fragen:

Gibt es bereits eine Domain,
die diese Verantwortung besitzt?

Wenn ja:
→ erweitern.

Wenn nein:
→ neu anlegen.

Nicht abstrahieren,
solange sich kein Muster wiederholt.

Erst wenn dieselbe Logik mehrfach entsteht,
wird sie extrahiert.

Prefer moving code over rewriting code.

Extract first.
Delete later.

Avoid creating parallel implementations.

---

## Documentation

ARCHITECTURE
beschreibt die Architektur.

LAB_NOTES
beschreibt Erkenntnisse.

SNAP
beschreibt den aktuellen Stand.

CHANGELOG
beschreibt veröffentlichte Änderungen.
