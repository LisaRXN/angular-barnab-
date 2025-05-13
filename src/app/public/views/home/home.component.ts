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
import { ReviewsComponent } from '../../shared/components/reviews/reviews.component';
import { FaqComponent } from '../../shared/components/faq/faq.component';
import platformsDetails from '../../../../assets/data/partners.json';
import { PropertyToolsService } from '../../../core/services/property-tools.service';
import { AutoCompleteService } from '../../../core/services/autoComplete.service';

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
    this.title.setTitle('Accueil - Barnabé Immobilier');
    this.meta.addTags([
      { name: 'description', content: "Page d'accueil de Barnabé Immobilier" },
      { property: 'og:title', content: 'Barnabé Immobilier - Accueil' },
      {
        property: 'og:description',
        content: 'Découvrez nos services professionnels',
      },
    ]);
  }
  @ViewChild('coachingDialog') coachingDialog!: PartnersDialogComponent;
  @ViewChild('encheresDialog') encheresDialog!: PartnersDialogComponent;
  @ViewChild('addresstext') addresstext!: ElementRef<HTMLInputElement>;
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
  @ViewChild('progressBar') progressBar!: ElementRef<HTMLDivElement>;

  private router = inject(Router);
  private ngZone = inject(NgZone);
  private autoCompleteService = inject(AutoCompleteService);

  private propertyToolsService = inject(PropertyToolsService);

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
    this.autoCompleteService.getPlaceAutocomplete(
      this.addresstext,
      (place: any) => {
        this.place = place;
      }
    );
  }

  openModal(formuleId: number) {
    if (this.coachingDialog && formuleId === 1) {
      this.coachingDialog.openModal();
    } else if (this.encheresDialog && formuleId === 2) {
      this.encheresDialog.openModal();
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

  navigateTo(web: string) {
    window.open(web, '_blank');
  }
}
