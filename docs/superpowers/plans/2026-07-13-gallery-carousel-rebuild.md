# Gallery Carousel Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Zastapic obecna galerie realizacji siedmioma osobnymi karuzelami opartymi o foldery z `D:\pajak-trans\pajak_trans`.

**Architecture:** Obecne `gallery` zostanie zastapione przez `gallerySections`, gdzie kazda sekcja ma tytul i liste obrazow. HTML bedzie renderowal powtarzalny blok karuzeli, a logika przewijania przejdzie z pojedynczego `ViewChild` na wiele trackow oznaczanych identyfikatorem sekcji.

**Tech Stack:** Angular 17, TypeScript, SCSS, Karma/Jasmine

## Global Constraints

- Zmieniamy tylko sekcje `Realizacje`.
- Kopiujemy do projektu tylko obrazy; pliki `.mp4` pomijamy.
- Kazdy folder ma stac sie osobna karuzela z podpisem rownym nazwie folderu.
- Wszystkie karuzele maja dzialac tak samo na mobile i desktopie.

---

### Task 1: Przygotowanie danych galerii i assetow

**Files:**
- Create: `pajak-trans-spa/src/assets/images/gallery/**`
- Modify: `pajak-trans-spa/src/app/app.component.ts`
- Test: `pajak-trans-spa/src/app/app.component.spec.ts`

**Interfaces:**
- Consumes: foldery z `D:\pajak-trans\pajak_trans`
- Produces: `gallerySections: GallerySection[]`

- [ ] Dodaj test oczekujacy 7 sekcji galerii i wybranych nowych sciezek assetow.
- [ ] Uruchom test i potwierdz czerwony stan.
- [ ] Skopiuj obrazy do `src/assets/images/gallery/<slug>/`.
- [ ] Zastap `gallery` nowa struktura `gallerySections`.
- [ ] Uruchom test i potwierdz zielony stan.

### Task 2: Przebudowa widoku galerii

**Files:**
- Modify: `pajak-trans-spa/src/app/app.component.html`
- Modify: `pajak-trans-spa/src/app/app.component.spec.ts`

**Interfaces:**
- Consumes: `gallerySections`
- Produces: markup 7 karuzel z osobnymi naglowkami i przyciskami

- [ ] Dodaj test oczekujacy renderowania 7 podpisanych sekcji galerii.
- [ ] Uruchom test i potwierdz czerwony stan.
- [ ] Przebuduj sekcje `Realizacje` na powtarzalne bloki karuzel.
- [ ] Uruchom test i potwierdz zielony stan.

### Task 3: Logika przewijania i style

**Files:**
- Modify: `pajak-trans-spa/src/app/app.component.ts`
- Modify: `pajak-trans-spa/src/app/app.component.scss`
- Test: `pajak-trans-spa/src/app/app.component.spec.ts`

**Interfaces:**
- Consumes: identyfikator sekcji galerii
- Produces: `scrollGallery(sectionId, direction)`

- [ ] Dodaj test dla nowego API przewijania i atrybutow trackow.
- [ ] Uruchom test i potwierdz czerwony stan.
- [ ] Zmien logike z pojedynczego `ViewChild` na obsluge wielu karuzel.
- [ ] Uprosc style siatki do wspolnego ukladu karuzelowego.
- [ ] Uruchom test, potem `npm run build`.

