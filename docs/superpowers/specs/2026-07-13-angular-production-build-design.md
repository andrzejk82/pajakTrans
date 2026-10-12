# Angular Production Build Design

## Cel

Przygotowac swiezy build produkcyjny aplikacji Angular znajdujacej sie w `pajak-trans-spa`, tak aby gotowe pliki do wgrania byly dostepne w katalogu `pajak-trans-spa/dist/pajak-trans-spa`.

## Zakres

- Uzyc istniejacej konfiguracji Angular CLI.
- Wykonac standardowy build produkcyjny `ng build`.
- Nie zmieniac `baseHref`, konfiguracji routingu ani artefaktow wyjsciowych.

## Architektura

Projekt ma juz zdefiniowany output w `angular.json` jako `dist/pajak-trans-spa`. Build jest uruchamiany ze skryptu `npm run build`, ktory korzysta z domyslnej konfiguracji `production`.

## Komponenty

- `pajak-trans-spa/package.json`: definiuje skrypt build.
- `pajak-trans-spa/angular.json`: definiuje output path i konfiguracje produkcyjna.
- `pajak-trans-spa/dist/pajak-trans-spa`: wynikowy katalog do wgrania.

## Obsluga bledow

Jesli build nie przejdzie, nalezy zatrzymac proces i wskazac pierwszy blad z konsoli. Nie nalezy przygotowywac czesciowych artefaktow jako wyniku koncowego.

## Weryfikacja

- Komenda `npm run build` konczy sie kodem 0.
- W katalogu `pajak-trans-spa/dist/pajak-trans-spa` istnieje `index.html` oraz pliki przegladarkowe wygenerowane przez Angular CLI.
