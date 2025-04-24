import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  NgZone,
  OnInit,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { PropertyGateway } from '../../../core/ports/property.gateway';
import { Property } from '../../../core/models/property.model';
import { Observable } from 'rxjs';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PartnersDialogComponent } from '../../shared/components/partners-dialog/partners-dialog.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { CounterComponent } from '../../shared/components/counter/counter.component';
import { ReviewsComponent } from "../../shared/components/reviews/reviews.component";
import { FaqComponent } from '../../shared/components/faq/faq.component';
import platformsDetails from '../../../../assets/data/partners.json';


@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink,
    SectionTitleComponent,
    NgOptimizedImage,
    PartnersDialogComponent,
    CounterComponent,
    ReviewsComponent,
    FaqComponent,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Accueil - DiffuZe. Immobilier');
    this.meta.addTags([
      { name: 'description', content: "Page d'accueil de DiffuZe. Immobilier" },
      { property: 'og:title', content: 'DiffuZe. Immobilier - Accueil' },
      {
        property: 'og:description',
        content: 'Découvrez nos services professionnels',
      },
    ]);
  }
  @ViewChild(PartnersDialogComponent) dialogComponent!: PartnersDialogComponent;
  @ViewChild('addresstext') addresstext!: ElementRef<HTMLInputElement>;
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
  @ViewChild('progressBar') progressBar!: ElementRef<HTMLDivElement>;

  private router = inject(Router);
  private ngZone = inject(NgZone);
  place: any;
  propertyGateway = inject(PropertyGateway);
  properties$!: Observable<Property[]>;
  properties: Property[] = [];
  isDialogOpen: boolean = false;
  isCarouselStart = true;
  isCarouselEnd = false;
  platforms = platformsDetails;
  hasStartedAnimation: boolean = false;

  @ViewChildren(CounterComponent)
  counters!: QueryList<CounterComponent>;
  @ViewChild('numbers') numbersRef!: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.hasStartedAnimation || typeof window === 'undefined') return;

    const numberElement = this.numbersRef.nativeElement;
    const windowHeight = window.innerHeight;

    if (
      numberElement &&
      window.scrollY > numberElement.offsetTop + 100 - windowHeight
    ) {
      this.counters.forEach((number) => number.startCount());
      this.hasStartedAnimation = true;
    }
  }
  ngOnInit() {
    this.propertyGateway.fetchLastProperties().subscribe((properties) => {
      this.properties = properties;
    });
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    if (typeof google === 'undefined' || !google.maps) {
      console.error('Google Maps API non chargé');
      return;
    }

    const options = {
      componentRestrictions: { country: 'FR' },
      types: ['geocode'],
    };

    const autocomplete = new google.maps.places.Autocomplete(
      this.addresstext.nativeElement,
      options
    );

    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        this.place = autocomplete.getPlace();

        if (this.place.geometry === undefined || this.place.geometry === null) {
          return;
        }
        localStorage.setItem('localization', this.place.name);
      });
    });
  }

  openModal() {
    if (this.dialogComponent) {
      this.dialogComponent.openModal();
    } else {
      console.error('modalComponent est undefined');
    }
  }

  prevSlide() {
    const carousel = this.carousel.nativeElement;
    carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
  }

  nextSlide() {
    const carousel = this.carousel.nativeElement;
    carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
  }

}
