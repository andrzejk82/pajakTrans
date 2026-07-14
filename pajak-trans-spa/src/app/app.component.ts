import { Component, HostListener } from '@angular/core';

type Service = {
  title: string;
  description: string;
};

type Advantage = {
  title: string;
  description: string;
};

type FleetItem = {
  name: string;
  category: string;
  description: string;
  image: string;
};

type GalleryItem = {
  image: string;
};

type GallerySection = {
  title: string;
  items: GalleryItem[];
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pajak Trans';
  activeSection = 'uslugi';

  readonly sectionIds = ['uslugi', 'sprzet', 'realizacje', 'kontakt'];

  readonly services: Service[] = [
    {
      title: 'Roboty ziemne',
      description: 'Wykopy, niwelacje terenu i przygotowanie placu pod inwestycje prywatne oraz przemysłowe.'
    },
    {
      title: 'Transport',
      description: 'Sprawny transport materiałów sypkich, maszyn i elementów budowlanych na terenie regionu.'
    },
    {
      title: 'Wyburzenia',
      description: 'Bezpieczna rozbiórka obiektów z naciskiem na organizacje prac i porządek na miejscu realizacji.'
    },
    {
      title: 'Odśnieżanie',
      description: 'Sezonowe utrzymanie drog, placów i dojazdów do firm oraz posesji prywatnych.'
    }
  ];

  readonly advantages: Advantage[] = [
    {
      title: 'Szybka organizacja prac',
      description: 'Krótki czas reakcji i jasne ustalenia jeszcze przed rozpoczeciem zlecenia.'
    },
    {
      title: 'Doświadczenie w terenie',
      description: 'Praktyka przy różnych typach realizacji: od mniejszych prac po cieższe roboty.'
    },
    {
      title: 'Sprzęt dopasowany do zadania',
      description: 'Dobór maszyn i transportu do zakresu prac zamiast uniwersalnego, przypadkowego zestawu.'
    },
    {
      title: 'Jedna, czytelna komunikacja',
      description: 'Klient szybko wie, jaki jest zakres, termin i co dzieje sie na kolejnych etapach.'
    }
  ];

  readonly fleet: FleetItem[] = [
    {
      name: 'CAT 432F2',
      category: 'Maszyny do robot ziemnych',
      description: 'Koparko-ladowarka CAT 432F2 to wszechstronna maszyna, ktora łaczy w sobie funkcjonalność koparki i ładowarki, idealna do różnorodnych zastosowań w budownictwie i transporcie. Dzieki swoim nowoczesnym rozwiazaniom, CAT 432F2 zapewnia niezawodnosc, efektywnosc i wygode pracy.',
      image: 'assets/images/cat432f2.jpeg'
    },
    {
      name: 'CAT 315M',
      category: 'Maszyny do robot ziemnych',
      description: 'Koparka obrotowa CAT 315M to niezawodne narzedzie w branży budowlanej, które łaczy w sobie moc, precyzje i efektywność. Dzieki zaawansowanej technologii, ta maszyna jest idealnym rozwiązaniem dla różnorodnych prac ziemnych i budowlanych.',
      image: 'assets/images/cat315m.jpeg'
    },
    {
      name: 'Przesiewacz bębnowy',
      category: 'Maszyny do robot ziemnych',
      description: 'Przesiewacz bębnowy to niezbędne urzadzenie w branży budowlanej, które umozliwia efektywne przesiewanie ziemi, piachu oraz kruszyw. Dzięki zaawansowanej technologii, przesiewacz zapewnia wysoką jakość materialów, eliminując zanieczyszczenia i uzyskujac jednorodne frakcje.',
      image: 'assets/images/przesiewacz.jpeg'
    },
    {
      name: 'Scania P380',
      category: 'Transport i logistyka',
      description: 'Samochód do przewozu materiałów i wsparcia realizacji wymagających sprawnej logistyki.',
      image: 'assets/images/scania.jpeg'
    }
  ];

  readonly gallerySections: GallerySection[] = [
    {
      title: 'Drogi dojazdowe',
      items: [
        { image: 'assets/images/gallery/drogi-dojazdowe/01.jpeg' },
        { image: 'assets/images/gallery/drogi-dojazdowe/02.jpeg' }
      ]
    },
    {
      title: 'Prace przy budowie dworca pkp',
      items: [
        { image: 'assets/images/gallery/prace-przy-budowie-dworca-pkp/01.jpeg' },
        { image: 'assets/images/gallery/prace-przy-budowie-dworca-pkp/02.jpeg' },
        { image: 'assets/images/gallery/prace-przy-budowie-dworca-pkp/03.jpeg' }
      ]
    },
    {
      title: 'Prace w sytuacjach kryzysowych',
      items: [
        { image: 'assets/images/gallery/prace-w-sytuacjach-kryzysowych/01.jpeg' },
        { image: 'assets/images/gallery/prace-w-sytuacjach-kryzysowych/02.jpeg' },
        { image: 'assets/images/gallery/prace-w-sytuacjach-kryzysowych/03.jpeg' },
        { image: 'assets/images/gallery/prace-w-sytuacjach-kryzysowych/04.jpeg' }
      ]
    },
    {
      title: 'Przesiewacz',
      items: [
        { image: 'assets/images/gallery/przesiewacz/01.jpeg' },
        { image: 'assets/images/gallery/przesiewacz/02.jpeg' },
        { image: 'assets/images/gallery/przesiewacz/03.jpeg' },
        { image: 'assets/images/gallery/przesiewacz/04.jpeg' },
        { image: 'assets/images/gallery/przesiewacz/05.jpeg' },
        { image: 'assets/images/gallery/przesiewacz/06.jpeg' },
        { image: 'assets/images/gallery/przesiewacz/07.jpeg' },
        { image: 'assets/images/gallery/przesiewacz/08.jpeg' },
        { image: 'assets/images/gallery/przesiewacz/09.jpeg' },
        { image: 'assets/images/gallery/przesiewacz/10.jpeg' }
      ]
    },
    {
      title: 'Roboty ziemne',
      items: [
        { image: 'assets/images/gallery/roboty-ziemne/01.jpeg' },
        { image: 'assets/images/gallery/roboty-ziemne/02.jpeg' },
        { image: 'assets/images/gallery/roboty-ziemne/03.jpeg' },
        { image: 'assets/images/gallery/roboty-ziemne/04.jpeg' },
        { image: 'assets/images/gallery/roboty-ziemne/05.jpeg' },
        { image: 'assets/images/gallery/roboty-ziemne/06.jpeg' },
        { image: 'assets/images/gallery/roboty-ziemne/07.jpeg' },
        { image: 'assets/images/gallery/roboty-ziemne/08.jpeg' },
        { image: 'assets/images/gallery/roboty-ziemne/09.jpeg' },
        { image: 'assets/images/gallery/roboty-ziemne/10.jpeg' },
        { image: 'assets/images/gallery/roboty-ziemne/11.jpeg' },
        { image: 'assets/images/gallery/roboty-ziemne/12.jpeg' }
      ]
    },
    {
      title: 'Wyburzenia',
      items: [
        { image: 'assets/images/gallery/wyburzenia/01.jpeg' },
        { image: 'assets/images/gallery/wyburzenia/02.jpeg' },
        { image: 'assets/images/gallery/wyburzenia/03.jpeg' },
        { image: 'assets/images/gallery/wyburzenia/04.jpeg' },
        { image: 'assets/images/gallery/wyburzenia/05.jpeg' },
        { image: 'assets/images/gallery/wyburzenia/06.jpeg' },
        { image: 'assets/images/gallery/wyburzenia/07.jpeg' },
        { image: 'assets/images/gallery/wyburzenia/08.jpeg' },
        { image: 'assets/images/gallery/wyburzenia/09.jpeg' },
        { image: 'assets/images/gallery/wyburzenia/10.jpeg' },
        { image: 'assets/images/gallery/wyburzenia/11.jpeg' },
        { image: 'assets/images/gallery/wyburzenia/12.jpeg' }
      ]
    },
    {
      title: 'Wykopy',
      items: [
        { image: 'assets/images/gallery/wykopy/01.jpeg' },
        { image: 'assets/images/gallery/wykopy/02.jpeg' },
        { image: 'assets/images/gallery/wykopy/03.jpeg' },
        { image: 'assets/images/gallery/wykopy/04.jpeg' },
        { image: 'assets/images/gallery/wykopy/05.jpeg' },
        { image: 'assets/images/gallery/wykopy/06.jpeg' },
        { image: 'assets/images/gallery/wykopy/07.jpeg' },
        { image: 'assets/images/gallery/wykopy/08.jpeg' },
        { image: 'assets/images/gallery/wykopy/09.jpeg' }
      ]
    }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  @HostListener('window:load')
  onWindowLoad(): void {
    this.updateActiveSection();
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  scrollGallery(track: HTMLElement, direction: 'prev' | 'next'): void {
    const offset = track.clientWidth * (direction === 'next' ? 1 : -1);
    track.scrollBy({ left: offset, behavior: 'smooth' });
  }

  private updateActiveSection(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const reachedPageBottom =
      Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 2;
    if (reachedPageBottom) {
      this.activeSection = this.sectionIds[this.sectionIds.length - 1];
      return;
    }

    const offset = window.innerHeight * 0.3;
    let currentSection = this.sectionIds[0];

    for (const sectionId of this.sectionIds) {
      const element = document.getElementById(sectionId);
      if (!element) {
        continue;
      }

      const top = element.getBoundingClientRect().top;
      if (top - offset <= 0) {
        currentSection = sectionId;
      }
    }

    this.activeSection = currentSection;
  }
}
