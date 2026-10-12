# Angular Production Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Wygenerowac swiezy build produkcyjny Angulara w `pajak-trans-spa/dist/pajak-trans-spa`.

**Architecture:** Wykorzystujemy istniejaca konfiguracje Angular CLI bez zmian w kodzie aplikacji. Build jest uruchamiany przez `npm run build`, a wynik jest akceptowany tylko wtedy, gdy polecenie konczy sie sukcesem i tworzy komplet plikow w katalogu output.

**Tech Stack:** Node.js, npm, Angular CLI 17

## Global Constraints

- Build musi byc wykonany z katalogu `pajak-trans-spa`.
- Nalezy uzyc istniejacej konfiguracji produkcyjnej z `angular.json`.
- Nie nalezy zmieniac kodu aplikacji ani parametrow builda.
- Wynikiem koncowym ma byc katalog `pajak-trans-spa/dist/pajak-trans-spa`.

---

### Task 1: Execute production build

**Files:**
- Modify: `pajak-trans-spa/dist/pajak-trans-spa/*`
- Verify: `pajak-trans-spa/package.json`
- Verify: `pajak-trans-spa/angular.json`

**Interfaces:**
- Consumes: skrypt `npm run build` z `pajak-trans-spa/package.json`
- Produces: pliki statyczne w `pajak-trans-spa/dist/pajak-trans-spa`

- [ ] **Step 1: Confirm build command**

```json
{
  "scripts": {
    "build": "ng build"
  }
}
```

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: Angular build ends with exit code 0 and prints output path under `dist/pajak-trans-spa`

- [ ] **Step 3: Verify output files**

Run: `Get-ChildItem dist/pajak-trans-spa`
Expected: directory contains `index.html`, browser assets, and static files copied from `src/assets`

- [ ] **Step 4: Report result**

Run: `Get-ChildItem -Recurse -File dist/pajak-trans-spa | Select-Object FullName, Length`
Expected: file list is available for final handoff

- [ ] **Step 5: Commit**

```bash
git add docs/superpowers/specs/2026-07-13-angular-production-build-design.md docs/superpowers/plans/2026-07-13-angular-production-build.md
git commit -m "docs: add angular production build spec and plan"
```
