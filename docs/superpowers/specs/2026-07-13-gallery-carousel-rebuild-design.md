# Gallery Carousel Rebuild Design

## Cel

Przebudowac sekcje `Realizacje` w aplikacji Angular tak, aby zamiast jednej zbiorczej galerii renderowala 7 osobnych galerii karuzelowych opartych o podfoldery z `D:\pajak-trans\pajak_trans`.

## Zakres

- Usunac dotychczasowe pozycje z glownej galerii.
- Dodac do projektu zdjecia z 7 folderow zewnetrznych.
- Zbudowac 7 osobnych karuzel, po jednej na folder.
- Podpisac kazda galerie nazwa odpowiadajacego folderu.
- Zachowac sterowanie strzalkami i przewijanie poziome dla kazdej galerii.

## Zrodla danych

Foldery zrodlowe:

- `Drogi dojazdowe`
- `Prace przy budowie dworca pkp`
- `Prace w sytuacjach kryzysowych`
- `Przesiewacz`
- `Roboty ziemne`
- `Wyburzenia`
- `Wykopy`

Do projektu maja zostac skopiowane wszystkie pliki obrazow z tych folderow. Pliki niebedace obrazami, w szczegolnosci `.mp4`, maja zostac pominiete.

## Struktura assetow

Nowe obrazy maja trafic do:

- `src/assets/images/gallery/drogi-dojazdowe/`
- `src/assets/images/gallery/prace-przy-budowie-dworca-pkp/`
- `src/assets/images/gallery/prace-w-sytuacjach-kryzysowych/`
- `src/assets/images/gallery/przesiewacz/`
- `src/assets/images/gallery/roboty-ziemne/`
- `src/assets/images/gallery/wyburzenia/`
- `src/assets/images/gallery/wykopy/`

Nazwy plikow po skopiowaniu powinny byc znormalizowane do prostych nazw ASCII i spójnych sciezek, bez zaleznosci od oryginalnych nazw z WhatsApp lub spacji w nazwie.

## Architektura komponentu

Obecne `gallery` w `app.component.ts` zostanie zastapione przez strukture sekcji galerii, gdzie kazda sekcja zawiera:

- `title`: nazwa sekcji zgodna z nazwa folderu,
- `items`: lista obrazow nalezacych do tej sekcji.

Kazda sekcja galerii bedzie renderowana jako osobny blok z:

- naglowkiem sekcji,
- przyciskami przewijania,
- poziomym trackiem ze zdjeciami.

## Zachowanie UI

- Wszystkie 7 galerii dziala jako karuzele na mobile i desktopie.
- Kazda karuzela ma osobne przewijanie.
- Podpis galerii jest nazwa folderu.
- Nie dodajemy podpisow pojedynczych zdjec.

## Implementacja techniczna

- W `app.component.html` sekcja `Realizacje` zostanie przebudowana z pojedynczej siatki na liste sekcji karuzelowych.
- W `app.component.ts` przewijanie musi obslugiwac wiele trackow, a nie jeden `ViewChild`.
- W `app.component.scss` obecna siatka galerii zostanie zastapiona wspolnym stylem sekcji i karuzeli.

## Testowanie

Nalezy dodac testy, ktore potwierdza:

- obecność 7 sekcji galerii,
- zgodnosc nazw sekcji z nazwami folderow,
- obecność przykladowych obrazow z nowych sciezek assetow,
- poprawny build aplikacji po zmianie.

## Ograniczenia

- Nie zmieniac innych sekcji strony poza `Realizacje`.
- Nie dodawac obslugi wideo.
- Nie usuwac starych assetow z repo, o ile nie sa potrzebne do bezpiecznego zakonczenia zmiany.
