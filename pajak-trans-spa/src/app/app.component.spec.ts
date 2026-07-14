import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should expose Pajak Trans title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Pajak Trans');
  });

  it('should use the new CAT 432F2 fleet image', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const cat432f2 = app.fleet.find((item) => item.name === 'CAT 432F2');

    expect(cat432f2?.image).toBe('assets/images/cat432f2.jpeg');
  });

  it('should use the new CAT 315M fleet image', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const cat315m = app.fleet.find((item) => item.name === 'CAT 315M');

    expect(cat315m?.image).toBe('assets/images/cat315m.jpeg');
  });

  it('should use the new Przesiewacz bebnowy fleet image', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const przesiewacz = app.fleet.find((item) => item.description.includes('przesiewanie ziemi'));

    expect(przesiewacz?.image).toBe('assets/images/przesiewacz.jpeg');
  });

  it('should use the new Scania P380 fleet image', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const scania = app.fleet.find((item) => item.name === 'Scania P380');

    expect(scania?.image).toBe('assets/images/scania.jpeg');
  });

  it('should expose seven gallery sections with folder titles and normalized image paths', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.gallerySections.map((section) => section.title)).toEqual([
      'Drogi dojazdowe',
      'Prace przy budowie dworca pkp',
      'Prace w sytuacjach kryzysowych',
      'Przesiewacz',
      'Roboty ziemne',
      'Wyburzenia',
      'Wykopy',
    ]);
    expect(app.gallerySections).toHaveSize(7);
    expect(app.gallerySections[0].items[0].image).toBe('assets/images/gallery/drogi-dojazdowe/01.jpeg');
    expect(app.gallerySections[6].items[0].image).toBe('assets/images/gallery/wykopy/01.jpeg');
  });

  it('should render seven gallery carousels with section headings', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const sections = compiled.querySelectorAll('.gallery-carousel');

    expect(sections).toHaveSize(7);
    expect(compiled.textContent).toContain('Drogi dojazdowe');
    expect(compiled.textContent).toContain('Prace przy budowie dworca pkp');
    expect(compiled.textContent).toContain('Wykopy');
  });

  it('should scroll a gallery track by its visible width', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const scrollBy = jasmine.createSpy('scrollBy');
    const track = {
      clientWidth: 400,
      scrollBy,
    } as unknown as HTMLElement;

    app.scrollGallery(track, 'next');

    expect(scrollBy).toHaveBeenCalledOnceWith({ left: 400, behavior: 'smooth' });
  });

  it('should render the hero heading', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Pająk-Trans to firma');
  });

  it('should render the EU funded project poster', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const poster = compiled.querySelector<HTMLImageElement>('img[src="assets/images/plakat.png"]');

    expect(compiled.textContent).toContain('Projekt dofinansowany przez Unię Europejską');
    expect(poster).not.toBeNull();
    expect(poster?.alt).toBe('Projekt dofinansowany przez Unię Europejską');
  });
});
