import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RouterLink } from '@angular/router';
import { PartnersDialogComponent } from '../../shared/components/partners-dialog/partners-dialog.component';
import { OptionDialogComponent } from '../../shared/components/option-dialog/option-dialog.component';
import { ReviewsComponent } from '../../shared/components/reviews/reviews.component';
import { FaqComponent } from '../../shared/components/faq/faq.component';
import faqEncheresDetails from '../../../../assets/data/faq-encheres.json';
import { HeroPackComponent } from '../../shared/components/hero-pack/hero-pack.component';

@Component({
  selector: 'app-pack-encheres',
  imports: [
    CommonModule,
    NgOptimizedImage,
    SectionTitleComponent,
    RouterLink,
    PartnersDialogComponent,
    OptionDialogComponent,
    ReviewsComponent,
    FaqComponent,
    HeroPackComponent
  ],
  templateUrl: './pack-encheres.component.html',
  styleUrl: './pack-encheres.component.scss'
})
export class PackEncheresComponent {
  @ViewChild(PartnersDialogComponent) dialogComponent!: PartnersDialogComponent;
  @ViewChild(OptionDialogComponent) optionDialogComponent!: OptionDialogComponent;
  faqEncheres = faqEncheresDetails
  
  openModal() {
    if (this.dialogComponent) {
      this.dialogComponent.openModal();
    } else {
      console.error('modalComponent est undefined');
    }
  }

  openOptionDialog(id:number){
    if (this.optionDialogComponent) {
      this.optionDialogComponent.openModal(id);
    } else {
      console.error('optionDialogComponent est undefined');
    }
  }

}
