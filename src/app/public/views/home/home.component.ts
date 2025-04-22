import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  NgZone,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { PropertyGateway } from '../../../core/ports/property.gateway';
import { Property } from '../../../core/models/property.model';
import { Observable } from 'rxjs';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PartnersDialogComponent } from '../../shared/components/partners-dialog/partners-dialog.component';
import platformsDetails from '../../../../assets/data/partners.json';
import userReviewsDetails from '../../../../assets/data/user-reviews.json';
import faqHomeDetails from '../../../../assets/data/faq-home.json';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink,
    SectionTitleComponent,
    NgOptimizedImage
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
  faqHome =  faqHomeDetails;
  userReviews = userReviewsDetails
  visibleUserReview = 0
  progressBarWidth = 20


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
        localStorage.setItem("localization", this.place.name);
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

  nextReview() {
    if(this.progressBarWidth < 100){
      this.visibleUserReview += 1
      this.progressBarWidth += 20
    }else{
     null
    }
  }
  previousReview(){
    if(this.progressBarWidth > 0 ){
      this.visibleUserReview -= 1
      this.progressBarWidth -= 20
    }else{
     null
    }
  }
}
