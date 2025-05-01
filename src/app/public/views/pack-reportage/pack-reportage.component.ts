import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaqComponent } from '../../shared/components/faq/faq.component';
import { HeroPackComponent } from '../../shared/components/hero-pack/hero-pack.component';

interface SurfacePrice {
  maxSurface: number;
  price: number;
}

@Component({
  selector: 'app-pack-reportage',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SectionTitleComponent,
    NgOptimizedImage,
    FaqComponent,
    HeroPackComponent
  ],
  templateUrl: './pack-reportage.component.html',
  styleUrl: './pack-reportage.component.scss',
})

export class PackReportageComponent {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
  
  surface = signal<number>(0);

  price = computed<number>(()=> {
    return this.getReportagePrice(this.surface())
  })

  private getReportagePrice(surface: number): number {

   const surfacePrice: SurfacePrice[] = [
      { maxSurface: 49, price: 120 },
      { maxSurface: 74, price: 130 },
      { maxSurface: 119, price: 140 },
      { maxSurface: 159, price: 150 },
      { maxSurface: 199, price: 160 },
      { maxSurface: Infinity, price: 160 }
    ]
    return (
      surfacePrice.find((p) => surface <= p.maxSurface)?.price || surfacePrice[0].price
    );
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


