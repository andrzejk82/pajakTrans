import { Component } from '@angular/core';

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
  title = 'Pajak Trans';

  readonly services: Service[] = [
    {
      title: 'Roboty ziemne',
      description: 'Wykopy, niwelacje terenu i przygotowanie placu pod inwestycje prywatne oraz przemyslowe.'
    },
    {
      title: 'Transport',
      description: 'Sprawny transport materialow sypkich, maszyn i elementow budowlanych na terenie regionu.'
    },
    {
      title: 'Wyburzenia',
      description: 'Bezpieczna rozbiorka obiektow z naciskiem na organizacje prac i porzadek na miejscu realizacji.'
    },
    {
      title: 'Odsniezanie',
      description: 'Sezonowe utrzymanie drog, placow i dojazdow do firm oraz posesji prywatnych.'
    }
  ];

  readonly advantages: Advantage[] = [
    {
      title: 'Szybka organizacja prac',
      description: 'Krotki czas reakcji i jasne ustalenia jeszcze przed rozpoczeciem zlecenia.'
    },
    {
      title: 'Doswiadczenie w terenie',
      description: 'Praktyka przy roznych typach realizacji: od mniejszych prac po ciezsze roboty.'
    },
    {
      title: 'Sprzet dopasowany do zadania',
      description: 'Dobor maszyn i transportu do zakresu prac zamiast uniwersalnego, przypadkowego zestawu.'
    },
    {
      title: 'Jedna, czytelna komunikacja',
      description: 'Klient szybko wie, jaki jest zakres, termin i co dzieje sie na kolejnych etapach.'
    }
  ];

  readonly fleet: FleetItem[] = [
    {
      name: 'Volvo BL71',
      category: 'Maszyny do robot ziemnych',
      description: 'Wszechstronna koparko-ladowarka do przygotowania terenu, wykopow i prac porzadkowych.',
      image: 'assets/images/volvo-bl-71-2.jpg'
    },
    {
      name: 'Scania P380',
      category: 'Transport i logistyka',
      description: 'Samochod do przewozu materialow i wsparcia realizacji wymagajacych sprawnej logistyki.',
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
}
