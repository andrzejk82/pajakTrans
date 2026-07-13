import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

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
  title: string;
  image: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('galleryTrack') private galleryTrack?: ElementRef<HTMLDivElement>;

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
      image: 'assets/images/cat432.jpg'
    },
    {
      name: 'CAT 315M',
      category: 'Maszyny do robot ziemnych',
      description: 'Koparka obrotowa CAT 315M to niezawodne narzedzie w branży budowlanej, które łaczy w sobie moc, precyzje i efektywność. Dzieki zaawansowanej technologii, ta maszyna jest idealnym rozwiązaniem dla różnorodnych prac ziemnych i budowlanych.',
      image: 'assets/images/cat315m.jpeg'
    },
    {
      name: 'Przesiewacz frakcyjny',
      category: 'Maszyny do robot ziemnych',
      description: 'Przesiewacz frakcyjny to niezbędne urzadzenie w branży budowlanej, które umozliwia efektywne przesiewanie ziemi, piachu oraz kruszyw. Dzięki zaawansowanej technologii, przesiewacz zapewnia wysoką jakość materialów, eliminując zanieczyszczenia i uzyskujac jednorodne frakcje.',
      image: 'assets/images/pf.png'
    },
    {
      name: 'Scania P380',
      category: 'Transport i logistyka',
      description: 'Samochód do przewozu materiałów i wsparcia realizacji wymagających sprawnej logistyki.',
      image: 'assets/images/scania-p-380.jpg'
    }
  ];

  readonly gallery: GalleryItem[] = [
    { title: 'Prace terenowe', image: 'assets/images/realizacja1.jpg' },
    { title: 'Transport materialu', image: 'assets/images/realizacja3.jpg' },
    { title: 'Realizacja w toku', image: 'assets/images/realizacja5.jpg' },
    { title: 'Sprzet przy inwestycji', image: 'assets/images/realizacja8.jpg' },
    { title: 'Roboty specjalistyczne', image: 'assets/images/realizacja12.jpg' },
    { title: 'Finalny efekt prac', image: 'assets/images/realizacja17.jpg' }
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

  scrollGallery(direction: 'prev' | 'next'): void {
    const track = this.galleryTrack?.nativeElement;
    if (!track) {
      return;
    }

    const offset = track.clientWidth * 0.9 * (direction === 'next' ? 1 : -1);
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
